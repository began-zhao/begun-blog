const e=JSON.parse('{"key":"v-0326f310","path":"/code/java/high-performance/message-queue/rocketmq-intro.html","title":"RocketMQ 入门总结","lang":"zh-CN","frontmatter":{"title":"RocketMQ 入门总结","category":"MQ","date":"2021-04-22T00:00:00.000Z","description":"RocketMQ 入门总结 文章很长，点赞再看，养成好习惯😋😋😋 本文由 FrancisQ 老哥投稿！","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/high-performance/message-queue/rocketmq-intro.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"RocketMQ 入门总结"}],["meta",{"property":"og:description","content":"RocketMQ 入门总结 文章很长，点赞再看，养成好习惯😋😋😋 本文由 FrancisQ 老哥投稿！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2021-04-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RocketMQ 入门总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"消息队列扫盲","slug":"消息队列扫盲","link":"#消息队列扫盲","children":[{"level":3,"title":"消息队列为什么会出现？","slug":"消息队列为什么会出现","link":"#消息队列为什么会出现","children":[]},{"level":3,"title":"消息队列能用来干什么？","slug":"消息队列能用来干什么","link":"#消息队列能用来干什么","children":[]}]},{"level":2,"title":"RocketMQ是什么？","slug":"rocketmq是什么","link":"#rocketmq是什么","children":[]},{"level":2,"title":"队列模型和主题模型","slug":"队列模型和主题模型","link":"#队列模型和主题模型","children":[{"level":3,"title":"队列模型","slug":"队列模型","link":"#队列模型","children":[]},{"level":3,"title":"主题模型","slug":"主题模型","link":"#主题模型","children":[]},{"level":3,"title":"RocketMQ中的消息模型","slug":"rocketmq中的消息模型","link":"#rocketmq中的消息模型","children":[]}]},{"level":2,"title":"RocketMQ的架构图","slug":"rocketmq的架构图","link":"#rocketmq的架构图","children":[]},{"level":2,"title":"如何解决 顺序消费、重复消费","slug":"如何解决-顺序消费、重复消费","link":"#如何解决-顺序消费、重复消费","children":[{"level":3,"title":"顺序消费","slug":"顺序消费","link":"#顺序消费","children":[]},{"level":3,"title":"重复消费","slug":"重复消费","link":"#重复消费","children":[]}]},{"level":2,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[]},{"level":2,"title":"消息堆积问题","slug":"消息堆积问题","link":"#消息堆积问题","children":[]},{"level":2,"title":"回溯消费","slug":"回溯消费","link":"#回溯消费","children":[]},{"level":2,"title":"RocketMQ 的刷盘机制","slug":"rocketmq-的刷盘机制","link":"#rocketmq-的刷盘机制","children":[{"level":3,"title":"同步刷盘和异步刷盘","slug":"同步刷盘和异步刷盘","link":"#同步刷盘和异步刷盘","children":[]},{"level":3,"title":"同步复制和异步复制","slug":"同步复制和异步复制","link":"#同步复制和异步复制","children":[]},{"level":3,"title":"存储机制","slug":"存储机制","link":"#存储机制","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":39.12,"words":11735},"filePathRelative":"code/java/high-performance/message-queue/rocketmq-intro.md","localizedDate":"2021年4月22日","excerpt":"<h1> RocketMQ 入门总结</h1>\\n<blockquote>\\n<p>文章很长，点赞再看，养成好习惯😋😋😋</p>\\n<p><a href=\\"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485969&amp;idx=1&amp;sn=6bd53abde30d42a778d5a35ec104428c&amp;chksm=cea245daf9d5cccce631f93115f0c2c4a7634e55f5bef9009fd03f5a0ffa55b745b5ef4f0530&amp;token=294077121&amp;lang=zh_CN#rd\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">本文由 FrancisQ 老哥投稿！</a></p>\\n</blockquote>","autoDesc":true}');export{e as data};
