import{_ as c}from"./framework-c27b6911.js";import{r as p,o as r,c as u,b as s,w as i,d as n,e as a,a as e}from"./app-664a471d.js";const k={},d=e('<h1 id="formdesc-描述表单" tabindex="-1"><a class="header-anchor" href="#formdesc-描述表单" aria-hidden="true">#</a> FormDesc 描述表单</h1><p>快速的数据化配置一个描述列表布局表单。</p><p>依赖组件： <code>ElDescriptions</code> <code>ElDescriptionsItem</code> <code>AgelFormItem</code> ，需先全局注册。</p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2><p>设置 <code>viewModel</code> 属性可开启查看模式，表单可快速在查看和编辑中切换。</p><p><code>FormDesc</code> 组件的大小继承自表单的 <code>size</code> 属性，排列方向和文本标签对齐方式继自承表单的 <code>labelPosition</code> 属性，文本标签宽度继承自表单的 <code>labelWidth</code> 属性。</p>',6),v=e(`<details class="custom-container details"><summary>点击查看代码</summary><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElForm</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.model<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(labelPosition as any)<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelFormDesc</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:view-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>描述表单<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#extra</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgelRadio</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>labelPosition<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;top&#39;, &#39;left&#39;, &#39;right&#39;]<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelRadio</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>显示边框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElCheckbox</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElCheckbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewModel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>视图模式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElCheckbox</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgelFormDesc</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> markRaw<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">let</span> border <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> viewModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> labelPosition <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;right&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;kooriookami&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&quot;18100000000&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">addr</span><span class="token operator">:</span> <span class="token string">&quot;苏州&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">remark</span><span class="token operator">:</span> <span class="token string">&quot;送货上门&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token string">&#39;顺丰&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&quot;江苏省苏州市吴中区吴中大道 1188 号&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">delivery</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;用户名&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">viewModel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;手机号&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;addr&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;居住地&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;remark&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;备注&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;联系地址&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;快递&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;resource&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&quot;agel-radio&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;顺丰&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;圆通&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;即时配送&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;delivery&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&quot;el-switch&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">viewFormat</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> modelValue <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>el<span class="token operator">-</span>tag disable<span class="token operator">-</span>transitions<span class="token operator">&gt;</span><span class="token punctuation">{</span>modelValue <span class="token operator">?</span> <span class="token string">&quot;即时&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;延时&quot;</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tag<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;评分&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;rate&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&quot;el-rate&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">viewFormat</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> modelValue <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> modelValue <span class="token operator">+</span> <span class="token string">&quot;星评分&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;照片&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;upload&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">viewModel</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&quot;agel-upload&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">listType</span><span class="token operator">:</span> <span class="token string">&quot;picture-card&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&quot;xx/xx/&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,2),m=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"说明")])],-1),b=n("tr",null,[n("td",null,"items"),n("td",null,"ItemProps[]"),n("td",null,"-"),n("td",null,"表单配置项")],-1),g=n("tr",null,[n("td",null,"modelProp"),n("td",null,"string"),n("td",null,"-"),n("td",null,"表单 model 键名")],-1),q=n("tr",null,[n("td",null,"scope"),n("td",null,"object"),n("td",null,"-"),n("td",null,"表单项插槽作用域参数")],-1),h=n("tr",null,[n("td",null,"viewModel"),n("td",null,"boolean"),n("td",null,"-"),n("td",null,"视图模式，只渲染 value")],-1),y=n("tr",null,[n("td",null,"border"),n("td",null,"boolean"),n("td",null,"true"),n("td",null,"开启边框")],-1),_=n("td",null,"column, border, title, extra",-1),f=n("td",null,"-",-1),x=n("td",null,"-",-1),w={href:"https://element-plus.gitee.io/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},E=n("h3",{id:"itemprops",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#itemprops","aria-hidden":"true"},"#"),a(" ItemProps")],-1),D=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"说明")])],-1),C=n("td",null,"......",-1),F=n("td",null,"-",-1),A=n("td",null,"-",-1),I={href:"/component/formItem.html#%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},P=n("td",null,"span, className, labelClassName",-1),N=n("td",null,"-",-1),V=n("td",null,"-",-1),M={href:"https://element-plus.gitee.io/zh-CN/component/descriptions.html#descriptions-item-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},B=e('<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><table><thead><tr><th>名称</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>getRef</td><td>prop</td><td>获取组件实例</td></tr><tr><td>validate</td><td>(callback)=&gt;Promise</td><td>对整个 items 表单进行验证</td></tr><tr><td>resetFields</td><td>props</td><td>重置表单</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th>名称</th><th>插槽作用域</th><th>说明</th></tr></thead><tbody><tr><td>slot-xx</td><td>itemProps</td><td>item 组件具名插槽</td></tr><tr><td>prepend</td><td>-</td><td>items 前置插槽</td></tr><tr><td>append</td><td>-</td><td>items 后置插槽</td></tr></tbody></table>',4);function R(z,j){const o=p("formDesc"),l=p("ClientOnly"),t=p("ExternalLinkIcon");return r(),u("div",null,[d,s(l,null,{default:i(()=>[s(o)]),_:1}),v,n("table",null,[m,n("tbody",null,[b,g,q,h,y,n("tr",null,[_,f,x,n("td",null,[n("a",w,[a("ElDescriptions 属性"),s(t)])])])])]),E,n("table",null,[D,n("tbody",null,[n("tr",null,[C,F,A,n("td",null,[n("a",I,[a("AgelFormItem 属性"),s(t)])])]),n("tr",null,[P,N,V,n("td",null,[n("a",M,[a("ElDescriptionsItem 属性"),s(t)])])])])]),B])}const T=c(k,[["render",R],["__file","formDesc.html.vue"]]);export{T as default};