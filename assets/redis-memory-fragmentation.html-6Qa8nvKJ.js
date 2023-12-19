const e=JSON.parse('{"key":"v-c4df73ec","path":"/code/java/database/redis/redis-memory-fragmentation.html","title":"Redis 内存碎片详解","lang":"zh-CN","frontmatter":{"title":"Redis 内存碎片详解","date":"2021-11-18T00:00:00.000Z","category":"redis","tag":["Redis"],"description":"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 内存碎片","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/database/redis/redis-memory-fragmentation.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Redis 内存碎片详解"}],["meta",{"property":"og:description","content":"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 内存碎片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2021-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 内存碎片详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"什么是内存碎片?","slug":"什么是内存碎片","link":"#什么是内存碎片","children":[]},{"level":2,"title":"为什么会有 Redis 内存碎片?","slug":"为什么会有-redis-内存碎片","link":"#为什么会有-redis-内存碎片","children":[]},{"level":2,"title":"如何查看 Redis 内存碎片的信息？","slug":"如何查看-redis-内存碎片的信息","link":"#如何查看-redis-内存碎片的信息","children":[]},{"level":2,"title":"如何清理 Redis 内存碎片？","slug":"如何清理-redis-内存碎片","link":"#如何清理-redis-内存碎片","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":4.66,"words":1397},"filePathRelative":"code/java/database/redis/redis-memory-fragmentation.md","localizedDate":"2021年11月18日","excerpt":"<h2> 什么是内存碎片?</h2>\\n<p>你可以将内存碎片简单地理解为那些不可用的空闲内存。</p>\\n<p>举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。</p>\\n<figure><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/memory-fragmentation.png\\" alt=\\"内存碎片\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>内存碎片</figcaption></figure>","autoDesc":true}');export{e as data};
