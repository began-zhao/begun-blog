const e=JSON.parse('{"key":"v-69c7472a","path":"/code/java/cs-basics/operating-system/operating-system-basic-questions-01.html","title":"操作系统常见面试题总结","lang":"zh-CN","frontmatter":{"title":"操作系统常见面试题总结","date":"2021-12-13T00:00:00.000Z","category":"计算机基础","tag":["操作系统"],"description":"很多读者抱怨计算操作系统的知识点比较繁杂，自己也没有多少耐心去看，但是面试的时候又经常会遇到。所以，我带着我整理好的操作系统的常见问题来啦！这篇文章总结了一些我觉得比较重要的操作系统相关的问题比如进程管理、内存管理、虚拟内存等等。 文章形式通过大部分比较喜欢的面试官和求职者之间的对话形式展开。另外，Guide 哥 也只是在大学的时候学习过操作系统，不过基本都忘了，为了写这篇文章这段时间看了很多相关的书籍和博客。如果文中有任何需要补充和完善的地方，你都可以在 issue 中指出！","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/cs-basics/operating-system/operating-system-basic-questions-01.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"操作系统常见面试题总结"}],["meta",{"property":"og:description","content":"很多读者抱怨计算操作系统的知识点比较繁杂，自己也没有多少耐心去看，但是面试的时候又经常会遇到。所以，我带着我整理好的操作系统的常见问题来啦！这篇文章总结了一些我觉得比较重要的操作系统相关的问题比如进程管理、内存管理、虚拟内存等等。 文章形式通过大部分比较喜欢的面试官和求职者之间的对话形式展开。另外，Guide 哥 也只是在大学的时候学习过操作系统，不过基本都忘了，为了写这篇文章这段时间看了很多相关的书籍和博客。如果文中有任何需要补充和完善的地方，你都可以在 issue 中指出！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:published_time","content":"2021-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作系统常见面试题总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"一 操作系统基础","slug":"一-操作系统基础","link":"#一-操作系统基础","children":[{"level":3,"title":"1.1 什么是操作系统？","slug":"_1-1-什么是操作系统","link":"#_1-1-什么是操作系统","children":[]},{"level":3,"title":"1.2 系统调用","slug":"_1-2-系统调用","link":"#_1-2-系统调用","children":[]}]},{"level":2,"title":"二 进程和线程","slug":"二-进程和线程","link":"#二-进程和线程","children":[{"level":3,"title":"2.1 进程和线程的区别","slug":"_2-1-进程和线程的区别","link":"#_2-1-进程和线程的区别","children":[]},{"level":3,"title":"2.2 进程有哪几种状态?","slug":"_2-2-进程有哪几种状态","link":"#_2-2-进程有哪几种状态","children":[]},{"level":3,"title":"2.3 进程间的通信方式","slug":"_2-3-进程间的通信方式","link":"#_2-3-进程间的通信方式","children":[]},{"level":3,"title":"2.4 线程间的同步的方式","slug":"_2-4-线程间的同步的方式","link":"#_2-4-线程间的同步的方式","children":[]},{"level":3,"title":"2.5 进程的调度算法","slug":"_2-5-进程的调度算法","link":"#_2-5-进程的调度算法","children":[]},{"level":3,"title":"2.6 什么是死锁","slug":"_2-6-什么是死锁","link":"#_2-6-什么是死锁","children":[]},{"level":3,"title":"2.7 死锁的四个条件","slug":"_2-7-死锁的四个条件","link":"#_2-7-死锁的四个条件","children":[]},{"level":3,"title":"2.8 解决死锁的方法","slug":"_2-8-解决死锁的方法","link":"#_2-8-解决死锁的方法","children":[]}]},{"level":2,"title":"三 操作系统内存管理基础","slug":"三-操作系统内存管理基础","link":"#三-操作系统内存管理基础","children":[{"level":3,"title":"3.1 内存管理介绍","slug":"_3-1-内存管理介绍","link":"#_3-1-内存管理介绍","children":[]},{"level":3,"title":"3.2 常见的几种内存管理机制","slug":"_3-2-常见的几种内存管理机制","link":"#_3-2-常见的几种内存管理机制","children":[]},{"level":3,"title":"3.3 快表和多级页表","slug":"_3-3-快表和多级页表","link":"#_3-3-快表和多级页表","children":[]},{"level":3,"title":"3.4 分页机制和分段机制的共同点和区别","slug":"_3-4-分页机制和分段机制的共同点和区别","link":"#_3-4-分页机制和分段机制的共同点和区别","children":[]},{"level":3,"title":"3.5 逻辑(虚拟)地址和物理地址","slug":"_3-5-逻辑-虚拟-地址和物理地址","link":"#_3-5-逻辑-虚拟-地址和物理地址","children":[]},{"level":3,"title":"3.6 CPU 寻址了解吗?为什么需要虚拟地址空间?","slug":"_3-6-cpu-寻址了解吗-为什么需要虚拟地址空间","link":"#_3-6-cpu-寻址了解吗-为什么需要虚拟地址空间","children":[]}]},{"level":2,"title":"四 虚拟内存","slug":"四-虚拟内存","link":"#四-虚拟内存","children":[{"level":3,"title":"4.1 什么是虚拟内存(Virtual Memory)?","slug":"_4-1-什么是虚拟内存-virtual-memory","link":"#_4-1-什么是虚拟内存-virtual-memory","children":[]},{"level":3,"title":"4.2 局部性原理","slug":"_4-2-局部性原理","link":"#_4-2-局部性原理","children":[]},{"level":3,"title":"4.3 虚拟存储器","slug":"_4-3-虚拟存储器","link":"#_4-3-虚拟存储器","children":[]},{"level":3,"title":"4.4 虚拟内存的技术实现","slug":"_4-4-虚拟内存的技术实现","link":"#_4-4-虚拟内存的技术实现","children":[]},{"level":3,"title":"4.5 页面置换算法","slug":"_4-5-页面置换算法","link":"#_4-5-页面置换算法","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":40.84,"words":12252},"filePathRelative":"code/java/cs-basics/operating-system/operating-system-basic-questions-01.md","localizedDate":"2021年12月13日","excerpt":"<p>很多读者抱怨计算操作系统的知识点比较繁杂，自己也没有多少耐心去看，但是面试的时候又经常会遇到。所以，我带着我整理好的操作系统的常见问题来啦！这篇文章总结了一些我觉得比较重要的操作系统相关的问题比如<strong>进程管理</strong>、<strong>内存管理</strong>、<strong>虚拟内存</strong>等等。</p>\\n<p>文章形式通过大部分比较喜欢的面试官和求职者之间的对话形式展开。另外，Guide 哥 也只是在大学的时候学习过操作系统，不过基本都忘了，为了写这篇文章这段时间看了很多相关的书籍和博客。如果文中有任何需要补充和完善的地方，你都可以在 issue 中指出！</p>","autoDesc":true}');export{e as data};
