import {hopeTheme} from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://draugus.github.io/RandomThought/",

  author: {
    name: "Augus",
    url: "https://github.com/DrAugus",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.jpg",

  repo: "DrAugus/RandomThought",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Baidu: "https://draugus.github.io/RandomThought/",
      Bitbucket: "https://draugus.github.io/RandomThought/",
      Dingding: "https://draugus.github.io/RandomThought/",
      Discord: "https://draugus.github.io/RandomThought/",
      Dribbble: "https://draugus.github.io/RandomThought/",
      Email: "https://draugus.github.io/RandomThought/",
      Evernote: "https://draugus.github.io/RandomThought/",
      Facebook: "https://draugus.github.io/RandomThought/",
      Flipboard: "https://draugus.github.io/RandomThought/",
      Gitee: "https://draugus.github.io/RandomThought/",
      GitHub: "https://draugus.github.io/RandomThought/",
      Gitlab: "https://draugus.github.io/RandomThought/",
      Gmail: "https://draugus.github.io/RandomThought/",
      Instagram: "https://draugus.github.io/RandomThought/",
      Lines: "https://draugus.github.io/RandomThought/",
      Linkedin: "https://draugus.github.io/RandomThought/",
      Pinterest: "https://draugus.github.io/RandomThought/",
      Pocket: "https://draugus.github.io/RandomThought/",
      QQ: "https://draugus.github.io/RandomThought/",
      Qzone: "https://draugus.github.io/RandomThought/",
      Reddit: "https://draugus.github.io/RandomThought/",
      Rss: "https://draugus.github.io/RandomThought/",
      Steam: "https://draugus.github.io/RandomThought/",
      Twitter: "https://draugus.github.io/RandomThought/",
      Wechat: "https://draugus.github.io/RandomThought/",
      Weibo: "https://draugus.github.io/RandomThought/",
      Whatsapp: "https://draugus.github.io/RandomThought/",
      Youtube: "https://draugus.github.io/RandomThought/",
      Zhihu: "https://draugus.github.io/RandomThought/",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

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
