(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5802:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(5893),o=t(6610),i=t(5991),c=t(5255),s=t(6089),a=t(7608),l=t(7294),u=t(1664),f=t(7625),d=t(1436),p=t(5210),h=t.n(p);function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,a.Z)(e);if(n){var o=(0,a.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,s.Z)(this,t)}}var y=function(e){(0,c.Z)(t,e);var n=v(t);function t(e){return(0,o.Z)(this,t),n.call(this,e)}return(0,i.Z)(t,[{key:"render",value:function(){var e;return(0,r.jsx)("div",{className:h().card,style:this.props.styles,children:(0,r.jsx)(u.default,{href:this.props.url,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(f.G,{icon:null!==(e=this.props.icon)&&void 0!==e?e:d.yOZ}),(0,r.jsx)("span",{children:this.props.title}),(0,r.jsx)("div",{children:this.props.description})]})})})}}]),t}(l.Component)},6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var i=o(t(7294)),c=t(1689),s=t(2441),a=t(5749),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.asPath||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],s=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,g=e.scroll,x=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var m=i.Children.only(h),_=m&&"object"===typeof m&&m.ref,j=(0,a.useIntersection)({rootMargin:"200px"}),b=r(j,2),k=b[0],E=b[1],w=i.default.useCallback((function(e){k(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,k]);(0,i.useEffect)((function(){var e=E&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof x?x:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,E,x,n,t]);var C={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,s,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:a,scroll:s}))}(e,t,d,p,v,y,g,x)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var L="undefined"!==typeof x?x:t&&t.locale,M=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);C.href=M||(0,c.addBasePath)((0,c.addLocale)(p,L,t&&t.defaultLocale))}return i.default.cloneElement(m,C)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,a=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||f||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),i=t(8391),c="undefined"!==typeof IntersectionObserver;var s=new Map},784:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),o=t(9008),i=t(5802),c=t(1364),s=t.n(c);function a(e){return(0,r.jsx)("div",{className:s().grid,children:e.children})}function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"robots",content:"noindex"}),(0,r.jsx)("title",{children:"\u5348\u524d\uff13\u6642\u306e\u73c8\u7432"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Noto+Serif+JP&family=Roboto+Mono&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("main",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"\u5348\u524d\uff13\u6642\u306e\u73c8\u7432"}),(0,r.jsx)("span",{children:"\u66f8\u3044\u305f\u3082\u306e\u3092\u7f6e\u3044\u3066\u304a\u304d\u307e\u3059\u306e\u3067\u3069\u3046\u305e\u3002"})]}),(0,r.jsx)(a,{children:(0,r.jsx)(i.Z,{url:"/lang-c",title:"C \u8a00\u8a9e",description:"\u53e4\u3081\u304b\u3057\u3044\u304c\u96a0\u3057\u4e8b\u3084\u304a\u305b\u3063\u304b\u3044\u304c\u5c11\u306a\u3044\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u57fa\u672c\u3092\u8eab\u306b\u3064\u3051\u308b\u3053\u3068\u306b\u9069\u3057\u305f\u8a00\u8a9e\u306e\u3072\u3068\u3064\u3002"})})]})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(784)}])},1364:function(e){e.exports={grid:"grid_grid__1vrxd",center:"grid_center__1AMq3"}},5210:function(e){e.exports={card:"linkCard_card__1HpnX"}},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,523,418,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);