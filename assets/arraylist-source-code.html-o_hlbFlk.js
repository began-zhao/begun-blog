const t=JSON.parse('{"key":"v-31603ec1","path":"/code/java/common/collection/arraylist-source-code.html","title":"ArrayList源码&扩容机制分析","lang":"zh-CN","frontmatter":{"title":"ArrayList源码&扩容机制分析","date":"2020-08-18T00:00:00.000Z","category":"Java","tag":["Java集合"],"description":"1. ArrayList 简介 ArrayList 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用ensureCapacity操作来增加 ArrayList 实例的容量。这可以减少递增式再分配的数量。 ArrayList继承于 AbstractList ，实现了 List, RandomAccess, Cloneable, java.io.Serializable 这些接口。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/code/java/common/collection/arraylist-source-code.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"ArrayList源码&扩容机制分析"}],["meta",{"property":"og:description","content":"1. ArrayList 简介 ArrayList 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用ensureCapacity操作来增加 ArrayList 实例的容量。这可以减少递增式再分配的数量。 ArrayList继承于 AbstractList ，实现了 List, RandomAccess, Cloneable, java.io.Serializable 这些接口。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:published_time","content":"2020-08-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArrayList源码&扩容机制分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"1. ArrayList 简介","slug":"_1-arraylist-简介","link":"#_1-arraylist-简介","children":[{"level":3,"title":"1.1. Arraylist 和 Vector 的区别?","slug":"_1-1-arraylist-和-vector-的区别","link":"#_1-1-arraylist-和-vector-的区别","children":[]},{"level":3,"title":"1.2. Arraylist 与 LinkedList 区别?","slug":"_1-2-arraylist-与-linkedlist-区别","link":"#_1-2-arraylist-与-linkedlist-区别","children":[]}]},{"level":2,"title":"2. ArrayList 核心源码解读","slug":"_2-arraylist-核心源码解读","link":"#_2-arraylist-核心源码解读","children":[]},{"level":2,"title":"3. ArrayList 扩容机制分析","slug":"_3-arraylist-扩容机制分析","link":"#_3-arraylist-扩容机制分析","children":[{"level":3,"title":"3.1. 先从 ArrayList 的构造函数说起","slug":"_3-1-先从-arraylist-的构造函数说起","link":"#_3-1-先从-arraylist-的构造函数说起","children":[]},{"level":3,"title":"3.2. 一步一步分析 ArrayList 扩容机制","slug":"_3-2-一步一步分析-arraylist-扩容机制","link":"#_3-2-一步一步分析-arraylist-扩容机制","children":[]},{"level":3,"title":"3.3. System.arraycopy() 和 Arrays.copyOf()方法","slug":"_3-3-system-arraycopy-和-arrays-copyof-方法","link":"#_3-3-system-arraycopy-和-arrays-copyof-方法","children":[]},{"level":3,"title":"3.4. ensureCapacity方法","slug":"_3-4-ensurecapacity方法","link":"#_3-4-ensurecapacity方法","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":21.83,"words":6549},"filePathRelative":"code/java/common/collection/arraylist-source-code.md","localizedDate":"2020年8月18日","excerpt":"<h2> 1. ArrayList 简介</h2>\\n<p><code>ArrayList</code> 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用<code>ensureCapacity</code>操作来增加 <code>ArrayList</code> 实例的容量。这可以减少递增式再分配的数量。</p>\\n<p><code>ArrayList</code>继承于 <strong><code>AbstractList</code></strong> ，实现了 <strong><code>List</code></strong>, <strong><code>RandomAccess</code></strong>, <strong><code>Cloneable</code></strong>, <strong><code>java.io.Serializable</code></strong> 这些接口。</p>","autoDesc":true}');export{t as data};