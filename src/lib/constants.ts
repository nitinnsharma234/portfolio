export const IS_PRODUCTION = process.env.NODE_ENV === "production";
// eslint-disable-next-line unicorn/prefer-global-this -- Using `typeof window` to safely detect non-browser environments; `globalThis` is always defined
export const IS_SERVER = typeof window === "undefined";

export const GITHUB_USERNAME = "nitinnsharma234";

export const MY_NAME = "Nitin";

export const SITE_GITHUB_URL = "https://github.com/nitinnsharma234";

export const SITE_INSTAGRAM_URL = "https://www.instagram.com/nitin.x_";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_TYPE = "image/png";

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number];
