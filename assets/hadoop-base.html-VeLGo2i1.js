const e=JSON.parse('{"key":"v-444e8598","path":"/code/bigData/common/hadoop/hadoop-base.html","title":"Hadoop 入门及集群搭建","lang":"zh-CN","frontmatter":{"title":"Hadoop 入门及集群搭建","date":"2022-11-16T00:00:00.000Z","category":"大数据","tag":["大数据"],"description":"Hadoop运行环境搭建（开发重点） 1.1 模板虚拟机环境准备 安装虚拟机，可参考k8s中的介绍文章 虚拟机处理器配置：所有虚拟机处理器内核数&lt;当前虚拟机cpu数量 创建新的磁盘：磁盘大小推荐为50G 1）、安装epel-release 注：Extra Packages for EnterpriseLinux 是为 “红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Scientific Linux 。相当于是一个软件仓库，大多数rpm包在官方的 repository 中是找不到的","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/begun-blog/code/bigData/common/hadoop/hadoop-base.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"Hadoop 入门及集群搭建"}],["meta",{"property":"og:description","content":"Hadoop运行环境搭建（开发重点） 1.1 模板虚拟机环境准备 安装虚拟机，可参考k8s中的介绍文章 虚拟机处理器配置：所有虚拟机处理器内核数&lt;当前虚拟机cpu数量 创建新的磁盘：磁盘大小推荐为50G 1）、安装epel-release 注：Extra Packages for EnterpriseLinux 是为 “红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Scientific Linux 。相当于是一个软件仓库，大多数rpm包在官方的 repository 中是找不到的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://began-zhao.github.io/begun-blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-20T03:04:22.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Hadoop 入门及集群搭建"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:published_time","content":"2022-11-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-20T03:04:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hadoop 入门及集群搭建\\",\\"image\\":[\\"https://began-zhao.github.io/begun-blog/\\"],\\"datePublished\\":\\"2022-11-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-20T03:04:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"Hadoop运行环境搭建（开发重点）","slug":"hadoop运行环境搭建-开发重点","link":"#hadoop运行环境搭建-开发重点","children":[]},{"level":2,"title":"1.1 模板虚拟机环境准备","slug":"_1-1-模板虚拟机环境准备","link":"#_1-1-模板虚拟机环境准备","children":[{"level":3,"title":"克隆虚拟机","slug":"克隆虚拟机","link":"#克隆虚拟机","children":[]},{"level":3,"title":"安装JDK&Hadoop","slug":"安装jdk-hadoop","link":"#安装jdk-hadoop","children":[]},{"level":3,"title":"安装JDK","slug":"安装jdk","link":"#安装jdk","children":[]},{"level":3,"title":"安装Hadoop","slug":"安装hadoop","link":"#安装hadoop","children":[]},{"level":3,"title":"了解目录基本信息","slug":"了解目录基本信息","link":"#了解目录基本信息","children":[]}]},{"level":2,"title":"Hadoop运行模式","slug":"hadoop运行模式","link":"#hadoop运行模式","children":[{"level":3,"title":"1、本地运行模式","slug":"_1、本地运行模式","link":"#_1、本地运行模式","children":[]},{"level":3,"title":"2、伪分布式运行模式，略","slug":"_2、伪分布式运行模式-略","link":"#_2、伪分布式运行模式-略","children":[]},{"level":3,"title":"3、完全分布式运行模式","slug":"_3、完全分布式运行模式","link":"#_3、完全分布式运行模式","children":[]},{"level":3,"title":"3.1  虚拟机准备，参考上文","slug":"_3-1-虚拟机准备-参考上文","link":"#_3-1-虚拟机准备-参考上文","children":[]},{"level":3,"title":"3.2  编写集群分发脚本xsync","slug":"_3-2-编写集群分发脚本xsync","link":"#_3-2-编写集群分发脚本xsync","children":[]},{"level":3,"title":"3.3 SSH无密登录配置","slug":"_3-3-ssh无密登录配置","link":"#_3-3-ssh无密登录配置","children":[]},{"level":3,"title":"3.4 集群配置","slug":"_3-4-集群配置","link":"#_3-4-集群配置","children":[]},{"level":3,"title":"3.5 群起集群","slug":"_3-5-群起集群","link":"#_3-5-群起集群","children":[]},{"level":3,"title":"3.6 群起集群并测试","slug":"_3-6-群起集群并测试","link":"#_3-6-群起集群并测试","children":[]},{"level":3,"title":"3.7 集群启动/停止方式总结","slug":"_3-7-集群启动-停止方式总结","link":"#_3-7-集群启动-停止方式总结","children":[]},{"level":3,"title":"3.8 两个常用脚本","slug":"_3-8-两个常用脚本","link":"#_3-8-两个常用脚本","children":[]},{"level":3,"title":"3.9 两道面试题 （重点）","slug":"_3-9-两道面试题-重点","link":"#_3-9-两道面试题-重点","children":[]},{"level":3,"title":"4.0 集群时间同步（集群无法同步外网时间时使用）","slug":"_4-0-集群时间同步-集群无法同步外网时间时使用","link":"#_4-0-集群时间同步-集群无法同步外网时间时使用","children":[]}]}],"git":{"createdTime":1702956479000,"updatedTime":1703041462000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":2}]},"readingTime":{"minutes":16.1,"words":4830},"filePathRelative":"code/bigData/common/hadoop/hadoop-base.md","localizedDate":"2022年11月16日","excerpt":"<h2> Hadoop运行环境搭建（开发重点）</h2>\\n<h2> 1.1 模板虚拟机环境准备</h2>\\n<p>安装虚拟机，可参考k8s中的介绍文章</p>\\n<blockquote>\\n<p>虚拟机处理器配置：所有虚拟机处理器内核数&lt;当前虚拟机cpu数量</p>\\n</blockquote>\\n<p>创建新的磁盘：磁盘大小推荐为50G</p>\\n<p><strong>1）、安装epel-release</strong></p>\\n<p>注：Extra Packages for EnterpriseLinux 是为 “红帽系”的操作系统提供额外的软件包，适用于RHEL、CentOS和Scientific Linux 。相当于是一个软件仓库，大多数rpm包在官方的 repository 中是找不到的</p>","autoDesc":true}');export{e as data};