import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,f as t}from"./app-SJUDAmcT.js";const s={},p=t(`<h1 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具" aria-hidden="true">#</a> 管理工具</h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h2><p><code>apt-get</code> 命令默认的源在国内访问很慢，可以考虑换源。</p><ul><li><p>获取软件包更新:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新软件包:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>其他命令<a href="%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4">^order</a></p></li></ul><pre><code>\`\`\`bash
apt-cache search # ------(package 搜索包)

apt-cache show #------(package 获取包的相关信息，如说明、大小、版本等)

sudo apt-get install # ------(package 安装包)sudo apt-get install # -----(package - - reinstall 重新安装包)

sudo apt-get -f install # -----(强制安装?#&quot;-f = --fix-missing&quot;当是修复安装吧...)

sudo apt-get remove #-----(package 删除包)

sudo apt-get remove - - purge # ------(package 删除包，包括删除配置文件等)

sudo apt-get autoremove --purge # ----(package 删除包及其依赖的软件包+配置文件等(只对6.10有效，强烈推荐))

sudo apt-get update #------更新源

sudo apt-get upgrade #------更新已安装的包

sudo apt-get dist-upgrade # ---------升级系统

sudo apt-get dselect-upgrade #------使用 dselect 升级

apt-cache depends #-------(package 了解使用依赖)

apt-cache rdepends # ------(package 了解某个具体的依赖?#当是查看该包被哪些包依赖吧...)

sudo apt-get build-dep # ------(package 安装相关的编译环境)

apt-get source #------(package 下载该包的源代码)

sudo apt-get clean &amp;&amp; sudo apt-get autoclean # --------清理下载文件的存档 &amp;&amp; 只清理过时的包

sudo apt-get check #-------检查是否有损坏的依赖
\`\`\`
</code></pre><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h2><p>已经预装。</p><p>在中国大陆不建议使用 Snap</p>`,8),d=[p];function c(i,r){return e(),n("div",null,d)}const u=a(s,[["render",c],["__file","manage.html.vue"]]);export{u as default};
