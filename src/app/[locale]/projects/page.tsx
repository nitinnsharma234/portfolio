import type { Metadata } from "next";

import { type Locale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

import PageHeader from "@/components/page-header";
import ProjectCards from "@/components/project-cards";
import { MY_NAME } from "@/lib/constants";
import { getLatestProjects } from "@/lib/content";

const Page = (props: PageProps<"/[locale]/projects">) => {
  const { params } = props;
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations();
  const title = t("common.labels.projects");
  const description = t("projects.description");

  const projects = getLatestProjects(locale);

  return (
    <>
      <PageHeader title={title} description={description} />
      <ProjectCards projects={projects} />
    </>
  );
};

export default Page;
