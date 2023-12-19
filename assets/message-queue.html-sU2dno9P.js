import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,f as i}from"./app-HyF_wsaK.js";const s={},r=i('<h1 id="消息队列知识点-面试题总结" tabindex="-1"><a class="header-anchor" href="#消息队列知识点-面试题总结" aria-hidden="true">#</a> 消息队列知识点&amp;面试题总结</h1><p>“RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概念，如果你是新手，相信本文将是你打开消息队列大门的一板砖。</p><h2 id="一-什么是消息队列" tabindex="-1"><a class="header-anchor" href="#一-什么是消息队列" aria-hidden="true">#</a> 一 什么是消息队列</h2><p>我们可以把消息队列看作是一个存放消息的容器，当我们需要使用消息的时候，直接从容器中取出消息供自己使用即可。</p><figure><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/消息队列/message-queue-small.png" alt="Message queue" tabindex="0" loading="lazy"><figcaption>Message queue</figcaption></figure><p>消息队列是分布式系统中重要的组件之一。使用消息队列主要是为了通过异步处理提高系统性能和削峰、降低系统耦合性。</p><p>我们知道队列 Queue 是一种先进先出的数据结构，所以消费消息时也是按照顺序来消费的。</p><h2 id="二-为什么要用消息队列" tabindex="-1"><a class="header-anchor" href="#二-为什么要用消息队列" aria-hidden="true">#</a> 二 为什么要用消息队列</h2><p>通常来说，使用消息队列能为我们的系统带来下面三点好处：</p><ol><li><strong>通过异步处理提高系统性能（减少响应所需时间）。</strong></li><li><strong>削峰/限流</strong></li><li><strong>降低系统耦合性。</strong></li></ol><p>如果在面试的时候你被面试官问到这个问题的话，一般情况是你在你的简历上涉及到消息队列这方面的内容，这个时候推荐你结合你自己的项目来回答。</p><p>《大型网站技术架构》第四章和第七章均有提到消息队列对应用性能及扩展性的提升。</p><h3 id="_2-1-通过异步处理提高系统性能-减少响应所需时间" tabindex="-1"><a class="header-anchor" href="#_2-1-通过异步处理提高系统性能-减少响应所需时间" aria-hidden="true">#</a> 2.1 通过异步处理提高系统性能（减少响应所需时间）</h3><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/Asynchronous-message-queue.png" alt="通过异步处理提高系统性能" tabindex="0" loading="lazy"><figcaption>通过异步处理提高系统性能</figcaption></figure><p>将用户的请求数据存储到消息队列之后就立即返回结果。随后，系统再对消息进行消费。</p><p>因为用户请求数据写入消息队列之后就立即返回给用户了，但是请求数据在后续的业务校验、写数据库等操作中可能失败。因此，<strong>使用消息队列进行异步处理之后，需要适当修改业务流程进行配合</strong>，比如用户在提交订单之后，订单数据写入消息队列，不能立即返回用户订单提交成功，需要在消息队列的订单消费者进程真正处理完该订单之后，甚至出库后，再通过电子邮件或短信通知用户订单成功，以免交易纠纷。这就类似我们平时手机订火车票和电影票。</p><h3 id="_2-2-削峰-限流" tabindex="-1"><a class="header-anchor" href="#_2-2-削峰-限流" aria-hidden="true">#</a> 2.2 削峰/限流</h3><p><strong>先将短时间高并发产生的事务消息存储在消息队列中，然后后端服务再慢慢根据自己的能力去消费这些消息，这样就避免直接把后端服务打垮掉。</strong></p><p>举例：在电子商务一些秒杀、促销活动中，合理使用消息队列可以有效抵御促销活动刚开始大量订单涌入对系统的冲击。如下图所示：</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/削峰-消息队列.png" alt="削峰" tabindex="0" loading="lazy"><figcaption>削峰</figcaption></figure><h3 id="_2-3-降低系统耦合性" tabindex="-1"><a class="header-anchor" href="#_2-3-降低系统耦合性" aria-hidden="true">#</a> 2.3 降低系统耦合性</h3><p>使用消息队列还可以降低系统耦合性。我们知道如果模块之间不存在直接调用，那么新增模块或者修改模块就对其他模块影响较小，这样系统的可扩展性无疑更好一些。还是直接上图吧：</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/消息队列-解耦.png" alt="解耦" tabindex="0" loading="lazy"><figcaption>解耦</figcaption></figure><p>生产者（客户端）发送消息到消息队列中去，接受者（服务端）处理消息，需要消费的系统直接去消息队列取消息进行消费即可而不需要和其他系统有耦合，这显然也提高了系统的扩展性。</p><p><strong>消息队列使用发布-订阅模式工作，消息发送者（生产者）发布消息，一个或多个消息接受者（消费者）订阅消息。</strong> 从上图可以看到<strong>消息发送者（生产者）和消息接受者（消费者）之间没有直接耦合</strong>，消息发送者将消息发送至分布式消息队列即结束对消息的处理，消息接受者从分布式消息队列获取该消息后进行后续处理，并不需要知道该消息从何而来。<strong>对新增业务，只要对该类消息感兴趣，即可订阅该消息，对原有系统和业务没有任何影响，从而实现网站业务的可扩展性设计</strong>。</p><p>消息接受者对消息进行过滤、处理、包装后，构造成一个新的消息类型，将消息继续发送出去，等待其他消息接受者订阅该消息。因此基于事件（消息对象）驱动的业务架构可以是一系列流程。</p><p>另外，为了避免消息队列服务器宕机造成消息丢失，会将成功发送到消息队列的消息存储在消息生产者服务器上，等消息真正被消费者服务器处理后才删除消息。在消息队列服务器宕机后，生产者服务器会选择分布式消息队列服务器集群中的其他服务器发布消息。</p><p><strong>备注：</strong> 不要认为消息队列只能利用发布-订阅模式工作，只不过在解耦这个特定业务环境下是使用发布-订阅模式的。除了发布-订阅模式，还有点对点订阅模式（一个消息只有一个消费者），我们比较常用的是发布-订阅模式。另外，这两种消息模型是 JMS 提供的，AMQP 协议还提供了 5 种消息模型。</p><h2 id="三-使用消息队列带来的一些问题" tabindex="-1"><a class="header-anchor" href="#三-使用消息队列带来的一些问题" aria-hidden="true">#</a> 三 使用消息队列带来的一些问题</h2><ul><li><strong>系统可用性降低：</strong> 系统可用性在某种程度上降低，为什么这样说呢？在加入 MQ 之前，你不用考虑消息丢失或者说 MQ 挂掉等等的情况，但是，引入 MQ 之后你就需要去考虑了！</li><li><strong>系统复杂性提高：</strong> 加入 MQ 之后，你需要保证消息没有被重复消费、处理消息丢失的情况、保证消息传递的顺序性等等问题！</li><li><strong>一致性问题：</strong> 我上面讲了消息队列可以实现异步，消息队列带来的异步确实可以提高系统响应速度。但是，万一消息的真正消费者并没有正确消费消息怎么办？这样就会导致数据不一致的情况了!</li></ul><h2 id="四-jms-vs-amqp" tabindex="-1"><a class="header-anchor" href="#四-jms-vs-amqp" aria-hidden="true">#</a> 四 JMS VS AMQP</h2><h3 id="_4-1-jms" tabindex="-1"><a class="header-anchor" href="#_4-1-jms" aria-hidden="true">#</a> 4.1 JMS</h3><h4 id="_4-1-1-jms-简介" tabindex="-1"><a class="header-anchor" href="#_4-1-1-jms-简介" aria-hidden="true">#</a> 4.1.1 JMS 简介</h4><p>JMS（JAVA Message Service,java 消息服务）是 java 的消息服务，JMS 的客户端之间可以通过 JMS 服务进行异步的消息传输。<strong>JMS（JAVA Message Service，Java 消息服务）API 是一个消息服务的标准或者说是规范</strong>，允许应用程序组件基于 JavaEE 平台创建、发送、接收和读取消息。它使分布式通信耦合度更低，消息服务更加可靠以及异步性。</p><p><strong>ActiveMQ 就是基于 JMS 规范实现的。</strong></p><h4 id="_4-1-2-jms-两种消息模型" tabindex="-1"><a class="header-anchor" href="#_4-1-2-jms-两种消息模型" aria-hidden="true">#</a> 4.1.2 JMS 两种消息模型</h4><p><strong>① 点到点（P2P）模型</strong></p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/队列模型23.png" alt="队列模型" tabindex="0" loading="lazy"><figcaption>队列模型</figcaption></figure><p>使用<strong>队列（Queue）<strong>作为消息通信载体；满足</strong>生产者与消费者模式</strong>，一条消息只能被一个消费者使用，未被消费的消息在队列中保留直到被消费或超时。比如：我们生产者发送 100 条消息的话，两个消费者来消费一般情况下两个消费者会按照消息发送的顺序各自消费一半（也就是你一个我一个的消费。）</p><p><strong>② 发布/订阅（Pub/Sub）模型</strong></p><figure><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/发布订阅模型.png" alt="发布订阅模型" tabindex="0" loading="lazy"><figcaption>发布订阅模型</figcaption></figure><p>发布订阅模型（Pub/Sub） 使用<strong>主题（Topic）<strong>作为消息通信载体，类似于</strong>广播模式</strong>；发布者发布一条消息，该消息通过主题传递给所有的订阅者，<strong>在一条消息广播之后才订阅的用户则是收不到该条消息的</strong>。</p><h4 id="_4-1-3-jms-五种不同的消息正文格式" tabindex="-1"><a class="header-anchor" href="#_4-1-3-jms-五种不同的消息正文格式" aria-hidden="true">#</a> 4.1.3 JMS 五种不同的消息正文格式</h4><p>JMS 定义了五种不同的消息正文格式，以及调用的消息类型，允许你发送并接收以一些不同形式的数据，提供现有消息格式的一些级别的兼容性。</p><ul><li>StreamMessage -- Java 原始值的数据流</li><li>MapMessage--一套名称-值对</li><li>TextMessage--一个字符串对象</li><li>ObjectMessage--一个序列化的 Java 对象</li><li>BytesMessage--一个字节的数据流</li></ul><h3 id="_4-2-amqp" tabindex="-1"><a class="header-anchor" href="#_4-2-amqp" aria-hidden="true">#</a> 4.2 AMQP</h3><p>AMQP，即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准 <strong>高级消息队列协议</strong>（二进制应用层协议），是应用层协议的一个开放标准，为面向消息的中间件设计，兼容 JMS。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件同产品，不同的开发语言等条件的限制。</p><p><strong>RabbitMQ 就是基于 AMQP 协议实现的。</strong></p><h3 id="_4-3-jms-vs-amqp" tabindex="-1"><a class="header-anchor" href="#_4-3-jms-vs-amqp" aria-hidden="true">#</a> 4.3 JMS vs AMQP</h3><table><thead><tr><th style="text-align:left;">对比方向</th><th style="text-align:left;">JMS</th><th style="text-align:left;">AMQP</th></tr></thead><tbody><tr><td style="text-align:left;">定义</td><td style="text-align:left;">Java API</td><td style="text-align:left;">协议</td></tr><tr><td style="text-align:left;">跨语言</td><td style="text-align:left;">否</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">跨平台</td><td style="text-align:left;">否</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">支持消息类型</td><td style="text-align:left;">提供两种消息模型：①Peer-2-Peer;②Pub/sub</td><td style="text-align:left;">提供了五种消息模型：①direct exchange；②fanout exchange；③topic change；④headers exchange；⑤system exchange。本质来讲，后四种和 JMS 的 pub/sub 模型没有太大差别，仅是在路由机制上做了更详细的划分；</td></tr><tr><td style="text-align:left;">支持消息类型</td><td style="text-align:left;">支持多种消息类型 ，我们在上面提到过</td><td style="text-align:left;">byte[]（二进制）</td></tr></tbody></table><p><strong>总结：</strong></p><ul><li>AMQP 为消息定义了线路层（wire-level protocol）的协议，而 JMS 所定义的是 API 规范。在 Java 体系中，多个 client 均可以通过 JMS 进行交互，不需要应用修改代码，但是其对跨平台的支持较差。而 AMQP 天然具有跨平台、跨语言特性。</li><li>JMS 支持 TextMessage、MapMessage 等复杂的消息类型；而 AMQP 仅支持 byte[] 消息类型（复杂的类型可序列化后发送）。</li><li>由于 Exchange 提供的路由算法，AMQP 可以提供多样化的路由方式来传递消息到消息队列，而 JMS 仅支持 队列 和 主题/订阅 方式两种。</li></ul><h2 id="五-常见的消息队列对比" tabindex="-1"><a class="header-anchor" href="#五-常见的消息队列对比" aria-hidden="true">#</a> 五 常见的消息队列对比</h2><table><thead><tr><th>对比方向</th><th>概要</th></tr></thead><tbody><tr><td>吞吐量</td><td>万级的 ActiveMQ 和 RabbitMQ 的吞吐量（ActiveMQ 的性能最差）要比 十万级甚至是百万级的 RocketMQ 和 Kafka 低一个数量级。</td></tr><tr><td>可用性</td><td>都可以实现高可用。ActiveMQ 和 RabbitMQ 都是基于主从架构实现高可用性。RocketMQ 基于分布式架构。 kafka 也是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>时效性</td><td>RabbitMQ 基于 erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级。其他三个都是 ms 级。</td></tr><tr><td>功能支持</td><td>除了 Kafka，其他三个功能都较为完备。 Kafka 功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用，是事实上的标准</td></tr><tr><td>消息丢失</td><td>ActiveMQ 和 RabbitMQ 丢失的可能性非常低， RocketMQ 和 Kafka 理论上不会丢失。</td></tr></tbody></table><p><strong>总结：</strong></p><ul><li>ActiveMQ 的社区算是比较成熟，但是较目前来说，ActiveMQ 的性能比较差，而且版本迭代很慢，不推荐使用。</li><li>RabbitMQ 在吞吐量方面虽然稍逊于 Kafka 和 RocketMQ ，但是由于它基于 erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级。但是也因为 RabbitMQ 基于 erlang 开发，所以国内很少有公司有实力做 erlang 源码级别的研究和定制。如果业务场景对并发量要求不是太高（十万级、百万级），那这四种消息队列中，RabbitMQ 一定是你的首选。如果是大数据领域的实时计算、日志采集等场景，用 Kafka 是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范。</li><li>RocketMQ 阿里出品，Java 系开源项目，源代码我们可以直接阅读，然后可以定制自己公司的 MQ，并且 RocketMQ 有阿里巴巴的实际业务场景的实战考验。RocketMQ 社区活跃度相对较为一般，不过也还可以，文档相对来说简单一些，然后接口这块不是按照标准 JMS 规范走的有些系统要迁移需要修改大量代码。还有就是阿里出台的技术，你得做好这个技术万一被抛弃，社区黄掉的风险，那如果你们公司有技术实力我觉得用 RocketMQ 挺好的</li><li>Kafka 的特点其实很明显，就是仅仅提供较少的核心功能，但是提供超高的吞吐量，ms 级的延迟，极高的可用性以及可靠性，而且分布式可以任意扩展。同时 kafka 最好是支撑较少的 topic 数量即可，保证其超高吞吐量。kafka 唯一的一点劣势是有可能消息重复消费，那么对数据准确性会造成极其轻微的影响，在大数据领域中以及日志采集中，这点轻微影响可以忽略这个特性天然适合大数据实时计算以及日志收集。</li></ul><p>参考：《Java 工程师面试突击第 1 季-中华石杉老师》</p>',57),n=[r];function l(d,g){return e(),a("div",null,n)}const c=t(s,[["render",l],["__file","message-queue.html.vue"]]);export{c as default};
