import{_ as a}from"./framework-c27b6911.js";import{r as e,o as t,c as p,d as n,b as o,e as c,a as i}from"./app-37562d4c.js";const l={},u=n("h1",{id:"快速开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),c(" 快速开始")],-1),r={href:"https://www.npmjs.com/package/element-plus-crx",target:"_blank",rel:"noopener noreferrer"},d=n("img",{src:"https://img.shields.io/npm/v/element-plus-crx.svg",alt:"npm"},null,-1),k=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>npm install element-plus-crx -s</code></p><h2 id="全局引用" tabindex="-1"><a class="header-anchor" href="#全局引用" aria-hidden="true">#</a> 全局引用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> ElementPlusCrx <span class="token keyword">from</span> <span class="token string">&#39;element-plus-crx&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlusCrx<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按需引用" tabindex="-1"><a class="header-anchor" href="#按需引用" aria-hidden="true">#</a> 按需引用</h2><p>每个组件有对应依赖的组件，需按照文档全局注册。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AgelFormItem<span class="token punctuation">,</span> AgelFormGrid<span class="token punctuation">,</span> AgelTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus-crx&#39;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>AgelFormItem<span class="token punctuation">.</span>name<span class="token punctuation">,</span> AgelFormItem<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>AgelFormGrid<span class="token punctuation">.</span>name<span class="token punctuation">,</span> AgelFormGrid<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>AgelTable<span class="token punctuation">.</span>name<span class="token punctuation">,</span> AgelTable<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整组件列表如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>
    AgelFormItem<span class="token punctuation">,</span>
    AgelFormGrid<span class="token punctuation">,</span>
    AgelFormDesc<span class="token punctuation">,</span>
    AgelFormTableditor<span class="token punctuation">,</span>
    AgelCheckbox<span class="token punctuation">,</span>
    AgelRadio<span class="token punctuation">,</span>
    AgelSelect<span class="token punctuation">,</span>
    AgelUpload<span class="token punctuation">,</span>
    AgelDynamicTags<span class="token punctuation">,</span>
    AgelMapInput<span class="token punctuation">,</span>
    AgelTable<span class="token punctuation">,</span>
    AgelMenu<span class="token punctuation">,</span>
    AgelNavTabs<span class="token punctuation">,</span>
    AgelIcon<span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript-支持" tabindex="-1"><a class="header-anchor" href="#typescript-支持" aria-hidden="true">#</a> Typescript 支持</h2><p>如果您使用 Volar，请在 <code>tsconfig.json</code> 中通过 <code>compilerOptions.type</code> 指定全局组件类型。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token comment">// ...</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;element-plus-crx/global&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>组件源码是用 Typescript 编写，未做打包处理，如果你用的不是官方 vite 脚手架创建的vue3 项目，则需要考虑添加 typescript 支持。</p></div>`,13);function m(v,b){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[d,o(s)])]),k])}const f=a(l,[["render",m],["__file","quickstart.html.vue"]]);export{f as default};
