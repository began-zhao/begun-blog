const e=JSON.parse('{"key":"v-0b28948d","path":"/interview/GC-FAQ.html","title":"GC 垃圾回收","lang":"zh-CN","frontmatter":{"title":"GC 垃圾回收","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"《面试必备：GC 垃圾回收十大考点及图文详解》 Java 发展历史上出现过很多垃圾回收器，各有各的适应场景，很多网上的旧内容已经跟不上最新的变化。而且“Java 的内存布局以及 GC 原理”又是 Java 开发人员绕不开的话题，更是面试中常见的高频问题之一。 我们将详细介绍 Java 的内存布局，以及各种 GC 原理。这也就包括了经典面试考点：垃圾判断法、4 种 GC 算法、8 种垃圾回收器原理等内容。其中分代收集算法、ZGC 收集器我将重点介绍，最后会再加以实战，带你进行垃圾回收器练习。 学习之前，你可以看看以下十大考点，你是否能清晰作答？","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/interview/GC-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"GC 垃圾回收"}],["meta",{"property":"og:description","content":"《面试必备：GC 垃圾回收十大考点及图文详解》 Java 发展历史上出现过很多垃圾回收器，各有各的适应场景，很多网上的旧内容已经跟不上最新的变化。而且“Java 的内存布局以及 GC 原理”又是 Java 开发人员绕不开的话题，更是面试中常见的高频问题之一。 我们将详细介绍 Java 的内存布局，以及各种 GC 原理。这也就包括了经典面试考点：垃圾判断法、4 种 GC 算法、8 种垃圾回收器原理等内容。其中分代收集算法、ZGC 收集器我将重点介绍，最后会再加以实战，带你进行垃圾回收器练习。 学习之前，你可以看看以下十大考点，你是否能清晰作答？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GC 垃圾回收\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"JVM 运行时内存布局","slug":"jvm-运行时内存布局","link":"#jvm-运行时内存布局","children":[{"level":3,"title":"Question 1：JVM 运行时内存布局分为哪些区域？它们之间又是怎样的关系？","slug":"question-1-jvm-运行时内存布局分为哪些区域-它们之间又是怎样的关系","link":"#question-1-jvm-运行时内存布局分为哪些区域-它们之间又是怎样的关系","children":[]},{"level":3,"title":"Question 2：哪些区域会产生 OOM？","slug":"question-2-哪些区域会产生-oom","link":"#question-2-哪些区域会产生-oom","children":[]},{"level":3,"title":"Question 3：总体来看，JVM 把内存划分为“栈(stack)”与“堆(heap)”两大类，为何要这样设计？","slug":"question-3-总体来看-jvm-把内存划分为-栈-stack-与-堆-heap-两大类-为何要这样设计","link":"#question-3-总体来看-jvm-把内存划分为-栈-stack-与-堆-heap-两大类-为何要这样设计","children":[]},{"level":3,"title":"Question 4：如果 A 引用 B，B 又引用 A（发生了循环引用问题），这 2 个对象是否能被 GC回收？","slug":"question-4-如果-a-引用-b-b-又引用-a-发生了循环引用问题-这-2-个对象是否能被-gc回收","link":"#question-4-如果-a-引用-b-b-又引用-a-发生了循环引用问题-这-2-个对象是否能被-gc回收","children":[]},{"level":3,"title":"Question 5：说一说常用的 GC 算法及其优缺点","slug":"question-5-说一说常用的-gc-算法及其优缺点","link":"#question-5-说一说常用的-gc-算法及其优缺点","children":[]},{"level":3,"title":"Question 6：请以 Hotspot 为例，分析一下 GC 全过程（并指出其中 GC 算法的综合运用）。","slug":"question-6-请以-hotspot-为例-分析一下-gc-全过程-并指出其中-gc-算法的综合运用-。","link":"#question-6-请以-hotspot-为例-分析一下-gc-全过程-并指出其中-gc-算法的综合运用-。","children":[]}]},{"level":2,"title":"8 种垃圾回收器","slug":"_8-种垃圾回收器","link":"#_8-种垃圾回收器","children":[{"level":3,"title":"Question 7：CMS 收集器工作的整个流程主要分为哪几个阶段？","slug":"question-7-cms-收集器工作的整个流程主要分为哪几个阶段","link":"#question-7-cms-收集器工作的整个流程主要分为哪几个阶段","children":[]},{"level":3,"title":"Question 8：G1 垃圾收集器的原理是什么？","slug":"question-8-g1-垃圾收集器的原理是什么","link":"#question-8-g1-垃圾收集器的原理是什么","children":[]},{"level":3,"title":"Question 9：G1 垃圾收集器的运行过程，分为哪几个阶段？","slug":"question-9-g1-垃圾收集器的运行过程-分为哪几个阶段","link":"#question-9-g1-垃圾收集器的运行过程-分为哪几个阶段","children":[]},{"level":3,"title":"Question 10：ZGC 在 G1 基础上做了哪些改进？","slug":"question-10-zgc-在-g1-基础上做了哪些改进","link":"#question-10-zgc-在-g1-基础上做了哪些改进","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":23.69,"words":7106},"filePathRelative":"interview/GC-FAQ.md","localizedDate":"2020年11月23日","excerpt":"<blockquote>\\n<p>《面试必备：GC 垃圾回收十大考点及图文详解》</p>\\n</blockquote>\\n<p>Java 发展历史上出现过很多垃圾回收器，各有各的适应场景，很多网上的旧内容已经跟不上最新的变化。而且“Java 的内存布局以及 GC 原理”又是 Java 开发人员绕不开的话题，更是面试中常见的高频问题之一。</p>\\n<p>我们将详细介绍 Java 的内存布局，以及各种 GC 原理。这也就包括了经典面试考点：垃圾判断法、4 种 GC 算法、8 种垃圾回收器原理等内容。其中分代收集算法、ZGC 收集器我将重点介绍，最后会再加以实战，带你进行垃圾回收器练习。</p>\\n<p>学习之前，你可以看看以下十大考点，你是否能清晰作答？</p>","autoDesc":true}');export{e as data};
