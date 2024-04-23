import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,f as r}from"./app-ydtqKDtN.js";const c={},d=r(`<p>目前的 ES 有 4个 节点、14个索引、236个分片、文档数 12 亿</p><p>写可以达到 2 万</p><p>bulk 1000 左右</p><h3 id="_1、elasticsearch了解多少-说说你们公司es的集群架构-索引数据大小-分片有多少-以及一些调优手段-。" tabindex="-1"><a class="header-anchor" href="#_1、elasticsearch了解多少-说说你们公司es的集群架构-索引数据大小-分片有多少-以及一些调优手段-。" aria-hidden="true">#</a> 1、elasticsearch了解多少，说说你们公司es的集群架构，索引数据大小，分片有多少，以及一些调优手段 。</h3><p><code>面试官</code> ：想了解应聘者之前公司接触的ES使用场景、规模，有没有做过比较大规模的索引设计、规划、调优。<code>解答</code> ：如实结合自己的实践场景回答即可。比如：ES集群架构13个节点，索引根据通道不同共20+索引，根据日期，每日递增20+，索引：10分片，每日递增1亿+数据，每个通道每天索引大小控制：150GB之内。</p><p>仅索引层面调优手段：</p><h4 id="_1-1、设计阶段调优" tabindex="-1"><a class="header-anchor" href="#_1-1、设计阶段调优" aria-hidden="true">#</a> 1.1、设计阶段调优</h4><ul><li>1）根据业务增量需求，采取基于日期模板创建索引，通过roll over API滚动索引；</li><li>2）使用别名进行索引管理；</li><li>3）每天凌晨定时对索引做force_merge操作，以释放空间；</li><li>4）采取冷热分离机制，热数据存储到SSD，提高检索效率；冷数据定期进行shrink操作，以缩减存储；</li><li>5）采取curator进行索引的生命周期管理；</li><li>6）仅针对需要分词的字段，合理的设置分词器；</li><li>7）Mapping阶段充分结合各个字段的属性，是否需要检索、是否需要存储等。 ……..</li></ul><h4 id="_1-2、写入调优" tabindex="-1"><a class="header-anchor" href="#_1-2、写入调优" aria-hidden="true">#</a> 1.2、写入调优</h4><ul><li>1）写入前副本数设置为0；</li><li>2）写入前关闭refresh_interval设置为-1，禁用刷新机制；</li><li>3）写入过程中：采取bulk批量写入；</li><li>4）写入后恢复副本数和刷新间隔；</li><li>5）尽量使用自动生成的id。</li></ul><h4 id="_1-3、查询调优" tabindex="-1"><a class="header-anchor" href="#_1-3、查询调优" aria-hidden="true">#</a> 1.3、查询调优</h4><ul><li>1）禁用wildcard；</li><li>2）禁用批量terms（成百上千的场景）；</li><li>3）充分利用倒排索引机制，能keyword类型尽量keyword；</li><li>4）数据量大时候，可以先基于时间敲定索引再检索；</li><li>5）设置合理的路由机制。</li></ul><h4 id="_1-4、其他调优" tabindex="-1"><a class="header-anchor" href="#_1-4、其他调优" aria-hidden="true">#</a> 1.4、其他调优</h4><p>部署调优，业务调优等。</p><p>上面的提及一部分，面试者就基本对你之前的实践或者运维经验有所评估了。</p><h3 id="_2、elasticsearch的倒排索引是什么" tabindex="-1"><a class="header-anchor" href="#_2、elasticsearch的倒排索引是什么" aria-hidden="true">#</a> 2、elasticsearch的倒排索引是什么</h3><p><code>面试官</code> ：想了解你对基础概念的认知。<code>解答</code> ：通俗解释一下就可以。</p><p>传统的我们的检索是通过文章，逐个遍历找到对应关键词的位置。<strong>而倒排索引，是通过分词策略，形成了词和文章的映射关系表，这种词典+映射表即为倒排索引</strong>。有了倒排索引，就能实现<code>o（1）时间复杂度</code> 的效率检索文章了，极大的提高了检索效率。</p><figure><img src="https://user-gold-cdn.xitu.io/2019/1/22/16874bae6bd24813?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>学术的解答方式：</p><blockquote><p>倒排索引，相反于一篇文章包含了哪些词，它从词出发，记载了这个词在哪些文档中出现过，由两部分组成——词典和倒排表。</p></blockquote><p><code>加分项</code> ：倒排索引的底层实现是基于：FST（Finite State Transducer）数据结构。lucene从4+版本后开始大量使用的数据结构是FST。FST有两个优点：</p><ul><li>1）空间占用小。通过对词典中单词前缀和后缀的重复利用，压缩了存储空间；</li><li>2）查询速度快。O(len(str))的查询时间复杂度。</li></ul><h3 id="_3、elasticsearch-索引数据多了怎么办-如何调优-部署" tabindex="-1"><a class="header-anchor" href="#_3、elasticsearch-索引数据多了怎么办-如何调优-部署" aria-hidden="true">#</a> 3、elasticsearch 索引数据多了怎么办，如何调优，部署</h3><p><code>面试官</code> ：想了解大数据量的运维能力。<code>解答</code> ：索引数据的规划，应在前期做好规划，正所谓“设计先行，编码在后”，这样才能有效的避免突如其来的数据激增导致集群处理能力不足引发的线上客户检索或者其他业务受到影响。如何调优，正如问题1所说，这里细化一下：</p><h4 id="_3-1-动态索引层面" tabindex="-1"><a class="header-anchor" href="#_3-1-动态索引层面" aria-hidden="true">#</a> 3.1 动态索引层面</h4><p>基于<code>模板+时间+rollover api滚动</code> 创建索引，举例：设计阶段定义：blog索引的模板格式为：blog_index_时间戳的形式，每天递增数据。</p><p>这样做的好处：不至于数据量激增导致单个索引数据量非常大，接近于上线2的32次幂-1，索引存储达到了TB+甚至更大。</p><p>一旦单个索引很大，存储等各种风险也随之而来，所以要提前考虑+及早避免。</p><h4 id="_3-2-存储层面" tabindex="-1"><a class="header-anchor" href="#_3-2-存储层面" aria-hidden="true">#</a> 3.2 存储层面</h4><p><code>冷热数据分离存储</code> ，热数据（比如最近3天或者一周的数据），其余为冷数据。对于冷数据不会再写入新数据，可以考虑定期force_merge加shrink压缩操作，节省存储空间和检索效率。</p><h4 id="_3-3-部署层面" tabindex="-1"><a class="header-anchor" href="#_3-3-部署层面" aria-hidden="true">#</a> 3.3 部署层面</h4><p>一旦之前没有规划，这里就属于应急策略。结合ES自身的支持动态扩展的特点，动态新增机器的方式可以缓解集群压力，注意：如果之前主节点等<code>规划合理</code> ，不需要重启集群也能完成动态新增的。</p><h3 id="_4、elasticsearch是如何实现master选举的" tabindex="-1"><a class="header-anchor" href="#_4、elasticsearch是如何实现master选举的" aria-hidden="true">#</a> 4、elasticsearch是如何实现master选举的</h3><p><code>面试官</code> ：想了解ES集群的底层原理，不再只关注业务层面了。<code>解答</code> ：前置前提：</p><ul><li>1）只有候选主节点（master：true）的节点才能成为主节点。</li><li>2）最小主节点数（min_master_nodes）的目的是防止脑裂。</li></ul><p>这个我看了各种网上分析的版本和源码分析的书籍，云里雾里。核对了一下代码，核心入口为findMaster，选择主节点成功返回对应Master，否则返回null。选举流程大致描述如下：</p><ul><li>第一步：确认候选主节点数达标，elasticsearch.yml设置的值discovery.zen.minimum_master_nodes；</li><li>第二步：比较：先判定是否具备master资格，具备候选主节点资格的优先返回；若两节点都为候选主节点，则id小的值会主节点。注意这里的id为string类型。</li></ul><p>题外话：获取节点id的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1GET /_cat/nodes?v&amp;h=ip,port,heapPercent,heapMax,id,name2ip        port heapPercent heapMax id   name3127.0.0.1 9300          39   1.9gb Hk9w Hk9wFwU
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、详细描述一下elasticsearch索引文档的过程" tabindex="-1"><a class="header-anchor" href="#_5、详细描述一下elasticsearch索引文档的过程" aria-hidden="true">#</a> 5、详细描述一下Elasticsearch索引文档的过程</h3><p><code>面试官</code> ：想了解ES的底层原理，不再只关注业务层面了。<code>解答</code> ：这里的索引文档应该理解为文档写入ES，创建索引的过程。文档写入包含：单文档写入和批量bulk写入，这里只解释一下：单文档写入流程。</p><p>记住官方文档中的这个图。</p><figure><img src="https://user-gold-cdn.xitu.io/2019/1/22/16874bae6bc42a99?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>第一步：客户写集群某节点写入数据，发送请求。（如果没有指定路由/协调节点，请求的节点扮演<code>路由节点</code> 的角色。）</p><p>第二步：节点1接受到请求后，使用文档_id来确定文档属于分片0。请求会被转到另外的节点，假定节点3。因此分片0的主分片分配到节点3上。</p><p>第三步：节点3在主分片上执行写操作，如果成功，则将请求并行转发到节点1和节点2的副本分片上，等待结果返回。所有的副本分片都报告成功，节点3将向协调节点（节点1）报告成功，节点1向请求客户端报告写入成功。</p><p>如果面试官再问：第二步中的文档获取分片的过程？回答：借助路由算法获取，路由算法就是根据路由和文档id计算目标的分片id的过程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1shard = hash(_routing) % (num_of_primary_shards)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、详细描述一下elasticsearch搜索的过程" tabindex="-1"><a class="header-anchor" href="#_6、详细描述一下elasticsearch搜索的过程" aria-hidden="true">#</a> 6、详细描述一下Elasticsearch搜索的过程？</h3><p><code>面试官</code> ：想了解ES搜索的底层原理，不再只关注业务层面了。<code>解答</code> ：搜索拆解为“query then fetch” 两个阶段。<strong>query阶段的目的</strong>：定位到位置，但不取。步骤拆解如下：</p><ul><li>1）假设一个索引数据有5主+1副本 共10分片，一次请求会命中（主或者副本分片中）的一个。</li><li>2）每个分片在本地进行查询，结果返回到本地有序的优先队列中。</li><li>3）第2）步骤的结果发送到协调节点，协调节点产生一个全局的排序列表。</li></ul><p><strong>fetch阶段的目的</strong>：取数据。路由节点获取所有文档，返回给客户端。</p><h3 id="_7、elasticsearch在部署时-对linux的设置有哪些优化方法" tabindex="-1"><a class="header-anchor" href="#_7、elasticsearch在部署时-对linux的设置有哪些优化方法" aria-hidden="true">#</a> 7、Elasticsearch在部署时，对Linux的设置有哪些优化方法</h3><p><code>面试官</code> ：想了解对ES集群的运维能力。<code>解答</code> ：</p><ul><li>1）关闭缓存swap;</li><li>2）堆内存设置为：Min（节点内存/2, 32GB）;</li><li>3)设置最大文件句柄数；</li><li>4）线程池+队列大小根据业务需要做调整；</li><li>5）磁盘存储raid方式——存储有条件使用RAID10，增加单节点性能以及避免单节点存储故障。</li></ul><h3 id="_8、lucence内部结构是什么" tabindex="-1"><a class="header-anchor" href="#_8、lucence内部结构是什么" aria-hidden="true">#</a> 8、lucence内部结构是什么？</h3><p><code>面试官</code> ：想了解你的知识面的广度和深度。<code>解答</code> ：</p><figure><img src="https://user-gold-cdn.xitu.io/2019/1/22/16874bae6bc27a47?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p>Lucene是有索引和搜索的两个过程，包含索引创建，索引，搜索三个要点。可以基于这个脉络展开一些。</p>`,60),l=[d];function s(t,h){return a(),i("div",null,l)}const p=e(c,[["render",s],["__file","Elasticsearch-FAQ.html.vue"]]);export{p as default};