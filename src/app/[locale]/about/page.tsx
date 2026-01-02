import { notFound } from "next/navigation";
import { type Locale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";

import PageHeader from "@/components/page-header";
import {
  MY_NAME,
  SITE_FACEBOOK_URL,
  SITE_GITHUB_URL,
  SITE_INSTAGRAM_URL,
  SITE_X_URL,
  SITE_YOUTUBE_URL,
} from "@/lib/constants";
import { getPageBySlug } from "@/lib/content";

const Page = (props: PageProps<"/[locale]/about">) => {
  const { params } = props;
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations();
  const title = t("common.labels.about");
  const description = t("about.description");
  // const url = getLocalizedPath({ locale, pathname: "/about" });
  const page = getPageBySlug(locale, "about");

  if (!page) {
    return notFound();
  }

  const { code } = page;

  return (
    <>
      <PageHeader title={title} description={description} />
    </>
  );
};

export default Page;
