import {hopeTheme} from "vuepress-theme-hope";
import {theme_local} from "./index";

export default hopeTheme({
  hostname: "https://draugus.github.io/RandomThought/",

  author: {
    name: "Joying",
    url: "https://github.com/DrAugus",
  },

  iconAssets: "fontawesome",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  logo: "/logo.jpg",

  repo: "DrAugus/RandomThought",

  editLinkPattern: ":repo/edit/master/src/:path",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      GitHub: "https://draugus.github.io/RandomThought/",
    },
  },

  locales: theme_local,

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
