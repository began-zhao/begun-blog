import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as t,c as n,b as o,e,d as s,f as i}from"./app-MZMZ8s_-.js";const g={},a=o("h1",{id:"rocketmq-入门总结",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#rocketmq-入门总结","aria-hidden":"true"},"#"),e(" RocketMQ 入门总结")],-1),p=o("p",null,"文章很长，点赞再看，养成好习惯😋😋😋",-1),l={href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247485969&idx=1&sn=6bd53abde30d42a778d5a35ec104428c&chksm=cea245daf9d5cccce631f93115f0c2c4a7634e55f5bef9009fd03f5a0ffa55b745b5ef4f0530&token=294077121&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"},u=i('<h2 id="消息队列扫盲" tabindex="-1"><a class="header-anchor" href="#消息队列扫盲" aria-hidden="true">#</a> 消息队列扫盲</h2><p>消息队列顾名思义就是存放消息的队列，队列我就不解释了，别告诉我你连队列都不知道是啥吧？</p><p>所以问题并不是消息队列是什么，而是 <strong>消息队列为什么会出现？消息队列能用来干什么？用它来干这些事会带来什么好处？消息队列会带来副作用吗？</strong></p><h3 id="消息队列为什么会出现" tabindex="-1"><a class="header-anchor" href="#消息队列为什么会出现" aria-hidden="true">#</a> 消息队列为什么会出现？</h3><p>消息队列算是作为后端程序员的一个必备技能吧，因为<strong>分布式应用必定涉及到各个系统之间的通信问题</strong>，这个时候消息队列也应运而生了。可以说分布式的产生是消息队列的基础，而分布式怕是一个很古老的概念了吧，所以消息队列也是一个很古老的中间件了。</p><h3 id="消息队列能用来干什么" tabindex="-1"><a class="header-anchor" href="#消息队列能用来干什么" aria-hidden="true">#</a> 消息队列能用来干什么？</h3><h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h4><p>你可能会反驳我，应用之间的通信又不是只能由消息队列解决，好好的通信为什么中间非要插一个消息队列呢？我不能直接进行通信吗？</p><p>很好👍，你又提出了一个概念，<strong>同步通信</strong>。就比如现在业界使用比较多的 <code>Dubbo</code> 就是一个适用于各个系统之间同步通信的 <code>RPC</code> 框架。</p><p>我来举个🌰吧，比如我们有一个购票系统，需求是用户在购买完之后能接收到购买完成的短信。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef37fee7e09230.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们省略中间的网络通信时间消耗，假如购票系统处理需要 150ms ，短信系统处理需要 200ms ，那么整个处理流程的时间消耗就是 150ms + 200ms = 350ms。</p><p>当然，乍看没什么问题。可是仔细一想你就感觉有点问题，我用户购票在购票系统的时候其实就已经完成了购买，而我现在通过同步调用非要让整个请求拉长时间，而短信系统这玩意又不是很有必要，它仅仅是一个辅助功能增强用户体验感而已。我现在整个调用流程就有点 <strong>头重脚轻</strong> 的感觉了，购票是一个不太耗时的流程，而我现在因为同步调用，非要等待发送短信这个比较耗时的操作才返回结果。那我如果再加一个发送邮件呢？</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef380429cf373e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样整个系统的调用链又变长了，整个时间就变成了550ms。</p><p>当我们在学生时代需要在食堂排队的时候，我们和食堂大妈就是一个同步的模型。</p><p>我们需要告诉食堂大妈：“姐姐，给我加个鸡腿，再加个酸辣土豆丝，帮我浇点汁上去，多打点饭哦😋😋😋” 咦~~~ 为了多吃点，真恶心。</p><p>然后大妈帮我们打饭配菜，我们看着大妈那颤抖的手和掉落的土豆丝不禁咽了咽口水。</p><p>最终我们从大妈手中接过饭菜然后去寻找座位了...</p><p>回想一下，我们在给大妈发送需要的信息之后我们是 <strong>同步等待大妈给我配好饭菜</strong> 的，上面我们只是加了鸡腿和土豆丝，万一我再加一个番茄牛腩，韭菜鸡蛋，这样是不是大妈打饭配菜的流程就会变长，我们等待的时间也会相应的变长。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/006APoFYly1fvd9cwjlfrj30as0b03ym.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那后来，我们工作赚钱了有钱去饭店吃饭了，我们告诉服务员来一碗牛肉面加个荷包蛋 <strong>(传达一个消息)</strong> ，然后我们就可以在饭桌上安心的玩手机了 <strong>(干自己其他事情)</strong> ，等到我们的牛肉面上了我们就可以吃了。这其中我们也就传达了一个消息，然后我们又转过头干其他事情了。这其中虽然做面的时间没有变短，但是我们只需要传达一个消息就可以干其他事情了，这是一个 <strong>异步</strong> 的概念。</p><p>所以，为了解决这一个问题，聪明的程序员在中间也加了个类似于服务员的中间件——消息队列。这个时候我们就可以把模型给改造了。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef38124f55eaea.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样，我们在将消息存入消息队列之后我们就可以直接返回了(我们告诉服务员我们要吃什么然后玩手机)，所以整个耗时只是 150ms + 10ms = 160ms。</p><blockquote><p>但是你需要注意的是，整个流程的时长是没变的，就像你仅仅告诉服务员要吃什么是不会影响到做面的速度的。</p></blockquote><h4 id="解耦" tabindex="-1"><a class="header-anchor" href="#解耦" aria-hidden="true">#</a> 解耦</h4><p>回到最初同步调用的过程，我们写个伪代码简单概括一下。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef381a505d3e1f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么第二步，我们又添加了一个发送邮件，我们就得重新去修改代码，如果我们又加一个需求：用户购买完还需要给他加积分，这个时候我们是不是又得改代码？</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef381c4e1b1ac7.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果你觉得还行，那么我这个时候不要发邮件这个服务了呢，我是不是又得改代码，又得重启应用？</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef381f273a66bd.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样改来改去是不是很麻烦，那么 <strong>此时我们就用一个消息队列在中间进行解耦</strong> 。你需要注意的是，我们后面的发送短信、发送邮件、添加积分等一些操作都依赖于上面的 <code>result</code> ，这东西抽象出来就是购票的处理结果呀，比如订单号，用户账号等等，也就是说我们后面的一系列服务都是需要同样的消息来进行处理。既然这样，我们是不是可以通过 <strong>“广播消息”</strong> 来实现。</p><p>我上面所讲的“广播”并不是真正的广播，而是接下来的系统作为消费者去 <strong>订阅</strong> 特定的主题。比如我们这里的主题就可以叫做 <code>订票</code> ，我们购买系统作为一个生产者去生产这条消息放入消息队列，然后消费者订阅了这个主题，会从消息队列中拉取消息并消费。就比如我们刚刚画的那张图，你会发现，在生产者这边我们只需要关注 <strong>生产消息到指定主题中</strong> ，而 <strong>消费者只需要关注从指定主题中拉取消息</strong> 就行了。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef382674b66892.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如果没有消息队列，每当一个新的业务接入，我们都要在主系统调用新接口、或者当我们取消某些业务，我们也得在主系统删除某些接口调用。有了消息队列，我们只需要关心消息是否送达了队列，至于谁希望订阅，接下来收到消息如何处理，是下游的事情，无疑极大地减少了开发和联调的工作量。</p></blockquote><h4 id="削峰" tabindex="-1"><a class="header-anchor" href="#削峰" aria-hidden="true">#</a> 削峰</h4><p>我们再次回到一开始我们使用同步调用系统的情况，并且思考一下，如果此时有大量用户请求购票整个系统会变成什么样？</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef382a9756bb1c.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果，此时有一万的请求进入购票系统，我们知道运行我们主业务的服务器配置一般会比较好，所以这里我们假设购票系统能承受这一万的用户请求，那么也就意味着我们同时也会出现一万调用发短信服务的请求。而对于短信系统来说并不是我们的主要业务，所以我们配备的硬件资源并不会太高，那么你觉得现在这个短信系统能承受这一万的峰值么，且不说能不能承受，系统会不会 <strong>直接崩溃</strong> 了？</p><p>短信业务又不是我们的主业务，我们能不能 <strong>折中处理</strong> 呢？如果我们把购买完成的信息发送到消息队列中，而短信系统 <strong>尽自己所能地去消息队列中取消息和消费消息</strong> ，即使处理速度慢一点也无所谓，只要我们的系统没有崩溃就行了。</p><p>留得江山在，还怕没柴烧？你敢说每次发送验证码的时候是一发你就收到了的么？</p><h4 id="消息队列能带来什么好处" tabindex="-1"><a class="header-anchor" href="#消息队列能带来什么好处" aria-hidden="true">#</a> 消息队列能带来什么好处？</h4><p>其实上面我已经说了。<strong>异步、解耦、削峰。</strong> 哪怕你上面的都没看懂也千万要记住这六个字，因为他不仅是消息队列的精华，更是编程和架构的精华。</p><h4 id="消息队列会带来副作用吗" tabindex="-1"><a class="header-anchor" href="#消息队列会带来副作用吗" aria-hidden="true">#</a> 消息队列会带来副作用吗？</h4><p>没有哪一门技术是“银弹”，消息队列也有它的副作用。</p><p>比如，本来好好的两个系统之间的调用，我中间加了个消息队列，如果消息队列挂了怎么办呢？是不是 <strong>降低了系统的可用性</strong> ？</p><p>那这样是不是要保证HA(高可用)？是不是要搞集群？那么我 <strong>整个系统的复杂度是不是上升了</strong> ？</p><p>抛开上面的问题不讲，万一我发送方发送失败了，然后执行重试，这样就可能产生重复的消息。</p><p>或者我消费端处理失败了，请求重发，这样也会产生重复的消息。</p><p>对于一些微服务来说，消费重复消息会带来更大的麻烦，比如增加积分，这个时候我加了多次是不是对其他用户不公平？</p><p>那么，又 <strong>如何解决重复消费消息的问题</strong> 呢？</p><p>如果我们此时的消息需要保证严格的顺序性怎么办呢？比如生产者生产了一系列的有序消息(对一个id为1的记录进行删除增加修改)，但是我们知道在发布订阅模型中，对于主题是无顺序的，那么这个时候就会导致对于消费者消费消息的时候没有按照生产者的发送顺序消费，比如这个时候我们消费的顺序为修改删除增加，如果该记录涉及到金额的话是不是会出大事情？</p><p>那么，又 <strong>如何解决消息的顺序消费问题</strong> 呢？</p><p>就拿我们上面所讲的分布式系统来说，用户购票完成之后是不是需要增加账户积分？在同一个系统中我们一般会使用事务来进行解决，如果用 <code>Spring</code> 的话我们在上面伪代码中加入 <code>@Transactional</code> 注解就好了。但是在不同系统中如何保证事务呢？总不能这个系统我扣钱成功了你那积分系统积分没加吧？或者说我这扣钱明明失败了，你那积分系统给我加了积分。</p><p>那么，又如何 <strong>解决分布式事务问题</strong> 呢？</p><p>我们刚刚说了，消息队列可以进行削峰操作，那如果我的消费者如果消费很慢或者生产者生产消息很快，这样是不是会将消息堆积在消息队列中？</p><p>那么，又如何 <strong>解决消息堆积的问题</strong> 呢？</p><p>可用性降低，复杂度上升，又带来一系列的重复消费，顺序消费，分布式事务，消息堆积的问题，这消息队列还怎么用啊😵？</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef382d709abc9d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>别急，办法总是有的。</p><h2 id="rocketmq是什么" tabindex="-1"><a class="header-anchor" href="#rocketmq是什么" aria-hidden="true">#</a> RocketMQ是什么？</h2><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef383014430799.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>哇，你个混蛋！上面给我抛出那么多问题，你现在又讲 <code>RocketMQ</code> ，还让不让人活了？！🤬</p><p>别急别急，话说你现在清楚 <code>MQ</code> 的构造吗，我还没讲呢，我们先搞明白 <code>MQ</code> 的内部构造，再来看看如何解决上面的一系列问题吧，不过你最好带着问题去阅读和了解喔。</p><p><code>RocketMQ</code> 是一个 <strong>队列模型</strong> 的消息中间件，具有<strong>高性能、高可靠、高实时、分布式</strong> 的特点。它是一个采用 <code>Java</code> 语言开发的分布式的消息系统，由阿里巴巴团队开发，在2016年底贡献给 <code>Apache</code>，成为了 <code>Apache</code> 的一个顶级项目。 在阿里内部，<code>RocketMQ</code> 很好地服务了集团大大小小上千个应用，在每年的双十一当天，更有不可思议的万亿级消息通过 <code>RocketMQ</code> 流转。</p><p>废话不多说，想要了解 <code>RocketMQ</code> 历史的同学可以自己去搜寻资料。听完上面的介绍，你只要知道 <code>RocketMQ</code> 很快、很牛、而且经历过双十一的实践就行了！</p><h2 id="队列模型和主题模型" tabindex="-1"><a class="header-anchor" href="#队列模型和主题模型" aria-hidden="true">#</a> 队列模型和主题模型</h2><p>在谈 <code>RocketMQ</code> 的技术架构之前，我们先来了解一下两个名词概念——<strong>队列模型</strong> 和 <strong>主题模型</strong> 。</p><p>首先我问一个问题，消息队列为什么要叫消息队列？</p><p>你可能觉得很弱智，这玩意不就是存放消息的队列嘛？不叫消息队列叫什么？</p><p>的确，早期的消息中间件是通过 <strong>队列</strong> 这一模型来实现的，可能是历史原因，我们都习惯把消息中间件成为消息队列。</p><p>但是，如今例如 <code>RocketMQ</code> 、<code>Kafka</code> 这些优秀的消息中间件不仅仅是通过一个 <strong>队列</strong> 来实现消息存储的。</p><h3 id="队列模型" tabindex="-1"><a class="header-anchor" href="#队列模型" aria-hidden="true">#</a> 队列模型</h3><p>就像我们理解队列一样，消息中间件的队列模型就真的只是一个队列。。。我画一张图给大家理解。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef3834ae653469.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在一开始我跟你提到了一个 <strong>“广播”</strong> 的概念，也就是说如果我们此时我们需要将一个消息发送给多个消费者(比如此时我需要将信息发送给短信系统和邮件系统)，这个时候单个队列即不能满足需求了。</p><p>当然你可以让 <code>Producer</code> 生产消息放入多个队列中，然后每个队列去对应每一个消费者。问题是可以解决，创建多个队列并且复制多份消息是会很影响资源和性能的。而且，这样子就会导致生产者需要知道具体消费者个数然后去复制对应数量的消息队列，这就违背我们消息中间件的 <strong>解耦</strong> 这一原则。</p><h3 id="主题模型" tabindex="-1"><a class="header-anchor" href="#主题模型" aria-hidden="true">#</a> 主题模型</h3><p>那么有没有好的方法去解决这一个问题呢？有，那就是 <strong>主题模型</strong> 或者可以称为 <strong>发布订阅模型</strong> 。</p><blockquote><p>感兴趣的同学可以去了解一下设计模式里面的观察者模式并且手动实现一下，我相信你会有所收获的。</p></blockquote><p>在主题模型中，消息的生产者称为 <strong>发布者(Publisher)</strong> ，消息的消费者称为 <strong>订阅者(Subscriber)</strong> ，存放消息的容器称为 <strong>主题(Topic)</strong> 。</p><p>其中，发布者将消息发送到指定主题中，订阅者需要 <strong>提前订阅主题</strong> 才能接受特定主题的消息。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef3837887d9a54sds.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="rocketmq中的消息模型" tabindex="-1"><a class="header-anchor" href="#rocketmq中的消息模型" aria-hidden="true">#</a> RocketMQ中的消息模型</h3><p><code>RocketMQ</code> 中的消息模型就是按照 <strong>主题模型</strong> 所实现的。你可能会好奇这个 <strong>主题</strong> 到底是怎么实现的呢？你上面也没有讲到呀！</p><p>其实对于主题模型的实现来说每个消息中间件的底层设计都是不一样的，就比如 <code>Kafka</code> 中的 <strong>分区</strong> ，<code>RocketMQ</code> 中的 <strong>队列</strong> ，<code>RabbitMQ</code> 中的 <code>Exchange</code> 。我们可以理解为 <strong>主题模型/发布订阅模型</strong> 就是一个标准，那些中间件只不过照着这个标准去实现而已。</p><p>所以，<code>RocketMQ</code> 中的 <strong>主题模型</strong> 到底是如何实现的呢？首先我画一张图，大家尝试着去理解一下。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef383d3e8c9788.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们可以看到在整个图中有 <code>Producer Group</code> 、<code>Topic</code> 、<code>Consumer Group</code> 三个角色，我来分别介绍一下他们。</p><ul><li><code>Producer Group</code> 生产者组： 代表某一类的生产者，比如我们有多个秒杀系统作为生产者，这多个合在一起就是一个 <code>Producer Group</code> 生产者组，它们一般生产相同的消息。</li><li><code>Consumer Group</code> 消费者组： 代表某一类的消费者，比如我们有多个短信系统作为消费者，这多个合在一起就是一个 <code>Consumer Group</code> 消费者组，它们一般消费相同的消息。</li><li><code>Topic</code> 主题： 代表一类消息，比如订单消息，物流消息等等。</li></ul><p>你可以看到图中生产者组中的生产者会向主题发送消息，而 <strong>主题中存在多个队列</strong>，生产者每次生产消息之后是指定主题中的某个队列发送消息的。</p><p>每个主题中都有多个队列(分布在不同的 <code>Broker</code>中，如果是集群的话，<code>Broker</code>又分布在不同的服务器中)，集群消费模式下，一个消费者集群多台机器共同消费一个 <code>topic</code> 的多个队列，<strong>一个队列只会被一个消费者消费</strong>。如果某个消费者挂掉，分组内其它消费者会接替挂掉的消费者继续消费。就像上图中 <code>Consumer1</code> 和 <code>Consumer2</code> 分别对应着两个队列，而 <code>Consumer3</code> 是没有队列对应的，所以一般来讲要控制 <strong>消费者组中的消费者个数和主题中队列个数相同</strong> 。</p><p>当然也可以消费者个数小于队列个数，只不过不太建议。如下图。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef3850c808d707.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>每个消费组在每个队列上维护一个消费位置</strong> ，为什么呢？</p><p>因为我们刚刚画的仅仅是一个消费者组，我们知道在发布订阅模式中一般会涉及到多个消费者组，而每个消费者组在每个队列中的消费位置都是不同的。如果此时有多个消费者组，那么消息被一个消费者组消费完之后是不会删除的(因为其它消费者组也需要呀)，它仅仅是为每个消费者组维护一个 <strong>消费位移(offset)</strong> ，每次消费者组消费完会返回一个成功的响应，然后队列再把维护的消费位移加一，这样就不会出现刚刚消费过的消息再一次被消费了。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef3857fefaa079.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可能你还有一个问题，<strong>为什么一个主题中需要维护多个队列</strong> ？</p><p>答案是 <strong>提高并发能力</strong> 。的确，每个主题中只存在一个队列也是可行的。你想一下，如果每个主题中只存在一个队列，这个队列中也维护着每个消费者组的消费位置，这样也可以做到 <strong>发布订阅模式</strong> 。如下图。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef38600cdb6d4b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是，这样我生产者是不是只能向一个队列发送消息？又因为需要维护消费位置所以一个队列只能对应一个消费者组中的消费者，这样是不是其他的 <code>Consumer</code> 就没有用武之地了？从这两个角度来讲，并发度一下子就小了很多。</p><p>所以总结来说，<code>RocketMQ</code> 通过<strong>使用在一个 <code>Topic</code> 中配置多个队列并且每个队列维护每个消费者组的消费位置</strong> 实现了 <strong>主题模式/发布订阅模式</strong> 。</p><h2 id="rocketmq的架构图" tabindex="-1"><a class="header-anchor" href="#rocketmq的架构图" aria-hidden="true">#</a> RocketMQ的架构图</h2><p>讲完了消息模型，我们理解起 <code>RocketMQ</code> 的技术架构起来就容易多了。</p><p><code>RocketMQ</code> 技术架构中有四大角色 <code>NameServer</code> 、<code>Broker</code> 、<code>Producer</code> 、<code>Consumer</code> 。我来向大家分别解释一下这四个角色是干啥的。</p><ul><li><p><code>Broker</code>： 主要负责消息的存储、投递和查询以及服务高可用保证。说白了就是消息队列服务器嘛，生产者生产消息到 <code>Broker</code> ，消费者从 <code>Broker</code> 拉取消息并消费。</p><p>这里，我还得普及一下关于 <code>Broker</code> 、<code>Topic</code> 和 队列的关系。上面我讲解了 <code>Topic</code> 和队列的关系——一个 <code>Topic</code> 中存在多个队列，那么这个 <code>Topic</code> 和队列存放在哪呢？</p><p><strong>一个 <code>Topic</code> 分布在多个 <code>Broker</code>上，一个 <code>Broker</code> 可以配置多个 <code>Topic</code> ，它们是多对多的关系</strong>。</p><p>如果某个 <code>Topic</code> 消息量很大，应该给它多配置几个队列(上文中提到了提高并发能力)，并且 <strong>尽量多分布在不同 <code>Broker</code> 上，以减轻某个 <code>Broker</code> 的压力</strong> 。</p><p><code>Topic</code> 消息量都比较均匀的情况下，如果某个 <code>broker</code> 上的队列越多，则该 <code>broker</code> 压力越大。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef38687488a5a4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>所以说我们需要配置多个Broker。</p></blockquote></li><li><p><code>NameServer</code>： 不知道你们有没有接触过 <code>ZooKeeper</code> 和 <code>Spring Cloud</code> 中的 <code>Eureka</code> ，它其实也是一个 <strong>注册中心</strong> ，主要提供两个功能：<strong>Broker管理</strong> 和 <strong>路由信息管理</strong> 。说白了就是 <code>Broker</code> 会将自己的信息注册到 <code>NameServer</code> 中，此时 <code>NameServer</code> 就存放了很多 <code>Broker</code> 的信息(Broker的路由表)，消费者和生产者就从 <code>NameServer</code> 中获取路由表然后照着路由表的信息和对应的 <code>Broker</code> 进行通信(生产者和消费者定期会向 <code>NameServer</code> 去查询相关的 <code>Broker</code> 的信息)。</p></li><li><p><code>Producer</code>： 消息发布的角色，支持分布式集群方式部署。说白了就是生产者。</p></li><li><p><code>Consumer</code>： 消息消费的角色，支持分布式集群方式部署。支持以push推，pull拉两种模式对消息进行消费。同时也支持集群方式和广播方式的消费，它提供实时消息订阅机制。说白了就是消费者。</p></li></ul><p>听完了上面的解释你可能会觉得，这玩意好简单。不就是这样的么？</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef386c6d1e8bdb.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>嗯？你可能会发现一个问题，这老家伙 <code>NameServer</code> 干啥用的，这不多余吗？直接 <code>Producer</code> 、<code>Consumer</code> 和 <code>Broker</code> 直接进行生产消息，消费消息不就好了么？</p><p>但是，我们上文提到过 <code>Broker</code> 是需要保证高可用的，如果整个系统仅仅靠着一个 <code>Broker</code> 来维持的话，那么这个 <code>Broker</code> 的压力会不会很大？所以我们需要使用多个 <code>Broker</code> 来保证 <strong>负载均衡</strong> 。</p><p>如果说，我们的消费者和生产者直接和多个 <code>Broker</code> 相连，那么当 <code>Broker</code> 修改的时候必定会牵连着每个生产者和消费者，这样就会产生耦合问题，而 <code>NameServer</code> 注册中心就是用来解决这个问题的。</p><blockquote><p>如果还不是很理解的话，可以去看我介绍 <code>Spring Cloud</code> 的那篇文章，其中介绍了 <code>Eureka</code> 注册中心。</p></blockquote><p>当然，<code>RocketMQ</code> 中的技术架构肯定不止前面那么简单，因为上面图中的四个角色都是需要做集群的。我给出一张官网的架构图，大家尝试理解一下。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef386fa3be1e53.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其实和我们最开始画的那张乞丐版的架构图也没什么区别，主要是一些细节上的差别。听我细细道来🤨。</p><p>第一、我们的 <code>Broker</code> <strong>做了集群并且还进行了主从部署</strong> ，由于消息分布在各个 <code>Broker</code> 上，一旦某个 <code>Broker</code> 宕机，则该<code>Broker</code> 上的消息读写都会受到影响。所以 <code>Rocketmq</code> 提供了 <code>master/slave</code> 的结构，<code> salve</code> 定时从 <code>master</code> 同步数据(同步刷盘或者异步刷盘)，如果 <code>master</code> 宕机，<strong>则 <code>slave</code> 提供消费服务，但是不能写入消息</strong> (后面我还会提到哦)。</p><p>第二、为了保证 <code>HA</code> ，我们的 <code>NameServer</code> 也做了集群部署，但是请注意它是 <strong>去中心化</strong> 的。也就意味着它没有主节点，你可以很明显地看出 <code>NameServer</code> 的所有节点是没有进行 <code>Info Replicate</code> 的，在 <code>RocketMQ</code> 中是通过 <strong>单个Broker和所有NameServer保持长连接</strong> ，并且在每隔30秒 <code>Broker</code> 会向所有 <code>Nameserver</code> 发送心跳，心跳包含了自身的 <code>Topic</code> 配置信息，这个步骤就对应这上面的 <code>Routing Info</code> 。</p><p>第三、在生产者需要向 <code>Broker</code> 发送消息的时候，<strong>需要先从 <code>NameServer</code> 获取关于 <code>Broker</code> 的路由信息</strong>，然后通过 <strong>轮询</strong> 的方法去向每个队列中生产数据以达到 <strong>负载均衡</strong> 的效果。</p><p>第四、消费者通过 <code>NameServer</code> 获取所有 <code>Broker</code> 的路由信息后，向 <code>Broker</code> 发送 <code>Pull</code> 请求来获取消息数据。<code>Consumer</code> 可以以两种模式启动—— <strong>广播（Broadcast）和集群（Cluster）</strong>。广播模式下，一条消息会发送给 <strong>同一个消费组中的所有消费者</strong> ，集群模式下消息只会发送给一个消费者。</p><h2 id="如何解决-顺序消费、重复消费" tabindex="-1"><a class="header-anchor" href="#如何解决-顺序消费、重复消费" aria-hidden="true">#</a> 如何解决 顺序消费、重复消费</h2><p>其实，这些东西都是我在介绍消息队列带来的一些副作用的时候提到的，也就是说，这些问题不仅仅挂钩于 <code>RocketMQ</code> ，而是应该每个消息中间件都需要去解决的。</p><p>在上面我介绍 <code>RocketMQ</code> 的技术架构的时候我已经向你展示了 <strong>它是如何保证高可用的</strong> ，这里不涉及运维方面的搭建，如果你感兴趣可以自己去官网上照着例子搭建属于你自己的 <code>RocketMQ</code> 集群。</p><blockquote><p>其实 <code>Kafka</code> 的架构基本和 <code>RocketMQ</code> 类似，只是它注册中心使用了 <code>Zookeeper</code> 、它的 <strong>分区</strong> 就相当于 <code>RocketMQ</code> 中的 <strong>队列</strong> 。还有一些小细节不同会在后面提到。</p></blockquote><h3 id="顺序消费" tabindex="-1"><a class="header-anchor" href="#顺序消费" aria-hidden="true">#</a> 顺序消费</h3><p>在上面的技术架构介绍中，我们已经知道了 <strong><code>RocketMQ</code> 在主题上是无序的、它只有在队列层面才是保证有序</strong> 的。</p><p>这又扯到两个概念——<strong>普通顺序</strong> 和 <strong>严格顺序</strong> 。</p><p>所谓普通顺序是指 消费者通过 <strong>同一个消费队列收到的消息是有顺序的</strong> ，不同消息队列收到的消息则可能是无顺序的。普通顺序消息在 <code>Broker</code> <strong>重启情况下不会保证消息顺序性</strong> (短暂时间) 。</p><p>所谓严格顺序是指 消费者收到的 <strong>所有消息</strong> 均是有顺序的。严格顺序消息 <strong>即使在异常情况下也会保证消息的顺序性</strong> 。</p><p>但是，严格顺序看起来虽好，实现它可会付出巨大的代价。如果你使用严格顺序模式，<code>Broker</code> 集群中只要有一台机器不可用，则整个集群都不可用。你还用啥？现在主要场景也就在 <code>binlog</code> 同步。</p><p>一般而言，我们的 <code>MQ</code> 都是能容忍短暂的乱序，所以推荐使用普通顺序模式。</p><p>那么，我们现在使用了 <strong>普通顺序模式</strong> ，我们从上面学习知道了在 <code>Producer</code> 生产消息的时候会进行轮询(取决你的负载均衡策略)来向同一主题的不同消息队列发送消息。那么如果此时我有几个消息分别是同一个订单的创建、支付、发货，在轮询的策略下这 <strong>三个消息会被发送到不同队列</strong> ，因为在不同的队列此时就无法使用 <code>RocketMQ</code> 带来的队列有序特性来保证消息有序性了。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef3874585e096e.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么，怎么解决呢？</p><p>其实很简单，我们需要处理的仅仅是将同一语义下的消息放入同一个队列(比如这里是同一个订单)，那我们就可以使用 <strong>Hash取模法</strong> 来保证同一个订单在同一个队列中就行了。</p><h3 id="重复消费" tabindex="-1"><a class="header-anchor" href="#重复消费" aria-hidden="true">#</a> 重复消费</h3><p>emmm，就两个字—— <strong>幂等</strong> 。在编程中一个<em>幂等</em> 操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。比如说，这个时候我们有一个订单的处理积分的系统，每当来一个消息的时候它就负责为创建这个订单的用户的积分加上相应的数值。可是有一次，消息队列发送给订单系统 FrancisQ 的订单信息，其要求是给 FrancisQ 的积分加上 500。但是积分系统在收到 FrancisQ 的订单信息处理完成之后返回给消息队列处理成功的信息的时候出现了网络波动(当然还有很多种情况，比如Broker意外重启等等)，这条回应没有发送成功。</p><p>那么，消息队列没收到积分系统的回应会不会尝试重发这个消息？问题就来了，我再发这个消息，万一它又给 FrancisQ 的账户加上 500 积分怎么办呢？</p><p>所以我们需要给我们的消费者实现 <strong>幂等</strong> ，也就是对同一个消息的处理结果，执行多少次都不变。</p><p>那么如何给业务实现幂等呢？这个还是需要结合具体的业务的。你可以使用 <strong>写入 <code>Redis</code></strong> 来保证，因为 <code>Redis</code> 的 <code>key</code> 和 <code>value</code> 就是天然支持幂等的。当然还有使用 <strong>数据库插入法</strong> ，基于数据库的唯一键来保证重复数据不会被插入多条。</p><p>不过最主要的还是需要 <strong>根据特定场景使用特定的解决方案</strong> ，你要知道你的消息消费是否是完全不可重复消费还是可以忍受重复消费的，然后再选择强校验和弱校验的方式。毕竟在 CS 领域还是很少有技术银弹的说法。</p><p>而在整个互联网领域，幂等不仅仅适用于消息队列的重复消费问题，这些实现幂等的方法，也同样适用于，<strong>在其他场景中来解决重复请求或者重复调用的问题</strong> 。比如将HTTP服务设计成幂等的，<strong>解决前端或者APP重复提交表单数据的问题</strong> ，也可以将一个微服务设计成幂等的，解决 <code>RPC</code> 框架自动重试导致的 <strong>重复调用问题</strong> 。</p><h2 id="分布式事务" tabindex="-1"><a class="header-anchor" href="#分布式事务" aria-hidden="true">#</a> 分布式事务</h2><p>如何解释分布式事务呢？事务大家都知道吧？<strong>要么都执行要么都不执行</strong> 。在同一个系统中我们可以轻松地实现事务，但是在分布式架构中，我们有很多服务是部署在不同系统之间的，而不同服务之间又需要进行调用。比如此时我下订单然后增加积分，如果保证不了分布式事务的话，就会出现A系统下了订单，但是B系统增加积分失败或者A系统没有下订单，B系统却增加了积分。前者对用户不友好，后者对运营商不利，这是我们都不愿意见到的。</p><p>那么，如何去解决这个问题呢？</p><p>如今比较常见的分布式事务实现有 2PC、TCC 和事务消息(half 半消息机制)。每一种实现都有其特定的使用场景，但是也有各自的问题，<strong>都不是完美的解决方案</strong>。</p><p>在 <code>RocketMQ</code> 中使用的是 <strong>事务消息加上事务反查机制</strong> 来解决分布式事务问题的。我画了张图，大家可以对照着图进行理解。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef38798d7a987f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在第一步发送的 half 消息 ，它的意思是 <strong>在事务提交之前，对于消费者来说，这个消息是不可见的</strong> 。</p><blockquote><p>那么，如何做到写入消息但是对用户不可见呢？RocketMQ事务消息的做法是：如果消息是half消息，将备份原消息的主题与消息消费队列，然后 <strong>改变主题</strong> 为RMQ_SYS_TRANS_HALF_TOPIC。由于消费组未订阅该主题，故消费端无法消费half类型的消息，<strong>然后RocketMQ会开启一个定时任务，从Topic为RMQ_SYS_TRANS_HALF_TOPIC中拉取消息进行消费</strong>，根据生产者组获取一个服务提供者发送回查事务状态请求，根据事务状态来决定是提交或回滚消息。</p></blockquote><p>你可以试想一下，如果没有从第5步开始的 <strong>事务反查机制</strong> ，如果出现网路波动第4步没有发送成功，这样就会产生 MQ 不知道是不是需要给消费者消费的问题，他就像一个无头苍蝇一样。在 <code>RocketMQ</code> 中就是使用的上述的事务反查来解决的，而在 <code>Kafka</code> 中通常是直接抛出一个异常让用户来自行解决。</p><p>你还需要注意的是，在 <code>MQ Server</code> 指向系统B的操作已经和系统A不相关了，也就是说在消息队列中的分布式事务是——<strong>本地事务和存储消息到消息队列才是同一个事务</strong>。这样也就产生了事务的<strong>最终一致性</strong>，因为整个过程是异步的，<strong>每个系统只要保证它自己那一部分的事务就行了</strong>。</p><h2 id="消息堆积问题" tabindex="-1"><a class="header-anchor" href="#消息堆积问题" aria-hidden="true">#</a> 消息堆积问题</h2><p>在上面我们提到了消息队列一个很重要的功能——<strong>削峰</strong> 。那么如果这个峰值太大了导致消息堆积在队列中怎么办呢？</p><p>其实这个问题可以将它广义化，因为产生消息堆积的根源其实就只有两个——生产者生产太快或者消费者消费太慢。</p><p>我们可以从多个角度去思考解决这个问题，当流量到峰值的时候是因为生产者生产太快，我们可以使用一些 <strong>限流降级</strong> 的方法，当然你也可以增加多个消费者实例去水平扩展增加消费能力来匹配生产的激增。如果消费者消费过慢的话，我们可以先检查 <strong>是否是消费者出现了大量的消费错误</strong> ，或者打印一下日志查看是否是哪一个线程卡死，出现了锁资源不释放等等的问题。</p><blockquote><p>当然，最快速解决消息堆积问题的方法还是增加消费者实例，不过 <strong>同时你还需要增加每个主题的队列数量</strong> 。</p><p>别忘了在 <code>RocketMQ</code> 中，<strong>一个队列只会被一个消费者消费</strong> ，如果你仅仅是增加消费者实例就会出现我一开始给你画架构图的那种情况。</p></blockquote><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef387d939ab66d.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="回溯消费" tabindex="-1"><a class="header-anchor" href="#回溯消费" aria-hidden="true">#</a> 回溯消费</h2><p>回溯消费是指 <code>Consumer</code> 已经消费成功的消息，由于业务上需求需要重新消费，在<code>RocketMQ</code> 中， <code>Broker</code> 在向<code>Consumer</code> 投递成功消息后，<strong>消息仍然需要保留</strong> 。并且重新消费一般是按照时间维度，例如由于 <code>Consumer</code> 系统故障，恢复后需要重新消费1小时前的数据，那么 <code>Broker</code> 要提供一种机制，可以按照时间维度来回退消费进度。<code>RocketMQ</code> 支持按照时间回溯消费，时间维度精确到毫秒。</p><p>这是官方文档的解释，我直接照搬过来就当科普了😁😁😁。</p><h2 id="rocketmq-的刷盘机制" tabindex="-1"><a class="header-anchor" href="#rocketmq-的刷盘机制" aria-hidden="true">#</a> RocketMQ 的刷盘机制</h2><p>上面我讲了那么多的 <code>RocketMQ</code> 的架构和设计原理，你有没有好奇</p><p>在 <code>Topic</code> 中的 <strong>队列是以什么样的形式存在的？</strong></p><p><strong>队列中的消息又是如何进行存储持久化的呢？</strong></p><p>我在上文中提到的 <strong>同步刷盘</strong> 和 <strong>异步刷盘</strong> 又是什么呢？它们会给持久化带来什么样的影响呢？</p><p>下面我将给你们一一解释。</p><h3 id="同步刷盘和异步刷盘" tabindex="-1"><a class="header-anchor" href="#同步刷盘和异步刷盘" aria-hidden="true">#</a> 同步刷盘和异步刷盘</h3><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef387fba311cda.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示，在同步刷盘中需要等待一个刷盘成功的 <code>ACK</code> ，同步刷盘对 <code>MQ</code> 消息可靠性来说是一种不错的保障，但是 <strong>性能上会有较大影响</strong> ，一般地适用于金融等特定业务场景。</p><p>而异步刷盘往往是开启一个线程去异步地执行刷盘操作。消息刷盘采用后台异步线程提交的方式进行， <strong>降低了读写延迟</strong> ，提高了 <code>MQ</code> 的性能和吞吐量，一般适用于如发验证码等对于消息保证要求不太高的业务场景。</p><p>一般地，<strong>异步刷盘只有在 <code>Broker</code> 意外宕机的时候会丢失部分数据</strong>，你可以设置 <code>Broker</code> 的参数 <code>FlushDiskType</code> 来调整你的刷盘策略(ASYNC_FLUSH 或者 SYNC_FLUSH)。</p><h3 id="同步复制和异步复制" tabindex="-1"><a class="header-anchor" href="#同步复制和异步复制" aria-hidden="true">#</a> 同步复制和异步复制</h3><p>上面的同步刷盘和异步刷盘是在单个结点层面的，而同步复制和异步复制主要是指的 <code>Borker</code> 主从模式下，主节点返回消息给客户端的时候是否需要同步从节点。</p><ul><li>同步复制： 也叫 “同步双写”，也就是说，<strong>只有消息同步双写到主从节点上时才返回写入成功</strong> 。</li><li>异步复制： <strong>消息写入主节点之后就直接返回写入成功</strong> 。</li></ul><p>然而，很多事情是没有完美的方案的，就比如我们进行消息写入的节点越多就更能保证消息的可靠性，但是随之的性能也会下降，所以需要程序员根据特定业务场景去选择适应的主从复制方案。</p><p>那么，<strong>异步复制会不会也像异步刷盘那样影响消息的可靠性呢？</strong></p><p>答案是不会的，因为两者就是不同的概念，对于消息可靠性是通过不同的刷盘策略保证的，而像异步同步复制策略仅仅是影响到了 <strong>可用性</strong> 。为什么呢？其主要原因<strong>是 <code>RocketMQ</code> 是不支持自动主从切换的，当主节点挂掉之后，生产者就不能再给这个主节点生产消息了</strong>。</p><p>比如这个时候采用异步复制的方式，在主节点还未发送完需要同步的消息的时候主节点挂掉了，这个时候从节点就少了一部分消息。但是此时生产者无法再给主节点生产消息了，<strong>消费者可以自动切换到从节点进行消费</strong>(仅仅是消费)，所以在主节点挂掉的时间只会产生主从结点短暂的消息不一致的情况，降低了可用性，而当主节点重启之后，从节点那部分未来得及复制的消息还会继续复制。</p><p>在单主从架构中，如果一个主节点挂掉了，那么也就意味着整个系统不能再生产了。那么这个可用性的问题能否解决呢？<strong>一个主从不行那就多个主从的呗</strong>，别忘了在我们最初的架构图中，每个 <code>Topic</code> 是分布在不同 <code>Broker</code> 中的。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef38687488a5a4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是这种复制方式同样也会带来一个问题，那就是无法保证 <strong>严格顺序</strong> 。在上文中我们提到了如何保证的消息顺序性是通过将一个语义的消息发送在同一个队列中，使用 <code>Topic</code> 下的队列来保证顺序性的。如果此时我们主节点A负责的是订单A的一系列语义消息，然后它挂了，这样其他节点是无法代替主节点A的，如果我们任意节点都可以存入任何消息，那就没有顺序性可言了。</p><p>而在 <code>RocketMQ</code> 中采用了 <code>Dledger</code> 解决这个问题。他要求在写入消息的时候，要求<strong>至少消息复制到半数以上的节点之后</strong>，才给客⼾端返回写⼊成功，并且它是⽀持通过选举来动态切换主节点的。这里我就不展开说明了，读者可以自己去了解。</p><blockquote><p>也不是说 <code>Dledger</code> 是个完美的方案，至少在 <code>Dledger</code> 选举过程中是无法提供服务的，而且他必须要使用三个节点或以上，如果多数节点同时挂掉他也是无法保证可用性的，而且要求消息复制半数以上节点的效率和直接异步复制还是有一定的差距的。</p></blockquote><h3 id="存储机制" tabindex="-1"><a class="header-anchor" href="#存储机制" aria-hidden="true">#</a> 存储机制</h3><p>还记得上面我们一开始的三个问题吗？到这里第三个问题已经解决了。</p><p>但是，在 <code>Topic</code> 中的 <strong>队列是以什么样的形式存在的？队列中的消息又是如何进行存储持久化的呢？</strong> 还未解决，其实这里涉及到了 <code>RocketMQ</code> 是如何设计它的存储结构了。我首先想大家介绍 <code>RocketMQ</code> 消息存储架构中的三大角色——<code>CommitLog</code> 、<code>ConsumeQueue</code> 和 <code>IndexFile</code> 。</p><ul><li><code>CommitLog</code>： <strong>消息主体以及元数据的存储主体</strong>，存储 <code>Producer</code> 端写入的消息主体内容,消息内容不是定长的。单个文件大小默认1G ，文件名长度为20位，左边补零，剩余为起始偏移量，比如00000000000000000000代表了第一个文件，起始偏移量为0，文件大小为1G=1073741824；当第一个文件写满了，第二个文件为00000000001073741824，起始偏移量为1073741824，以此类推。消息主要是<strong>顺序写入日志文件</strong>，当文件满了，写入下一个文件。</li><li><code>ConsumeQueue</code>： 消息消费队列，<strong>引入的目的主要是提高消息消费的性能</strong>(我们再前面也讲了)，由于<code>RocketMQ</code> 是基于主题 <code>Topic</code> 的订阅模式，消息消费是针对主题进行的，如果要遍历 <code>commitlog</code> 文件中根据 <code>Topic</code> 检索消息是非常低效的。<code>Consumer</code> 即可根据 <code>ConsumeQueue</code> 来查找待消费的消息。其中，<code>ConsumeQueue</code>（逻辑消费队列）<strong>作为消费消息的索引</strong>，保存了指定 <code>Topic</code> 下的队列消息在 <code>CommitLog</code> 中的<strong>起始物理偏移量 <code>offset</code> <strong>，消息大小 <code>size</code> 和消息 <code>Tag</code> 的 <code>HashCode</code> 值。</strong><code>consumequeue</code> 文件可以看成是基于 <code>topic</code> 的 <code>commitlog</code> 索引文件</strong>，故 <code>consumequeue</code> 文件夹的组织方式如下：topic/queue/file三层组织结构，具体存储路径为：$HOME/store/consumequeue/{topic}/{queueId}/{fileName}。同样 <code>consumequeue</code> 文件采取定长设计，每一个条目共20个字节，分别为8字节的 <code>commitlog</code> 物理偏移量、4字节的消息长度、8字节tag <code>hashcode</code>，单个文件由30W个条目组成，可以像数组一样随机访问每一个条目，每个 <code>ConsumeQueue</code>文件大小约5.72M；</li><li><code>IndexFile</code>： <code>IndexFile</code>（索引文件）提供了一种可以通过key或时间区间来查询消息的方法。这里只做科普不做详细介绍。</li></ul><p>总结来说，整个消息存储的结构，最主要的就是 <code>CommitLoq</code> 和 <code>ConsumeQueue</code> 。而 <code>ConsumeQueue</code> 你可以大概理解为 <code>Topic</code> 中的队列。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef3884c02acc72.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>RocketMQ</code> 采用的是 <strong>混合型的存储结构</strong> ，即为 <code>Broker</code> 单个实例下所有的队列共用一个日志数据文件来存储消息。有意思的是在同样高并发的 <code>Kafka</code> 中会为每个 <code>Topic</code> 分配一个存储文件。这就有点类似于我们有一大堆书需要装上书架，<code>RockeMQ</code> 是不分书的种类直接成批的塞上去的，而 <code>Kafka</code> 是将书本放入指定的分类区域的。</p><p>而 <code>RocketMQ</code> 为什么要这么做呢？原因是 <strong>提高数据的写入效率</strong> ，不分 <code>Topic</code> 意味着我们有更大的几率获取 <strong>成批</strong> 的消息进行数据写入，但也会带来一个麻烦就是读取消息的时候需要遍历整个大文件，这是非常耗时的。</p><p>所以，在 <code>RocketMQ</code> 中又使用了 <code>ConsumeQueue</code> 作为每个队列的索引文件来 <strong>提升读取消息的效率</strong>。我们可以直接根据队列的消息序号，计算出索引的全局位置（索引序号*索引固定⻓度20），然后直接读取这条索引，再根据索引中记录的消息的全局位置，找到消息。</p><p>讲到这里，你可能对 <code>RockeMQ</code> 的存储架构还有些模糊，没事，我们结合着图来理解一下。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/16ef388763c25c62.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>emmm，是不是有一点复杂🤣，看英文图片和英文文档的时候就不要怂，硬着头皮往下看就行。</p><blockquote><p>如果上面没看懂的读者一定要认真看下面的流程分析！</p></blockquote><p>首先，在最上面的那一块就是我刚刚讲的你现在可以直接 <strong>把 <code>ConsumerQueue</code> 理解为 <code>Queue</code></strong>。</p><p>在图中最左边说明了红色方块代表被写入的消息，虚线方块代表等待被写入的。左边的生产者发送消息会指定 <code>Topic</code> 、<code>QueueId</code> 和具体消息内容，而在 <code>Broker</code> 中管你是哪门子消息，他直接 <strong>全部顺序存储到了 CommitLog</strong>。而根据生产者指定的 <code>Topic</code> 和 <code>QueueId</code> 将这条消息本身在 <code>CommitLog</code> 的偏移(offset)，消息本身大小，和tag的hash值存入对应的 <code>ConsumeQueue</code> 索引文件中。而在每个队列中都保存了 <code>ConsumeOffset</code> 即每个消费者组的消费位置(我在架构那里提到了，忘了的同学可以回去看一下)，而消费者拉取消息进行消费的时候只需要根据 <code>ConsumeOffset</code> 获取下一个未被消费的消息就行了。</p><p>上述就是我对于整个消息存储架构的大概理解(这里不涉及到一些细节讨论，比如稀疏索引等等问题)，希望对你有帮助。</p><p>因为有一个知识点因为写嗨了忘讲了，想想在哪里加也不好，所以我留给大家去思考🤔🤔一下吧。</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/e314ee45gy1g05zgr67bbj20gp0b3aba.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>为什么 <code>CommitLog</code> 文件要设计成固定大小的长度呢？提醒：<strong>内存映射机制</strong>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>总算把这篇博客写完了。我讲的你们还记得吗😅？</p><p>这篇文章中我主要想大家介绍了</p><ol><li>消息队列出现的原因</li><li>消息队列的作用(异步，解耦，削峰)</li><li>消息队列带来的一系列问题(消息堆积、重复消费、顺序消费、分布式事务等等)</li><li>消息队列的两种消息模型——队列和主题模式</li><li>分析了 <code>RocketMQ</code> 的技术架构(<code>NameServer</code> 、<code>Broker</code> 、<code>Producer</code> 、<code>Comsumer</code>)</li><li>结合 <code>RocketMQ</code> 回答了消息队列副作用的解决方案</li><li>介绍了 <code>RocketMQ</code> 的存储机制和刷盘策略。</li></ol><p>等等。。。</p><blockquote><p>如果喜欢可以点赞哟👍👍👍。</p></blockquote>',210);function f(h,m){const c=d("ExternalLinkIcon");return t(),n("div",null,[a,o("blockquote",null,[p,o("p",null,[o("a",l,[e("本文由 FrancisQ 老哥投稿！"),s(c)])])]),u])}const y=r(g,[["render",f],["__file","rocketmq-intro.html.vue"]]);export{y as default};