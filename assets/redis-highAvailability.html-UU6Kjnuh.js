const e=JSON.parse('{"key":"v-77a77446","path":"/code/java/database/redis/redis-highAvailability.html","title":"Redis 高可用","lang":"zh-CN","frontmatter":{"title":"Redis 高可用","date":"2022-03-27T00:00:00.000Z","category":"redis","description":"Redis高可用 前言 Redis 作为一种高性能的内存数据库，普遍用于目前主流的分布式架构系统中。为了提高系统的容错率，使用多实例的 Redis 也是必不可免的，当然，随之而来的就是高可用问题，市面上也出现了一些高可用方案。今天，咖飞就带大家来学习下常见的几种方案是如何来保证高可用的。 高可用机制 Redis 的高可用从总体上来讲是通过 冗余 + 故障转移 来实现的，而对于冗余和故障转移又可以细化为：全部冗余或部分冗余；手动转移或自动转移。 全部冗余+手动转移的方案就是我们最熟悉的主从模式了；当手动转移变为自动转移时即哨兵模式。最后部分冗余 + 自动转移则是集群模式。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/database/redis/redis-highAvailability.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Redis 高可用"}],["meta",{"property":"og:description","content":"Redis高可用 前言 Redis 作为一种高性能的内存数据库，普遍用于目前主流的分布式架构系统中。为了提高系统的容错率，使用多实例的 Redis 也是必不可免的，当然，随之而来的就是高可用问题，市面上也出现了一些高可用方案。今天，咖飞就带大家来学习下常见的几种方案是如何来保证高可用的。 高可用机制 Redis 的高可用从总体上来讲是通过 冗余 + 故障转移 来实现的，而对于冗余和故障转移又可以细化为：全部冗余或部分冗余；手动转移或自动转移。 全部冗余+手动转移的方案就是我们最熟悉的主从模式了；当手动转移变为自动转移时即哨兵模式。最后部分冗余 + 自动转移则是集群模式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://began-zhao.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis 高可用"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2022-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 高可用\\",\\"image\\":[\\"https://began-zhao.github.io/\\"],\\"datePublished\\":\\"2022-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"完全重同步","slug":"完全重同步","link":"#完全重同步","children":[]},{"level":3,"title":"部分重同步","slug":"部分重同步","link":"#部分重同步","children":[]}]},{"level":2,"title":"概述","slug":"概述-1","link":"#概述-1","children":[]},{"level":2,"title":"原理","slug":"原理-1","link":"#原理-1","children":[]},{"level":2,"title":"部署建议","slug":"部署建议","link":"#部署建议","children":[]},{"level":2,"title":"概述","slug":"概述-2","link":"#概述-2","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":11.57,"words":3470},"filePathRelative":"code/java/database/redis/redis-highAvailability.md","localizedDate":"2022年3月27日","excerpt":"<h1> Redis高可用</h1>\\n<h1> 前言</h1>\\n<p>Redis 作为一种高性能的内存数据库，普遍用于目前主流的分布式架构系统中。为了提高系统的容错率，使用多实例的 Redis 也是必不可免的，当然，随之而来的就是高可用问题，市面上也出现了一些高可用方案。今天，咖飞就带大家来学习下常见的几种方案是如何来保证高可用的。</p>\\n<h1> 高可用机制</h1>\\n<p>Redis 的高可用从总体上来讲是通过 <strong>冗余 + 故障转移</strong> 来实现的，而对于冗余和故障转移又可以细化为：全部冗余或部分冗余；手动转移或自动转移。</p>\\n<p>全部冗余+手动转移的方案就是我们最熟悉的<strong>主从模式</strong>了；当手动转移变为自动转移时即<strong>哨兵模式</strong>。最后部分冗余 + 自动转移则是<strong>集群模式</strong>。</p>","autoDesc":true}');export{e as data};