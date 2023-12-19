const t=JSON.parse('{"key":"v-577c722a","path":"/code/java/common/basic/serialization.html","title":"Java 序列化详解","lang":"zh-CN","frontmatter":{"title":"Java 序列化详解","date":"2020-08-18T00:00:00.000Z","category":"Java","tag":["Java基础"],"description":"序列化和反序列化相关概念 什么是序列化?什么是反序列化? 如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。 简单来说： 序列化： 将数据结构或对象转换成二进制字节流的过程 反序列化：将在序列化过程中所生成的二进制字节流的过程转换成数据结构或者对象的过程 对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/common/basic/serialization.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Java 序列化详解"}],["meta",{"property":"og:description","content":"序列化和反序列化相关概念 什么是序列化?什么是反序列化? 如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。 简单来说： 序列化： 将数据结构或对象转换成二进制字节流的过程 反序列化：将在序列化过程中所生成的二进制字节流的过程转换成数据结构或者对象的过程 对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:published_time","content":"2020-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 序列化详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"序列化和反序列化相关概念","slug":"序列化和反序列化相关概念","link":"#序列化和反序列化相关概念","children":[{"level":3,"title":"什么是序列化?什么是反序列化?","slug":"什么是序列化-什么是反序列化","link":"#什么是序列化-什么是反序列化","children":[]},{"level":3,"title":"实际开发中有哪些用到序列化和反序列化的场景？","slug":"实际开发中有哪些用到序列化和反序列化的场景","link":"#实际开发中有哪些用到序列化和反序列化的场景","children":[]},{"level":3,"title":"序列化协议对应于 TCP/IP 4 层模型的哪一层？","slug":"序列化协议对应于-tcp-ip-4-层模型的哪一层","link":"#序列化协议对应于-tcp-ip-4-层模型的哪一层","children":[]}]},{"level":2,"title":"常见序列化协议对比","slug":"常见序列化协议对比","link":"#常见序列化协议对比","children":[{"level":3,"title":"JDK 自带的序列化方式","slug":"jdk-自带的序列化方式","link":"#jdk-自带的序列化方式","children":[]},{"level":3,"title":"Kryo","slug":"kryo","link":"#kryo","children":[]},{"level":3,"title":"Protobuf","slug":"protobuf","link":"#protobuf","children":[]},{"level":3,"title":"ProtoStuff","slug":"protostuff","link":"#protostuff","children":[]},{"level":3,"title":"hessian","slug":"hessian","link":"#hessian","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"其他推荐阅读","slug":"其他推荐阅读","link":"#其他推荐阅读","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":7.27,"words":2182},"filePathRelative":"code/java/common/basic/serialization.md","localizedDate":"2020年8月18日","excerpt":"<h2> 序列化和反序列化相关概念</h2>\\n<h3> 什么是序列化?什么是反序列化?</h3>\\n<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>\\n<p>简单来说：</p>\\n<ul>\\n<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>\\n<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流的过程转换成数据结构或者对象的过程</li>\\n</ul>\\n<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>","autoDesc":true}');export{t as data};
