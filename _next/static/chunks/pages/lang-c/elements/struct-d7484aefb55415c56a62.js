(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{603:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(3272),s=n.n(i);function c(e){return(0,r.jsx)("div",{className:s().abstract,style:e.styles,children:e.children})}},1221:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(5893),i=n(3349),s=n(6156),c=n(2949),l=n(6610),a=n(5991),o=n(5255),d=n(6089),h=n(7608),u=n(7294),m=n(3300),f=n.n(m),x=n(9235),p=n(7694),j=n(5005),g=n(7625),v=n(767),Z=n(8774),b=n(4370),y=n(3253),_=n.n(y);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,h.Z)(e);if(t){var i=(0,h.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,d.Z)(this,n)}}function I(e){var t={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(t.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:t,children:e.children})}var N=function(e){(0,o.Z)(n,e);var t=k(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?f()(this.props.uri).then((function(e){return e.text()})).then((function(e){var t=e.split("\n");return""===t.slice(-1)[0]&&t.pop(),t.join("\n")})).then((function(t){e.setState({loaded:!0,source:t})})).catch((function(t){return e.setState({loaded:!0,source:t})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,t=(x.lG.theme,(0,c.Z)(x.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(x.ZP,O(O({theme:p.Z},t),{},{code:this.state.source,language:this.props.language,children:function(t){var n=t.className,i=t.style,s=t.tokens,c=t.getLineProps,l=t.getTokenProps;return(0,r.jsx)(I,{className:n,style:i,maxHeight:e.maxHeight,children:s.map((function(e,t){return(0,r.jsx)("div",O(O({},c({line:e,key:t})),{},{children:e.map((function(e,t){return(0,r.jsx)("span",O({},l({token:e,key:t})))}))}))}))})}}))})}}]),n}(u.Component),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},P=function(e){(0,o.Z)(n,e);var t=k(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,i.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,i.Z)(r)),r}return(0,a.Z)(n,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(N,O({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:Z.TT,style:{width:"1rem"}})}),(0,r.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:C,children:[(0,r.jsx)(N,O(O({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(j.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(j.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:v.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(N,O({},this.props))}}]),n}(u.Component)},6905:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(4824),s=n.n(i);function c(e){return(0,r.jsx)("div",{className:s().element,style:e.styles,children:e.children})}},5642:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(4091),s=n.n(i);function c(e){return(0,r.jsx)("div",{className:s().grid,children:e.children})}},8237:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=n(3062),s=n(4315),c=n(4505),l=n(7625),a=n(1436);function o(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(i.Z,{bg:"light",expand:"md",children:[(0,r.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,r.jsx)(i.Z.Collapse,{id:"basic-navbar-nav",children:(0,r.jsxs)(s.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(s.Z.Link,{href:"/",children:(0,r.jsx)(l.G,{icon:a.SvR,style:{width:"1.5rem"}})}),(0,r.jsxs)(c.Z,{title:"C \u8a00\u8a9e",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c",className:"font-weight-bold",children:"C \u8a00\u8a9e\u5165\u9580"}),(0,r.jsx)(c.Z.Divider,{}),(0,r.jsx)("div",{className:"ml-2 font-weight-bold",children:"\u306f\u3058\u3081\u306b"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"}),(0,r.jsx)(c.Z.Divider,{}),(0,r.jsx)("div",{className:"ml-2 font-weight-bold",children:"\u69cb\u6587\u30fb\u898f\u5247"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/struct",children:"\u69cb\u9020\u4f53(WIP)"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"}),(0,r.jsx)(c.Z.Divider,{}),(0,r.jsx)("div",{className:"ml-2 font-weight-bold",children:"\u7d44\u307f\u5408\u308f\u305b"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(c.Z.Divider,{}),(0,r.jsx)("div",{className:"ml-2 font-weight-bold",children:"\u6f14\u7fd2"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(c.Z.Divider,{}),(0,r.jsx)("div",{className:"ml-2 font-weight-bold",children:"\u305d\u306e\u4ed6"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})]})]})})]})})}},7074:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(5513),s=n.n(i);function c(e){return(0,r.jsx)("div",{className:s().width,children:e.children})}},98:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893),i=n(9008),s=n(7074),c=n(8237),l=n(603);n(5642),n(6905),n(1221);function a(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"\u69cb\u9020\u4f53"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(c.Z,{}),(0,r.jsx)("main",{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h1",{children:"\u69cb\u9020\u4f53"}),(0,r.jsx)("p",{children:"\u4f5c\u6210\u4e2d"})]})})})]})}},9437:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/struct",function(){return n(98)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,523,418,779,433,888,179],(function(){return t=9437,e(e.s=t);var t}));var t=e.O();_N_E=t}]);