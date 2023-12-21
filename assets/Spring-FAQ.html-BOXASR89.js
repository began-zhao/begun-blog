const e=JSON.parse('{"key":"v-9a4c3448","path":"/interview/Spring-FAQ.html","title":"Spring 部分","lang":"zh-CN","frontmatter":{"title":"Spring 部分","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"基于Spring Framework 4.x 总结的常见面试题，系统学习建议还是官方文档走起：https://spring.io/projects/spring-framework#learn 一、一般问题 开发中主要使用 Spring 的什么技术 ? 1. IOC 容器管理各层的组件 2. 使用 AOP 配置声明式事务 3. 整合其他框架 使用 Sp...","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/interview/Spring-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞"}],["meta",{"property":"og:title","content":"Spring 部分"}],["meta",{"property":"og:description","content":"基于Spring Framework 4.x 总结的常见面试题，系统学习建议还是官方文档走起：https://spring.io/projects/spring-framework#learn 一、一般问题 开发中主要使用 Spring 的什么技术 ? 1. IOC 容器管理各层的组件 2. 使用 AOP 配置声明式事务 3. 整合其他框架 使用 Sp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 部分\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"一、一般问题","slug":"一、一般问题","link":"#一、一般问题","children":[{"level":3,"title":"开发中主要使用 Spring 的什么技术 ?","slug":"开发中主要使用-spring-的什么技术","link":"#开发中主要使用-spring-的什么技术","children":[]},{"level":3,"title":"使用 Spring 框架能带来哪些好处?","slug":"使用-spring-框架能带来哪些好处","link":"#使用-spring-框架能带来哪些好处","children":[]},{"level":3,"title":"Spring有哪些优点？","slug":"spring有哪些优点","link":"#spring有哪些优点","children":[]},{"level":3,"title":"Spring模块","slug":"spring模块","link":"#spring模块","children":[]},{"level":3,"title":"简述 AOP 和 IOC 概念","slug":"简述-aop-和-ioc-概念","link":"#简述-aop-和-ioc-概念","children":[]}]},{"level":2,"title":"二、依赖注入","slug":"二、依赖注入","link":"#二、依赖注入","children":[{"level":3,"title":"什么是 Spring IOC 容器？","slug":"什么是-spring-ioc-容器","link":"#什么是-spring-ioc-容器","children":[]},{"level":3,"title":"什么是依赖注入？","slug":"什么是依赖注入","link":"#什么是依赖注入","children":[]},{"level":3,"title":"Spring 中有多少种 IOC 容器？","slug":"spring-中有多少种-ioc-容器","link":"#spring-中有多少种-ioc-容器","children":[]},{"level":3,"title":"BeanFactory 和 ApplicationContext 区别","slug":"beanfactory-和-applicationcontext-区别","link":"#beanfactory-和-applicationcontext-区别","children":[]},{"level":3,"title":"列举 IoC 的一些好处","slug":"列举-ioc-的一些好处","link":"#列举-ioc-的一些好处","children":[]},{"level":3,"title":"Spring IoC 的实现机制","slug":"spring-ioc-的实现机制","link":"#spring-ioc-的实现机制","children":[]},{"level":3,"title":"请举例说明如何在 Spring 中注入一个 Java Collection?","slug":"请举例说明如何在-spring-中注入一个-java-collection","link":"#请举例说明如何在-spring-中注入一个-java-collection","children":[]}]},{"level":2,"title":"三、Beans","slug":"三、beans","link":"#三、beans","children":[{"level":3,"title":"什么是 Spring Beans？","slug":"什么是-spring-beans","link":"#什么是-spring-beans","children":[]},{"level":3,"title":"Spring 提供了哪些配置方式？","slug":"spring-提供了哪些配置方式","link":"#spring-提供了哪些配置方式","children":[]},{"level":3,"title":"Spring Bean的作用域？","slug":"spring-bean的作用域","link":"#spring-bean的作用域","children":[]},{"level":3,"title":"Spring 框架中的单例 Beans 是线程安全的么?","slug":"spring-框架中的单例-beans-是线程安全的么","link":"#spring-框架中的单例-beans-是线程安全的么","children":[]},{"level":3,"title":"Spring bean 容器的生命周期是什么样的？","slug":"spring-bean-容器的生命周期是什么样的","link":"#spring-bean-容器的生命周期是什么样的","children":[]},{"level":3,"title":"在 Spring 中如何配置 Bean?","slug":"在-spring-中如何配置-bean","link":"#在-spring-中如何配置-bean","children":[]},{"level":3,"title":"什么是 Spring 装配","slug":"什么是-spring-装配","link":"#什么是-spring-装配","children":[]},{"level":3,"title":"什么是bean自动装配？","slug":"什么是bean自动装配","link":"#什么是bean自动装配","children":[]},{"level":3,"title":"自动装配有什么局限？","slug":"自动装配有什么局限","link":"#自动装配有什么局限","children":[]},{"level":3,"title":"通过注解的方式配置bean | 什么是基于注解的容器配置","slug":"通过注解的方式配置bean-什么是基于注解的容器配置","link":"#通过注解的方式配置bean-什么是基于注解的容器配置","children":[]},{"level":3,"title":"如何在 spring 中启动注解装配？","slug":"如何在-spring-中启动注解装配","link":"#如何在-spring-中启动注解装配","children":[]}]},{"level":2,"title":"四、AOP","slug":"四、aop","link":"#四、aop","children":[{"level":3,"title":"什么是 AOP？","slug":"什么是-aop","link":"#什么是-aop","children":[]},{"level":3,"title":"AOP 术语","slug":"aop-术语","link":"#aop-术语","children":[]},{"level":3,"title":"有哪写类型的通知（Advice） | 用 AspectJ 注解声明切面","slug":"有哪写类型的通知-advice-用-aspectj-注解声明切面","link":"#有哪写类型的通知-advice-用-aspectj-注解声明切面","children":[]},{"level":3,"title":"AOP 有哪些实现方式？","slug":"aop-有哪些实现方式","link":"#aop-有哪些实现方式","children":[]},{"level":3,"title":"Spring AOP 实现原理","slug":"spring-aop-实现原理","link":"#spring-aop-实现原理","children":[]},{"level":3,"title":"有哪些不同的AOP实现","slug":"有哪些不同的aop实现","link":"#有哪些不同的aop实现","children":[]},{"level":3,"title":"Spring AOP and AspectJ AOP 有什么区别？","slug":"spring-aop-and-aspectj-aop-有什么区别","link":"#spring-aop-and-aspectj-aop-有什么区别","children":[]},{"level":3,"title":"过滤器和拦截器的区别","slug":"过滤器和拦截器的区别","link":"#过滤器和拦截器的区别","children":[]}]},{"level":2,"title":"五、数据访问","slug":"五、数据访问","link":"#五、数据访问","children":[{"level":3,"title":"Spring对JDBC的支持","slug":"spring对jdbc的支持","link":"#spring对jdbc的支持","children":[]},{"level":3,"title":"Spring 支持哪些 ORM 框架","slug":"spring-支持哪些-orm-框架","link":"#spring-支持哪些-orm-框架","children":[]}]},{"level":2,"title":"六、事务","slug":"六、事务","link":"#六、事务","children":[{"level":3,"title":"Spring 中的事务管理","slug":"spring-中的事务管理","link":"#spring-中的事务管理","children":[]},{"level":3,"title":"事务管理器","slug":"事务管理器","link":"#事务管理器","children":[]},{"level":3,"title":"用事务通知声明式地管理事务","slug":"用事务通知声明式地管理事务","link":"#用事务通知声明式地管理事务","children":[]},{"level":3,"title":"用 @Transactional 注解声明式地管理事务","slug":"用-transactional-注解声明式地管理事务","link":"#用-transactional-注解声明式地管理事务","children":[]},{"level":3,"title":"事务传播属性","slug":"事务传播属性","link":"#事务传播属性","children":[]},{"level":3,"title":"Spring 支持的事务隔离级别","slug":"spring-支持的事务隔离级别","link":"#spring-支持的事务隔离级别","children":[]},{"level":3,"title":"设置隔离事务属性","slug":"设置隔离事务属性","link":"#设置隔离事务属性","children":[]},{"level":3,"title":"设置回滚事务属性","slug":"设置回滚事务属性","link":"#设置回滚事务属性","children":[]},{"level":3,"title":"超时和只读属性","slug":"超时和只读属性","link":"#超时和只读属性","children":[]}]},{"level":2,"title":"七、MVC","slug":"七、mvc","link":"#七、mvc","children":[{"level":3,"title":"Spring MVC 框架有什么用？","slug":"spring-mvc-框架有什么用","link":"#spring-mvc-框架有什么用","children":[]},{"level":3,"title":"Spring MVC的优点","slug":"spring-mvc的优点","link":"#spring-mvc的优点","children":[]},{"level":3,"title":"Spring MVC 的运行流程 | DispatcherServlet描述","slug":"spring-mvc-的运行流程-dispatcherservlet描述","link":"#spring-mvc-的运行流程-dispatcherservlet描述","children":[]},{"level":3,"title":"Spring的Controller是单例的吗？多线程情况下Controller是线程安全吗？","slug":"spring的controller是单例的吗-多线程情况下controller是线程安全吗","link":"#spring的controller是单例的吗-多线程情况下controller是线程安全吗","children":[]}]},{"level":2,"title":"八、注解","slug":"八、注解","link":"#八、注解","children":[{"level":3,"title":"什么是基于Java的Spring注解配置? 给一些注解的例子","slug":"什么是基于java的spring注解配置-给一些注解的例子","link":"#什么是基于java的spring注解配置-给一些注解的例子","children":[]},{"level":3,"title":"怎样开启注解装配？","slug":"怎样开启注解装配","link":"#怎样开启注解装配","children":[]},{"level":3,"title":"Spring MVC 常用注解:","slug":"spring-mvc-常用注解","link":"#spring-mvc-常用注解","children":[]},{"level":3,"title":"@Component, @Controller, @Repository, @Service 有何区别？","slug":"component-controller-repository-service-有何区别","link":"#component-controller-repository-service-有何区别","children":[]},{"level":3,"title":"@Required 注解有什么作用","slug":"required-注解有什么作用","link":"#required-注解有什么作用","children":[]},{"level":3,"title":"@Autowired 注解有什么作用","slug":"autowired-注解有什么作用","link":"#autowired-注解有什么作用","children":[]},{"level":3,"title":"@Autowired和@Resource之间的区别","slug":"autowired和-resource之间的区别","link":"#autowired和-resource之间的区别","children":[]},{"level":3,"title":"@Qualifier 注解有什么作用","slug":"qualifier-注解有什么作用","link":"#qualifier-注解有什么作用","children":[]},{"level":3,"title":"@RequestMapping 注解有什么用？","slug":"requestmapping-注解有什么用","link":"#requestmapping-注解有什么用","children":[]}]},{"level":2,"title":"九、其他问题","slug":"九、其他问题","link":"#九、其他问题","children":[{"level":3,"title":"Spring 框架中用到了哪些设计模式？","slug":"spring-框架中用到了哪些设计模式","link":"#spring-框架中用到了哪些设计模式","children":[]}]},{"level":2,"title":"参考与来源","slug":"参考与来源","link":"#参考与来源","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":44.9,"words":13469},"filePathRelative":"interview/Spring-FAQ.md","localizedDate":"2020年11月23日","excerpt":"","autoDesc":true}');export{e as data};
