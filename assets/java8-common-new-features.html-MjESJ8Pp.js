const e=JSON.parse('{"key":"v-a557caae","path":"/code/java/common/new-features/java8-common-new-features.html","title":"Java8 新特性实战","lang":"zh-CN","frontmatter":{"title":"Java8 新特性实战","date":"2021-03-24T00:00:00.000Z","category":"Java","tag":["Java新特性"],"description":"Java8 新特性实战 本文来自cowbi的投稿~ Oracle 于 2014 发布了 Java8（jdk1.8），诸多原因使它成为目前市场上使用最多的 jdk 版本。虽然发布距今已将近 7 年，但很多程序员对其新特性还是不够了解，尤其是用惯了 Java8 之前版本的老程序员，比如我。 为了不脱离队伍太远，还是有必要对这些新特性做一些总结梳理。它较 jdk.7 有很多变化或者说是优化，比如 interface 里可以有静态方法，并且可以有方法体，这一点就颠覆了之前的认知；java.util.HashMap 数据结构里增加了红黑树；还有众所周知的 Lambda 表达式等等。本文不能把所有的新特性都给大家一一分享，只列出比较常用的新特性给大家做详细讲解。更多相关内容请看官网关于 Java8 的新特性的介绍。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/code/java/common/new-features/java8-common-new-features.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Java8 新特性实战"}],["meta",{"property":"og:description","content":"Java8 新特性实战 本文来自cowbi的投稿~ Oracle 于 2014 发布了 Java8（jdk1.8），诸多原因使它成为目前市场上使用最多的 jdk 版本。虽然发布距今已将近 7 年，但很多程序员对其新特性还是不够了解，尤其是用惯了 Java8 之前版本的老程序员，比如我。 为了不脱离队伍太远，还是有必要对这些新特性做一些总结梳理。它较 jdk.7 有很多变化或者说是优化，比如 interface 里可以有静态方法，并且可以有方法体，这一点就颠覆了之前的认知；java.util.HashMap 数据结构里增加了红黑树；还有众所周知的 Lambda 表达式等等。本文不能把所有的新特性都给大家一一分享，只列出比较常用的新特性给大家做详细讲解。更多相关内容请看官网关于 Java8 的新特性的介绍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:published_time","content":"2021-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java8 新特性实战\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"functional interface 函数式接口","slug":"functional-interface-函数式接口","link":"#functional-interface-函数式接口","children":[]},{"level":2,"title":"Lambda 表达式","slug":"lambda-表达式","link":"#lambda-表达式","children":[{"level":3,"title":"语法格式","slug":"语法格式","link":"#语法格式","children":[]},{"level":3,"title":"Lambda 实战","slug":"lambda-实战","link":"#lambda-实战","children":[]}]},{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[{"level":3,"title":"流类型","slug":"流类型","link":"#流类型","children":[]},{"level":3,"title":"常用方法","slug":"常用方法","link":"#常用方法","children":[]},{"level":3,"title":"实战","slug":"实战","link":"#实战","children":[]},{"level":3,"title":"延迟执行","slug":"延迟执行","link":"#延迟执行","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"Optional","slug":"optional","link":"#optional","children":[{"level":3,"title":"如何创建一个 Optional","slug":"如何创建一个-optional","link":"#如何创建一个-optional","children":[]},{"level":3,"title":"map()相关方法。","slug":"map-相关方法。","link":"#map-相关方法。","children":[]},{"level":3,"title":"判断 value 是否为 null","slug":"判断-value-是否为-null","link":"#判断-value-是否为-null","children":[]},{"level":3,"title":"获取 value","slug":"获取-value","link":"#获取-value","children":[]},{"level":3,"title":"过滤值","slug":"过滤值","link":"#过滤值","children":[]},{"level":3,"title":"小结","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"Date-Time API","slug":"date-time-api","link":"#date-time-api","children":[{"level":3,"title":"java.time 主要类","slug":"java-time-主要类","link":"#java-time-主要类","children":[]},{"level":3,"title":"格式化","slug":"格式化","link":"#格式化","children":[]},{"level":3,"title":"字符串转日期格式","slug":"字符串转日期格式","link":"#字符串转日期格式","children":[]},{"level":3,"title":"日期计算","slug":"日期计算","link":"#日期计算","children":[]},{"level":3,"title":"获取指定日期","slug":"获取指定日期","link":"#获取指定日期","children":[]},{"level":3,"title":"JDBC 和 java8","slug":"jdbc-和-java8","link":"#jdbc-和-java8","children":[]},{"level":3,"title":"时区","slug":"时区","link":"#时区","children":[]},{"level":3,"title":"小结","slug":"小结-2","link":"#小结-2","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":20.41,"words":6123},"filePathRelative":"code/java/common/new-features/java8-common-new-features.md","localizedDate":"2021年3月24日","excerpt":"<h1> Java8 新特性实战</h1>\\n<blockquote>\\n<p>本文来自<a href=\\"https://github.com/cowbi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">cowbi</a>的投稿~</p>\\n</blockquote>\\n<p>Oracle 于 2014 发布了 Java8（jdk1.8），诸多原因使它成为目前市场上使用最多的 jdk 版本。虽然发布距今已将近 7 年，但很多程序员对其新特性还是不够了解，尤其是用惯了 Java8 之前版本的老程序员，比如我。</p>\\n<p>为了不脱离队伍太远，还是有必要对这些新特性做一些总结梳理。它较 jdk.7 有很多变化或者说是优化，比如 interface 里可以有静态方法，并且可以有方法体，这一点就颠覆了之前的认知；<code>java.util.HashMap</code> 数据结构里增加了红黑树；还有众所周知的 Lambda 表达式等等。本文不能把所有的新特性都给大家一一分享，只列出比较常用的新特性给大家做详细讲解。更多相关内容请看<a href=\\"https://www.oracle.com/java/technologies/javase/8-whats-new.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网关于 Java8 的新特性的介绍</a>。</p>","autoDesc":true}');export{e as data};
