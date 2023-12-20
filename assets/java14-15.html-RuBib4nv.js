const e=JSON.parse('{"key":"v-39d7b652","path":"/code/java/common/new-features/java14-15.html","title":"Java 14 ~ 15 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 14 ~ 15 新特性概览","date":"2021-03-24T00:00:00.000Z","category":"Java","tag":["Java新特性"],"description":"Java14 空指针异常精准提示 通过 JVM 参数中添加-XX:+ShowCodeDetailsInExceptionMessages，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。 a.b.c.i = 99; // 假设这段代码会发生空指针","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/common/new-features/java14-15.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Java 14 ~ 15 新特性概览"}],["meta",{"property":"og:description","content":"Java14 空指针异常精准提示 通过 JVM 参数中添加-XX:+ShowCodeDetailsInExceptionMessages，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。 a.b.c.i = 99; // 假设这段代码会发生空指针"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:published_time","content":"2021-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 14 ~ 15 新特性概览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"Java14","slug":"java14","link":"#java14","children":[{"level":3,"title":"空指针异常精准提示","slug":"空指针异常精准提示","link":"#空指针异常精准提示","children":[]},{"level":3,"title":"switch 的增强(转正)","slug":"switch-的增强-转正","link":"#switch-的增强-转正","children":[]},{"level":3,"title":"预览新特性","slug":"预览新特性","link":"#预览新特性","children":[]},{"level":3,"title":"Java14 其他特性","slug":"java14-其他特性","link":"#java14-其他特性","children":[]}]},{"level":2,"title":"Java15","slug":"java15","link":"#java15","children":[{"level":3,"title":"CharSequence","slug":"charsequence","link":"#charsequence","children":[]},{"level":3,"title":"TreeMap","slug":"treemap","link":"#treemap","children":[]},{"level":3,"title":"ZGC(转正)","slug":"zgc-转正","link":"#zgc-转正","children":[]},{"level":3,"title":"EdDSA(数字签名算法)","slug":"eddsa-数字签名算法","link":"#eddsa-数字签名算法","children":[]},{"level":3,"title":"文本块(转正)","slug":"文本块-转正","link":"#文本块-转正","children":[]},{"level":3,"title":"隐藏类(Hidden Classes)","slug":"隐藏类-hidden-classes","link":"#隐藏类-hidden-classes","children":[]},{"level":3,"title":"预览新特性","slug":"预览新特性-1","link":"#预览新特性-1","children":[]},{"level":3,"title":"Java15 其他新特性","slug":"java15-其他新特性","link":"#java15-其他新特性","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"关于预览特性","slug":"关于预览特性","link":"#关于预览特性","children":[]},{"level":3,"title":"JVM 虚拟机优化","slug":"jvm-虚拟机优化","link":"#jvm-虚拟机优化","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":6.72,"words":2017},"filePathRelative":"code/java/common/new-features/java14-15.md","localizedDate":"2021年3月24日","excerpt":"<h2> Java14</h2>\\n<h3> 空指针异常精准提示</h3>\\n<p>通过 JVM 参数中添加<code>-XX:+ShowCodeDetailsInExceptionMessages</code>，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>a<span class=\\"token punctuation\\">.</span>b<span class=\\"token punctuation\\">.</span>c<span class=\\"token punctuation\\">.</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">99</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 假设这段代码会发生空指针</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};