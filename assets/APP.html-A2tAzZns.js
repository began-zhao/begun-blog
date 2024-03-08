import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as d,a as p,b as a,d as e,e as s,f as r}from"./app-8JiyAJU5.js";const h="/begun-blog/assets/navbar1-tKDoyN6O.jpg",l="/begun-blog/assets/navbar2-Zd5AFkVD.jpg",c="/begun-blog/assets/navbar3-oBexKBM6.jpg",g="/begun-blog/assets/tab1-ylkMsVO8.jpg",b="/begun-blog/assets/tab2-tLoQaeQQ.jpg",_="/begun-blog/assets/pc-pOJZcbFh.png",u="/begun-blog/assets/phone-DnSgeiUt.png",m="/begun-blog/assets/phone1-zzGH9jwJ.png",f="/begun-blog/assets/phone2-2WTBtcji.png",x="/begun-blog/assets/sider1-_F2NXGJm.jpg",z="/begun-blog/assets/sider2-OQqQX6wa.png",P="/begun-blog/assets/grid1-kxfsM6sD.jpg",y="/begun-blog/assets/grid2-qwKz8UAP.jpg",k={},v=a("p",null,"本文对应用程序设计中常见的组件及其作用进行了介绍。",-1),j=r('<h2 id="页面总体布局" tabindex="-1"><a class="header-anchor" href="#页面总体布局" aria-hidden="true">#</a> 页面总体布局</h2><ul><li><h3 id="navigationbar" tabindex="-1"><a class="header-anchor" href="#navigationbar" aria-hidden="true">#</a> navigationbar</h3><p>简称 Navbar 也就是导航栏。</p><p>主要负责承接页面的导航操作。</p><p>在内部界面上，一般左侧展示返回操作，居中显示页面标题，右侧展示更多操作。</p><p>在主页上，主要承载 tabpage 对应的功能展示与触发。</p><p>在 navbar 上，设计要突出质感，应该以简约为主。</p><p>使用不鲜明的颜色，可以使用 APP 或网页对的主体色。</p><p>可附以纯色 icon。</p><p>不能太吸睛导致用户对页面内容注意的分散。</p><p>有条件的情况下应该设计其切换动效。</p><p><img src="'+h+'" alt="图片" loading="lazy"><img src="'+l+'" alt="图片" loading="lazy"><img src="'+c+'" alt="图片" loading="lazy"></p></li></ul>',2),A={href:"https://www.jianshu.com/p/6037e4f79f4d",target:"_blank",rel:"noopener noreferrer"},w=r('<ul><li><h3 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar" aria-hidden="true">#</a> Tabbar</h3><p>APP 打开后底部的操作栏叫 tabbar，一般设置 2-5 个模块，每个模块应该设计 logo 与文字，对应的界面叫 tabpage。</p><p>在 logo 上应以简约为主，应当设计设置点击与激活效果。</p><p>tabpage 的设置要慎重，分类展示 APP 最关键的几个分项设置，并在每个界面内展示具体内容。</p><p><img src="'+g+'" alt="图片" loading="lazy"><img src="'+b+'" alt="图片" loading="lazy"></p></li></ul><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h3><p>App 每个页面的背景色，除了纯文章之外不应采用纯白色，设计可以向 APP 主题色靠拢。</p><p>应当针对不同设备造成的不同长宽比、分辨率设置不同的页面排版样式，并制作不同的 UI 布局。</p><p><img src="'+_+'" alt="图片" loading="lazy"><img src="'+u+'" alt="图片" loading="lazy"><img src="'+m+'" alt="图片" loading="lazy"><img src="'+f+'" alt="图片" loading="lazy"></p><ul><li><h3 id="sider" tabindex="-1"><a class="header-anchor" href="#sider" aria-hidden="true">#</a> Sider</h3><p>侧边栏，可以设置侧边固定按钮点击弹出或者从左向右滑动弹出式。</p><p>一般用于承载不需要展示的一些设置项、介绍项、个人信息项。</p><p><img src="'+x+'" alt="图片" loading="lazy"><img src="'+z+'" alt="图片" loading="lazy"></p></li></ul><h2 id="ui-元素" tabindex="-1"><a class="header-anchor" href="#ui-元素" aria-hidden="true">#</a> UI 元素</h2>',7),N=r('<li><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h3><p>九宫格结构，实际使用的时候 3×3、4×2 都有广泛使用。</p><p>Gird 结构主要用于罗列展示各项功能，或者是各项板块。</p><p>各元素应该以上部的圆形或异形图标于下部的说明文字为主。</p><p>在移动设备上一般不显示边框、不设计点击动效，而在 PC 与 HD 恰好相反。</p><p><img src="'+P+'" alt="图片" loading="lazy"><img src="'+y+'" alt="图片" loading="lazy"></p></li><li><h3 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h3><p>菜单有多种表现方式，比如 float menu、pop-up menu、modal menu、dropdown 等。</p></li>',2),V={id:"其他元素可以参考ant-design",tabindex:"-1"},B=a("a",{class:"header-anchor",href:"#其他元素可以参考ant-design","aria-hidden":"true"},"#",-1),D={href:"https://vue.ant.design/docs/vue/introduce-cn/",target:"_blank",rel:"noopener noreferrer"},M=r('<h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2><h3 id="mask-设计" tabindex="-1"><a class="header-anchor" href="#mask-设计" aria-hidden="true">#</a> Mask 设计</h3><p>灰色的半透明遮罩叫 mask</p><p>当透明度很高，感受很小的时候一般设计成可穿透，也就是说点击相当于直接点击蒙层下部区域。</p><p>透明度中等的一般式可触摸做取消热区的，也就是点击会取消。</p><p>不可穿透的 mask，也就是说点击没有反应，一般要给非常高的不透明度，用户只能点叉号取消。(一般用于弹出推广)</p><h3 id="设计趋势" tabindex="-1"><a class="header-anchor" href="#设计趋势" aria-hidden="true">#</a> 设计趋势</h3><p>目前以 iOS 特有的苹果风，Windows 上的 Aero 效果(毛玻璃效果)与安卓的 Material Design 设计为主。</p><h4 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h4><p>常用实心矢量图标</p><h4 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h4><p>分割线和边框目前采用已经比较少。</p><h4 id="pc" tabindex="-1"><a class="header-anchor" href="#pc" aria-hidden="true">#</a> PC</h4><p>增强鼠标移动与网页的交互带来沉浸式的体验。</p><h4 id="突出质感" tabindex="-1"><a class="header-anchor" href="#突出质感" aria-hidden="true">#</a> 突出质感</h4><p>因为不同机型现实效果不一样，普遍采用圆角、阴影、以及毛玻璃效果，还有避免用纯色背景转而用略蓝略灰的色调突出质感。</p><h4 id="增强反馈感" tabindex="-1"><a class="header-anchor" href="#增强反馈感" aria-hidden="true">#</a> 增强反馈感</h4><p>每次点击时和点击之后出发的效果都能在屏幕上让用户感知自己的操作(即我刚刚点了按钮，按钮生效产生了某种操作)</p>',18);function O(Q,S){const n=t("ExternalLinkIcon");return o(),d("div",null,[v,p(" more "),j,a("p",null,[e("好文推荐: "),a("a",A,[e("iOS 导航栏动效设计思路"),s(n)])]),w,a("ul",null,[N,a("li",null,[a("h3",V,[B,e(" 其他元素可以参考"),a("a",D,[e("Ant-design"),s(n)])])])]),M])}const I=i(k,[["render",O],["__file","APP.html.vue"]]);export{I as default};
