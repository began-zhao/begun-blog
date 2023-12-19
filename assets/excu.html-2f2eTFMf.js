const s=JSON.parse(`{"key":"v-0859f348","path":"/linux/command/excu.html","title":"命令执行","lang":"zh-CN","frontmatter":{"title":"命令执行","icon":"play","date":"2019-11-20T00:00:00.000Z","category":"Linux","description":"前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢? 简单来说，Linux 命令的执行过程分为如下 4 个步骤。 判断路径 判断用户是否以绝对路径或相对路径的方式输入命令(如 /bin/ls)，如果是的话直接执行。 检查别名 Linux 系统会检查用户输入的命令是否为 “别名命令”。要知道，通过 alias 命令是可以给现有命令自定义别名的，即用一个自定义的命令名称来替换原本的命令名称。 例如，我们经常使用的 rm 命令，其实就是 rm -i 这个整体的别名: [root@localhost ~]# alias rm alias rm='rm -i' 这使得当使用 rm 命令删除指定文件时，Linux 系统会要求我们再次确认是否执行删除操作。例如: [root@localhost ~]# rm a.txt &lt;-- 假定当前目录中已经存在 a.txt 文件 rm: remove regular file 'a.txt'? y &lt;-- 手动输入 y，即确定删除 [root@localhost ~]# 这里可以使用 unalias 命令，将 Linux 系统设置的 rm 别名删除掉，执行命令如下: [root@localhost ~]# alias rm alias rm='rm -i' [root@localhost ~]# unalias rm [root@localhost ~]# rm a.txt [root@localhost ~]# &lt;--直接删除，不再询问 判断是内部命令还是外部命令 Linux 命令行解释器 (又称为 Shell) 会判断用户输入的命令是内部命令还是外部命令。其中，内部命令指的是解释器内部的命令，会被直接执行；而用户通常输入的命令都是外部命令，这些命令交给步骤四继续处理。 内部命令由 Shell 自带，会随着系统启动，可以直接从内存中读取；而外部命令仅是在系统中有对应的可执行文件，执行时需要读取该文件。 判断一个命令属于内部命令还是外部命令，可以使用 type 命令实现。例如: [root@localhost ~]# type pwd pwd is a shell builtin &lt;-- pwd是内部命令 [root@localhost ~]# type top top is /usr/bin/top &lt;-- top是外部命令 查找外部命令对应的可执行文件 当用户执行的是外部命令时，系统会在指定的多个路径中查找该命令的可执行文件，而定义这些路径的变量，就称为 PATH 环境变量，其作用就是告诉 Shell 待执行命令的可执行文件可能存放的位置，也就是说，Shell 会在 PATH 变量包含的多个路径中逐个查找，直到找到为止(如果找不到，Shell 会提供用户“找不到此命令”)。","head":[["meta",{"property":"og:url","content":"https://began-zhao.github.io/linux/command/excu.html"}],["meta",{"property":"og:site_name","content":"咖飞的博客"}],["meta",{"property":"og:title","content":"命令执行"}],["meta",{"property":"og:description","content":"前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢? 简单来说，Linux 命令的执行过程分为如下 4 个步骤。 判断路径 判断用户是否以绝对路径或相对路径的方式输入命令(如 /bin/ls)，如果是的话直接执行。 检查别名 Linux 系统会检查用户输入的命令是否为 “别名命令”。要知道，通过 alias 命令是可以给现有命令自定义别名的，即用一个自定义的命令名称来替换原本的命令名称。 例如，我们经常使用的 rm 命令，其实就是 rm -i 这个整体的别名: [root@localhost ~]# alias rm alias rm='rm -i' 这使得当使用 rm 命令删除指定文件时，Linux 系统会要求我们再次确认是否执行删除操作。例如: [root@localhost ~]# rm a.txt &lt;-- 假定当前目录中已经存在 a.txt 文件 rm: remove regular file 'a.txt'? y &lt;-- 手动输入 y，即确定删除 [root@localhost ~]# 这里可以使用 unalias 命令，将 Linux 系统设置的 rm 别名删除掉，执行命令如下: [root@localhost ~]# alias rm alias rm='rm -i' [root@localhost ~]# unalias rm [root@localhost ~]# rm a.txt [root@localhost ~]# &lt;--直接删除，不再询问 判断是内部命令还是外部命令 Linux 命令行解释器 (又称为 Shell) 会判断用户输入的命令是内部命令还是外部命令。其中，内部命令指的是解释器内部的命令，会被直接执行；而用户通常输入的命令都是外部命令，这些命令交给步骤四继续处理。 内部命令由 Shell 自带，会随着系统启动，可以直接从内存中读取；而外部命令仅是在系统中有对应的可执行文件，执行时需要读取该文件。 判断一个命令属于内部命令还是外部命令，可以使用 type 命令实现。例如: [root@localhost ~]# type pwd pwd is a shell builtin &lt;-- pwd是内部命令 [root@localhost ~]# type top top is /usr/bin/top &lt;-- top是外部命令 查找外部命令对应的可执行文件 当用户执行的是外部命令时，系统会在指定的多个路径中查找该命令的可执行文件，而定义这些路径的变量，就称为 PATH 环境变量，其作用就是告诉 Shell 待执行命令的可执行文件可能存放的位置，也就是说，Shell 会在 PATH 变量包含的多个路径中逐个查找，直到找到为止(如果找不到，Shell 会提供用户“找不到此命令”)。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-19T03:27:59.000Z"}],["meta",{"property":"article:author","content":"咖飞"}],["meta",{"property":"article:published_time","content":"2019-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-19T03:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令执行\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-19T03:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"咖飞\\",\\"url\\":\\"https://began-zhao.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1702956479000,"updatedTime":1702956479000,"contributors":[{"name":"z-begun","email":"z-begun@outlook.com","commits":1}]},"readingTime":{"minutes":2.33,"words":699},"filePathRelative":"linux/command/excu.md","localizedDate":"2019年11月20日","excerpt":"<p>前面讲过，在 Linux 系统中“一切皆文件”，Linux 命令也不例外。那么，当编辑完成 Linux 命令并回车后，系统底层到底发生了什么事情呢?</p>\\n<p>简单来说，Linux 命令的执行过程分为如下 4 个步骤。</p>\\n<ol>\\n<li>\\n<p>判断路径</p>\\n<p>判断用户是否以绝对路径或相对路径的方式输入命令(如 <code>/bin/ls</code>)，如果是的话直接执行。</p>\\n</li>\\n<li>\\n<p>检查别名</p>\\n<p>Linux 系统会检查用户输入的命令是否为 “别名命令”。要知道，通过 alias 命令是可以给现有命令自定义别名的，即用一个自定义的命令名称来替换原本的命令名称。</p>\\n<p>例如，我们经常使用的 <code>rm</code> 命令，其实就是 <code>rm -i</code> 这个整体的别名:</p>\\n<div class=\\"language-shell-session line-numbers-mode\\" data-ext=\\"shell-session\\"><pre class=\\"language-shell-session\\"><code><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token builtin class-name\\">alias</span> <span class=\\"token function\\">rm</span></span></span>\\n<span class=\\"token output\\">alias rm='rm -i'\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>这使得当使用 rm 命令删除指定文件时，Linux 系统会要求我们再次确认是否执行删除操作。例如:</p>\\n<div class=\\"language-shell-session line-numbers-mode\\" data-ext=\\"shell-session\\"><pre class=\\"language-shell-session\\"><code><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token function\\">rm</span> a.txt <span class=\\"token operator\\">&lt;</span>-- 假定当前目录中已经存在 a.txt 文件</span></span>\\n<span class=\\"token output\\">rm: remove regular file 'a.txt'? y  &lt;-- 手动输入 y，即确定删除\\n[root@localhost ~]#\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>这里可以使用 <code>unalias</code> 命令，将 Linux 系统设置的 <code>rm</code> 别名删除掉，执行命令如下:</p>\\n<div class=\\"language-shell-session line-numbers-mode\\" data-ext=\\"shell-session\\"><pre class=\\"language-shell-session\\"><code><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token builtin class-name\\">alias</span> <span class=\\"token function\\">rm</span></span></span>\\n<span class=\\"token output\\">alias rm='rm -i'\\n</span><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token builtin class-name\\">unalias</span> <span class=\\"token function\\">rm</span></span></span>\\n<span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token function\\">rm</span> a.txt</span></span>\\n<span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span>  <span class=\\"token bash language-bash\\"><span class=\\"token operator\\">&lt;</span>--直接删除，不再询问</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>判断是内部命令还是外部命令</p>\\n<p>Linux 命令行解释器 (又称为 Shell) 会判断用户输入的命令是内部命令还是外部命令。其中，内部命令指的是解释器内部的命令，会被直接执行；而用户通常输入的命令都是外部命令，这些命令交给步骤四继续处理。\\n内部命令由 Shell 自带，会随着系统启动，可以直接从内存中读取；而外部命令仅是在系统中有对应的可执行文件，执行时需要读取该文件。</p>\\n<p>判断一个命令属于内部命令还是外部命令，可以使用 <code>type</code> 命令实现。例如:</p>\\n<div class=\\"language-shell-session line-numbers-mode\\" data-ext=\\"shell-session\\"><pre class=\\"language-shell-session\\"><code><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token builtin class-name\\">type</span> <span class=\\"token builtin class-name\\">pwd</span></span></span>\\n<span class=\\"token output\\">pwd is a shell builtin  &lt;-- pwd是内部命令\\n</span><span class=\\"token command\\"><span class=\\"token info punctuation\\"><span class=\\"token user\\">[root@localhost ~]</span></span><span class=\\"token shell-symbol important\\">#</span> <span class=\\"token bash language-bash\\"><span class=\\"token builtin class-name\\">type</span> <span class=\\"token function\\">top</span></span></span>\\n<span class=\\"token output\\">top is /usr/bin/top  &lt;-- top是外部命令\\n</span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>查找外部命令对应的可执行文件</p>\\n<p>当用户执行的是外部命令时，系统会在指定的多个路径中查找该命令的可执行文件，而定义这些路径的变量，就称为 PATH 环境变量，其作用就是告诉 Shell 待执行命令的可执行文件可能存放的位置，也就是说，Shell 会在 PATH 变量包含的多个路径中逐个查找，直到找到为止(如果找不到，Shell 会提供用户“找不到此命令”)。</p>\\n</li>\\n</ol>","autoDesc":true}`);export{s as data};
