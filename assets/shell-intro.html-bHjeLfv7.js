const l=JSON.parse('{"key":"v-d9973366","path":"/code/java/cs-basics/operating-system/shell-intro.html","title":"Shell 编程入门","lang":"zh-CN","frontmatter":{"title":"Shell 编程入门","date":"2021-12-13T00:00:00.000Z","category":"计算机基础","tag":["操作系统","Linux"],"description":"Shell 编程入门 走进 Shell 编程的大门 为什么要学Shell？ 学一个东西，我们大部分情况都是往实用性方向着想。从工作角度来讲，学习 Shell 是为了提高我们自己工作效率，提高产出，让我们在更少的时间完成更多的事情。 很多人会说 Shell 编程属于运维方面的知识了，应该是运维人员来做，我们做后端开发的没必要学。我觉得这种说法大错特错，相比于专门做Linux运维的人员来说，我们对 Shell 编程掌握程度的要求要比他们低，但是shell编程也是我们必须要掌握的！ 目前Linux系统下最流行的运维自动化语言就是Shell和Python了。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/cs-basics/operating-system/shell-intro.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Shell 编程入门"}],["meta",{"property":"og:description","content":"Shell 编程入门 走进 Shell 编程的大门 为什么要学Shell？ 学一个东西，我们大部分情况都是往实用性方向着想。从工作角度来讲，学习 Shell 是为了提高我们自己工作效率，提高产出，让我们在更少的时间完成更多的事情。 很多人会说 Shell 编程属于运维方面的知识了，应该是运维人员来做，我们做后端开发的没必要学。我觉得这种说法大错特错，相比于专门做Linux运维的人员来说，我们对 Shell 编程掌握程度的要求要比他们低，但是shell编程也是我们必须要掌握的！ 目前Linux系统下最流行的运维自动化语言就是Shell和Python了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2021-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shell 编程入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"走进 Shell 编程的大门","slug":"走进-shell-编程的大门","link":"#走进-shell-编程的大门","children":[{"level":3,"title":"为什么要学Shell？","slug":"为什么要学shell","link":"#为什么要学shell","children":[]},{"level":3,"title":"什么是 Shell？","slug":"什么是-shell","link":"#什么是-shell","children":[]},{"level":3,"title":"Shell 编程的 Hello World","slug":"shell-编程的-hello-world","link":"#shell-编程的-hello-world","children":[]}]},{"level":2,"title":"Shell 变量","slug":"shell-变量","link":"#shell-变量","children":[{"level":3,"title":"Shell 编程中的变量介绍","slug":"shell-编程中的变量介绍","link":"#shell-编程中的变量介绍","children":[]},{"level":3,"title":"Shell 字符串入门","slug":"shell-字符串入门","link":"#shell-字符串入门","children":[]},{"level":3,"title":"Shell 字符串常见操作","slug":"shell-字符串常见操作","link":"#shell-字符串常见操作","children":[]},{"level":3,"title":"Shell 数组","slug":"shell-数组","link":"#shell-数组","children":[]}]},{"level":2,"title":"Shell 基本运算符","slug":"shell-基本运算符","link":"#shell-基本运算符","children":[{"level":3,"title":"算数运算符","slug":"算数运算符","link":"#算数运算符","children":[]},{"level":3,"title":"关系运算符","slug":"关系运算符","link":"#关系运算符","children":[]},{"level":3,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[]},{"level":3,"title":"布尔运算符","slug":"布尔运算符","link":"#布尔运算符","children":[]},{"level":3,"title":"字符串运算符","slug":"字符串运算符","link":"#字符串运算符","children":[]},{"level":3,"title":"文件相关运算符","slug":"文件相关运算符","link":"#文件相关运算符","children":[]}]},{"level":2,"title":"shell流程控制","slug":"shell流程控制","link":"#shell流程控制","children":[{"level":3,"title":"if 条件语句","slug":"if-条件语句","link":"#if-条件语句","children":[]},{"level":3,"title":"for 循环语句","slug":"for-循环语句","link":"#for-循环语句","children":[]},{"level":3,"title":"while 语句","slug":"while-语句","link":"#while-语句","children":[]}]},{"level":2,"title":"shell 函数","slug":"shell-函数","link":"#shell-函数","children":[{"level":3,"title":"不带参数没有返回值的函数","slug":"不带参数没有返回值的函数","link":"#不带参数没有返回值的函数","children":[]},{"level":3,"title":"有返回值的函数","slug":"有返回值的函数","link":"#有返回值的函数","children":[]},{"level":3,"title":"带参数的函数","slug":"带参数的函数","link":"#带参数的函数","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":11.19,"words":3358},"filePathRelative":"code/java/cs-basics/operating-system/shell-intro.md","localizedDate":"2021年12月13日","excerpt":"<h1> Shell 编程入门</h1>\\n<h2> 走进 Shell 编程的大门</h2>\\n<h3> 为什么要学Shell？</h3>\\n<p>学一个东西，我们大部分情况都是往实用性方向着想。从工作角度来讲，学习 Shell 是为了提高我们自己工作效率，提高产出，让我们在更少的时间完成更多的事情。</p>\\n<p>很多人会说 Shell 编程属于运维方面的知识了，应该是运维人员来做，我们做后端开发的没必要学。我觉得这种说法大错特错，相比于专门做Linux运维的人员来说，我们对 Shell 编程掌握程度的要求要比他们低，但是shell编程也是我们必须要掌握的！</p>\\n<p>目前Linux系统下最流行的运维自动化语言就是Shell和Python了。</p>","autoDesc":true}');export{l as data};
