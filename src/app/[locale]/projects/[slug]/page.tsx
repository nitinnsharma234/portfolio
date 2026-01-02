import type { Metadata } from "next";
import type { Locale } from "next-intl";

import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import BlurImage from "@/components/blur-image";

import ProjectHeader from "@/components/project-header";
import { MY_NAME } from "@/lib/constants";
import { allProjects, getProjectBySlug } from "@/lib/content";
import Mdx from "@/components/mdx";

export const generateStaticParams = (): Array<{
  slug: string;
  locale: string;
}> => {
  return allProjects.map((project) => ({
    slug: project.slug,
    locale: project.locale,
  }));
};

const Page = (props: PageProps<"/[locale]/projects/[slug]">) => {
  const { params } = props;
  const { slug, locale } = use(params);

  setRequestLocale(locale as Locale);

  const project = getProjectBySlug(locale, slug);
  console.log(project);
  if (!project) {
    notFound();
  }

  const { name, code, description, github, dateCreated } = project;

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <ProjectHeader {...project} />

        <BlurImage
          src={`/images/projects/${slug}/cover.png`}
          width={1200}
          height={630}
          alt={name}
          className="my-12 rounded-lg"
          lazy={false}
        />
        <Mdx code={code} />
      </div>
    </>
  );
};

export default Page;
