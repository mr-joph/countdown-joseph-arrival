(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var W=Object.prototype.toString,S=Array.isArray||function(e){return W.call(e)==="[object Array]"};function j(n){return typeof n=="function"}function _(n){return S(n)?"array":typeof n}function U(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(n,e){return n!=null&&typeof n=="object"&&e in n}function $(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var z=RegExp.prototype.test;function F(n,e){return z.call(n,e)}var K=/\S/;function B(n){return!F(K,n)}var G={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function V(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return G[t]})}var Y=/\s*/,J=/\s+/,q=/\s*=/,Q=/\s*\}/,X=/#|\^|\/|>|\{|&|=|!/;function Z(n,e){if(!n)return[];var t=!1,r=[],s=[],o=[],a=!1,i=!1,c="",u=0;function p(){if(a&&!i)for(;o.length;)delete s[o.pop()];else o=[];a=!1,i=!1}var y,m,L;function M(g){if(typeof g=="string"&&(g=g.split(J,2)),!S(g)||g.length!==2)throw new Error("Invalid tags: "+g);y=new RegExp(U(g[0])+"\\s*"),m=new RegExp("\\s*"+U(g[1])),L=new RegExp("\\s*"+U("}"+g[1]))}M(e||v.tags);for(var l=new P(n),w,h,d,C,R,b;!l.eos();){if(w=l.pos,d=l.scanUntil(y),d)for(var O=0,H=d.length;O<H;++O)C=d.charAt(O),B(C)?(o.push(s.length),c+=C):(i=!0,t=!0,c+=" "),s.push(["text",C,w,w+1]),w+=1,C===`
`&&(p(),c="",u=0,t=!1);if(!l.scan(y))break;if(a=!0,h=l.scan(X)||"name",l.scan(Y),h==="="?(d=l.scanUntil(q),l.scan(q),l.scanUntil(m)):h==="{"?(d=l.scanUntil(L),l.scan(Q),l.scanUntil(m),h="&"):d=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(h==">"?R=[h,d,w,l.pos,c,u,t]:R=[h,d,w,l.pos],u++,s.push(R),h==="#"||h==="^")r.push(R);else if(h==="/"){if(b=r.pop(),!b)throw new Error('Unopened section "'+d+'" at '+w);if(b[1]!==d)throw new Error('Unclosed section "'+b[1]+'" at '+w)}else h==="name"||h==="{"||h==="&"?i=!0:h==="="&&M(d)}if(p(),b=r.pop(),b)throw new Error('Unclosed section "'+b[1]+'" at '+l.pos);return te(ee(s))}function ee(n){for(var e=[],t,r,s=0,o=n.length;s<o;++s)t=n[s],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function te(n){for(var e=[],t=e,r=[],s,o,a=0,i=n.length;a<i;++a)switch(s=n[a],s[0]){case"#":case"^":t.push(s),r.push(s),t=s[4]=[];break;case"/":o=r.pop(),o[5]=s[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(s)}return e}function P(n){this.string=n,this.tail=n,this.pos=0}P.prototype.eos=function(){return this.tail===""};P.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};P.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function E(n,e){this.view=n,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var s=this,o,a,i,c=!1;s;){if(e.indexOf(".")>0)for(o=s.view,a=e.split("."),i=0;o!=null&&i<a.length;)i===a.length-1&&(c=N(o,a[i])||$(o,a[i])),o=o[a[i++]];else o=s.view[e],c=N(s.view,e);if(c){r=o;break}s=s.parent}t[e]=r}return j(r)&&(r=r.call(this.view)),r};function f(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};f.prototype.parse=function(e,t){var r=this.templateCache,s=e+":"+(t||v.tags).join(":"),o=typeof r<"u",a=o?r.get(s):void 0;return a==null&&(a=Z(e,t),o&&r.set(s,a)),a};f.prototype.render=function(e,t,r,s){var o=this.getConfigTags(s),a=this.parse(e,o),i=t instanceof E?t:new E(t,void 0);return this.renderTokens(a,i,r,e,s)};f.prototype.renderTokens=function(e,t,r,s,o){for(var a="",i,c,u,p=0,y=e.length;p<y;++p)u=void 0,i=e[p],c=i[0],c==="#"?u=this.renderSection(i,t,r,s,o):c==="^"?u=this.renderInverted(i,t,r,s,o):c===">"?u=this.renderPartial(i,t,r,o):c==="&"?u=this.unescapedValue(i,t):c==="name"?u=this.escapedValue(i,t,o):c==="text"&&(u=this.rawValue(i)),u!==void 0&&(a+=u);return a};f.prototype.renderSection=function(e,t,r,s,o){var a=this,i="",c=t.lookup(e[1]);function u(m){return a.render(m,t,r,o)}if(c){if(S(c))for(var p=0,y=c.length;p<y;++p)i+=this.renderTokens(e[4],t.push(c[p]),r,s,o);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")i+=this.renderTokens(e[4],t.push(c),r,s,o);else if(j(c)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(t.view,s.slice(e[3],e[5]),u),c!=null&&(i+=c)}else i+=this.renderTokens(e[4],t,r,s,o);return i}};f.prototype.renderInverted=function(e,t,r,s,o){var a=t.lookup(e[1]);if(!a||S(a)&&a.length===0)return this.renderTokens(e[4],t,r,s,o)};f.prototype.indentPartial=function(e,t,r){for(var s=t.replace(/[^ \t]/g,""),o=e.split(`
`),a=0;a<o.length;a++)o[a].length&&(a>0||!r)&&(o[a]=s+o[a]);return o.join(`
`)};f.prototype.renderPartial=function(e,t,r,s){if(r){var o=this.getConfigTags(s),a=j(r)?r(e[1]):r[e[1]];if(a!=null){var i=e[6],c=e[5],u=e[4],p=a;c==0&&u&&(p=this.indentPartial(a,u,i));var y=this.parse(p,o);return this.renderTokens(y,t,r,p,s)}}};f.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};f.prototype.escapedValue=function(e,t,r){var s=this.getConfigEscape(r)||v.escape,o=t.lookup(e[1]);if(o!=null)return typeof o=="number"&&s===v.escape?String(o):s(o)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){T.templateCache=n},get templateCache(){return T.templateCache}},T=new f;v.clearCache=function(){return T.clearCache()};v.parse=function(e,t){return T.parse(e,t)};v.render=function(e,t,r,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+_(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,t,r,s)};v.escape=V;v.Scanner=P;v.Context=E;v.Writer=f;const ne=`<style>
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .count-down {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .clock-colon {
    font-size: 3em;
  }

  .clock-colon:last-child {
    display: none;
  }

  .counter-type {
    text-transform: capitalize;
    color: #de4848;
    font-weight: 800;
  }

  .time {
    font-size: 4em;
    font-weight: bold;
    line-height: normal;
  }
</style>

<div class="count-down">
  {{#counters}}
  <div class="counter">
    <div class="counter-time">
      <span class="time">{{time}}</span>
    </div>
    <div class="counter-type">
      <span class="type">{{type}}</span>
    </div>
  </div>
  <div class="clock-colon">:</div>
  {{/counters}}
</div>
`,re={days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"};class se extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}updateTime(e){this.render(e)}parseProps(e){return Object.keys(e).reduce((t,r)=>(t.push({type:re[r],time:this.parseCounterTime(e[r])}),t),[])}parseCounterTime(e){return String(e).padStart(2,"0")}render(e){const t={counters:this.parseProps(e)};this.shadow.innerHTML=v.render(ne,t)}}window.customElements.define("count-down",se);const oe=new Date("Sat Nov 30 2024 22:00:00 GMT-0500"),x=1e3,I=x*60,A=I*60,D=A*24;function k(n,e){return Math.floor(e/n)}function ae(n){let e="";for(const t in n)e+=`${t}: ${n[t]} `;console.log(e)}function ie(n){return{days:k(D,n),hours:k(A,n%D),minutes:k(I,n%A),seconds:k(x,n%I)}}function ce(n){return n>=0}function ue(){return oe-new Date}window.onload=()=>{const n=document.querySelector("count-down"),e=setInterval(()=>{const t=ue();if(ce(t)){const r=ie(t);ae(r),n.updateTime(r)}else console.log("event already occurred"),clearInterval(e)},x)};
