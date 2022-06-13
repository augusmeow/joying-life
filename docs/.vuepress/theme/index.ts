import {LocaleConfig} from "vuepress";
import {local_en} from "./en";
import {local_zh} from "./zh";

export const theme_local: LocaleConfig = {
  '/': local_zh,
  '/i18n/en/': local_en,
}