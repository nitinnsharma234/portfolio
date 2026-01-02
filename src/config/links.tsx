import type { useTranslations } from "next-intl";

import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  BarChartIcon,
  BriefcaseIcon,
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

import { SITE_GITHUB_URL, SITE_INSTAGRAM_URL } from "@/lib/constants";

// Seems that next-intl doesn't expose the type for translation key,
// so we extract it here
type TranslationKey = Parameters<ReturnType<typeof useTranslations<never>>>[0];

type HeaderLinks = Array<{
  icon: React.ReactNode;
  href: string;
  key: string;
  labelKey: TranslationKey;
}>;

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "projects",
    // t('common.labels.projects')
    labelKey: "common.labels.projects",
  },
  {
    icon: <BriefcaseIcon className="size-3.5" />,
    href: "/experience",
    key: "experience",
    // t('common.labels.experience')
    labelKey: "common.labels.experience",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "about",
    // t('common.labels.about')
    labelKey: "common.labels.about",
  },
  // {
  //   icon: <MonitorIcon className="size-3.5" />,
  //   href: "/uses",
  //   key: "uses",
  //   // t('common.labels.uses')
  //   labelKey: "common.labels.uses",
  // },
];

type FooterLinks = Array<{
  id: number;
  links: Array<{
    href: string;
    labelKey: TranslationKey;
  }>;
}>;

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      // t('common.labels.home')
      { href: "/", labelKey: "common.labels.home" },
      // t('common.labels.about')
      { href: "/about", labelKey: "common.labels.about" },
      // t('common.labels.projects')
      { href: "/projects", labelKey: "common.labels.projects" },
      // t('common.labels.experience')
      { href: "/experience", labelKey: "common.labels.experience" },
    ],
  },
  {
    id: 2,
    links: [
      // t('common.labels.guestbook')
      // { href: "/guestbook", labelKey: "common.labels.guestbook" },
      // // t('common.labels.uses')
      // { href: "/uses", labelKey: "common.labels.uses" },
      // // t('common.labels.projects')
      // t('common.labels.links')
      // { href: "https://nelsonlai.link", labelKey: "common.labels.links" },
    ],
  },
  {
    id: 3,
    links: [
      // t('common.labels.facebook')
      // { href: SITE_FACEBOOK_URL, labelKey: "common.labels.facebook" },
      // t('common.labels.instagram')
      { href: SITE_INSTAGRAM_URL, labelKey: "common.labels.instagram" },
      // t('common.labels.github')
      { href: SITE_GITHUB_URL, labelKey: "common.labels.github" },
      // t('common.labels.youtube')
      // { href: SITE_YOUTUBE_URL, labelKey: "common.labels.youtube" },
    ],
  },
  {
    id: 4,
    links: [
      // t('common.labels.terms')
      { href: "/terms", labelKey: "common.labels.terms" },
      // t('common.labels.privacy')
      { href: "/privacy", labelKey: "common.labels.privacy" },
    ],
  },
];

type SocialLinks = Array<{
  href: string;
  title: string;
  icon: React.ReactNode;
}>;

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: <SiGithub />,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: <SiInstagram />,
  },

  // {
  //   href: SITE_YOUTUBE_URL,
  //   title: "YouTube",
  //   icon: <SiYoutube />,
  // },
];

type AccountSidebarLinks = Array<{
  href: string;
  labelKey: TranslationKey;
}>;

export const ACCOUNT_SIDEBAR_LINKS: AccountSidebarLinks = [
  {
    href: "/account",
    // t('common.labels.account')
    labelKey: "common.labels.account",
  },
  {
    href: "/account/settings",
    // t('common.labels.settings')
    labelKey: "common.labels.settings",
  },
];
