const e=JSON.parse('{"key":"v-8aa92b62","path":"/code/java/database/mysql/mysql-index.html","title":"MySQL索引详解","lang":"zh-CN","frontmatter":{"title":"MySQL索引详解","date":"2020-12-21T00:00:00.000Z","category":"数据库","tag":["MySQL"],"description":"感谢WT-AHA对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。 何为索引？有什么作用？ 索引是一种用于快速查询和检索数据的数据结构。常见的索引结构有: B 树， B+树和 Hash。 索引的作用就相当于书的目录。打个比方: 我们在查字典的时候，如果没有目录，那我们就只能一页一页的去找我们需要查的那个字，速度很慢。如果有目录了，我们只需要先去目录里查找字的位置，然后直接翻到那一页就行了。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/database/mysql/mysql-index.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"MySQL索引详解"}],["meta",{"property":"og:description","content":"感谢WT-AHA对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。 何为索引？有什么作用？ 索引是一种用于快速查询和检索数据的数据结构。常见的索引结构有: B 树， B+树和 Hash。 索引的作用就相当于书的目录。打个比方: 我们在查字典的时候，如果没有目录，那我们就只能一页一页的去找我们需要查的那个字，速度很慢。如果有目录了，我们只需要先去目录里查找字的位置，然后直接翻到那一页就行了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2020-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL索引详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"何为索引？有什么作用？","slug":"何为索引-有什么作用","link":"#何为索引-有什么作用","children":[]},{"level":2,"title":"索引的优缺点","slug":"索引的优缺点","link":"#索引的优缺点","children":[]},{"level":2,"title":"索引的底层数据结构","slug":"索引的底层数据结构","link":"#索引的底层数据结构","children":[{"level":3,"title":"Hash表","slug":"hash表","link":"#hash表","children":[]},{"level":3,"title":"B 树& B+树","slug":"b-树-b-树","link":"#b-树-b-树","children":[]}]},{"level":2,"title":"索引类型","slug":"索引类型","link":"#索引类型","children":[{"level":3,"title":"主键索引(Primary Key)","slug":"主键索引-primary-key","link":"#主键索引-primary-key","children":[]},{"level":3,"title":"二级索引(辅助索引)","slug":"二级索引-辅助索引","link":"#二级索引-辅助索引","children":[]}]},{"level":2,"title":"聚集索引与非聚集索引","slug":"聚集索引与非聚集索引","link":"#聚集索引与非聚集索引","children":[{"level":3,"title":"聚集索引","slug":"聚集索引","link":"#聚集索引","children":[]},{"level":3,"title":"非聚集索引","slug":"非聚集索引","link":"#非聚集索引","children":[]},{"level":3,"title":"非聚集索引一定回表查询吗(覆盖索引)?","slug":"非聚集索引一定回表查询吗-覆盖索引","link":"#非聚集索引一定回表查询吗-覆盖索引","children":[]}]},{"level":2,"title":"覆盖索引","slug":"覆盖索引","link":"#覆盖索引","children":[]},{"level":2,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":2,"title":"最左前缀匹配原则","slug":"最左前缀匹配原则","link":"#最左前缀匹配原则","children":[]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]},{"level":2,"title":"创建索引的注意事项","slug":"创建索引的注意事项","link":"#创建索引的注意事项","children":[]},{"level":2,"title":"使用索引的一些建议","slug":"使用索引的一些建议","link":"#使用索引的一些建议","children":[]},{"level":2,"title":"MySQL 如何为表字段添加索引？","slug":"mysql-如何为表字段添加索引","link":"#mysql-如何为表字段添加索引","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":14.67,"words":4402},"filePathRelative":"code/java/database/mysql/mysql-index.md","localizedDate":"2020年12月21日","excerpt":"<blockquote>\\n<p>感谢<a href=\\"https://github.com/WT-AHA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WT-AHA</a>对本文的完善，相关 PR：https://github.com/Snailclimb/JavaGuide/pull/1648 。</p>\\n</blockquote>\\n<h2> 何为索引？有什么作用？</h2>\\n<p><strong>索引是一种用于快速查询和检索数据的数据结构。常见的索引结构有: B 树， B+树和 Hash。</strong></p>\\n<p>索引的作用就相当于书的目录。打个比方: 我们在查字典的时候，如果没有目录，那我们就只能一页一页的去找我们需要查的那个字，速度很慢。如果有目录了，我们只需要先去目录里查找字的位置，然后直接翻到那一页就行了。</p>","autoDesc":true}');export{e as data};
