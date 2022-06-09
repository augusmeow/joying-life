import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/RandomThought/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Random Thought",
      description: "Random thought by joying",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "胡思乱想",
      description: "Joying的胡思乱想",
    },
  },

  theme,
});
