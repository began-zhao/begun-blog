import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
//   设置正确的 base 选项。
// 如果你准备发布到 https://<USERNAME>.github.io/ ，你可以省略这一步，因为 base 默认就是 "/" 。
// 如果你准备发布到 https://<USERNAME>.github.io/<REPO>/ ，也就是说你的仓库地址是 https://github.com/<USERNAME>/<REPO> ，则将 base 设置为 "/<REPO>/"。
  base: "/begun-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "咖飞",
      description: "咖飞的学习笔记分享",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
