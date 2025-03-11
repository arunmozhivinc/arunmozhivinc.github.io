import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://arunmozhivinc.github.io",
  author: "Arun Mozhi",
  profile: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
  desc: "A minimal, responsive and SEO-friendly Resumae.",
  title: "Arun Vincily",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/arunmozhivinc/arunmozhivinc.github.io/tree/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitLab",
    href: "https://gitlab.com/Arunvinc009",
    linkTitle: ` ${SITE.title} on GitLab`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "X",
    href: "https://x.com/iarunvinc/",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://www.linkedin.com/in/arun-vincily-v-41272b202/",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
