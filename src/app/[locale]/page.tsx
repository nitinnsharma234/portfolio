import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import LanguageSwitcher from "../LanguageSwitcher";
import Hero from "@/components/home/hero";
import "@/styles/preset.css";
import { getLatestPosts, getSelectedProjects } from "@/lib/content";
import SelectedProjects from "@/components/selected-projects";
import AboutMe from "@/components/home/about-me";
import LatestArticles from "@/components/home/latest-articles";
import GetInTouch from "@/components/home/get-in-touch";
import { use } from "react";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { params } = props;
  const { locale } = await params;
  const filteredProjects = getSelectedProjects(locale);
  const filteredPosts = getLatestPosts(locale, 2);

  return (
    <>
      <Hero />
      <SelectedProjects projects={filteredProjects} />
      <AboutMe />
      {/* <LatestArticles posts={filteredPosts} /> */}
      <GetInTouch />
    </>
  );
}
