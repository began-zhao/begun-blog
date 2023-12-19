const e=JSON.parse('{"key":"v-14aa1354","path":"/linux/ubuntu/webserver.html","title":"网络服务器相关","lang":"zh-CN","frontmatter":{"title":"网络服务器相关","icon":"network","date":"2019-11-23T00:00:00.000Z","description":"网络服务器相关 ftp vsftpd 安装 apt-get install vsftpd ftp 配置 vim /etc/vsftpd.conf 至少要更改: write_enable=YES utf8_filesystem=YES","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/linux/ubuntu/webserver.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"网络服务器相关"}],["meta",{"property":"og:description","content":"网络服务器相关 ftp vsftpd 安装 apt-get install vsftpd ftp 配置 vim /etc/vsftpd.conf 至少要更改: write_enable=YES utf8_filesystem=YES"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2019-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络服务器相关\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"ftp","slug":"ftp","link":"#ftp","children":[{"level":3,"title":"vsftpd","slug":"vsftpd","link":"#vsftpd","children":[]}]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]},{"level":2,"title":"PHP","slug":"php","link":"#php","children":[]},{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"NMP","slug":"nmp","link":"#nmp","children":[]}],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"linux/ubuntu/webserver.md","localizedDate":"2019年11月23日","excerpt":"<h1> 网络服务器相关</h1>\\n<h2> ftp</h2>\\n<h3> vsftpd</h3>\\n<ul>\\n<li>\\n<p>安装</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> vsftpd <span class=\\"token function\\">ftp</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>配置</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">vim</span> /etc/vsftpd.conf\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>至少要更改:</p>\\n<div class=\\"language-ini line-numbers-mode\\" data-ext=\\"ini\\"><pre class=\\"language-ini\\"><code><span class=\\"token key attr-name\\">write_enable</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">YES</span>\\n<span class=\\"token key attr-name\\">utf8_filesystem</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">YES</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>","autoDesc":true}');export{e as data};
