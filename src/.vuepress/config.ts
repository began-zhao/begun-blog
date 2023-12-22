import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
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
  plugins: [
    docsearchPlugin({
      appId: "JUMI1R306J",
      apiKey: "74333c15f686403d2037832db7f836bd",
      indexName: "begun",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],
});
