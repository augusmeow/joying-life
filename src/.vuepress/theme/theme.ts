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

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      provider: "Giscus",
      repo: "DrAugus/RandomThought",
      repoId: "R_kgDOHeXLoQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHeXLoc4CPjm7",
      mapping: "pathname",
      inputPosition: "top",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
