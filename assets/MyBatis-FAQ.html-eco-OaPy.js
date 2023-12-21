const t=JSON.parse('{"key":"v-54ded724","path":"/interview/MyBatis-FAQ.html","title":"Mybatis 部分","lang":"zh-CN","frontmatter":{"title":"Mybatis 部分","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"MyBatis是一个支持普通SQL查询，存储过程和高级映射的优秀持久层框架。MyBatis消除了几乎所有的JDBC代码和参数的手工设置以及对结果集的检索封装。MyBatis可以使用简单的XML或注解用于配置和原始映射，将接口和Java的POJO（Plain Old Java Objects，普通的Java对象）映射成数据库中的记录。 JDBC 有几个步...","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/interview/MyBatis-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞"}],["meta",{"property":"og:title","content":"Mybatis 部分"}],["meta",{"property":"og:description","content":"MyBatis是一个支持普通SQL查询，存储过程和高级映射的优秀持久层框架。MyBatis消除了几乎所有的JDBC代码和参数的手工设置以及对结果集的检索封装。MyBatis可以使用简单的XML或注解用于配置和原始映射，将接口和Java的POJO（Plain Old Java Objects，普通的Java对象）映射成数据库中的记录。 JDBC 有几个步..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis 部分\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":3,"title":"JDBC 有几个步骤？","slug":"jdbc-有几个步骤","link":"#jdbc-有几个步骤","children":[]},{"level":3,"title":"什么是 Mybatis？","slug":"什么是-mybatis","link":"#什么是-mybatis","children":[]},{"level":3,"title":"什么是 ORM?","slug":"什么是-orm","link":"#什么是-orm","children":[]},{"level":3,"title":"为什么说Mybatis是半自动ORM映射工具？它与全自动的区别在哪里？","slug":"为什么说mybatis是半自动orm映射工具-它与全自动的区别在哪里","link":"#为什么说mybatis是半自动orm映射工具-它与全自动的区别在哪里","children":[]},{"level":3,"title":"Mybatis优缺点","slug":"mybatis优缺点","link":"#mybatis优缺点","children":[]},{"level":3,"title":"Hibernate 和 MyBatis 的区别","slug":"hibernate-和-mybatis-的区别","link":"#hibernate-和-mybatis-的区别","children":[]},{"level":3,"title":"MyBatis的工作原理","slug":"mybatis的工作原理","link":"#mybatis的工作原理","children":[]},{"level":3,"title":"MyBatis的架构设计是怎样的","slug":"mybatis的架构设计是怎样的","link":"#mybatis的架构设计是怎样的","children":[]},{"level":3,"title":"#{}和${}的区别","slug":"和-的区别","link":"#和-的区别","children":[]},{"level":3,"title":"模糊查询like语句该怎么写","slug":"模糊查询like语句该怎么写","link":"#模糊查询like语句该怎么写","children":[]},{"level":3,"title":"当实体类中的属性名和表中的字段名不一样 ，怎么办","slug":"当实体类中的属性名和表中的字段名不一样-怎么办","link":"#当实体类中的属性名和表中的字段名不一样-怎么办","children":[]},{"level":3,"title":"什么是MyBatis的接口绑定？有哪些实现方式？","slug":"什么是mybatis的接口绑定-有哪些实现方式","link":"#什么是mybatis的接口绑定-有哪些实现方式","children":[]},{"level":3,"title":"使用MyBatis的mapper接口调用时有哪些要求？","slug":"使用mybatis的mapper接口调用时有哪些要求","link":"#使用mybatis的mapper接口调用时有哪些要求","children":[]},{"level":3,"title":"MyBatis动态sql是做什么的？都有哪些动态sql？能简述一下动态sql的执行原理不？","slug":"mybatis动态sql是做什么的-都有哪些动态sql-能简述一下动态sql的执行原理不","link":"#mybatis动态sql是做什么的-都有哪些动态sql-能简述一下动态sql的执行原理不","children":[]},{"level":3,"title":"MyBatis是如何进行分页的？分页插件的原理是什么？","slug":"mybatis是如何进行分页的-分页插件的原理是什么","link":"#mybatis是如何进行分页的-分页插件的原理是什么","children":[]},{"level":3,"title":"MyBatis的一级、二级缓存","slug":"mybatis的一级、二级缓存","link":"#mybatis的一级、二级缓存","children":[]},{"level":3,"title":"通常一个 Xml 映射文件，都会写一个 Dao 接口与之对应, Dao 的工作原理，是否可以重 载?","slug":"通常一个-xml-映射文件-都会写一个-dao-接口与之对应-dao-的工作原理-是否可以重-载","link":"#通常一个-xml-映射文件-都会写一个-dao-接口与之对应-dao-的工作原理-是否可以重-载","children":[]},{"level":3,"title":"Mybatis 中如何执行批处理?","slug":"mybatis-中如何执行批处理","link":"#mybatis-中如何执行批处理","children":[]},{"level":3,"title":"Mybatis 都有哪些 Executor 执行器?它们之间的区别是什么?","slug":"mybatis-都有哪些-executor-执行器-它们之间的区别是什么","link":"#mybatis-都有哪些-executor-执行器-它们之间的区别是什么","children":[]},{"level":3,"title":"resultType resultMap 的区别?","slug":"resulttype-resultmap-的区别","link":"#resulttype-resultmap-的区别","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":16.52,"words":4955},"filePathRelative":"interview/MyBatis-FAQ.md","localizedDate":"2020年11月23日","excerpt":"","autoDesc":true}');export{t as data};
