const e=JSON.parse('{"key":"v-e57e0bd0","path":"/code/java/high-performance/message-queue/message-queue.html","title":"消息队列知识点&面试题总结","lang":"zh-CN","frontmatter":{"title":"消息队列知识点&面试题总结","category":"MQ","date":"2021-04-22T00:00:00.000Z","description":"“RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概...","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/high-performance/message-queue/message-queue.html"}],["meta",{"property":"og:site_name","content":"咖飞"}],["meta",{"property":"og:title","content":"消息队列知识点&面试题总结"}],["meta",{"property":"og:description","content":"“RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2021-04-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息队列知识点&面试题总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"一 什么是消息队列","slug":"一-什么是消息队列","link":"#一-什么是消息队列","children":[]},{"level":2,"title":"二 为什么要用消息队列","slug":"二-为什么要用消息队列","link":"#二-为什么要用消息队列","children":[{"level":3,"title":"2.1 通过异步处理提高系统性能（减少响应所需时间）","slug":"_2-1-通过异步处理提高系统性能-减少响应所需时间","link":"#_2-1-通过异步处理提高系统性能-减少响应所需时间","children":[]},{"level":3,"title":"2.2 削峰/限流","slug":"_2-2-削峰-限流","link":"#_2-2-削峰-限流","children":[]},{"level":3,"title":"2.3 降低系统耦合性","slug":"_2-3-降低系统耦合性","link":"#_2-3-降低系统耦合性","children":[]}]},{"level":2,"title":"三 使用消息队列带来的一些问题","slug":"三-使用消息队列带来的一些问题","link":"#三-使用消息队列带来的一些问题","children":[]},{"level":2,"title":"四 JMS VS AMQP","slug":"四-jms-vs-amqp","link":"#四-jms-vs-amqp","children":[{"level":3,"title":"4.1 JMS","slug":"_4-1-jms","link":"#_4-1-jms","children":[]},{"level":3,"title":"4.2 AMQP","slug":"_4-2-amqp","link":"#_4-2-amqp","children":[]},{"level":3,"title":"4.3 JMS vs AMQP","slug":"_4-3-jms-vs-amqp","link":"#_4-3-jms-vs-amqp","children":[]}]},{"level":2,"title":"五 常见的消息队列对比","slug":"五-常见的消息队列对比","link":"#五-常见的消息队列对比","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":11.93,"words":3578},"filePathRelative":"code/java/high-performance/message-queue/message-queue.md","localizedDate":"2021年4月22日","excerpt":"","autoDesc":true}');export{e as data};