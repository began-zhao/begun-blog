import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as n,c as l,a as o,b as s,e,f as t}from"./app-HyF_wsaK.js";const p="/assets/paxos-made-simple-L9ik01kM.png",c={},h=o("h2",{id:"背景",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#背景","aria-hidden":"true"},"#"),s(" 背景")],-1),d=o("h2",{id:"paxos-算法介绍",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#paxos-算法介绍","aria-hidden":"true"},"#"),s(" Paxos 算法介绍")],-1),x={href:"https://zh.wikipedia.org/wiki/%E8%8E%B1%E6%96%AF%E5%88%A9%C2%B7%E5%85%B0%E4%BC%AF%E7%89%B9",target:"_blank",rel:"noopener noreferrer"},u=o("strong",null,"1990",-1),P=o("strong",null,"共识",-1),g=o("p",null,"为了介绍 Paxos 算法，兰伯特专门写了一篇幽默风趣的论文。在这篇论文中，他虚拟了一个叫做 Paxos 的希腊城邦来更形象化地介绍 Paxos 算法。",-1),_=o("p",null,"不过，审稿人并不认可这篇论文的幽默。于是，他们就给兰伯特说：“如果你想要成功发表这篇论文的话，必须删除所有 Paxos 相关的故事背景”。兰伯特一听就不开心了：“我凭什么修改啊，你们这些审稿人就是缺乏幽默细胞，发不了就不发了呗！”。",-1),f=o("p",null,"于是乎，提出 Paxos 算法的那篇论文在当时并没有被成功发表。",-1),m=o("strong",null,"1998",-1),b={href:"http://lamport.azurewebsites.net/pubs/lamport-paxos.pdf",target:"_blank",rel:"noopener noreferrer"},B=o("strong",null,"2001",-1),k={href:"http://lamport.azurewebsites.net/pubs/paxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"},E=t('<p>《Paxos Made Simple》这篇论文就 14 页，相比于 《The Part-Time Parliament》的33 页精简了不少。最关键的是这篇论文的摘要就一句话：</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>The Paxos algorithm, when presented in plain English, is very simple.</p></blockquote><p>翻译过来的意思大概就是：当我用无修饰的英文来描述时，Paxos 算法真心简单！</p><p>有没有感觉到来自兰伯特大佬满满地嘲讽的味道？</p><p>兰伯特当时提出的 Paxos 算法主要包含 2 个部分:</p><ul><li><strong>Basic Paxos 算法</strong> ： 描述的是多节点之间如何就某个值(提案 Value)达成共识。</li><li><strong>Multi-Paxos 思想</strong> ： 描述的是执行多个 Basic Paxos 实例，就一系列值达成共识。Multi-Paxos 说白了就是执行多次 Basic Paxos ，核心还是 Basic Paxos 。</li></ul>',7),M={href:"https://javaguide.cn/distributed-system/theorem&algorithm&protocol/raft-algorithm.html",target:"_blank",rel:"noopener noreferrer"},w=t('<p>针对没有恶意节点的情况，除了 Raft 算法之外，当前最常用的一些共识算法比如 ZAB 协议、 Fast Paxos 算法都是基于 Paxos 算法改进的。</p><p>针对存在恶意节点的情况，一般使用的是工作量证明（POW，Proof-of-Work）、权益证明（PoS，Proof-of-Stake ）等共识算法。这类共识算法最典型的应用就是区块链，就比如说前段时间以太坊官方宣布其共识机制正在从工作量证明(PoW)转变为权益证明(PoS)。</p><p>区块链系统使用的共识算法需要解决的核心问题是 <strong>拜占庭将军问题</strong> ，这和我们日常接触到的 ZooKeeper、Etcd、Consul 等分布式中间件不太一样。</p><p>下面我们来对 Paxos 算法的定义做一个总结：</p><ul><li>Paxos 算法是兰伯特在 <strong>1990</strong> 年提出了一种分布式系统共识算法。</li><li>兰伯特当时提出的 Paxos 算法主要包含 2 个部分:Basic Paxos 算法和Multi-Paxos 思想。</li><li>Raft 算法、ZAB 协议、 Fast Paxos 算法都是基于 Paxos 算法改进而来。</li></ul><h2 id="一致性-consistency-与共识-consensus" tabindex="-1"><a class="header-anchor" href="#一致性-consistency-与共识-consensus" aria-hidden="true">#</a> 一致性（Consistency）与共识（Consensus）</h2><p>很多人会误把 Paxos 看作是一致性算法，这其实是一个非常大的误区。</p><p>⚠️注意：<strong>Paxos 不是一致性算法而是共识算法，一致性和共识并不是一个概念。</strong></p><h2 id="basic-paxos-算法" tabindex="-1"><a class="header-anchor" href="#basic-paxos-算法" aria-hidden="true">#</a> Basic Paxos 算法</h2><p>Basic Paxos 中存在 3 个重要的角色：</p><ol><li><strong>提议者（Proposer）</strong>：也可以叫做协调者（coordinator），提议者负责接受客户端发起的提议，然后尝试让接受者接受该提议，同时保证即使多个提议者的提议之间产生了冲突，那么算法都能进行下去；</li><li><strong>接受者（Acceptor）</strong>：也可以叫做投票员（voter），负责对提议者的提议投票，同时需要记住自己的投票历史；</li><li><strong>学习者（Learner）</strong>：如果有超过半数接受者就某个提议达成了共识，那么学习者就需要接受这个提议，并就该提议作出运算，然后将运算结果返回给客户端。</li></ol><figure><img src="https://img-blog.csdnimg.cn/20210603145613753.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="multi-paxos-思想" tabindex="-1"><a class="header-anchor" href="#multi-paxos-思想" aria-hidden="true">#</a> Multi Paxos 思想</h2><p>因为兰伯特提到的 Multi-Paxos 思想，缺少代码实现的必要细节(比如怎么选举领导者)，所以在理解上比较难。</p><p>⚠️<strong>注意</strong> ： Multi-Paxos 只是一种思想，这种思想的核心就是通过多个 Basic Paxos 实例就一系列值达成共识。</p><p>二阶段提交是达成共识常用的方式，Basic Paxos 就是通过二阶段提交的方式来达成共识。Basic Paxos 还支持容错，少于一般的节点出现故障时，集群也能正常工作。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>https://zh.wikipedia.org/wiki/Paxos</li><li>分布式系统中的一致性与共识算法：http://www.xuyasong.com/?p=1970</li></ul>',18);function y(C,S){const a=r("ExternalLinkIcon");return n(),l("div",null,[h,d,o("p",null,[s("Paxos 算法是 Leslie Lamport（"),o("a",x,[s("莱斯利·兰伯特"),e(a)]),s("）在 "),u,s(" 年提出了一种分布式系统 "),P,s(" 算法。这也是第一个被证明完备的共识算法（前提是不存在拜占庭将军问题，也就是没有恶意节点）。")]),g,_,f,o("p",null,[s("直到 1998 年，系统研究中心 (Systems Research Center，SRC）的两个技术研究员需要找一些合适的分布式算法来服务他们正在构建的分布式系统，Paxos 算法刚好可以解决他们的部分需求。因此，兰伯特就把论文发给了他们。在看了论文之后，这俩大佬觉得论文还是挺不错的。于是，兰伯特在 "),m,s(" 年重新发表论文 "),o("a",b,[s("《The Part-Time Parliament》"),e(a)]),s("。")]),o("p",null,[s("论文发表之后，各路学者直呼看不懂，言语中还略显调侃之意。这谁忍得了，在 "),B,s(" 年的时候，兰伯特专门又写了一篇 "),o("a",k,[s("《Paxos Made Simple》"),e(a)]),s(" 的论文来简化对 Paxos 的介绍，主要讲述两阶段共识协议部分，顺便还不忘嘲讽一下这群学者。")]),E,o("p",null,[s("由于 Paxos 算法在国际上被公认的非常难以理解和实现，因此不断有人尝试简化这一算法。到了2013 年才诞生了一个比 Paxos 算法更易理解和实现的共识算法—"),o("a",M,[s("Raft 算法"),e(a)]),s(" 。更具体点来说，Raft 是Multi-Paxos的一个变种，其简化了 Multi-Paxos 的思想，变得更容易被理解以及工程实现。")]),w])}const z=i(c,[["render",y],["__file","paxos-algorithm.html.vue"]]);export{z as default};
