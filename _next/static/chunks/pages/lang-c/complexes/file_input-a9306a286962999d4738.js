(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{4059:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(3272),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().abstract,style:e.styles,children:e.children})}},2064:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(5893),s=t(3349),l=t(6156),i=t(2949),c=t(6610),a=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),x=t(3300),p=t.n(x),f=t(9235),j=t(7694),m=t(5005),g=t(7625),Z=t(767),v=t(8774),_=t(4370),b=t(3253),y=t.n(b),w=t(4184),I=t.n(w);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var s=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}var C=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={maxHeight:"15rem"},r.props.maxHeight&&Object.assign(r.state,{maxHeight:r.props.maxHeight}),r}return(0,a.Z)(t,[{key:"render",value:function(){return(0,r.jsx)("pre",{className:I()("code-core",this.props.className),style:this.state,children:this.props.children})}}]),t}(u.Component),M=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?p()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):this.setState({loaded:!0,source:this.props.source})}},{key:"render",value:function(){var e=this,n=(f.lG.theme,(0,i.Z)(f.lG,["theme"]));return(0,r.jsx)("div",{children:(0,r.jsx)(f.ZP,k(k({theme:j.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,l=n.tokens,i=n.getLineProps,c=n.getTokenProps;return(0,r.jsx)(C,{className:t,style:s,maxHeight:e.props.maxHeight,children:l.map((function(e,n){return(0,r.jsx)("div",k(k({},i({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",k({},c({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},T=function(e){(0,o.Z)(t,e);var n=N(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language}),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{variant:"outline-dark",size:"sm",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(y(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:P,children:[(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language,maxHeight:"70vh"}),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(m.Z,{variant:"outline-dark",size:"sm",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:_.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(m.Z,{variant:"outline-primary",size:"sm",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language})}}]),t}(u.Component)},5525:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(4824),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().element,style:e.styles,children:e.children})}},897:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(4091),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().grid,children:e.children})}},9955:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(3062),l=t(4315),i=t(4505),c=t(1664);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(c.default,{href:"/lang-c",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(l.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(i.Z.Divider,{}),(0,r.jsxs)(i.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(i.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(i.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},6535:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(5513),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().width,children:e.children})}},1332:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5893),s=t(9008),l=t(1664),i=t(6535),c=t(9955),a=t(4059),o=t(897),d=t(5525),h=t(2064);t(7625);function u(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(c.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)("p",{children:"\u5165\u529b\u306b\u5fdc\u3058\u3066\u52d5\u4f5c\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3064\u3044\u3066\u305d\u306e\u51e6\u7406\u304c\u6b63\u5e38\u306b\u3067\u304d\u3066\u3044\u308b\u304b\u78ba\u304b\u3081\u308b\u305f\u3081\u306b\u3082\uff0c \u5165\u529b\u3092\u3044\u304f\u3064\u304b\u5909\u3048\u305f\u3044\u5834\u5408\u304c\u3042\u308b\u3002 \u5186\u6ed1\u306b\u4f5c\u6210\u30fb\u4fee\u6b63\u304c\u3067\u304d\u308b\u3088\u3046\u306b\uff0c\u8aad\u307f\u8fbc\u307f\u306e\u90e8\u5206\u3092\u306a\u308b\u3079\u304f\u4efb\u610f\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u3088\u3046\u306b\u7528\u610f\u3059\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u95a2\u9023: ",(0,r.jsx)(l.default,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),", ",(0,r.jsx)(l.default,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),", ",(0,r.jsx)(l.default,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),", ",(0,r.jsx)(l.default,{href:"\u5ba3\u8a00\u6587\u3068\u5b9f\u884c\u6587",children:"\u5ba3\u8a00\u6587\u3068\u5b9f\u884c\u6587"}),", ",(0,r.jsx)(l.default,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),", ",(0,r.jsx)(l.default,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),", ",(0,r.jsx)(l.default,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),", ",(0,r.jsx)(l.default,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"}),"."]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"\u5168\u4f53\u306e\u6d41\u308c"}),(0,r.jsx)("p",{children:"\u8aad\u307f\u8fbc\u307f\u7528\u306e\u95a2\u6570\u3092\u4f5c\u308b\u306e\u3067\u306f\u306a\u304f\uff0cmain \u95a2\u6570\u306b\u8cbc\u308a\u4ed8\u3051\u3066\u4f7f\u3046\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u4f5c\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3059\u308b\u3002 \u30d5\u30a1\u30a4\u30eb\u540d\u3060\u3051\u4efb\u610f\u306b\u3057\u3066\u304a\u304d\uff0c\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u53d6\u308a\u8fbc\u307f\u5148\u3068\u306a\u308b\u5909\u6570\u306f\uff0c\u8cbc\u308a\u4ed8\u3051\u305f\u5f8c\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u76ee\u7684\u306b\u5408\u308f\u305b\u3066 \u66f8\u304d\u63db\u3048\u308b\u3088\u3046\u306b\u4f7f\u3046\u3053\u3068\u3092\u60f3\u5b9a\u3059\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u76ee\u7684\u306b\u6cbf\u3063\u3066\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u6210\u3059\u308b\u3068\u304d\uff0c \u307e\u305a\u306f\u5358\u7d14\u304b\u3064\u78ba\u5b9f\u306b\u52d5\u304f\u3082\u306e\u3092\u4f5c\u308a\uff0c\u305d\u308c\u3092\u6b63\u5e38\u306b\u3092\u4fdd\u3061\u3064\u3064\uff0c\u67d4\u8edf\u3055\u3092\u3064\u3051\u3066\u3044\u304f\u3068\u3088\u3044\u3002 \u4f8b\u3048\u3070\uff0c\u4eca\u56de\u306f",(0,r.jsxs)("ol",{className:"mt-3 mb-3",children:[(0,r.jsx)("li",{children:"\u6c7a\u307e\u3063\u305f\u540d\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3051\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsx)("li",{children:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3081\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsx)("li",{children:"\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u4efb\u610f\u306b\u4e0e\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsx)("li",{children:"(\u3059\u3079\u3066\u306e\u884c\u306e\u30c7\u30fc\u30bf\u3092\u307e\u3068\u3081\u3066\u4fdd\u5b58\u3059\u308b)"}),(0,r.jsx)("li",{children:"(\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4efb\u610f\u306b\u4e0e\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308b)"})]}),"\u306e\u3088\u3046\u306b\u3084\u308b\u3079\u304d\u3053\u3068\u3092\u5206\u89e3\u3059\u308b\u3002\u3053\u306e\u5404\u6bb5\u968e\u3067\u601d\u3044\u901a\u308a\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u52d5\u3044\u3066\u3044\u308b\u304b\u78ba\u304b\u3081\u306a\u304c\u3089\u9032\u3081\u308b\u3002"]})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"\u6c7a\u307e\u3063\u305f\u540d\u524d\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u958b\u3051\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsxs)("p",{children:["\u52d5\u4f5c\u3092\u8a66\u3059\u305f\u3081\u306b sample.ssv \u3068\u3044\u3046\u540d\u524d\u3067\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b \u3002 \u5185\u5bb9\u306f\uff0c\u30b7\u30f3\u30d7\u30eb\u306b\u3059\u308b\u305f\u3081\u306b 1 \u884c\u306b\u3064\u304d\u6574\u6570 1 \u3064\u304c\u66f8\u304b\u308c\u3066\u3044\u308b\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u306b\u3057\u3066\u304a\u304f\u3002",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/complexes/file_input/sample.ssv",language:"txt",download:!0})]}),(0,r.jsxs)("p",{children:["\u5f8c\u3005\u30d5\u30a1\u30a4\u30eb\u304c\u6b63\u5e38\u306b\u958b\u304b\u308c\u3066\u3044\u305f\u5834\u5408\u306b\u306e\u307f\u7d9a\u304f\u51e6\u7406\u304c\u884c\u308f\u308c\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u306e\u3067\uff0c \u30d5\u30a1\u30a4\u30eb\u304c\u6b63\u5e38\u306b\u958b\u3051\u305f\u3068\u304d\u306f\u4f55\u3082\u8868\u793a\u3055\u308c\u305a\uff0c\u958b\u3051\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u306f failed to open the file\u21b5 \u3068\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b \u30b3\u30fc\u30c9\u3092\u66f8\u304d\u305f\u3044\u3002 \u3053\u306e\u90e8\u5206\u306f\uff0c",(0,r.jsx)(l.default,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"}),"\u3068",(0,r.jsx)(l.default,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),"\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/complexes/file_input/open.c",language:"c",download:!0,expand:!0}),"\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3081\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsx)("p",{children:"\u8aad\u307f\u8fbc\u307f\u304c\u3067\u3067\u304d\u308b\u306e\u306f fp \u304c\u4f5c\u3089\u308c\u3066\u304b\u3089 fclose \u3055\u308c\u308b\u307e\u3067\u306e\u7bc4\u56f2\u306a\u306e\u3067\uff0c \u305d\u306e\u9593\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3002"}),(0,r.jsxs)("p",{children:["\u3053\u306e\u90e8\u5206\u3082\uff0c",(0,r.jsx)(l.default,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"}),"\u3092\u53c2\u7167\u3057\u3066\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/complexes/file_input/read.c",language:"c",download:!0,expand:!0}),'\u306e\u3088\u3046\u306b\u66f8\u304f\u3002 \uff08\u3053\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8 "%d\\n" \u3068\u5909\u6570 num \u304c\uff0c\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3068\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u7528\u9014\u306b\u5fdc\u3058\u3066\u5909\u5316\u3059\u308b\u3002\uff09']})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u4efb\u610f\u306b\u4e0e\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsxs)("p",{children:["\u8aad\u307f\u8fbc\u3080\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3092\uff0c",(0,r.jsx)(h.Z,{source:"./a.out XXX.ssv",language:"bash"}),"\u306e\u3088\u3046\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3059\u308b\u3068\u304d\u306b\u4e0e\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3002 \uff08\u3053\u306e XXX.ssv \u306f\u4efb\u610f\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u610f\u5473\u3057\u3066\u3044\u308b\u3002\uff09 \u305d\u306e\u305f\u3081\uff0c",(0,r.jsx)(l.default,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),"\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\uff0cmain \u95a2\u6570\u306b\u5f15\u6570\u3092\u8ffd\u52a0\u3057\uff0c\u30d5\u30a1\u30a4\u30eb\u540d\u306e\u90e8\u5206\u3092\u305d\u308c\u3067\u7f6e\u304d\u63db\u3048\u308b\u3088\u3046\u306b\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/complexes/file_input/arg.c",language:"c",download:!0,expand:!0}),"\u3068\u66f8\u304f\u3002\u30b3\u30de\u30f3\u30c9\u306b\u66f8\u304b\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u540d\u306f ./a.out \u306e\u5f8c\u306a\u306e\u3067 argv \u306e\u6dfb\u5b57\u306f 1 \u3067\u3042\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u9069\u5f53\u306a\u540d\u524d\u3067\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u308a\uff0c\u8aad\u307f\u8fbc\u307e\u305b\u3066\u601d\u3044\u901a\u308a\u306b\u52d5\u304f\u304b\u78ba\u304b\u3081\u308b\u3002"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"\u3059\u3079\u3066\u306e\u884c\u306e\u30c7\u30fc\u30bf\u3092\u307e\u3068\u3081\u3066\u4fdd\u5b58\u3059\u308b"}),(0,r.jsx)("p",{children:"1 \u884c\u305a\u3064\u306b\u3064\u3044\u3066\u306e\u51e6\u7406\u3067\u306f\u306a\u304f\uff0c\u3044\u304f\u3064\u304b\u306e\u884c\u306e\u30c7\u30fc\u30bf\u3092\u4f7f\u3063\u305f\u51e6\u7406\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u306f\uff0c \u305d\u308c\u3089\u306e\u30c7\u30fc\u30bf\u3092\u307e\u3068\u3081\u3066\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u3044\u304f\u3064\u3082\u306e\u5909\u6570\u3092\u307e\u3068\u3081\u308b\u305f\u3081\u306b\u306f\uff0c\u914d\u5217\u304c\u5229\u7528\u3067\u304d\u308b\u3002",(0,r.jsx)(l.default,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),"\u306e\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\uff0c \u8aad\u307f\u8fbc\u3093\u3060\u5185\u5bb9\u3092\u4fdd\u5b58\u3059\u308b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u3002 \u914d\u5217\u306f\uff0c\u8981\u7d20\u306e\u6570\u304c\u56fa\u5b9a\u306a\u306e\u3067\uff0c\uff08\u53ef\u5909\u306b\u3082\u3067\u304d\u308b\u304c\u5165\u9580\u306e\u7bc4\u56f2\u5916\u306a\u306e\u3067\uff0c\uff09 \u4e88\u3081\u8aad\u307f\u8fbc\u307e\u308c\u308b\u8981\u7d20\u6570 SIZE \u304c\u5206\u304b\u3063\u3066\u3044\u308b\u5834\u5408\u3092\u60f3\u5b9a\u3059\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u7528\u610f\u3057\u305f\u8981\u7d20\u6570\u306b\u6bd4\u3079\u3066\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304b\u308c\u305f\u5024\u306e\u6570\u304c\u5c11\u306a\u3044\u3068\u304d\uff0c\u307e\u305f \u7528\u610f\u3057\u305f\u8981\u7d20\u6570\u304c\u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304b\u308c\u305f\u5024\u306e\u6570\u3088\u308a\u3082\u5c11\u306a\u3044\u3068\u304d\u306b\u60f3\u5b9a\u304b\u3089\u5916\u308c\u308b\u305f\u3081\uff0c \u305d\u308c\u3089\u304c\u751f\u3058\u3066\u3044\u306a\u3044\u304b\u30c1\u30a7\u30c3\u30af\u3059\u308b\u30b3\u30fc\u30c9\u3082\u8ffd\u52a0\u3057\u3066\u304a\u3044\u305f\u65b9\u304c\u4e0d\u610f\u306a\u30df\u30b9\u3092\u907f\u3051\u3089\u308c\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u6700\u7d42\u7684\u306b\uff0c1 \u884c\u305a\u3064\u8aad\u307f\u8fbc\u3093\u3067\u8868\u793a\u3057\u3066\u3044\u305f\u90e8\u5206\u3092\uff0c\u914d\u5217\u306b\u5024\u3092\u4fdd\u5b58\u3059\u308b\u3088\u3046\u306b\u66f8\u304d\u63db\u3048\u3066\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/complexes/file_input/array.c",language:"c",download:!0,expand:!0}),"\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u306a\u308b\u3002\u7570\u5e38\u306a\u72b6\u614b\u3092\uff12\u4ef6\u3092\u691c\u51fa\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3082\u52a0\u3048\u305f\u3002 \u3055\u3089\u306b\uff0c\u914d\u5217\u306e\u30b5\u30a4\u30ba\u3092\u30ea\u30c6\u30e9\u30eb\u3067\u66f8\u304b\u306a\u304f\u3066\u826f\u3044\u3088\u3046\u306b define \u6587 (\u30de\u30af\u30ed) \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u601d\u3044\u901a\u308a\u306e\u51e6\u7406\u306b\u306a\u308b\u304b\u8abf\u3079\u308b\u305f\u3081\uff0c\u6b63\u5e38 1 \u4ef6\uff0c\u7570\u5e38 2 \u4ef6\u306b\u3064\u3044\u3066\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u3092\u305d\u308c\u305e\u308c\u7528\u610f\u3057\uff0c \u305d\u308c\u305e\u308c\u306e\u5834\u5408\u306e\u51fa\u529b\u3092\u78ba\u304b\u3081\u3066\u307b\u3057\u3044\u3002"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u4efb\u610f\u306b\u4e0e\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308b"}),(0,r.jsx)("p",{children:"\u52d8\u304c\u3044\u3044\u65b9\u306f\uff0c\u300cprintf \u95a2\u6570\u306a\u3069\u5f15\u6570\u306e\u6570\u3092\u5909\u3048\u3089\u308c\u308b\u95a2\u6570\u304c\u3042\u308b\u3057\uff0c \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u6587\u5b57\u5217\u3060\u3057\uff0c\u95a2\u6570\u306b\u307e\u3068\u3081\u3066\u3082\u3063\u3068\u4f7f\u3044\u3084\u3059\u3044\u3082\u306e\u304c\u3067\u304d\u308b\u306e\u3067\u306f\uff1f\u300d \u3068\u8003\u3048\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u3002 \u3082\u3061\u308d\u3093\u3053\u308c\u306f\u53ef\u80fd\u3067\u3042\u308b\u304c\uff0c\u5165\u9580\u306e\u7bc4\u56f2\u3092\u8d85\u3048\u3066\u3057\u307e\u3046\u306e\u3067\uff0c\u53d6\u308a\u4e0a\u3052\u306a\u304b\u3063\u305f\u3002 \u53ef\u5909\u9577\u5f15\u6570\u306e\u4f7f\u3044\u65b9\u3092\u8abf\u3079\u308c\u3070\u89e3\u6c7a\u3067\u304d\u308b\u306e\u3067\uff0c\u4f59\u529b\u304c\u3042\u308c\u3070\u305c\u3072\u8a66\u3057\u3066\u307b\u3057\u3044\u3002"})]})]})]})})]})}},3744:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/complexes/file_input",function(){return t(1332)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,376,779,433,888,179],(function(){return n=3744,e(e.s=n);var n}));var n=e.O();_N_E=n}]);