(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{311:function(a,e,s){"use strict";s.r(e);var c=s(4),t=Object(c.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"解决linux-buffer-cache内存占用过高的办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决linux-buffer-cache内存占用过高的办法"}},[a._v("#")]),a._v(" 解决Linux buffer/cache内存占用过高的办法")]),a._v(" "),s("h2",{attrs:{id:"什么是buffer-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是buffer-cache"}},[a._v("#")]),a._v(" 什么是buffer/cache？")]),a._v(" "),s("p",[a._v("buffer和cache是两个在计算机技术中被用滥的名词，放在不同语境下会有不同的意义。在Linux的内存管理中，这里的buffer指Linux内存的：Buffer cache。这里的cache指Linux内存中的：Page cache。翻译成中文可以叫做缓冲区缓存和页面缓存。在历史上，它们一个（buffer）被用来当成对io设备写的缓存，而另一个（cache）被用来当作对io设备的读缓存，这里的io设备，主要指的是块设备文件和文件系统上的普通文件。但是现在，它们的意义已经不一样了。在当前的内核中，page cache顾名思义就是针对内存页的缓存，说白了就是，如果有内存是以page进行分配管理的，都可以使用page cache作为其缓存来管理使用。当然，不是所有的内存都是以页（page）进行管理的，也有很多是针对块（block）进行管理的，这部分内存使用如果要用到cache功能，则都集中到buffer cache中来使用。（从这个角度出发，是不是buffer cache改名叫做block cache更好？）然而，也不是所有块（block）都有固定长度，系统上块的长度主要是根据所使用的块设备决定的，而页长度在X86上无论是32位还是64位都是4k。")]),a._v(" "),s("p",[a._v("明白了这两套缓存系统的区别，就可以理解它们究竟都可以用来做什么了。")]),a._v(" "),s("h2",{attrs:{id:"什么是page-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是page-cache"}},[a._v("#")]),a._v(" 什么是page cache？")]),a._v(" "),s("p",[a._v("Page cache主要用来作为文件系统上的文件数据的缓存来用，尤其是针对当进程对文件有read／write操作的时候。如果你仔细想想的话，作为可以映射文件到内存的系统调用：mmap是不是很自然的也应该用到page cache？在当前的系统实现里，page cache也被作为其它文件类型的缓存设备来用，所以事实上page cache也负责了大部分的块设备文件的缓存工作。")]),a._v(" "),s("h2",{attrs:{id:"什么是buffer-cache-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是buffer-cache-2"}},[a._v("#")]),a._v(" 什么是buffer cache")]),a._v(" "),s("p",[a._v("Buffer cache则主要是设计用来在系统对块设备进行读写的时候，对块进行数据缓存的系统来使用。这意味着某些对块的操作会使用buffer cache进行缓存，比如我们在格式化文件系统的时候。一般情况下两个缓存系统是一起配合使用的，比如当我们对一个文件进行写操作的时候，page cache的内容会被改变，而buffer cache则可以用来将page标记为不同的缓冲区，并记录是哪一个缓冲区被修改了。这样，内核在后续执行脏数据的回写（writeback）时，就不用将整个page写回，而只需要写回修改的部分即可。")]),a._v(" "),s("h2",{attrs:{id:"如何回收cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何回收cache"}},[a._v("#")]),a._v(" 如何回收cache？")]),a._v(" "),s("p",[a._v("Linux内核会在内存将要耗尽的时候，触发内存回收的工作，以便释放出内存给急需内存的进程使用。一般情况下，这个操作中主要的内存释放都来自于对buffer／cache的释放。尤其是被使用更多的cache空间。既然它主要用来做缓存，只是在内存够用的时候加快进程对文件的读写速度，那么在内存压力较大的情况下，当然有必要清空释放cache，作为free空间分给相关进程使用。所以一般情况下，我们认为buffer/cache空间可以被释放，这个理解是正确的。")]),a._v(" "),s("p",[a._v("但是这种清缓存的工作也并不是没有成本。理解cache是干什么的就可以明白清缓存必须保证cache中的数据跟对应文件中的数据一致，才能对cache进行释放。所以伴随着cache清除的行为的，一般都是系统IO飙高。因为内核要对比cache中的数据和对应硬盘文件上的数据是否一致，如果不一致需要写回，之后才能回收。")]),a._v(" "),s("p",[a._v("在系统中除了内存将被耗尽的时候可以清缓存以外，我们还可以使用下面这个文件来人工触发缓存清除的操作：")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/sys/vm/drop_caches \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("/proc/sys/vm/drop_caches的值，默认为0")]),a._v(" "),s("h2",{attrs:{id:"清除方法是"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除方法是"}},[a._v("#")]),a._v(" 清除方法是：")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" /proc/sys/vm/drop_caches\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当然，这个文件可以设置的值分别为1、2、3。它们所表示的含义为：")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /proc/sys/vm/drop_caches "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#表示清除pagecache。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /proc/sys/vm/drop_caches "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）。slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /proc/sys/vm/drop_caches "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#表示清除pagecache和slab分配器中的缓存对象。")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[a._v("#")]),a._v(" 效果：")]),a._v(" "),s("h3",{attrs:{id:"优化前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化前"}},[a._v("#")]),a._v(" 优化前：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-6bf212e8a12f409735d15728efd12fcf4b1.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"优化后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化后"}},[a._v("#")]),a._v(" 优化后：")]),a._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" "),s("img",{attrs:{src:"https://oscimg.oschina.net/oscnet/up-46926e354700638cfaed946b674a1dfde4e.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"广而告之-【全民云计算】云服务器今日限时秒杀-新用户专享1折起"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#广而告之-【全民云计算】云服务器今日限时秒杀-新用户专享1折起"}},[a._v("#")]),a._v(" 广而告之："),s("a",{attrs:{href:"https://www.aliyun.com/minisite/goods?userCode=d1wq9hu5&share_source=copy_link",target:"_blank",rel:"noopener noreferrer"}},[a._v("【全民云计算】云服务器今日限时秒杀，新用户专享1折起"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);