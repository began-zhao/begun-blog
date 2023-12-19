const e=JSON.parse('{"key":"v-53e419f0","path":"/interview/Design-Pattern-FAQ.html","title":"设计模式部分","lang":"zh-CN","frontmatter":{"title":"设计模式部分","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"使用UML类图画出原型模式核心角色 原型设计模式的深拷贝和浅拷贝是什么，并写出深拷贝的两种方式的源码(重写 clone 方法实现深拷贝、使用序列化来实现深拷贝 设计模式的七大原则 在 Spring 框架中哪里使用到原型模式，并对源码进行分析 介绍解释器设计模式是什么? 1. 什么是设计模式？你是否在你的代码里面使用过任何设计模式？ 软件设计模式（Software Design Pattern），又称设计模式，是指在软件开发中，经过验证的，用于解决在特定环境下、重复出现的、特定问题的解决方案。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/interview/Design-Pattern-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"设计模式部分"}],["meta",{"property":"og:description","content":"使用UML类图画出原型模式核心角色 原型设计模式的深拷贝和浅拷贝是什么，并写出深拷贝的两种方式的源码(重写 clone 方法实现深拷贝、使用序列化来实现深拷贝 设计模式的七大原则 在 Spring 框架中哪里使用到原型模式，并对源码进行分析 介绍解释器设计模式是什么? 1. 什么是设计模式？你是否在你的代码里面使用过任何设计模式？ 软件设计模式（Software Design Pattern），又称设计模式，是指在软件开发中，经过验证的，用于解决在特定环境下、重复出现的、特定问题的解决方案。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式部分\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"1. 什么是设计模式？你是否在你的代码里面使用过任何设计模式？","slug":"_1-什么是设计模式-你是否在你的代码里面使用过任何设计模式","link":"#_1-什么是设计模式-你是否在你的代码里面使用过任何设计模式","children":[]},{"level":3,"title":"2. 请列举出在 JDK 中几个常用的设计模式？","slug":"_2-请列举出在-jdk-中几个常用的设计模式","link":"#_2-请列举出在-jdk-中几个常用的设计模式","children":[]},{"level":3,"title":"3. Java 中什么叫单例设计模式？请用 Java 写出线程安全的单例模式","slug":"_3-java-中什么叫单例设计模式-请用-java-写出线程安全的单例模式","link":"#_3-java-中什么叫单例设计模式-请用-java-写出线程安全的单例模式","children":[]},{"level":3,"title":"单例模式的 7 种写法：懒汉 2 种，枚举，饿汉 2 种，静态内部类，双重校验锁（推荐）。","slug":"单例模式的-7-种写法-懒汉-2-种-枚举-饿汉-2-种-静态内部类-双重校验锁-推荐-。","link":"#单例模式的-7-种写法-懒汉-2-种-枚举-饿汉-2-种-静态内部类-双重校验锁-推荐-。","children":[]},{"level":3,"title":"4. 在 Java 中，什么叫观察者设计模式（observer design pattern ）？","slug":"_4-在-java-中-什么叫观察者设计模式-observer-design-pattern","link":"#_4-在-java-中-什么叫观察者设计模式-observer-design-pattern","children":[]},{"level":3,"title":"5. 使用工厂模式最主要的好处是什么？在哪里使用？","slug":"_5-使用工厂模式最主要的好处是什么-在哪里使用","link":"#_5-使用工厂模式最主要的好处是什么-在哪里使用","children":[]},{"level":3,"title":"6. 举一个用 Java 实现的装饰模式(decorator design pattern) ？它是作用于对象层次还是类层次？","slug":"_6-举一个用-java-实现的装饰模式-decorator-design-pattern-它是作用于对象层次还是类层次","link":"#_6-举一个用-java-实现的装饰模式-decorator-design-pattern-它是作用于对象层次还是类层次","children":[]},{"level":3,"title":"7. 在 Java 中，为什么不允许从静态方法中访问非静态变量？","slug":"_7-在-java-中-为什么不允许从静态方法中访问非静态变量","link":"#_7-在-java-中-为什么不允许从静态方法中访问非静态变量","children":[]},{"level":3,"title":"8. 设计一个 ATM 机，请说出你的设计思路？","slug":"_8-设计一个-atm-机-请说出你的设计思路","link":"#_8-设计一个-atm-机-请说出你的设计思路","children":[]},{"level":3,"title":"9. 在 Java 中，什么时候用重载，什么时候用重写？","slug":"_9-在-java-中-什么时候用重载-什么时候用重写","link":"#_9-在-java-中-什么时候用重载-什么时候用重写","children":[]},{"level":3,"title":"10. 举例说明什么情况下会更倾向于使用抽象类而不是接口？","slug":"_10-举例说明什么情况下会更倾向于使用抽象类而不是接口","link":"#_10-举例说明什么情况下会更倾向于使用抽象类而不是接口","children":[]},{"level":3,"title":"Spring 当中用到了哪些设计模式？","slug":"spring-当中用到了哪些设计模式","link":"#spring-当中用到了哪些设计模式","children":[]},{"level":3,"title":"在工作中遇到过哪些设计模式，是如何应用的","slug":"在工作中遇到过哪些设计模式-是如何应用的","link":"#在工作中遇到过哪些设计模式-是如何应用的","children":[]},{"level":3,"title":"简述一下你了解的 Java 设计模式（总结）","slug":"简述一下你了解的-java-设计模式-总结","link":"#简述一下你了解的-java-设计模式-总结","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":11.91,"words":3573},"filePathRelative":"interview/Design-Pattern-FAQ.md","localizedDate":"2020年11月23日","excerpt":"<blockquote>\\n<p>使用UML类图画出原型模式核心角色</p>\\n<p>原型设计模式的深拷贝和浅拷贝是什么，并写出深拷贝的两种方式的源码(重写 clone 方法实现深拷贝、使用序列化来实现深拷贝</p>\\n<p>设计模式的七大原则</p>\\n<p>在 Spring 框架中哪里使用到原型模式，并对源码进行分析</p>\\n<p>介绍解释器设计模式是什么?</p>\\n</blockquote>\\n<h3> 1. 什么是设计模式？你是否在你的代码里面使用过任何设计模式？</h3>\\n<p>软件设计模式（Software Design Pattern），又称设计模式，是指在软件开发中，经过验证的，用于解决在特定环境下、重复出现的、特定问题的<strong>解决方案</strong>。</p>","autoDesc":true}');export{e as data};
