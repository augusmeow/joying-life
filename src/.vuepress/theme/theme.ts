import {hopeTheme} from "vuepress-theme-hope";
import {theme_local} from "./index";

export default hopeTheme({
  hostname: "https://draugus.github.io/RandomThought/",

  author: {
    name: "Augus",
    url: "https://github.com/DrAugus",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.jpg",

  repo: "DrAugus/RandomThought",

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Discord: "https://draugus.github.io/RandomThought/",
      Email: "https://draugus.github.io/RandomThought/",
      Facebook: "https://draugus.github.io/RandomThought/",
      GitHub: "https://draugus.github.io/RandomThought/",
      Instagram: "https://draugus.github.io/RandomThought/",
      Lines: "https://draugus.github.io/RandomThought/",
      Linkedin: "https://draugus.github.io/RandomThought/",
      QQ: "https://draugus.github.io/RandomThought/",
      Steam: "https://draugus.github.io/RandomThought/",
      Twitter: "https://draugus.github.io/RandomThought/",
      Weibo: "https://draugus.github.io/RandomThought/",
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
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "DrAugus/RandomThought",
      repoId: "R_kgDOHeXLoQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHeXLoc4CPjm7",
      mapping: "pathname",
      inputPosition: "top",


      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
