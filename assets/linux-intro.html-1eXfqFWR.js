const e=JSON.parse('{"key":"v-71cdd109","path":"/code/java/cs-basics/operating-system/linux-intro.html","title":"Linux 基础知识总结","lang":"zh-CN","frontmatter":{"title":"Linux 基础知识总结","date":"2021-12-13T00:00:00.000Z","category":"计算机基础","tag":["操作系统","Linux"],"description":"简单介绍一下 Java 程序员必知的 Linux 的一些概念以及常见命令。 如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！笔芯！ 从认识操作系统开始 正式开始 Linux 之前，简单花一点点篇幅科普一下操作系统相关的内容。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/code/java/cs-basics/operating-system/linux-intro.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Linux 基础知识总结"}],["meta",{"property":"og:description","content":"简单介绍一下 Java 程序员必知的 Linux 的一些概念以及常见命令。 如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！笔芯！ 从认识操作系统开始 正式开始 Linux 之前，简单花一点点篇幅科普一下操作系统相关的内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2021-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 基础知识总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"从认识操作系统开始","slug":"从认识操作系统开始","link":"#从认识操作系统开始","children":[{"level":3,"title":"操作系统简介","slug":"操作系统简介","link":"#操作系统简介","children":[]},{"level":3,"title":"操作系统简单分类","slug":"操作系统简单分类","link":"#操作系统简单分类","children":[]},{"level":3,"title":"操作系统的内核（Kernel）","slug":"操作系统的内核-kernel","link":"#操作系统的内核-kernel","children":[]},{"level":3,"title":"中央处理器（CPU，Central Processing Unit）","slug":"中央处理器-cpu-central-processing-unit","link":"#中央处理器-cpu-central-processing-unit","children":[]},{"level":3,"title":"CPU vs Kernel(内核)","slug":"cpu-vs-kernel-内核","link":"#cpu-vs-kernel-内核","children":[]},{"level":3,"title":"系统调用","slug":"系统调用","link":"#系统调用","children":[]}]},{"level":2,"title":"初探 Linux","slug":"初探-linux","link":"#初探-linux","children":[{"level":3,"title":"Linux 简介","slug":"linux-简介","link":"#linux-简介","children":[]},{"level":3,"title":"Linux 诞生","slug":"linux-诞生","link":"#linux-诞生","children":[]},{"level":3,"title":"常见 Linux 发行版本有哪些？","slug":"常见-linux-发行版本有哪些","link":"#常见-linux-发行版本有哪些","children":[]}]},{"level":2,"title":"Linux 文件系统概览","slug":"linux-文件系统概览","link":"#linux-文件系统概览","children":[{"level":3,"title":"Linux 文件系统简介","slug":"linux-文件系统简介","link":"#linux-文件系统简介","children":[]},{"level":3,"title":"inode 介绍","slug":"inode-介绍","link":"#inode-介绍","children":[]},{"level":3,"title":"Linux 文件类型","slug":"linux-文件类型","link":"#linux-文件类型","children":[]},{"level":3,"title":"Linux 目录树","slug":"linux-目录树","link":"#linux-目录树","children":[]}]},{"level":2,"title":"Linux 基本命令","slug":"linux-基本命令","link":"#linux-基本命令","children":[{"level":3,"title":"目录切换命令","slug":"目录切换命令","link":"#目录切换命令","children":[]},{"level":3,"title":"目录的操作命令(增删改查)","slug":"目录的操作命令-增删改查","link":"#目录的操作命令-增删改查","children":[]},{"level":3,"title":"文件的操作命令(增删改查)","slug":"文件的操作命令-增删改查","link":"#文件的操作命令-增删改查","children":[]},{"level":3,"title":"压缩文件的操作命令","slug":"压缩文件的操作命令","link":"#压缩文件的操作命令","children":[]},{"level":3,"title":"Linux 的权限命令","slug":"linux-的权限命令","link":"#linux-的权限命令","children":[]},{"level":3,"title":"Linux 用户管理","slug":"linux-用户管理","link":"#linux-用户管理","children":[]},{"level":3,"title":"Linux 系统用户组的管理","slug":"linux-系统用户组的管理","link":"#linux-系统用户组的管理","children":[]},{"level":3,"title":"其他常用命令","slug":"其他常用命令","link":"#其他常用命令","children":[]}]},{"level":2,"title":"Linux 环境变量","slug":"linux-环境变量","link":"#linux-环境变量","children":[{"level":3,"title":"环境变量分类","slug":"环境变量分类","link":"#环境变量分类","children":[]},{"level":3,"title":"读取环境变量","slug":"读取环境变量","link":"#读取环境变量","children":[]},{"level":3,"title":"环境变量修改","slug":"环境变量修改","link":"#环境变量修改","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":24.86,"words":7459},"filePathRelative":"code/java/cs-basics/operating-system/linux-intro.md","localizedDate":"2021年12月13日","excerpt":"<p>简单介绍一下 Java 程序员必知的 Linux 的一些概念以及常见命令。</p>\\n<p><em>如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！笔芯！</em></p>\\n<h2> 从认识操作系统开始</h2>\\n<figure><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200807161118901.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>正式开始 Linux 之前，简单花一点点篇幅科普一下操作系统相关的内容。</p>","autoDesc":true}');export{e as data};
