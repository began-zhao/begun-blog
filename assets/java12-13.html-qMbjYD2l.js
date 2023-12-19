const t=JSON.parse('{"key":"v-0de52712","path":"/code/java/common/new-features/java12-13.html","title":"Java 12 ~ 13 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 12 ~ 13 新特性概览","date":"2021-03-24T00:00:00.000Z","category":"Java","tag":["Java新特性"],"description":"Java12 String 增强 Java 11 增加了两个的字符串处理方法，如以下所示。 indent() 方法可以实现字符串缩进。 String text = \\"Java\\"; // 缩进 4 格 text = text.indent(4); System.out.println(text); text = text.indent(-10); System.out.println(text);","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/common/new-features/java12-13.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Java 12 ~ 13 新特性概览"}],["meta",{"property":"og:description","content":"Java12 String 增强 Java 11 增加了两个的字符串处理方法，如以下所示。 indent() 方法可以实现字符串缩进。 String text = \\"Java\\"; // 缩进 4 格 text = text.indent(4); System.out.println(text); text = text.indent(-10); System.out.println(text);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:published_time","content":"2021-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 12 ~ 13 新特性概览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"Java12","slug":"java12","link":"#java12","children":[{"level":3,"title":"String 增强","slug":"string-增强","link":"#string-增强","children":[]},{"level":3,"title":"Files 增强（文件比较）","slug":"files-增强-文件比较","link":"#files-增强-文件比较","children":[]},{"level":3,"title":"数字格式化工具类","slug":"数字格式化工具类","link":"#数字格式化工具类","children":[]},{"level":3,"title":"Shenandoah GC","slug":"shenandoah-gc","link":"#shenandoah-gc","children":[]},{"level":3,"title":"G1 收集器优化","slug":"g1-收集器优化","link":"#g1-收集器优化","children":[]},{"level":3,"title":"预览新特性","slug":"预览新特性","link":"#预览新特性","children":[]}]},{"level":2,"title":"Java13","slug":"java13","link":"#java13","children":[{"level":3,"title":"增强 ZGC(释放未使用内存)","slug":"增强-zgc-释放未使用内存","link":"#增强-zgc-释放未使用内存","children":[]},{"level":3,"title":"SocketAPI 重构","slug":"socketapi-重构","link":"#socketapi-重构","children":[]},{"level":3,"title":"FileSystems","slug":"filesystems","link":"#filesystems","children":[]},{"level":3,"title":"动态 CDS 存档","slug":"动态-cds-存档","link":"#动态-cds-存档","children":[]},{"level":3,"title":"预览新特性","slug":"预览新特性-1","link":"#预览新特性-1","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":5.81,"words":1743},"filePathRelative":"code/java/common/new-features/java12-13.md","localizedDate":"2021年3月24日","excerpt":"<h2> Java12</h2>\\n<h3> String 增强</h3>\\n<p>Java 11 增加了两个的字符串处理方法，如以下所示。</p>\\n<p><code>indent()</code> 方法可以实现字符串缩进。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token class-name\\">String</span> text <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"Java\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 缩进 4 格</span>\\ntext <span class=\\"token operator\\">=</span> text<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indent</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\ntext <span class=\\"token operator\\">=</span> text<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indent</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
