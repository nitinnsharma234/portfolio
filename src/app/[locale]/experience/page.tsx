"use client";

import { type Locale, useTranslations } from "next-intl";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

import PageHeader from "@/components/page-header";

type Experience = {
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    title: "Sr. Flutter Developer",
    company: "MyGold",
    location: "Remote",
    startDate: "June 2024",
    endDate: "Present",
    description: [
      "Developed and optimized the MyGold digital gold platform using Flutter, ensuring seamless user experiences across Android and iOS.",
      "Integrated REST APIs, secure authentication flows, and real-time gold pricing with efficient state-management.",
      "Implemented Firebase Cloud Messaging for push notifications and event-based triggers.",
      "Enhanced app performance by optimizing widget rebuilding, caching, and implementing lazy-loading techniques.",
      "Collaborated with UI/UX, backend, and QA teams to deliver scalable, high-quality application features.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "FCM", "Provider"],
  },
  {
    title: "Frontend Engineer",
    company: "Gida Technologies",
    location: "Remote",
    startDate: "Oct 2023",
    endDate: "April 2024",
    description: [
      "Designed and developed interactive Flutter UI components for an insurance and healthcare platform.",
      "Integrated Firebase Analytics and Firebase Crashlytics and deep-linking for end-to-end user journeys.",
      "Built routing systems, animations, and reusable widgets to enhance UX.",
      "Worked with CI/CD pipelines for automated builds, QA integration, and release readiness.",
    ],
    technologies: ["Flutter", "Dart", "Firebase Analytics", "Crashlytics", "Deep Linking", "CI/CD"],
  },
  {
    title: "Flutter Application Developer",
    company: "Remotestate",
    location: "Remote",
    startDate: "July 2022",
    endDate: "Sept 2023",
    description: [
      "Built and deployed Flutter apps for Android and iOS featuring dashboards, search, and data visualization.",
      "Integrated Firebase Firestore, Realtime Database, and Cloud Functions for scalable backend workflows.",
      "Published and maintained Play Store app releases with versioning and crash analytics.",
      "Implemented unit tests and widget tests to ensure system reliability.",
    ],
    technologies: ["Flutter", "Dart", "Firebase Firestore", "Cloud Functions", "Play Store", "Unit Testing"],
  },
];

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const TimelineItem = ({ experience, index }: { experience: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-800" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex size-6 items-center justify-center rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900">
        <div className="size-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
      </div>

      {/* Content card with glass effect */}
      <div className="group relative overflow-hidden rounded-xl p-6 shadow-feature-card backdrop-blur-sm transition-all hover:shadow-lg">
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-zinc-900/50 dark:to-zinc-800/30" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <BriefcaseIcon className="size-5 text-zinc-600 dark:text-zinc-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">{experience.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="size-4" />
              <span>
                {experience.startDate} - {experience.endDate === "Present" ? t("experience.present") : experience.endDate}
              </span>
            </div>
          </div>

          {/* Description */}
          <ul className="mt-4 space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                {item}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const t = useTranslations();
  const title = t("common.labels.experience");
  const description = t("experience.description");

  return (
    <>
      <PageHeader title={title} description={description} />

      <motion.div
        initial="hide"
        animate="show"
        variants={animation}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ExperiencePage;
