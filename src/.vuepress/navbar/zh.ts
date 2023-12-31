import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/note/",
  {
    text: "代码笔记",
    icon: "code",
    children: [
      {
        text: "代码笔记",
        icon: "code",
        link: "/code/",
        activeMatch: "^/code/$",
      },
      {
        text: "产品设计",
        children: ["/design/"],
      },
      {
        text: "后端运维",
        children: ["/linux/"],
      },
      {
        text: "直击面试",
        children: ["/interview/"],
      },
    ],
  },
  {
    text: "更多系列",
    icon: "software",
    prefix: "/about/",
    children: [
      // {
      //   text: "更多系列",
      //   icon: "software",
      //   link: "",
      //   activeMatch: "^/about/$",
      // },
      "author/",
      "openSourceProject/",
    ],
  },
]);
