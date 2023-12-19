const e=JSON.parse('{"key":"v-5d42bc34","path":"/code/java/common/jvm/class-file-structure.html","title":"类文件结构详解","lang":"zh-CN","frontmatter":{"title":"类文件结构详解","category":"Java","date":"2020-09-21T00:00:00.000Z","tag":["JVM"],"description":"类文件结构详解 一 概述 在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。 Clojure（Lisp 语言的一种方言）、Groovy、Scala 等语言都是运行在 Java 虚拟机之上。下图展示了不同的语言被不同的编译器编译成.class文件最终运行在 Java 虚拟机之上。.class文件的二进制格式可以使用 WinHex 查看。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/common/jvm/class-file-structure.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"类文件结构详解"}],["meta",{"property":"og:description","content":"类文件结构详解 一 概述 在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。 Clojure（Lisp 语言的一种方言）、Groovy、Scala 等语言都是运行在 Java 虚拟机之上。下图展示了不同的语言被不同的编译器编译成.class文件最终运行在 Java 虚拟机之上。.class文件的二进制格式可以使用 WinHex 查看。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2020-09-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类文件结构详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"一 概述","slug":"一-概述","link":"#一-概述","children":[]},{"level":2,"title":"二 Class 文件结构总结","slug":"二-class-文件结构总结","link":"#二-class-文件结构总结","children":[{"level":3,"title":"2.1 魔数（Magic Number）","slug":"_2-1-魔数-magic-number","link":"#_2-1-魔数-magic-number","children":[]},{"level":3,"title":"2.2 Class 文件版本号（Minor&Major Version）","slug":"_2-2-class-文件版本号-minor-major-version","link":"#_2-2-class-文件版本号-minor-major-version","children":[]},{"level":3,"title":"2.3 常量池（Constant Pool）","slug":"_2-3-常量池-constant-pool","link":"#_2-3-常量池-constant-pool","children":[]},{"level":3,"title":"2.4 访问标志(Access Flags)","slug":"_2-4-访问标志-access-flags","link":"#_2-4-访问标志-access-flags","children":[]},{"level":3,"title":"2.5 当前类（This Class）、父类（Super Class）、接口（Interfaces）索引集合","slug":"_2-5-当前类-this-class-、父类-super-class-、接口-interfaces-索引集合","link":"#_2-5-当前类-this-class-、父类-super-class-、接口-interfaces-索引集合","children":[]},{"level":3,"title":"2.6 字段表集合（Fields）","slug":"_2-6-字段表集合-fields","link":"#_2-6-字段表集合-fields","children":[]},{"level":3,"title":"2.7 方法表集合（Methods）","slug":"_2-7-方法表集合-methods","link":"#_2-7-方法表集合-methods","children":[]},{"level":3,"title":"2.8 属性表集合（Attributes）","slug":"_2-8-属性表集合-attributes","link":"#_2-8-属性表集合-attributes","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":8.52,"words":2557},"filePathRelative":"code/java/common/jvm/class-file-structure.md","localizedDate":"2020年9月21日","excerpt":"<h1> 类文件结构详解</h1>\\n<h2> 一 概述</h2>\\n<p>在 Java 中，JVM 可以理解的代码就叫做<code>字节码</code>（即扩展名为 <code>.class</code> 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p>\\n<p>Clojure（Lisp 语言的一种方言）、Groovy、Scala 等语言都是运行在 Java 虚拟机之上。下图展示了不同的语言被不同的编译器编译成<code>.class</code>文件最终运行在 Java 虚拟机之上。<code>.class</code>文件的二进制格式可以使用 <a href=\\"https://www.x-ways.net/winhex/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WinHex</a> 查看。</p>","autoDesc":true}');export{e as data};
