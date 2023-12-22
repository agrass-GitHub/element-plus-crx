import{_ as c,r as p,o as u,c as i,b as a,w as r,d as n,e as s,a as e}from"./app-Mp3jlBQF.js";const k={},d=e('<h1 id="upload-上传" tabindex="-1"><a class="header-anchor" href="#upload-上传" aria-hidden="true">#</a> Upload 上传</h1><p>快速的数据化配置一个下拉框，常用于搭配数据表单。</p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2><p>点击文件即可快速预览。</p><p>在上传失败时会提示显示上传失败信息。</p><p>根据 <code>listType</code> <code>drag</code> 属性，会智能显示对应的默认插槽。</p>',6),g=e(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>默认样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xx/upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>最大只能上传1kb<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>拖拽样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xx/upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">drag</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>列表缩略图样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xx/upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">list-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelUpload</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>照片墙样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelUpload</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xx/upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">list-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-card<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">limit-hide</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelUpload</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;这是一个图片文件.jpeg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;这是一个视频文件.mp4&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://www.runoob.com/try/demo_source/movie.mp4&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;这是一个音频文件.mp3&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://www.runoob.com/try/demo_source/horse.mp3&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;这是一个docx文件.docx&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://view.xdocin.com/doc/preview.docx&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;food.jpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;food.jpeg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,2),m=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"说明")])],-1),v=n("tr",null,[n("td",null,"v-model:modelValue"),n("td",null,"UploadUserFile[]"),n("td",null,"-"),n("td",null,"上传文件列表")],-1),h=n("tr",null,[n("td",null,"preview"),n("td",null,"boolean"),n("td",null,"true"),n("td",null,"是否开启文件预览")],-1),b=n("tr",null,[n("td",null,"message"),n("td",null,"boolean"),n("td",null,"true"),n("td",null,"上传错误时候智能提示")],-1),_=n("tr",null,[n("td",null,"limit-hide"),n("td",null,"boolean"),n("td",null,"-"),n("td",null,"超出上传个数限制隐藏上传按钮")],-1),q=n("tr",null,[n("td",null,"limit-size"),n("td",null,"number"),n("td",null,"-"),n("td",null,"上传大小限制，kb")],-1),y=n("tr",null,[n("td",null,"tip"),n("td",null,"string"),n("td",null,"-"),n("td",null,"上传提示语")],-1),f=n("td",null,"......",-1),x=n("td",null,"-",-1),w=n("td",null,"-",-1),E={href:"https://element-plus.gitee.io/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},U=n("h2",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),s(" 方法")],-1),A=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"参数"),n("th",null,"说明")])],-1),j=n("td",null,"abort, submit, clearFiles, handleStart, handleRemove",-1),B=n("td",null,"-",-1),C={href:"https://element-plus.gitee.io/zh-CN/component/upload.html#%E5%A4%96%E9%83%A8%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},N=n("h2",{id:"插槽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插槽","aria-hidden":"true"},"#"),s(" 插槽")],-1),z=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"插槽作用域"),n("th",null,"说明")])],-1),V=n("td",null,"trigger, default, tip",-1),F=n("td",null,"-",-1),I={href:"https://element-plus.gitee.io/zh-CN/component/upload.html#%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"};function L(M,O){const l=p("uploadBase"),o=p("ClientOnly"),t=p("ExternalLinkIcon");return u(),i("div",null,[d,a(o,null,{default:r(()=>[a(l)]),_:1}),g,n("table",null,[m,n("tbody",null,[v,h,b,_,q,y,n("tr",null,[f,x,w,n("td",null,[n("a",E,[s("ElUpload 属性"),a(t)])])])])]),U,n("table",null,[A,n("tbody",null,[n("tr",null,[j,B,n("td",null,[n("a",C,[s("ElUpload 方法"),a(t)])])])])]),N,n("table",null,[z,n("tbody",null,[n("tr",null,[V,F,n("td",null,[n("a",I,[s("ElUpload 插槽"),a(t)])])])])])])}const T=c(k,[["render",L],["__file","upload.html.vue"]]);export{T as default};