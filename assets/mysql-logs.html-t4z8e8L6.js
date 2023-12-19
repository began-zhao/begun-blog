const e=JSON.parse('{"key":"v-406b1082","path":"/code/java/database/mysql/mysql-logs.html","title":"MySQL三大日志(binlog、redo log和undo log)详解","lang":"zh-CN","frontmatter":{"title":"MySQL三大日志(binlog、redo log和undo log)详解","date":"2020-12-21T00:00:00.000Z","category":"数据库","tag":["MySQL"],"description":"前言 MySQL 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 binlog（归档日志）和事务日志 redo log（重做日志）和 undo log（回滚日志）。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/database/mysql/mysql-logs.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"MySQL三大日志(binlog、redo log和undo log)详解"}],["meta",{"property":"og:description","content":"前言 MySQL 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 binlog（归档日志）和事务日志 redo log（重做日志）和 undo log（回滚日志）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2020-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL三大日志(binlog、redo log和undo log)详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"redo log","slug":"redo-log","link":"#redo-log","children":[{"level":3,"title":"刷盘时机","slug":"刷盘时机","link":"#刷盘时机","children":[]},{"level":3,"title":"日志文件组","slug":"日志文件组","link":"#日志文件组","children":[]},{"level":3,"title":"redo log 小结","slug":"redo-log-小结","link":"#redo-log-小结","children":[]}]},{"level":2,"title":"binlog","slug":"binlog","link":"#binlog","children":[{"level":3,"title":"记录格式","slug":"记录格式","link":"#记录格式","children":[]},{"level":3,"title":"写入机制","slug":"写入机制","link":"#写入机制","children":[]}]},{"level":2,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]},{"level":2,"title":"undo log","slug":"undo-log","link":"#undo-log","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"站在巨人的肩膀上","slug":"站在巨人的肩膀上","link":"#站在巨人的肩膀上","children":[]},{"level":2,"title":"MySQL 好文推荐","slug":"mysql-好文推荐","link":"#mysql-好文推荐","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":12.31,"words":3692},"filePathRelative":"code/java/database/mysql/mysql-logs.md","localizedDate":"2020年12月21日","excerpt":"<h2> 前言</h2>\\n<p><code>MySQL</code> 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 <code>binlog</code>（归档日志）和事务日志 <code>redo log</code>（重做日志）和 <code>undo log</code>（回滚日志）。</p>\\n<figure><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};
