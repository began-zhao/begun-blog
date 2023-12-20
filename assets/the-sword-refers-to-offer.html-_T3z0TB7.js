const e=JSON.parse('{"key":"v-b4536a8a","path":"/code/java/cs-basics/algorithms/the-sword-refers-to-offer.html","title":"剑指offer部分编程题","lang":"zh-CN","frontmatter":{"title":"剑指offer部分编程题","date":"2021-11-13T00:00:00.000Z","category":"计算机基础","tag":["算法"],"description":"斐波那契数列 题目描述： 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。 n&lt;=39 问题分析： 可以肯定的是这一题通过递归的方式是肯定能做出来，但是这样会有一个很大的问题，那就是递归大量的重复计算会导致内存溢出。另外可以使用迭代法，用fn1和fn2保存计算过程中的结果，并复用起来。下面我会把两个方法示例代码都给出来并给出两个方法的运行时间对比。 示例代码： 采用迭代法：","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/java/cs-basics/algorithms/the-sword-refers-to-offer.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"剑指offer部分编程题"}],["meta",{"property":"og:description","content":"斐波那契数列 题目描述： 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。 n&lt;=39 问题分析： 可以肯定的是这一题通过递归的方式是肯定能做出来，但是这样会有一个很大的问题，那就是递归大量的重复计算会导致内存溢出。另外可以使用迭代法，用fn1和fn2保存计算过程中的结果，并复用起来。下面我会把两个方法示例代码都给出来并给出两个方法的运行时间对比。 示例代码： 采用迭代法："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:published_time","content":"2021-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"剑指offer部分编程题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"斐波那契数列","slug":"斐波那契数列","link":"#斐波那契数列","children":[]},{"level":2,"title":"跳台阶问题","slug":"跳台阶问题","link":"#跳台阶问题","children":[]},{"level":2,"title":"变态跳台阶问题","slug":"变态跳台阶问题","link":"#变态跳台阶问题","children":[]},{"level":2,"title":"二维数组查找","slug":"二维数组查找","link":"#二维数组查找","children":[]},{"level":2,"title":"替换空格","slug":"替换空格","link":"#替换空格","children":[]},{"level":2,"title":"数值的整数次方","slug":"数值的整数次方","link":"#数值的整数次方","children":[]},{"level":2,"title":"调整数组顺序使奇数位于偶数前面","slug":"调整数组顺序使奇数位于偶数前面","link":"#调整数组顺序使奇数位于偶数前面","children":[]},{"level":2,"title":"链表中倒数第k个节点","slug":"链表中倒数第k个节点","link":"#链表中倒数第k个节点","children":[]},{"level":2,"title":"反转链表","slug":"反转链表","link":"#反转链表","children":[]},{"level":2,"title":"合并两个排序的链表","slug":"合并两个排序的链表","link":"#合并两个排序的链表","children":[]},{"level":2,"title":"用两个栈实现队列","slug":"用两个栈实现队列","link":"#用两个栈实现队列","children":[]},{"level":2,"title":"栈的压入,弹出序列","slug":"栈的压入-弹出序列","link":"#栈的压入-弹出序列","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":16.43,"words":4929},"filePathRelative":"code/java/cs-basics/algorithms/the-sword-refers-to-offer.md","localizedDate":"2021年11月13日","excerpt":"<h2> 斐波那契数列</h2>\\n<p><strong>题目描述：</strong></p>\\n<p>大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。\\nn&lt;=39</p>\\n<p><strong>问题分析：</strong></p>\\n<p>可以肯定的是这一题通过递归的方式是肯定能做出来，但是这样会有一个很大的问题，那就是递归大量的重复计算会导致内存溢出。另外可以使用迭代法，用fn1和fn2保存计算过程中的结果，并复用起来。下面我会把两个方法示例代码都给出来并给出两个方法的运行时间对比。</p>\\n<p><strong>示例代码：</strong></p>\\n<p>采用迭代法：</p>","autoDesc":true}');export{e as data};