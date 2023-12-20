const l=JSON.parse('{"key":"v-7e716216","path":"/interview/MySQL-FAQ.html","title":"MYSQL 部分","lang":"zh-CN","frontmatter":{"title":"MYSQL 部分","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"MySQL 三万字精华总结 + 面试100 问，和面试官扯皮绰绰有余 写在之前：不建议那种上来就是各种面试题罗列，然后背书式的去记忆，对技术的提升帮助很小，对正经面试也没什么帮助，有点东西的面试官深挖下就懵逼了。 个人建议把面试题看作是费曼学习法中的回顾、简化的环节，准备面试的时候，跟着题目先自己讲给自己听，看看自己会满意吗，不满意就继续学习这个点，如此反复，好的offer离你不远的，奥利给 一、MySQL架构 和其它数据库相比，MySQL 有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，插件式的存储引擎架构将查询处理和其它的系统任务以及数据的存储提取相分离。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/interview/MySQL-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"MYSQL 部分"}],["meta",{"property":"og:description","content":"MySQL 三万字精华总结 + 面试100 问，和面试官扯皮绰绰有余 写在之前：不建议那种上来就是各种面试题罗列，然后背书式的去记忆，对技术的提升帮助很小，对正经面试也没什么帮助，有点东西的面试官深挖下就懵逼了。 个人建议把面试题看作是费曼学习法中的回顾、简化的环节，准备面试的时候，跟着题目先自己讲给自己听，看看自己会满意吗，不满意就继续学习这个点，如此反复，好的offer离你不远的，奥利给 一、MySQL架构 和其它数据库相比，MySQL 有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，插件式的存储引擎架构将查询处理和其它的系统任务以及数据的存储提取相分离。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MYSQL 部分\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"一、MySQL架构","slug":"一、mysql架构","link":"#一、mysql架构","children":[]},{"level":2,"title":"二、存储引擎","slug":"二、存储引擎","link":"#二、存储引擎","children":[{"level":3,"title":"查看存储引擎","slug":"查看存储引擎","link":"#查看存储引擎","children":[]},{"level":3,"title":"设置存储引擎","slug":"设置存储引擎","link":"#设置存储引擎","children":[]},{"level":3,"title":"存储引擎对比","slug":"存储引擎对比","link":"#存储引擎对比","children":[]}]},{"level":2,"title":"三、数据类型","slug":"三、数据类型","link":"#三、数据类型","children":[{"level":3,"title":"CHAR 和 VARCHAR 的区别？","slug":"char-和-varchar-的区别","link":"#char-和-varchar-的区别","children":[]},{"level":3,"title":"列的字符串类型可以是什么？","slug":"列的字符串类型可以是什么","link":"#列的字符串类型可以是什么","children":[]},{"level":3,"title":"BLOB和TEXT有什么区别？","slug":"blob和text有什么区别","link":"#blob和text有什么区别","children":[]}]},{"level":2,"title":"四、索引","slug":"四、索引","link":"#四、索引","children":[{"level":3,"title":"基本语法：","slug":"基本语法","link":"#基本语法","children":[]},{"level":3,"title":"优势","slug":"优势","link":"#优势","children":[]},{"level":3,"title":"劣势","slug":"劣势","link":"#劣势","children":[]},{"level":3,"title":"MySQL索引分类","slug":"mysql索引分类","link":"#mysql索引分类","children":[]},{"level":3,"title":"MySQL索引结构","slug":"mysql索引结构","link":"#mysql索引结构","children":[]},{"level":3,"title":"为什么 MySQL 会选择 B+Tree 当索引数据结构","slug":"为什么-mysql-会选择-b-tree-当索引数据结构","link":"#为什么-mysql-会选择-b-tree-当索引数据结构","children":[]},{"level":3,"title":"哪些情况需要创建索引","slug":"哪些情况需要创建索引","link":"#哪些情况需要创建索引","children":[]},{"level":3,"title":"哪些情况不要创建索引","slug":"哪些情况不要创建索引","link":"#哪些情况不要创建索引","children":[]},{"level":3,"title":"MySQL高效索引","slug":"mysql高效索引","link":"#mysql高效索引","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}]},{"level":2,"title":"五、MySQL查询","slug":"五、mysql查询","link":"#五、mysql查询","children":[{"level":3,"title":"MySQL中 in和 exists 的区别？","slug":"mysql中-in和-exists-的区别","link":"#mysql中-in和-exists-的区别","children":[]},{"level":3,"title":"SQL执行顺序","slug":"sql执行顺序","link":"#sql执行顺序","children":[]},{"level":3,"title":"Join图","slug":"join图","link":"#join图","children":[]}]},{"level":2,"title":"六、MySQL 事务","slug":"六、mysql-事务","link":"#六、mysql-事务","children":[{"level":3,"title":"ACID — 事务基本要素","slug":"acid-—-事务基本要素","link":"#acid-—-事务基本要素","children":[]},{"level":3,"title":"事务隔离级别","slug":"事务隔离级别","link":"#事务隔离级别","children":[]},{"level":3,"title":"什么是幻读？如何解决的","slug":"什么是幻读-如何解决的","link":"#什么是幻读-如何解决的","children":[]},{"level":3,"title":"MVCC 多版本并发控制","slug":"mvcc-多版本并发控制","link":"#mvcc-多版本并发控制","children":[]},{"level":3,"title":"事务日志","slug":"事务日志","link":"#事务日志","children":[]},{"level":3,"title":"事务的实现","slug":"事务的实现","link":"#事务的实现","children":[]},{"level":3,"title":"MySQL对分布式事务的支持","slug":"mysql对分布式事务的支持","link":"#mysql对分布式事务的支持","children":[]},{"level":3,"title":"事务的 ACID 分别是如何实现的","slug":"事务的-acid-分别是如何实现的","link":"#事务的-acid-分别是如何实现的","children":[]}]},{"level":2,"title":"七、MySQL 锁机制","slug":"七、mysql-锁机制","link":"#七、mysql-锁机制","children":[{"level":3,"title":"锁的分类","slug":"锁的分类","link":"#锁的分类","children":[]},{"level":3,"title":"MyISAM 表锁","slug":"myisam-表锁","link":"#myisam-表锁","children":[]},{"level":3,"title":"InnoDB 行锁","slug":"innodb-行锁","link":"#innodb-行锁","children":[]},{"level":3,"title":"死锁","slug":"死锁","link":"#死锁","children":[]},{"level":3,"title":"如何尽可能避免死锁","slug":"如何尽可能避免死锁","link":"#如何尽可能避免死锁","children":[]},{"level":3,"title":"InnoDB 如何手动锁表","slug":"innodb-如何手动锁表","link":"#innodb-如何手动锁表","children":[]},{"level":3,"title":"InnoDB 引擎的行锁是通过加在什么上完成(或称实现) 的?","slug":"innodb-引擎的行锁是通过加在什么上完成-或称实现-的","link":"#innodb-引擎的行锁是通过加在什么上完成-或称实现-的","children":[]}]},{"level":2,"title":"八、MySQL 调优","slug":"八、mysql-调优","link":"#八、mysql-调优","children":[{"level":3,"title":"影响  mysql 的性能因素","slug":"影响-mysql-的性能因素","link":"#影响-mysql-的性能因素","children":[]},{"level":3,"title":"性能分析","slug":"性能分析","link":"#性能分析","children":[]},{"level":3,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]},{"level":3,"title":"说一下大表的优化方案","slug":"说一下大表的优化方案","link":"#说一下大表的优化方案","children":[]}]},{"level":2,"title":"九、分区、分表、分库","slug":"九、分区、分表、分库","link":"#九、分区、分表、分库","children":[{"level":3,"title":"MySQL分区","slug":"mysql分区","link":"#mysql分区","children":[]},{"level":3,"title":"如何确定分库还是分表？","slug":"如何确定分库还是分表","link":"#如何确定分库还是分表","children":[]},{"level":3,"title":"MySQL分库","slug":"mysql分库","link":"#mysql分库","children":[]},{"level":3,"title":"MySQL分表","slug":"mysql分表","link":"#mysql分表","children":[]},{"level":3,"title":"分布式ID生成方案","slug":"分布式id生成方案","link":"#分布式id生成方案","children":[]}]},{"level":2,"title":"十、主从复制","slug":"十、主从复制","link":"#十、主从复制","children":[{"level":3,"title":"复制的基本原理","slug":"复制的基本原理","link":"#复制的基本原理","children":[]},{"level":3,"title":"MySQL 一主多从","slug":"mysql-一主多从","link":"#mysql-一主多从","children":[]},{"level":3,"title":"复制的基本原则","slug":"复制的基本原则","link":"#复制的基本原则","children":[]},{"level":3,"title":"复制的最大问题","slug":"复制的最大问题","link":"#复制的最大问题","children":[]},{"level":3,"title":"从架构上解决主从复制延迟","slug":"从架构上解决主从复制延迟","link":"#从架构上解决主从复制延迟","children":[]}]},{"level":2,"title":"十一、其他问题","slug":"十一、其他问题","link":"#十一、其他问题","children":[{"level":3,"title":"说一说三个范式","slug":"说一说三个范式","link":"#说一说三个范式","children":[]},{"level":3,"title":"百万级别或以上的数据如何删除","slug":"百万级别或以上的数据如何删除","link":"#百万级别或以上的数据如何删除","children":[]},{"level":3,"title":"limit 100000 加载很慢的话，你是怎么解决的呢？","slug":"limit-100000-加载很慢的话-你是怎么解决的呢","link":"#limit-100000-加载很慢的话-你是怎么解决的呢","children":[]},{"level":3,"title":"在高并发情况下，如何做到安全的修改同一行数据？","slug":"在高并发情况下-如何做到安全的修改同一行数据","link":"#在高并发情况下-如何做到安全的修改同一行数据","children":[]},{"level":3,"title":"表中有大字段 X(例如:text 类型)，且字段 X 不会经常更新，以读为 为主，将该字段拆成子表好处是什么?","slug":"表中有大字段-x-例如-text-类型-且字段-x-不会经常更新-以读为-为主-将该字段拆成子表好处是什么","link":"#表中有大字段-x-例如-text-类型-且字段-x-不会经常更新-以读为-为主-将该字段拆成子表好处是什么","children":[]}]},{"level":2,"title":"参考与感谢：","slug":"参考与感谢","link":"#参考与感谢","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":115.46,"words":34637},"filePathRelative":"interview/MySQL-FAQ.md","localizedDate":"2020年11月23日","excerpt":"<h1> MySQL 三万字精华总结 + 面试100 问，和面试官扯皮绰绰有余</h1>\\n<blockquote>\\n<p>写在之前：不建议那种上来就是各种面试题罗列，然后背书式的去记忆，对技术的提升帮助很小，对正经面试也没什么帮助，有点东西的面试官深挖下就懵逼了。</p>\\n<p>个人建议把面试题看作是费曼学习法中的回顾、简化的环节，准备面试的时候，跟着题目先自己讲给自己听，看看自己会满意吗，不满意就继续学习这个点，如此反复，好的offer离你不远的，奥利给</p>\\n</blockquote>\\n<h2> 一、MySQL架构</h2>\\n<p>和其它数据库相比，MySQL 有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，<strong>插件式的存储引擎架构将查询处理和其它的系统任务以及数据的存储提取相分离</strong>。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。</p>","autoDesc":true}');export{l as data};