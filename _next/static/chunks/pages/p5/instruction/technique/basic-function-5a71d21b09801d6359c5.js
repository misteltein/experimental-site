(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{4059:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(3272),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},2064:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(5893),s=t(3349),i=t(6156),c=t(2949),l=t(6610),a=t(5991),o=t(5255),h=t(6089),d=t(7608),u=t(7294),p=t(3300),f=t.n(p),m=t(9235),x=t(7694),j=t(5005),g=t(7625),Z=t(767),v=t(8774),b=t(4370),y=t(3253),_=t.n(y),w=t(4184),O=t.n(w);function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.Z)(e);if(n){var s=(0,d.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,h.Z)(this,t)}}var C=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={maxHeight:"15rem"},r.props.maxHeight&&Object.assign(r.state,{maxHeight:r.props.maxHeight}),r}return(0,a.Z)(t,[{key:"render",value:function(){return(0,r.jsx)("pre",{className:O()("code-core",this.props.className),style:this.state,children:this.props.children})}}]),t}(u.Component),M=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?f()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):this.setState({loaded:!0,source:this.props.source})}},{key:"render",value:function(){var e=this,n=(m.lG.theme,(0,c.Z)(m.lG,["theme"]));return(0,r.jsx)("div",{children:(0,r.jsx)(m.ZP,k(k({theme:x.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,i=n.tokens,c=n.getLineProps,l=n.getTokenProps;return(0,r.jsx)(C,{className:t,style:s,maxHeight:e.props.maxHeight,children:i.map((function(e,n){return(0,r.jsx)("div",k(k({},c({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",k({},l({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},T=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language}),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{variant:"outline-dark",size:"sm",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:P,children:[(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language,maxHeight:"70vh"}),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(j.Z,{variant:"outline-dark",size:"sm",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(j.Z,{variant:"outline-primary",size:"sm",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language})}}]),t}(u.Component)},5525:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(4824),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},897:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(4091),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().grid,children:e.children})}},9955:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(3062),i=t(4315),c=t(4505),l=t(1664);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(l.default,{href:"/lang-c",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(c.Z.Divider,{}),(0,r.jsxs)(c.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(c.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(c.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},6535:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(5513),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().width,children:e.children})}},2112:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893),s=t(9008),i=t(6535),c=(t(9955),t(4059)),l=t(897),a=t(5525);t(2064),t(1664);function o(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u63cf\u753b\u7528\u306e\u30b5\u30d6\u30eb\u30fc\u30c1\u30f3"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"\u63cf\u753b\u7528\u306e\u30b5\u30d6\u30eb\u30fc\u30c1\u30f3"}),(0,r.jsx)("p",{children:"p5.js \u3067\u306f\u6c7a\u307e\u3063\u305f\u6bb5\u968e\u3067\u547c\u3073\u51fa\u3055\u308c\u308b\u95a2\u6570\u304c\u304a\u304a\u304f\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u308c\u3089\u306e\u5b9f\u88c5\u3092\u5909\u3048\u308b\u3053\u3068\u3067\u4f5c\u54c1\u3092\u5236\u4f5c\u3057\u307e\u3059\u3002"})]}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"setup"}),(0,r.jsx)("p",{children:"\u6a5f\u4f1a\u306f\u591a\u304f\u306a\u3044\u3067\u3059\u304c\uff0csetup \u306b\u5148\u884c\u3059\u308b\u6e96\u5099\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u306f\uff0cpreload() \u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"draw"}),(0,r.jsx)("p",{})]})]})]})})]})}},2823:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p5/instruction/technique/basic-function",function(){return t(2112)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,376,779,433,888,179],(function(){return n=2823,e(e.s=n);var n}));var n=e.O();_N_E=n}]);