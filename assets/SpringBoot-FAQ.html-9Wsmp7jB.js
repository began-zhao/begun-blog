const t=JSON.parse('{"key":"v-1bc6a50a","path":"/interview/SpringBoot-FAQ.html","title":"SpringBoot 部分","lang":"zh-CN","frontmatter":{"title":"SpringBoot 部分","date":"2020-11-23T00:00:00.000Z","category":"interview","description":"概述 说说 Spring Boot 和 Spring 的关系 spring boot 我理解就是把 spring spring mvc spring data jpa 等等的一些常用的常用的基础框架组合起来，提供默认的配置，然后提供可插拔的设计，就是各种 starter ，来方便开发者使用这一系列的技术，套用官方的一句话， spring 家族发展到今天，已经很庞大了，作为一个开发者，如果想要使用 spring 家族一系列的技术，需要一个一个的搞配置，然后还有个版本兼容性问题，其实挺麻烦的，偶尔也会有小坑出现，其实蛮影响开发进度， spring boot 就是来解决这个问题，提供了一个解决方案吧，可以先不关心如何配置，可以快速的启动开发，进行业务逻辑编写，各种需要的技术，加入 starter 就配置好了，直接使用，可以说追求开箱即用的效果吧.","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/interview/SpringBoot-FAQ.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"SpringBoot 部分"}],["meta",{"property":"og:description","content":"概述 说说 Spring Boot 和 Spring 的关系 spring boot 我理解就是把 spring spring mvc spring data jpa 等等的一些常用的常用的基础框架组合起来，提供默认的配置，然后提供可插拔的设计，就是各种 starter ，来方便开发者使用这一系列的技术，套用官方的一句话， spring 家族发展到今天，已经很庞大了，作为一个开发者，如果想要使用 spring 家族一系列的技术，需要一个一个的搞配置，然后还有个版本兼容性问题，其实挺麻烦的，偶尔也会有小坑出现，其实蛮影响开发进度， spring boot 就是来解决这个问题，提供了一个解决方案吧，可以先不关心如何配置，可以快速的启动开发，进行业务逻辑编写，各种需要的技术，加入 starter 就配置好了，直接使用，可以说追求开箱即用的效果吧."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 部分\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"说说 Spring Boot 和 Spring 的关系","slug":"说说-spring-boot-和-spring-的关系","link":"#说说-spring-boot-和-spring-的关系","children":[]},{"level":3,"title":"什么是 Spring Boot？","slug":"什么是-spring-boot","link":"#什么是-spring-boot","children":[]},{"level":3,"title":"Spring Boot 有哪些优点？","slug":"spring-boot-有哪些优点","link":"#spring-boot-有哪些优点","children":[]},{"level":3,"title":"Spring Boot 的核心注解是哪个？它主要由哪几个注解组成的？","slug":"spring-boot-的核心注解是哪个-它主要由哪几个注解组成的","link":"#spring-boot-的核心注解是哪个-它主要由哪几个注解组成的","children":[]},{"level":3,"title":"说说Spring Boot 启动原理","slug":"说说spring-boot-启动原理","link":"#说说spring-boot-启动原理","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"什么是 JavaConfig？","slug":"什么是-javaconfig","link":"#什么是-javaconfig","children":[]},{"level":3,"title":"Spring Boot 自动配置原理是什么？","slug":"spring-boot-自动配置原理是什么","link":"#spring-boot-自动配置原理是什么","children":[]},{"level":3,"title":"你如何理解 Spring Boot 配置加载顺序？","slug":"你如何理解-spring-boot-配置加载顺序","link":"#你如何理解-spring-boot-配置加载顺序","children":[]},{"level":3,"title":"什么是 YAML？","slug":"什么是-yaml","link":"#什么是-yaml","children":[]},{"level":3,"title":"YAML 配置的优势在哪里 ?","slug":"yaml-配置的优势在哪里","link":"#yaml-配置的优势在哪里","children":[]},{"level":3,"title":"Spring Boot 是否可以使用 XML 配置 ?","slug":"spring-boot-是否可以使用-xml-配置","link":"#spring-boot-是否可以使用-xml-配置","children":[]},{"level":3,"title":"spring boot 核心配置文件是什么？bootstrap.properties 和 application.properties 有何区别 ?","slug":"spring-boot-核心配置文件是什么-bootstrap-properties-和-application-properties-有何区别","link":"#spring-boot-核心配置文件是什么-bootstrap-properties-和-application-properties-有何区别","children":[]},{"level":3,"title":"什么是 Spring Profiles？","slug":"什么是-spring-profiles","link":"#什么是-spring-profiles","children":[]},{"level":3,"title":"如何在自定义端口上运行 Spring Boot 应用程序？","slug":"如何在自定义端口上运行-spring-boot-应用程序","link":"#如何在自定义端口上运行-spring-boot-应用程序","children":[]}]},{"level":2,"title":"安全","slug":"安全","link":"#安全","children":[{"level":3,"title":"如何实现 Spring Boot 应用程序的安全性？","slug":"如何实现-spring-boot-应用程序的安全性","link":"#如何实现-spring-boot-应用程序的安全性","children":[]},{"level":3,"title":"比较一下 Spring Security 和 Shiro 各自的优缺点 ?","slug":"比较一下-spring-security-和-shiro-各自的优缺点","link":"#比较一下-spring-security-和-shiro-各自的优缺点","children":[]},{"level":3,"title":"Spring Boot 中如何解决跨域问题 ?","slug":"spring-boot-中如何解决跨域问题","link":"#spring-boot-中如何解决跨域问题","children":[]},{"level":3,"title":"什么是 CSRF 攻击？","slug":"什么是-csrf-攻击","link":"#什么是-csrf-攻击","children":[]}]},{"level":2,"title":"监视器","slug":"监视器","link":"#监视器","children":[{"level":3,"title":"Spring Boot 中的监视器是什么？","slug":"spring-boot-中的监视器是什么","link":"#spring-boot-中的监视器是什么","children":[]},{"level":3,"title":"如何在 Spring Boot 中禁用 Actuator 端点安全性？","slug":"如何在-spring-boot-中禁用-actuator-端点安全性","link":"#如何在-spring-boot-中禁用-actuator-端点安全性","children":[]},{"level":3,"title":"我们如何监视所有 Spring Boot 微服务？","slug":"我们如何监视所有-spring-boot-微服务","link":"#我们如何监视所有-spring-boot-微服务","children":[]}]},{"level":2,"title":"整合第三方项目","slug":"整合第三方项目","link":"#整合第三方项目","children":[{"level":3,"title":"什么是 WebSockets？","slug":"什么是-websockets","link":"#什么是-websockets","children":[]},{"level":3,"title":"什么是 Spring Data ?","slug":"什么是-spring-data","link":"#什么是-spring-data","children":[]},{"level":3,"title":"什么是 Spring Batch？","slug":"什么是-spring-batch","link":"#什么是-spring-batch","children":[]},{"level":3,"title":"什么是 FreeMarker 模板？","slug":"什么是-freemarker-模板","link":"#什么是-freemarker-模板","children":[]},{"level":3,"title":"如何集成 Spring Boot 和 ActiveMQ？","slug":"如何集成-spring-boot-和-activemq","link":"#如何集成-spring-boot-和-activemq","children":[]},{"level":3,"title":"什么是 Apache Kafka？","slug":"什么是-apache-kafka","link":"#什么是-apache-kafka","children":[]},{"level":3,"title":"什么是 Swagger？你用 Spring Boot 实现了它吗？","slug":"什么是-swagger-你用-spring-boot-实现了它吗","link":"#什么是-swagger-你用-spring-boot-实现了它吗","children":[]},{"level":3,"title":"前后端分离，如何维护接口文档 ?","slug":"前后端分离-如何维护接口文档","link":"#前后端分离-如何维护接口文档","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"如何重新加载 Spring Boot 上的更改，而无需重新启动服务器？Spring Boot项目如何热部署？","slug":"如何重新加载-spring-boot-上的更改-而无需重新启动服务器-spring-boot项目如何热部署","link":"#如何重新加载-spring-boot-上的更改-而无需重新启动服务器-spring-boot项目如何热部署","children":[]},{"level":3,"title":"您使用了哪些 starter maven 依赖项？","slug":"您使用了哪些-starter-maven-依赖项","link":"#您使用了哪些-starter-maven-依赖项","children":[]},{"level":3,"title":"Spring Boot 中的 starter 到底是什么 ?","slug":"spring-boot-中的-starter-到底是什么","link":"#spring-boot-中的-starter-到底是什么","children":[]},{"level":3,"title":"spring-boot-starter-parent 有什么用 ?","slug":"spring-boot-starter-parent-有什么用","link":"#spring-boot-starter-parent-有什么用","children":[]},{"level":3,"title":"Spring Boot 打成的 jar 和普通的 jar 有什么区别 ?","slug":"spring-boot-打成的-jar-和普通的-jar-有什么区别","link":"#spring-boot-打成的-jar-和普通的-jar-有什么区别","children":[]},{"level":3,"title":"运行 Spring Boot 有哪几种方式？","slug":"运行-spring-boot-有哪几种方式","link":"#运行-spring-boot-有哪几种方式","children":[]},{"level":3,"title":"Spring Boot 需要独立的容器运行吗？","slug":"spring-boot-需要独立的容器运行吗","link":"#spring-boot-需要独立的容器运行吗","children":[]},{"level":3,"title":"开启 Spring Boot 特性有哪几种方式？","slug":"开启-spring-boot-特性有哪几种方式","link":"#开启-spring-boot-特性有哪几种方式","children":[]},{"level":3,"title":"如何使用 Spring Boot 实现异常处理？","slug":"如何使用-spring-boot-实现异常处理","link":"#如何使用-spring-boot-实现异常处理","children":[]},{"level":3,"title":"如何使用 Spring Boot 实现分页和排序？","slug":"如何使用-spring-boot-实现分页和排序","link":"#如何使用-spring-boot-实现分页和排序","children":[]},{"level":3,"title":"微服务中如何实现 session 共享 ?","slug":"微服务中如何实现-session-共享","link":"#微服务中如何实现-session-共享","children":[]},{"level":3,"title":"Spring Boot 中如何实现定时任务 ?","slug":"spring-boot-中如何实现定时任务","link":"#spring-boot-中如何实现定时任务","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":18.14,"words":5441},"filePathRelative":"interview/SpringBoot-FAQ.md","localizedDate":"2020年11月23日","excerpt":"<h2> 概述</h2>\\n<h3> 说说 Spring Boot 和 Spring 的关系</h3>\\n<p>spring boot 我理解就是把 spring spring mvc spring data jpa 等等的一些常用的常用的基础框架组合起来，提供默认的配置，然后提供可插拔的设计，就是各种 starter ，来方便开发者使用这一系列的技术，套用官方的一句话， spring 家族发展到今天，已经很庞大了，作为一个开发者，如果想要使用 spring 家族一系列的技术，需要一个一个的搞配置，然后还有个版本兼容性问题，其实挺麻烦的，偶尔也会有小坑出现，其实蛮影响开发进度， spring boot 就是来解决这个问题，提供了一个解决方案吧，可以先不关心如何配置，可以快速的启动开发，进行业务逻辑编写，各种需要的技术，加入 starter 就配置好了，直接使用，可以说追求开箱即用的效果吧.</p>","autoDesc":true}');export{t as data};