const e=JSON.parse('{"key":"v-71d6ecd6","path":"/code/java/common/concurrent/java-concurrent-questions-01.html","title":"Java 并发常见知识点&面试题总结（基础篇）","lang":"zh-CN","frontmatter":{"title":"Java 并发常见知识点&面试题总结（基础篇）","date":"2020-08-19T00:00:00.000Z","category":"Java","tag":["Java并发"],"description":"什么是线程和进程? 何为进程? 进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。 在 Java 中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而 main 函数所在的线程就是这个进程中的一个线程，也称主线程。 如下图所示，在 windows 中通过查看任务...","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/common/concurrent/java-concurrent-questions-01.html"}],["meta",{"property":"og:site_name","content":"咖飞"}],["meta",{"property":"og:title","content":"Java 并发常见知识点&面试题总结（基础篇）"}],["meta",{"property":"og:description","content":"什么是线程和进程? 何为进程? 进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。 在 Java 中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而 main 函数所在的线程就是这个进程中的一个线程，也称主线程。 如下图所示，在 windows 中通过查看任务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:published_time","content":"2020-08-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 并发常见知识点&面试题总结（基础篇）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"什么是线程和进程?","slug":"什么是线程和进程","link":"#什么是线程和进程","children":[{"level":3,"title":"何为进程?","slug":"何为进程","link":"#何为进程","children":[]},{"level":3,"title":"何为线程?","slug":"何为线程","link":"#何为线程","children":[]}]},{"level":2,"title":"请简要描述线程与进程的关系,区别及优缺点？","slug":"请简要描述线程与进程的关系-区别及优缺点","link":"#请简要描述线程与进程的关系-区别及优缺点","children":[{"level":3,"title":"图解进程和线程的关系","slug":"图解进程和线程的关系","link":"#图解进程和线程的关系","children":[]},{"level":3,"title":"程序计数器为什么是私有的?","slug":"程序计数器为什么是私有的","link":"#程序计数器为什么是私有的","children":[]},{"level":3,"title":"虚拟机栈和本地方法栈为什么是私有的?","slug":"虚拟机栈和本地方法栈为什么是私有的","link":"#虚拟机栈和本地方法栈为什么是私有的","children":[]},{"level":3,"title":"一句话简单了解堆和方法区","slug":"一句话简单了解堆和方法区","link":"#一句话简单了解堆和方法区","children":[]}]},{"level":2,"title":"说说并发与并行的区别?","slug":"说说并发与并行的区别","link":"#说说并发与并行的区别","children":[]},{"level":2,"title":"为什么要使用多线程呢?","slug":"为什么要使用多线程呢","link":"#为什么要使用多线程呢","children":[]},{"level":2,"title":"使用多线程可能带来什么问题?","slug":"使用多线程可能带来什么问题","link":"#使用多线程可能带来什么问题","children":[]},{"level":2,"title":"说说线程的生命周期和状态?","slug":"说说线程的生命周期和状态","link":"#说说线程的生命周期和状态","children":[]},{"level":2,"title":"什么是上下文切换?","slug":"什么是上下文切换","link":"#什么是上下文切换","children":[]},{"level":2,"title":"什么是线程死锁?如何避免死锁?","slug":"什么是线程死锁-如何避免死锁","link":"#什么是线程死锁-如何避免死锁","children":[{"level":3,"title":"认识线程死锁","slug":"认识线程死锁","link":"#认识线程死锁","children":[]},{"level":3,"title":"如何预防和避免线程死锁?","slug":"如何预防和避免线程死锁","link":"#如何预防和避免线程死锁","children":[]}]},{"level":2,"title":"说说 sleep() 方法和 wait() 方法区别和共同点?","slug":"说说-sleep-方法和-wait-方法区别和共同点","link":"#说说-sleep-方法和-wait-方法区别和共同点","children":[]},{"level":2,"title":"为什么我们调用 start() 方法时会执行 run() 方法，为什么我们不能直接调用 run() 方法？","slug":"为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法","link":"#为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":15.5,"words":4650},"filePathRelative":"code/java/common/concurrent/java-concurrent-questions-01.md","localizedDate":"2020年8月19日","excerpt":"","autoDesc":true}');export{e as data};