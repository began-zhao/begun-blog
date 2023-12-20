const e=JSON.parse('{"key":"v-65877a09","path":"/code/java/common/jvm/jvm-garbage-collection.html","title":"JVM 垃圾回收详解","lang":"zh-CN","frontmatter":{"title":"JVM 垃圾回收详解","date":"2020-09-24T00:00:00.000Z","category":"Java","tag":["JVM"],"description":"写在前面 本节常见面试题 问题答案在文中都有提到 如何判断对象是否死亡（两种方法）。 简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。 如何判断一个常量是废弃常量 如何判断一个类是无用的类 垃圾收集有哪些算法，各自的特点？ HotSpot 为什么要分为新生代和老年代？ 常见的垃圾回收器有哪些？ 介绍一下 CMS,G1 收集器。 Minor Gc 和 Full GC 有什么不同呢？","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/common/jvm/jvm-garbage-collection.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"JVM 垃圾回收详解"}],["meta",{"property":"og:description","content":"写在前面 本节常见面试题 问题答案在文中都有提到 如何判断对象是否死亡（两种方法）。 简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。 如何判断一个常量是废弃常量 如何判断一个类是无用的类 垃圾收集有哪些算法，各自的特点？ HotSpot 为什么要分为新生代和老年代？ 常见的垃圾回收器有哪些？ 介绍一下 CMS,G1 收集器。 Minor Gc 和 Full GC 有什么不同呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://began-zhao.github.io/begun-blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JVM 垃圾回收详解"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2020-09-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM 垃圾回收详解\\",\\"image\\":[\\"https://began-zhao.github.io/begun-blog/\\"],\\"datePublished\\":\\"2020-09-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"写在前面","slug":"写在前面","link":"#写在前面","children":[{"level":3,"title":"本节常见面试题","slug":"本节常见面试题","link":"#本节常见面试题","children":[]},{"level":3,"title":"本文导火索","slug":"本文导火索","link":"#本文导火索","children":[]}]},{"level":2,"title":"1 揭开 JVM 内存分配与回收的神秘面纱","slug":"_1-揭开-jvm-内存分配与回收的神秘面纱","link":"#_1-揭开-jvm-内存分配与回收的神秘面纱","children":[{"level":3,"title":"1.1 对象优先在 eden 区分配","slug":"_1-1-对象优先在-eden-区分配","link":"#_1-1-对象优先在-eden-区分配","children":[]},{"level":3,"title":"1.2 大对象直接进入老年代","slug":"_1-2-大对象直接进入老年代","link":"#_1-2-大对象直接进入老年代","children":[]},{"level":3,"title":"1.3 长期存活的对象将进入老年代","slug":"_1-3-长期存活的对象将进入老年代","link":"#_1-3-长期存活的对象将进入老年代","children":[]},{"level":3,"title":"1.4 动态对象年龄判定","slug":"_1-4-动态对象年龄判定","link":"#_1-4-动态对象年龄判定","children":[]},{"level":3,"title":"1.5 主要进行 gc 的区域","slug":"_1-5-主要进行-gc-的区域","link":"#_1-5-主要进行-gc-的区域","children":[]},{"level":3,"title":"1.6 空间分配担保","slug":"_1-6-空间分配担保","link":"#_1-6-空间分配担保","children":[]}]},{"level":2,"title":"2 对象已经死亡？","slug":"_2-对象已经死亡","link":"#_2-对象已经死亡","children":[{"level":3,"title":"2.1 引用计数法","slug":"_2-1-引用计数法","link":"#_2-1-引用计数法","children":[]},{"level":3,"title":"2.2 可达性分析算法","slug":"_2-2-可达性分析算法","link":"#_2-2-可达性分析算法","children":[]},{"level":3,"title":"2.3 再谈引用","slug":"_2-3-再谈引用","link":"#_2-3-再谈引用","children":[]},{"level":3,"title":"2.5 如何判断一个常量是废弃常量？","slug":"_2-5-如何判断一个常量是废弃常量","link":"#_2-5-如何判断一个常量是废弃常量","children":[]},{"level":3,"title":"2.6 如何判断一个类是无用的类","slug":"_2-6-如何判断一个类是无用的类","link":"#_2-6-如何判断一个类是无用的类","children":[]}]},{"level":2,"title":"3 垃圾收集算法","slug":"_3-垃圾收集算法","link":"#_3-垃圾收集算法","children":[{"level":3,"title":"3.1 标记-清除算法","slug":"_3-1-标记-清除算法","link":"#_3-1-标记-清除算法","children":[]},{"level":3,"title":"3.2 标记-复制算法","slug":"_3-2-标记-复制算法","link":"#_3-2-标记-复制算法","children":[]},{"level":3,"title":"3.3 标记-整理算法","slug":"_3-3-标记-整理算法","link":"#_3-3-标记-整理算法","children":[]},{"level":3,"title":"3.4 分代收集算法","slug":"_3-4-分代收集算法","link":"#_3-4-分代收集算法","children":[]}]},{"level":2,"title":"4 垃圾收集器","slug":"_4-垃圾收集器","link":"#_4-垃圾收集器","children":[{"level":3,"title":"4.1 Serial 收集器","slug":"_4-1-serial-收集器","link":"#_4-1-serial-收集器","children":[]},{"level":3,"title":"4.2 ParNew 收集器","slug":"_4-2-parnew-收集器","link":"#_4-2-parnew-收集器","children":[]},{"level":3,"title":"4.3 Parallel Scavenge 收集器","slug":"_4-3-parallel-scavenge-收集器","link":"#_4-3-parallel-scavenge-收集器","children":[]},{"level":3,"title":"4.4.Serial Old 收集器","slug":"_4-4-serial-old-收集器","link":"#_4-4-serial-old-收集器","children":[]},{"level":3,"title":"4.5 Parallel Old 收集器","slug":"_4-5-parallel-old-收集器","link":"#_4-5-parallel-old-收集器","children":[]},{"level":3,"title":"4.6 CMS 收集器","slug":"_4-6-cms-收集器","link":"#_4-6-cms-收集器","children":[]},{"level":3,"title":"4.7 G1 收集器","slug":"_4-7-g1-收集器","link":"#_4-7-g1-收集器","children":[]},{"level":3,"title":"4.8 ZGC 收集器","slug":"_4-8-zgc-收集器","link":"#_4-8-zgc-收集器","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":30.35,"words":9106},"filePathRelative":"code/java/common/jvm/jvm-garbage-collection.md","localizedDate":"2020年9月24日","excerpt":"<h2> 写在前面</h2>\\n<h3> 本节常见面试题</h3>\\n<p>问题答案在文中都有提到</p>\\n<ul>\\n<li>如何判断对象是否死亡（两种方法）。</li>\\n<li>简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。</li>\\n<li>如何判断一个常量是废弃常量</li>\\n<li>如何判断一个类是无用的类</li>\\n<li>垃圾收集有哪些算法，各自的特点？</li>\\n<li>HotSpot 为什么要分为新生代和老年代？</li>\\n<li>常见的垃圾回收器有哪些？</li>\\n<li>介绍一下 CMS,G1 收集器。</li>\\n<li>Minor Gc 和 Full GC 有什么不同呢？</li>\\n</ul>","autoDesc":true}');export{e as data};