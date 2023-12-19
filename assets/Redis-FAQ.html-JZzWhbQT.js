const e=JSON.parse('{"key":"v-374cb61c","path":"/interview/Redis-FAQ.html","title":"Redis 部分","lang":"zh-CN","frontmatter":{"title":"Redis 部分","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"一、Redis 基础问题 Redis是什么 Redis：REmote DIctionary Server(远程字典服务器)。 Redis 是一个全开源免费（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件， 和 Memcached 类似，它支持存储的 value 类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）、bitmap、hyperloglog、GeoHash、streams。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/interview/Redis-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Redis 部分"}],["meta",{"property":"og:description","content":"一、Redis 基础问题 Redis是什么 Redis：REmote DIctionary Server(远程字典服务器)。 Redis 是一个全开源免费（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件， 和 Memcached 类似，它支持存储的 value 类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）、bitmap、hyperloglog、GeoHash、streams。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 部分\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"一、Redis 基础问题","slug":"一、redis-基础问题","link":"#一、redis-基础问题","children":[{"level":3,"title":"Redis是什么","slug":"redis是什么","link":"#redis是什么","children":[]},{"level":3,"title":"为什么要用缓存？为什么使用 Redis？","slug":"为什么要用缓存-为什么使用-redis","link":"#为什么要用缓存-为什么使用-redis","children":[]},{"level":3,"title":"用缓存，肯定是因为他快，那 Redis 为什么这么快","slug":"用缓存-肯定是因为他快-那-redis-为什么这么快","link":"#用缓存-肯定是因为他快-那-redis-为什么这么快","children":[]},{"level":3,"title":"Redis 属于单线程还是多线程？","slug":"redis-属于单线程还是多线程","link":"#redis-属于单线程还是多线程","children":[]},{"level":3,"title":"为什么早期版本的 Redis 选择单线程？","slug":"为什么早期版本的-redis-选择单线程","link":"#为什么早期版本的-redis-选择单线程","children":[]},{"level":3,"title":"Redis 和 Memcached 的区别","slug":"redis-和-memcached-的区别","link":"#redis-和-memcached-的区别","children":[]},{"level":3,"title":"最后总结下 Redis 优缺点","slug":"最后总结下-redis-优缺点","link":"#最后总结下-redis-优缺点","children":[]},{"level":3,"title":"key 最大是多少 ，单个实例最多支持多少个key","slug":"key-最大是多少-单个实例最多支持多少个key","link":"#key-最大是多少-单个实例最多支持多少个key","children":[]}]},{"level":2,"title":"二、Redis 数据结构问题","slug":"二、redis-数据结构问题","link":"#二、redis-数据结构问题","children":[{"level":3,"title":"Redis 都支持哪些数据类型","slug":"redis-都支持哪些数据类型","link":"#redis-都支持哪些数据类型","children":[]},{"level":3,"title":"那你能说说这些数据类型的使用指令吗？","slug":"那你能说说这些数据类型的使用指令吗","link":"#那你能说说这些数据类型的使用指令吗","children":[]},{"level":3,"title":"String 是如何实现的","slug":"string-是如何实现的","link":"#string-是如何实现的","children":[]},{"level":3,"title":"Redis 的 SDS 和 C 中字符串相比有什么优势？","slug":"redis-的-sds-和-c-中字符串相比有什么优势","link":"#redis-的-sds-和-c-中字符串相比有什么优势","children":[]},{"level":3,"title":"Redis的字符串实现，如何保证二进制安全","slug":"redis的字符串实现-如何保证二进制安全","link":"#redis的字符串实现-如何保证二进制安全","children":[]},{"level":3,"title":"说说 List","slug":"说说-list","link":"#说说-list","children":[]},{"level":3,"title":"字典Hash是如何实现的？Rehash 了解吗？","slug":"字典hash是如何实现的-rehash-了解吗","link":"#字典hash是如何实现的-rehash-了解吗","children":[]},{"level":3,"title":"说说 Zset 吧","slug":"说说-zset-吧","link":"#说说-zset-吧","children":[]},{"level":3,"title":"跳跃表是如何实现的？原理？","slug":"跳跃表是如何实现的-原理","link":"#跳跃表是如何实现的-原理","children":[]},{"level":3,"title":"除了5种基本数据类型，还知道其他数据结构不","slug":"除了5种基本数据类型-还知道其他数据结构不","link":"#除了5种基本数据类型-还知道其他数据结构不","children":[]},{"level":3,"title":"这些都会，那你能说说 Redis 使用场景不，你们项目中是怎么用的","slug":"这些都会-那你能说说-redis-使用场景不-你们项目中是怎么用的","link":"#这些都会-那你能说说-redis-使用场景不-你们项目中是怎么用的","children":[]}]},{"level":2,"title":"三、Redis持久化问题","slug":"三、redis持久化问题","link":"#三、redis持久化问题","children":[{"level":3,"title":"你对 Redis 的持久化机制了解吗？能讲一下吗？","slug":"你对-redis-的持久化机制了解吗-能讲一下吗","link":"#你对-redis-的持久化机制了解吗-能讲一下吗","children":[]},{"level":3,"title":"解释一下持久化发生了什么","slug":"解释一下持久化发生了什么","link":"#解释一下持久化发生了什么","children":[]},{"level":3,"title":"Redis 持久化的方式有哪写","slug":"redis-持久化的方式有哪写","link":"#redis-持久化的方式有哪写","children":[]},{"level":3,"title":"RDB 做快照时会阻塞线程吗？","slug":"rdb-做快照时会阻塞线程吗","link":"#rdb-做快照时会阻塞线程吗","children":[]},{"level":3,"title":"RDB 做快照的时候数据能修改吗？","slug":"rdb-做快照的时候数据能修改吗","link":"#rdb-做快照的时候数据能修改吗","children":[]},{"level":3,"title":"AOF 日志是如何实现的？","slug":"aof-日志是如何实现的","link":"#aof-日志是如何实现的","children":[]},{"level":3,"title":"RDB 和 AOF 各自有什么优缺点？","slug":"rdb-和-aof-各自有什么优缺点","link":"#rdb-和-aof-各自有什么优缺点","children":[]},{"level":3,"title":"aof 如果文件越来愈大 怎么办？","slug":"aof-如果文件越来愈大-怎么办","link":"#aof-如果文件越来愈大-怎么办","children":[]},{"level":3,"title":"fork耗时问题定位","slug":"fork耗时问题定位","link":"#fork耗时问题定位","children":[]},{"level":3,"title":"两种持久化方式如何选择？","slug":"两种持久化方式如何选择","link":"#两种持久化方式如何选择","children":[]}]},{"level":2,"title":"四、Redis事务问题","slug":"四、redis事务问题","link":"#四、redis事务问题","children":[{"level":3,"title":"Redis事务的概念？","slug":"redis事务的概念","link":"#redis事务的概念","children":[]},{"level":3,"title":"Redis事务的三个阶段、三特性","slug":"redis事务的三个阶段、三特性","link":"#redis事务的三个阶段、三特性","children":[]},{"level":3,"title":"Redis事务支持隔离性吗？","slug":"redis事务支持隔离性吗","link":"#redis事务支持隔离性吗","children":[]},{"level":3,"title":"Redis事务保证原子性吗，支持回滚吗？","slug":"redis事务保证原子性吗-支持回滚吗","link":"#redis事务保证原子性吗-支持回滚吗","children":[]}]},{"level":2,"title":"五、Redis 集群问题","slug":"五、redis-集群问题","link":"#五、redis-集群问题","children":[{"level":3,"title":"主从同步了解吗？","slug":"主从同步了解吗","link":"#主从同步了解吗","children":[]},{"level":3,"title":"那主从复制会存在哪些问题呢？","slug":"那主从复制会存在哪些问题呢","link":"#那主从复制会存在哪些问题呢","children":[]},{"level":3,"title":"什么是哨兵","slug":"什么是哨兵","link":"#什么是哨兵","children":[]},{"level":3,"title":"那你能说下哨兵的工作原理吗？","slug":"那你能说下哨兵的工作原理吗","link":"#那你能说下哨兵的工作原理吗","children":[]},{"level":3,"title":"新的主服务器是怎样被挑选出来的？","slug":"新的主服务器是怎样被挑选出来的","link":"#新的主服务器是怎样被挑选出来的","children":[]},{"level":3,"title":"Redis 集群使用过吗？原理？","slug":"redis-集群使用过吗-原理","link":"#redis-集群使用过吗-原理","children":[]},{"level":3,"title":"集群中数据如何分区？","slug":"集群中数据如何分区","link":"#集群中数据如何分区","children":[]},{"level":3,"title":"节点之间的通信机制了解吗？","slug":"节点之间的通信机制了解吗","link":"#节点之间的通信机制了解吗","children":[]},{"level":3,"title":"集群数据如何存储的有了解吗？","slug":"集群数据如何存储的有了解吗","link":"#集群数据如何存储的有了解吗","children":[]},{"level":3,"title":"Redis集群最大节点个数是多少？","slug":"redis集群最大节点个数是多少","link":"#redis集群最大节点个数是多少","children":[]},{"level":3,"title":"Redis集群会有写操作丢失吗？为什么？","slug":"redis集群会有写操作丢失吗-为什么","link":"#redis集群会有写操作丢失吗-为什么","children":[]},{"level":3,"title":"Redis集群之间是如何复制的？","slug":"redis集群之间是如何复制的","link":"#redis集群之间是如何复制的","children":[]},{"level":3,"title":"Redis是单线程的，如何提高多核CPU的利用率？","slug":"redis是单线程的-如何提高多核cpu的利用率","link":"#redis是单线程的-如何提高多核cpu的利用率","children":[]},{"level":3,"title":"为什么要做Redis分区？","slug":"为什么要做redis分区","link":"#为什么要做redis分区","children":[]},{"level":3,"title":"有哪些Redis分区实现方案？","slug":"有哪些redis分区实现方案","link":"#有哪些redis分区实现方案","children":[]},{"level":3,"title":"Redis分区有什么缺点？","slug":"redis分区有什么缺点","link":"#redis分区有什么缺点","children":[]},{"level":3,"title":"Redis 的高可用","slug":"redis-的高可用","link":"#redis-的高可用","children":[]},{"level":3,"title":"Redis的扩展性","slug":"redis的扩展性","link":"#redis的扩展性","children":[]}]},{"level":2,"title":"六、Redis 内存相关问题","slug":"六、redis-内存相关问题","link":"#六、redis-内存相关问题","children":[{"level":3,"title":"Redis 过期键的删除策略？","slug":"redis-过期键的删除策略","link":"#redis-过期键的删除策略","children":[]},{"level":3,"title":"Redis 的淘汰策略有哪些？","slug":"redis-的淘汰策略有哪些","link":"#redis-的淘汰策略有哪些","children":[]},{"level":3,"title":"Redis 内存满了怎么办","slug":"redis-内存满了怎么办","link":"#redis-内存满了怎么办","children":[]},{"level":3,"title":"Redis 线程模型","slug":"redis-线程模型","link":"#redis-线程模型","children":[]},{"level":3,"title":"Redis 内存模型","slug":"redis-内存模型","link":"#redis-内存模型","children":[]}]},{"level":2,"title":"七、Redis 缓存异常问题","slug":"七、redis-缓存异常问题","link":"#七、redis-缓存异常问题","children":[{"level":3,"title":"Redis常见性能问题和解决方案？","slug":"redis常见性能问题和解决方案","link":"#redis常见性能问题和解决方案","children":[]},{"level":3,"title":"如何保证缓存与数据库双写时的数据一致性？","slug":"如何保证缓存与数据库双写时的数据一致性","link":"#如何保证缓存与数据库双写时的数据一致性","children":[]},{"level":3,"title":"使用缓存会出现什么问题？","slug":"使用缓存会出现什么问题","link":"#使用缓存会出现什么问题","children":[]},{"level":3,"title":"Redis 大 key 和 热 Key 问题","slug":"redis-大-key-和-热-key-问题","link":"#redis-大-key-和-热-key-问题","children":[]},{"level":3,"title":"找出大 Key 和 热 Key 并解决","slug":"找出大-key-和-热-key-并解决","link":"#找出大-key-和-热-key-并解决","children":[]},{"level":3,"title":"优化大 Key 和 热 Key","slug":"优化大-key-和-热-key","link":"#优化大-key-和-热-key","children":[]}]},{"level":2,"title":"八、分布式相关问题","slug":"八、分布式相关问题","link":"#八、分布式相关问题","children":[{"level":3,"title":"Redis实现分布式锁","slug":"redis实现分布式锁","link":"#redis实现分布式锁","children":[]},{"level":3,"title":"上述 Redis 分布式锁的缺点","slug":"上述-redis-分布式锁的缺点","link":"#上述-redis-分布式锁的缺点","children":[]},{"level":3,"title":"zk 实现分布式锁的思路","slug":"zk-实现分布式锁的思路","link":"#zk-实现分布式锁的思路","children":[]},{"level":3,"title":"如何解决 Redis 的并发竞争 Key 问题","slug":"如何解决-redis-的并发竞争-key-问题","link":"#如何解决-redis-的并发竞争-key-问题","children":[]},{"level":3,"title":"分布式Redis是前期做还是后期规模上来了再做好？为什么？","slug":"分布式redis是前期做还是后期规模上来了再做好-为什么","link":"#分布式redis是前期做还是后期规模上来了再做好-为什么","children":[]},{"level":3,"title":"什么是 RedLock","slug":"什么是-redlock","link":"#什么是-redlock","children":[]}]},{"level":2,"title":"十、其他问题","slug":"十、其他问题","link":"#十、其他问题","children":[{"level":3,"title":"使用Redis做过异步队列吗，是如何实现的","slug":"使用redis做过异步队列吗-是如何实现的","link":"#使用redis做过异步队列吗-是如何实现的","children":[]},{"level":3,"title":"Redis如何实现延时队列","slug":"redis如何实现延时队列","link":"#redis如何实现延时队列","children":[]},{"level":3,"title":"Redis如何做内存优化？","slug":"redis如何做内存优化","link":"#redis如何做内存优化","children":[]},{"level":3,"title":"Redis 使用误区","slug":"redis-使用误区","link":"#redis-使用误区","children":[]},{"level":3,"title":"Redis 中的管道有什么用?","slug":"redis-中的管道有什么用","link":"#redis-中的管道有什么用","children":[]},{"level":3,"title":"假如 Redis 里面有 1 亿个 key，其中有 10w 个 key 是以某个固定的已知的前缀开头的，如 果将它们全部找出来?","slug":"假如-redis-里面有-1-亿个-key-其中有-10w-个-key-是以某个固定的已知的前缀开头的-如-果将它们全部找出来","link":"#假如-redis-里面有-1-亿个-key-其中有-10w-个-key-是以某个固定的已知的前缀开头的-如-果将它们全部找出来","children":[]}]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":95.87,"words":28761},"filePathRelative":"interview/Redis-FAQ.md","localizedDate":"2020年11月23日","excerpt":"<h2> 一、Redis 基础问题</h2>\\n<h3> Redis是什么</h3>\\n<p>Redis：<strong>REmote DIctionary Server</strong>(远程字典服务器)。</p>\\n<p>Redis 是一个全开源免费（BSD许可）的，内存中的数据结构存储系统，它可以用作<strong>数据库、缓存和消息中间件</strong>，</p>\\n<p>和 Memcached 类似，它支持存储的 value 类型相对更多，包括<strong>string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）、bitmap、hyperloglog、GeoHash、streams</strong>。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。</p>","autoDesc":true}');export{e as data};
