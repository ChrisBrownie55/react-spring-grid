!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("use-measure"),require("react"),require("react-spring")):"function"==typeof define&&define.amd?define(["exports","use-measure","react","react-spring"],t):t(e.reactSpringGrid={},e.useMeasure,e.react,e.reactSpring)}(this,function(e,t,r,n){function i(e){var t=e.component,r=e.data,i=e.style,s=n.useSpring({left:e.x+"px",top:e.y+"px"});return react(t,{data:r,style:Object.assign({},i,s)})}t=t&&t.hasOwnProperty("default")?t.default:t,e.Grid=function(e){var s=e.items,a=e.keys,o=e.children,c=e.component;void 0===c&&(c="section");var u=e.style,p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["items","keys","children","component","style"]),f=n.useTransition(s,a,{}),d=r.useRef(null);return t(d),react(c,Object.assign({},{ref:d,style:Object.assign({},u,{position:"relative"})},p),f.map(function(e){return react(i,{component:o,data:e.item,style:e.props,x:0,y:0})}))},e.Item=i});
//# sourceMappingURL=index.umd.js.map