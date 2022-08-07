import { defineUserConfig } from "vuepress";
import theme from "./theme/theme";

export default defineUserConfig({
  base: "/RandomThought/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "胡思乱想",
      description: "Joying的胡思乱想",
    },
  },

  theme,
});
