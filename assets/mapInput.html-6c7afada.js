import{_ as l}from"./framework-c27b6911.js";import{r as t,o as c,c as u,d as n,e as s,b as a,w as i,a as k}from"./app-a66d319f.js";const r={},d=n("h1",{id:"mapinput-地图选择器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mapinput-地图选择器","aria-hidden":"true"},"#"),s(" MapInput 地图选择器")],-1),g=n("p",null,"一个地图选择器，从高德地图选地点，常用于搭配表单。",-1),v=n("code",null,"ElInput",-1),m=n("code",null,"ElDialog",-1),_=n("code",null,"ElAutocomplete",-1),b=n("code",null,"ElButton",-1),h=n("code",null,"AMap",-1),q=n("code",null,"AMap.PlaceSearch",-1),f=n("code",null,"AMap.Autocomplete",-1),y=n("code",null,"AMap.Geocoder",-1),A={href:"https://developer.amap.com/api/jsapi-v2/guide/abc/load",target:"_blank",rel:"noopener noreferrer"},M=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),s(" 使用")],-1),x=n("p",null,[n("code",null,"value"),s(" 支持 "),n("code",null,"array"),s(),n("code",null,"string"),s(" 两种类型，区别在于是否包含经纬度信息。")],-1),I=k(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElRow</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElCol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>经纬度地址：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElCol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelMapInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lnglat<span class="token punctuation">&quot;</span></span> <span class="token attr-name">editable</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelMapInput</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElRow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElRow</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElCol</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>纯文本地址：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElCol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelMapInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span> <span class="token attr-name">destroy-dialog-on-close</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelMapInput</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElRow</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> lnglat <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;重庆市洪崖洞民俗风貌区&quot;</span><span class="token punctuation">,</span> <span class="token number">106.579125</span><span class="token punctuation">,</span> <span class="token number">29.562283</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> address <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;重庆市洪崖洞民俗风貌区&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>不管是使用 JSAPI Loader 还是 CDN 方式，首先要确认 <code>AMap</code> 及对应的插件正确的被引用，组件默认是取 <code>Window.AMap</code>，若你想按需加载高德地图，可使用 <code>AMap</code> 属性。</p><p>若使用的是高德地图v.2.0，则需要把 <code>AMap.Autocomplete</code> 修改为 <code>AMap.AutoComplete</code>。</p></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelMapInput</span> <span class="token attr-name">:AMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapLoader<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelMapInput</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> AMapLoader <span class="token keyword">from</span> <span class="token string">&quot;@amap/amap-jsapi-loader&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">mapLoader</span><span class="token punctuation">(</span><span class="token parameter">reslove</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      AMapLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;xxxxxxxx&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// map key</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;AMap.PlaceSearch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AMap.Autocomplete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AMap.Geocoder&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token comment">// 所需要插件列表</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">AMap</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reslove</span><span class="token punctuation">(</span>AMap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,4),w=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"说明")])],-1),E=n("tr",null,[n("td",null,"value"),n("td",null,"array / string"),n("td",null,"[]"),n("td",null,"绑定值")],-1),C=n("tr",null,[n("td",null,"AMap"),n("td",null,"function"),n("td",null,"(cb)=> cb(Window.AMap)"),n("td",null,"AMap Loader")],-1),L=n("tr",null,[n("td",null,"keyword-search"),n("td",null,"boolean"),n("td",null,"true"),n("td",null,"是否可关键字检索")],-1),N=n("tr",null,[n("td",null,"clearable"),n("td",null,"boolean"),n("td",null,"false"),n("td",null,"是否可清空")],-1),P=n("tr",null,[n("td",null,"editable"),n("td",null,"boolean"),n("td",null,"false"),n("td",null,"是否可编辑")],-1),S=n("tr",null,[n("td",null,"destroy-dialog-on-close"),n("td",null,"boolean"),n("td",null,"false"),n("td",null,"dialog 关闭时是否销毁")],-1),j=n("td",null,"......",-1),B=n("td",null,"-",-1),R=n("td",null,"-",-1),V={href:"https://element-plus.gitee.io/zh-CN/component/input.html",target:"_blank",rel:"noopener noreferrer"};function W(D,G){const p=t("ExternalLinkIcon"),e=t("mapInputWrap"),o=t("ClientOnly");return c(),u("div",null,[d,g,n("p",null,[s("依赖组件： "),v,s(),m,s(),_,s(),b,s("，需先全局注册，依赖高德地图插件："),h,s(),q,s(),f,s(),y,s("，"),n("a",A,[s("高德地图 JSAPI 的加载"),a(p)]),s("。")]),M,x,a(o,null,{default:i(()=>[a(e)]),_:1}),I,n("table",null,[w,n("tbody",null,[E,C,L,N,P,S,n("tr",null,[j,B,R,n("td",null,[n("a",V,[s("ElInput 属性"),a(p)])])])])])])}const T=l(r,[["render",W],["__file","mapInput.html.vue"]]);export{T as default};
