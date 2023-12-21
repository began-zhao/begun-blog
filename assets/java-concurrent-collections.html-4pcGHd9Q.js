const e=JSON.parse('{"key":"v-01f75a27","path":"/code/java/common/concurrent/java-concurrent-collections.html","title":"Java 常见并发容器总结","lang":"zh-CN","frontmatter":{"title":"Java 常见并发容器总结","date":"2020-08-19T00:00:00.000Z","category":"Java","tag":["Java并发"],"description":"JDK 提供的这些容器大部分在 java.util.concurrent 包中。 ConcurrentHashMap : 线程安全的 HashMap; CopyOnWriteArrayList : 线程安全的 List，在读多写少的场合性能非常好，远远好于 Vector。; ConcurrentLinkedQueue : 高效的并发队列，使用链表实现。...","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/common/concurrent/java-concurrent-collections.html"}],["meta",{"property":"og:site_name","content":"咖飞"}],["meta",{"property":"og:title","content":"Java 常见并发容器总结"}],["meta",{"property":"og:description","content":"JDK 提供的这些容器大部分在 java.util.concurrent 包中。 ConcurrentHashMap : 线程安全的 HashMap; CopyOnWriteArrayList : 线程安全的 List，在读多写少的场合性能非常好，远远好于 Vector。; ConcurrentLinkedQueue : 高效的并发队列，使用链表实现。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:published_time","content":"2020-08-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 常见并发容器总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"ConcurrentHashMap","slug":"concurrenthashmap","link":"#concurrenthashmap","children":[]},{"level":2,"title":"CopyOnWriteArrayList","slug":"copyonwritearraylist","link":"#copyonwritearraylist","children":[{"level":3,"title":"CopyOnWriteArrayList 简介","slug":"copyonwritearraylist-简介","link":"#copyonwritearraylist-简介","children":[]},{"level":3,"title":"CopyOnWriteArrayList 是如何做到的？","slug":"copyonwritearraylist-是如何做到的","link":"#copyonwritearraylist-是如何做到的","children":[]},{"level":3,"title":"CopyOnWriteArrayList 读取和写入源码简单分析","slug":"copyonwritearraylist-读取和写入源码简单分析","link":"#copyonwritearraylist-读取和写入源码简单分析","children":[]}]},{"level":2,"title":"ConcurrentLinkedQueue","slug":"concurrentlinkedqueue","link":"#concurrentlinkedqueue","children":[]},{"level":2,"title":"BlockingQueue","slug":"blockingqueue","link":"#blockingqueue","children":[{"level":3,"title":"BlockingQueue 简介","slug":"blockingqueue-简介","link":"#blockingqueue-简介","children":[]},{"level":3,"title":"ArrayBlockingQueue","slug":"arrayblockingqueue","link":"#arrayblockingqueue","children":[]},{"level":3,"title":"LinkedBlockingQueue","slug":"linkedblockingqueue","link":"#linkedblockingqueue","children":[]},{"level":3,"title":"PriorityBlockingQueue","slug":"priorityblockingqueue","link":"#priorityblockingqueue","children":[]}]},{"level":2,"title":"ConcurrentSkipListMap","slug":"concurrentskiplistmap","link":"#concurrentskiplistmap","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":10.05,"words":3016},"filePathRelative":"code/java/common/concurrent/java-concurrent-collections.md","localizedDate":"2020年8月19日","excerpt":"","autoDesc":true}');export{e as data};
