import{_ as l}from"./framework-c27b6911.js";import{r as a,o as c,c as u,a as s,w as i,b as n,d as k,e as t}from"./app-20980f17.js";const r={},d=t('<h1 id="checkbox-多选框组" tabindex="-1"><a class="header-anchor" href="#checkbox-多选框组" aria-hidden="true">#</a> Checkbox 多选框组</h1><p>快速的数据化配置一个多选框组，常用于搭配数据表单。</p><p>依赖组件： <code>ElCheckboxGroup</code> <code>ElCheckbox</code> <code>ElCheckboxButton</code> ，需先全局注册。</p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>',4),h=t(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>普通样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ label: &#39;name&#39;, value: &#39;id&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelCheckbox</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>按钮样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;optionA&#39;, &#39;optionB&#39;, &#39;optionC&#39;]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelCheckbox</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>边框样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;optionA&#39;, &#39;optionB&#39;, &#39;optionC&#39;]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">border</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelCheckbox</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nameA&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">checked</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nameB&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;nameC&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,2),g=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"说明")])],-1),b=n("tr",null,[n("td",null,"options"),n("td",null,"CheckboxProps[] | string[]"),n("td",null,"-"),n("td",null,"checkbox 配置")],-1),v=n("tr",null,[n("td",null,"props"),n("td",null,"{label: string, value: string}"),n("td",null,"-"),n("td",null,"CheckboxProps 配置别名")],-1),m=n("tr",null,[n("td",null,"button"),n("td",null,"boolean"),n("td",null,"-"),n("td",null,"按钮样式")],-1),_=n("tr",null,[n("td",null,"border"),n("td",null,"boolean"),n("td",null,"-"),n("td",null,"边框样式")],-1),x=n("td",null,"......",-1),y=n("td",null,"-",-1),q=n("td",null,"-",-1),f={href:"https://element-plus.gitee.io/zh-CN/component/checkbox.html#checkboxgroup-attributes",target:"_blank",rel:"noopener noreferrer"},C=t('<h3 id="checkboxprops" tabindex="-1"><a class="header-anchor" href="#checkboxprops" aria-hidden="true">#</a> CheckboxProps</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>label</td><td>string</td><td>-</td><td>标签</td></tr><tr><td>value</td><td>string | number | boolean</td><td>-</td><td>选中值</td></tr><tr><td>disabled</td><td>boolean</td><td>-</td><td>是否禁用</td></tr><tr><td>checked</td><td>boolean</td><td>-</td><td>是否默认选中</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th>名称</th><th>插槽作用域</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>{item,index}</td><td>自定义模板</td></tr></tbody></table>',4);function A(B,w){const p=a("checkboxBase"),e=a("ClientOnly"),o=a("ExternalLinkIcon");return c(),u("div",null,[d,s(e,null,{default:i(()=>[s(p)]),_:1}),h,n("table",null,[g,n("tbody",null,[b,v,m,_,n("tr",null,[x,y,q,n("td",null,[n("a",f,[k("ElCheckboxGroup 属性"),s(o)])])])])]),C])}const V=l(r,[["render",A],["__file","checkbox.html.vue"]]);export{V as default};
