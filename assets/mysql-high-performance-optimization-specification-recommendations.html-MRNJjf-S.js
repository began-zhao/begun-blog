const e=JSON.parse('{"key":"v-47dbb7e9","path":"/code/java/database/mysql/mysql-high-performance-optimization-specification-recommendations.html","title":"MySQL高性能优化规范建议","lang":"zh-CN","frontmatter":{"title":"MySQL高性能优化规范建议","date":"2020-12-21T00:00:00.000Z","category":"数据库","tag":["MySQL"],"description":"作者: 听风，原文地址: https://www.cnblogs.com/huchong/p/10219318.html。JavaGuide 已获得作者授权。 数据库命令规范 所有数据库对象名称必须使用小写字母并用下划线分割 所有数据库对象名称禁止使用 MySQL 保留关键字（如果表名中包含关键字查询时，需要将其用单引号括起来） 数据库对象的命名要能做到见名识意，并且最后不要超过 32 个字符 临时库表必须以 tmp_为前缀并以日期为后缀，备份表必须以 bak_为前缀并以日期 (时间戳) 为后缀 所有存储相同数据的列名和列类型必须一致（一般作为关联列，如果查询时关联列类型不一致会自动进行数据类型隐式转换，会造成列上的索引失效，导致查询效率降低）","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/database/mysql/mysql-high-performance-optimization-specification-recommendations.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"MySQL高性能优化规范建议"}],["meta",{"property":"og:description","content":"作者: 听风，原文地址: https://www.cnblogs.com/huchong/p/10219318.html。JavaGuide 已获得作者授权。 数据库命令规范 所有数据库对象名称必须使用小写字母并用下划线分割 所有数据库对象名称禁止使用 MySQL 保留关键字（如果表名中包含关键字查询时，需要将其用单引号括起来） 数据库对象的命名要能做到见名识意，并且最后不要超过 32 个字符 临时库表必须以 tmp_为前缀并以日期为后缀，备份表必须以 bak_为前缀并以日期 (时间戳) 为后缀 所有存储相同数据的列名和列类型必须一致（一般作为关联列，如果查询时关联列类型不一致会自动进行数据类型隐式转换，会造成列上的索引失效，导致查询效率降低）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2020-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL高性能优化规范建议\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"数据库命令规范","slug":"数据库命令规范","link":"#数据库命令规范","children":[]},{"level":2,"title":"数据库基本设计规范","slug":"数据库基本设计规范","link":"#数据库基本设计规范","children":[{"level":3,"title":"1. 所有表必须使用 Innodb 存储引擎","slug":"_1-所有表必须使用-innodb-存储引擎","link":"#_1-所有表必须使用-innodb-存储引擎","children":[]},{"level":3,"title":"2. 数据库和表的字符集统一使用 UTF8","slug":"_2-数据库和表的字符集统一使用-utf8","link":"#_2-数据库和表的字符集统一使用-utf8","children":[]},{"level":3,"title":"3. 所有表和字段都需要添加注释","slug":"_3-所有表和字段都需要添加注释","link":"#_3-所有表和字段都需要添加注释","children":[]},{"level":3,"title":"4. 尽量控制单表数据量的大小,建议控制在 500 万以内。","slug":"_4-尽量控制单表数据量的大小-建议控制在-500-万以内。","link":"#_4-尽量控制单表数据量的大小-建议控制在-500-万以内。","children":[]},{"level":3,"title":"5. 谨慎使用 MySQL 分区表","slug":"_5-谨慎使用-mysql-分区表","link":"#_5-谨慎使用-mysql-分区表","children":[]},{"level":3,"title":"6.尽量做到冷热数据分离,减小表的宽度","slug":"_6-尽量做到冷热数据分离-减小表的宽度","link":"#_6-尽量做到冷热数据分离-减小表的宽度","children":[]},{"level":3,"title":"7. 禁止在表中建立预留字段","slug":"_7-禁止在表中建立预留字段","link":"#_7-禁止在表中建立预留字段","children":[]},{"level":3,"title":"8. 禁止在数据库中存储图片,文件等大的二进制数据","slug":"_8-禁止在数据库中存储图片-文件等大的二进制数据","link":"#_8-禁止在数据库中存储图片-文件等大的二进制数据","children":[]},{"level":3,"title":"9. 禁止在线上做数据库压力测试","slug":"_9-禁止在线上做数据库压力测试","link":"#_9-禁止在线上做数据库压力测试","children":[]},{"level":3,"title":"10. 禁止从开发环境,测试环境直接连接生产环境数据库","slug":"_10-禁止从开发环境-测试环境直接连接生产环境数据库","link":"#_10-禁止从开发环境-测试环境直接连接生产环境数据库","children":[]}]},{"level":2,"title":"数据库字段设计规范","slug":"数据库字段设计规范","link":"#数据库字段设计规范","children":[{"level":3,"title":"1. 优先选择符合存储需要的最小的数据类型","slug":"_1-优先选择符合存储需要的最小的数据类型","link":"#_1-优先选择符合存储需要的最小的数据类型","children":[]},{"level":3,"title":"2. 避免使用 TEXT,BLOB 数据类型，最常见的 TEXT 类型可以存储 64k 的数据","slug":"_2-避免使用-text-blob-数据类型-最常见的-text-类型可以存储-64k-的数据","link":"#_2-避免使用-text-blob-数据类型-最常见的-text-类型可以存储-64k-的数据","children":[]},{"level":3,"title":"3. 避免使用 ENUM 类型","slug":"_3-避免使用-enum-类型","link":"#_3-避免使用-enum-类型","children":[]},{"level":3,"title":"4. 尽可能把所有列定义为 NOT NULL","slug":"_4-尽可能把所有列定义为-not-null","link":"#_4-尽可能把所有列定义为-not-null","children":[]},{"level":3,"title":"5. 使用 TIMESTAMP(4 个字节) 或 DATETIME 类型 (8 个字节) 存储时间","slug":"_5-使用-timestamp-4-个字节-或-datetime-类型-8-个字节-存储时间","link":"#_5-使用-timestamp-4-个字节-或-datetime-类型-8-个字节-存储时间","children":[]},{"level":3,"title":"6. 同财务相关的金额类数据必须使用 decimal 类型","slug":"_6-同财务相关的金额类数据必须使用-decimal-类型","link":"#_6-同财务相关的金额类数据必须使用-decimal-类型","children":[]}]},{"level":2,"title":"索引设计规范","slug":"索引设计规范","link":"#索引设计规范","children":[{"level":3,"title":"1. 限制每张表上的索引数量,建议单张表索引不超过 5 个","slug":"_1-限制每张表上的索引数量-建议单张表索引不超过-5-个","link":"#_1-限制每张表上的索引数量-建议单张表索引不超过-5-个","children":[]},{"level":3,"title":"2. 禁止给表中的每一列都建立单独的索引","slug":"_2-禁止给表中的每一列都建立单独的索引","link":"#_2-禁止给表中的每一列都建立单独的索引","children":[]},{"level":3,"title":"3. 每个 Innodb 表必须有个主键","slug":"_3-每个-innodb-表必须有个主键","link":"#_3-每个-innodb-表必须有个主键","children":[]},{"level":3,"title":"4. 常见索引列建议","slug":"_4-常见索引列建议","link":"#_4-常见索引列建议","children":[]},{"level":3,"title":"5.如何选择索引列的顺序","slug":"_5-如何选择索引列的顺序","link":"#_5-如何选择索引列的顺序","children":[]},{"level":3,"title":"6. 避免建立冗余索引和重复索引（增加了查询优化器生成执行计划的时间）","slug":"_6-避免建立冗余索引和重复索引-增加了查询优化器生成执行计划的时间","link":"#_6-避免建立冗余索引和重复索引-增加了查询优化器生成执行计划的时间","children":[]},{"level":3,"title":"7. 对于频繁的查询优先考虑使用覆盖索引","slug":"_7-对于频繁的查询优先考虑使用覆盖索引","link":"#_7-对于频繁的查询优先考虑使用覆盖索引","children":[]},{"level":3,"title":"8.索引 SET 规范","slug":"_8-索引-set-规范","link":"#_8-索引-set-规范","children":[]}]},{"level":2,"title":"数据库 SQL 开发规范","slug":"数据库-sql-开发规范","link":"#数据库-sql-开发规范","children":[{"level":3,"title":"1. 建议使用预编译语句进行数据库操作","slug":"_1-建议使用预编译语句进行数据库操作","link":"#_1-建议使用预编译语句进行数据库操作","children":[]},{"level":3,"title":"2. 避免数据类型的隐式转换","slug":"_2-避免数据类型的隐式转换","link":"#_2-避免数据类型的隐式转换","children":[]},{"level":3,"title":"3. 充分利用表上已经存在的索引","slug":"_3-充分利用表上已经存在的索引","link":"#_3-充分利用表上已经存在的索引","children":[]},{"level":3,"title":"4. 数据库设计时，应该要对以后扩展进行考虑","slug":"_4-数据库设计时-应该要对以后扩展进行考虑","link":"#_4-数据库设计时-应该要对以后扩展进行考虑","children":[]},{"level":3,"title":"5. 程序连接不同的数据库使用不同的账号，禁止跨库查询","slug":"_5-程序连接不同的数据库使用不同的账号-禁止跨库查询","link":"#_5-程序连接不同的数据库使用不同的账号-禁止跨库查询","children":[]},{"level":3,"title":"6. 禁止使用 SELECT * 必须使用 SELECT <字段列表> 查询","slug":"_6-禁止使用-select-必须使用-select-字段列表-查询","link":"#_6-禁止使用-select-必须使用-select-字段列表-查询","children":[]},{"level":3,"title":"7. 禁止使用不含字段列表的 INSERT 语句","slug":"_7-禁止使用不含字段列表的-insert-语句","link":"#_7-禁止使用不含字段列表的-insert-语句","children":[]},{"level":3,"title":"8. 避免使用子查询，可以把子查询优化为 join 操作","slug":"_8-避免使用子查询-可以把子查询优化为-join-操作","link":"#_8-避免使用子查询-可以把子查询优化为-join-操作","children":[]},{"level":3,"title":"9. 避免使用 JOIN 关联太多的表","slug":"_9-避免使用-join-关联太多的表","link":"#_9-避免使用-join-关联太多的表","children":[]},{"level":3,"title":"10. 减少同数据库的交互次数","slug":"_10-减少同数据库的交互次数","link":"#_10-减少同数据库的交互次数","children":[]},{"level":3,"title":"11. 对应同一列进行 or 判断时，使用 in 代替 or","slug":"_11-对应同一列进行-or-判断时-使用-in-代替-or","link":"#_11-对应同一列进行-or-判断时-使用-in-代替-or","children":[]},{"level":3,"title":"12. 禁止使用 order by rand() 进行随机排序","slug":"_12-禁止使用-order-by-rand-进行随机排序","link":"#_12-禁止使用-order-by-rand-进行随机排序","children":[]},{"level":3,"title":"13. WHERE 从句中禁止对列进行函数转换和计算","slug":"_13-where-从句中禁止对列进行函数转换和计算","link":"#_13-where-从句中禁止对列进行函数转换和计算","children":[]},{"level":3,"title":"14. 在明显不会有重复值时使用 UNION ALL 而不是 UNION","slug":"_14-在明显不会有重复值时使用-union-all-而不是-union","link":"#_14-在明显不会有重复值时使用-union-all-而不是-union","children":[]},{"level":3,"title":"15. 拆分复杂的大 SQL 为多个小 SQL","slug":"_15-拆分复杂的大-sql-为多个小-sql","link":"#_15-拆分复杂的大-sql-为多个小-sql","children":[]}]},{"level":2,"title":"数据库操作行为规范","slug":"数据库操作行为规范","link":"#数据库操作行为规范","children":[{"level":3,"title":"1. 超 100 万行的批量写 (UPDATE,DELETE,INSERT) 操作,要分批多次进行操作","slug":"_1-超-100-万行的批量写-update-delete-insert-操作-要分批多次进行操作","link":"#_1-超-100-万行的批量写-update-delete-insert-操作-要分批多次进行操作","children":[]},{"level":3,"title":"2. 对于大表使用 pt-online-schema-change 修改表结构","slug":"_2-对于大表使用-pt-online-schema-change-修改表结构","link":"#_2-对于大表使用-pt-online-schema-change-修改表结构","children":[]},{"level":3,"title":"3. 禁止为程序使用的账号赋予 super 权限","slug":"_3-禁止为程序使用的账号赋予-super-权限","link":"#_3-禁止为程序使用的账号赋予-super-权限","children":[]},{"level":3,"title":"4. 对于程序连接数据库账号,遵循权限最小原则","slug":"_4-对于程序连接数据库账号-遵循权限最小原则","link":"#_4-对于程序连接数据库账号-遵循权限最小原则","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":17.06,"words":5117},"filePathRelative":"code/java/database/mysql/mysql-high-performance-optimization-specification-recommendations.md","localizedDate":"2020年12月21日","excerpt":"<blockquote>\\n<p>作者: 听风，原文地址: <a href=\\"https://www.cnblogs.com/huchong/p/10219318.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.cnblogs.com/huchong/p/10219318.html</a>。JavaGuide 已获得作者授权。</p>\\n</blockquote>\\n<h2> 数据库命令规范</h2>\\n<ul>\\n<li>所有数据库对象名称必须使用小写字母并用下划线分割</li>\\n<li>所有数据库对象名称禁止使用 MySQL 保留关键字（如果表名中包含关键字查询时，需要将其用单引号括起来）</li>\\n<li>数据库对象的命名要能做到见名识意，并且最后不要超过 32 个字符</li>\\n<li>临时库表必须以 tmp_为前缀并以日期为后缀，备份表必须以 bak_为前缀并以日期 (时间戳) 为后缀</li>\\n<li>所有存储相同数据的列名和列类型必须一致（一般作为关联列，如果查询时关联列类型不一致会自动进行数据类型隐式转换，会造成列上的索引失效，导致查询效率降低）</li>\\n</ul>","autoDesc":true}');export{e as data};
