import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "咖飞的博客",
      description: "咖飞的学习笔记分享",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
