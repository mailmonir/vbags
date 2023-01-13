"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{9357:function(e,t,n){var a=n(7294),i=n(1883);t.Z=function(e){var t,n;let{description:r,title:o,children:c}=e;const{site:s}=(0,i.useStaticQuery)("63159454"),d=r||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?o+" | "+u:o),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:d}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:d}),c)}},6009:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l},default:function(){return f}});var a=n(7294),i=n(4384),r=n(9357),o=n(8032);function c(){return a.createElement("section",{className:"certifications"},a.createElement("div",{className:"u-center-text u-margin-bottom-big"},a.createElement("h2",{className:"heading-secondary"},"Certifications")),a.createElement("div",{className:"certifications__item-wrapper"},a.createElement("div",{className:"certifications__item"},a.createElement(o.S,{src:"../images/certifications/bsci.webp",alt:"bsci logo",className:"certifications__image",__imageData:n(3607)})),a.createElement("div",{className:"certifications__item"},a.createElement(o.S,{src:"../images/certifications/smeta.webp",alt:"smeta logo",className:"certifications__image",__imageData:n(9467)})),a.createElement("div",{className:"certifications__item"},a.createElement(o.S,{src:"../images/certifications/oekotex.webp",alt:"oekotex logo",className:"certifications__image",__imageData:n(5473)})),a.createElement("div",{className:"certifications__item"},a.createElement(o.S,{src:"../images/certifications/accord.webp",alt:"accord logo",className:"certifications__image",__imageData:n(3186)}))))}var s=n(1883),d=n(2730);function u(){const[e]=(0,d.E)({loop:!0,duration:5e3,dragStart:()=>{},dragEnd:()=>{}},[e=>{let t,n=!1;function a(){clearTimeout(t)}function i(){clearTimeout(t),n||(t=setTimeout((()=>{e.next()}),5e3))}e.on("created",(()=>{e.container.addEventListener("mouseover",(()=>{n=!0,a()})),e.container.addEventListener("mouseout",(()=>{n=!1,i()})),i()})),e.on("dragStarted",a),e.on("animationEnded",i),e.on("updated",i)}]);return a.createElement("div",{ref:e,className:"keen-slider"},a.createElement("div",{className:"keen-slider__slide"},a.createElement(o.S,{src:"../images/carousel/slider-one.jpg",alt:"slider image one",className:"slider-image",__imageData:n(495)}),a.createElement("div",{className:"overlay"},a.createElement("div",{className:"overlay__text-box"},a.createElement("h1",{className:"heading-primary"},a.createElement("span",{className:"heading-primary--main"},"Victor Bags Limited"),a.createElement("span",{className:"heading-primary--sub"},"is where expedition starts")),a.createElement(s.Link,{href:"/products",className:"btn btn--white btn--animated"},"Discover our products")))),a.createElement("div",{className:"keen-slider__slide"},a.createElement(o.S,{src:"../images/carousel/slider-two.jpg",alt:"slider image two",className:"slider-image",__imageData:n(9162)}),a.createElement("div",{className:"overlay"},a.createElement("div",{className:"overlay__text-box"},a.createElement("h1",{className:"heading-primary"},a.createElement("span",{className:"heading-primary--main"},"A bag manufacturer, we have served more than ten well known brands and have passed ISO9001, BSCI, SEDEX and other certifications"))))),a.createElement("div",{className:"keen-slider__slide"},a.createElement(o.S,{src:"../images/carousel/slider-three.jpg",alt:"slider image three",className:"slider-image",__imageData:n(6404)}),a.createElement("div",{className:"overlay"},a.createElement("div",{className:"overlay__text-box"},a.createElement("h1",{className:"heading-primary"},a.createElement("span",{className:"heading-primary--main"},"Design & Developement"),a.createElement("span",{className:"heading-primary--sub"},"According to trend of developent, continue to develop new styles and new features to product")),a.createElement(s.Link,{href:"/about",className:"btn btn--white btn--animated"},"More about us")))),a.createElement("div",{className:"keen-slider__slide"},a.createElement(o.S,{src:"../images/carousel/slider-four.jpg",alt:"slider image four",className:"slider-image",__imageData:n(2492)}),a.createElement("div",{className:"overlay"})))}const l=()=>a.createElement(r.Z,{title:"Home"});var f=()=>a.createElement(i.Z,null,a.createElement(u,null),a.createElement(c,null))},2730:function(e,t,n){var a=n(7294);function i(e){return Array.prototype.slice.call(e)}function r(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function o(){return Date.now()}function c(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function s(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?i(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?i(e):[]}function d(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function u(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function l(){var e=[];return{add:function(t,n,a,i){t.addListener?t.addListener(a):t.addEventListener(n,a,i),e.push([t,n,a,i])},input:function(e,t,n,a){this.add(e,t,function(e){return function(t){t.nativeEvent&&(t=t.nativeEvent);var n=t.changedTouches||[],a=t.targetTouches||[],i=t.detail&&t.detail.x?t.detail:null;return e({id:i?i.identifier?i.identifier:"i":a[0]?a[0]?a[0].identifier:"e":"d",idChanged:i?i.identifier?i.identifier:"i":n[0]?n[0]?n[0].identifier:"e":"d",raw:t,x:i&&i.x?i.x:a[0]?a[0].screenX:i?i.x:t.pageX,y:i&&i.y?i.y:a[0]?a[0].screenY:i?i.y:t.pageY})}}(n),a)},purge:function(){e.forEach((function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])})),e=[]}}}function f(e,t,n){return Math.min(Math.max(e,t),n)}function m(e){return(e>0?1:0)-(e<0?1:0)||+e}function p(e){var t=e.getBoundingClientRect();return{height:r(t.height,e.offsetHeight),width:r(t.width,e.offsetWidth)}}function b(e,t,n,a){var i=e&&e[t];return null==i?n:a&&"function"==typeof i?i():i}function g(e){return Math.round(1e6*e)/1e6}function v(e,t){if(e===t)return!0;var n=typeof e;if(n!==typeof t)return!1;if("object"!==n||null===e||null===t)return"function"===n&&e.toString()===t.toString();if(e.length!==t.length||Object.getOwnPropertyNames(e).length!==Object.getOwnPropertyNames(t).length)return!1;for(var a in e)if(!v(e[a],t[a]))return!1;return!0}var h=function(){return h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)};function w(e,t,n){if(n||2===arguments.length)for(var a,i=0,r=t.length;i<r;i++)!a&&i in t||(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))}function x(e){var t,n,a,i,r,c,s,d,u,l,p,v,h,x,y=1/0,k=[],E=null,_=0;function N(e){I(_+e)}function S(e){var t=M(_+e).abs;return z(t)?t:null}function M(e){var t=Math.floor(Math.abs(g(e/n))),a=g((e%n+n)%n);a===n&&(a=0);var i=m(e),r=s.indexOf(w([],s,!0).reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e}))),o=r;return i<0&&t++,r===c&&(o=0,t+=i>0?1:-1),{abs:o+t*c*i,origin:r,rel:o}}function C(e,t,n){var a;if(t||!D())return T(e,n);if(!z(e))return null;var i=M(null!=n?n:_),r=i.abs,o=e-i.rel,s=r+o;a=T(s);var d=T(s-c*m(o));return(null!==d&&Math.abs(d)<Math.abs(a)||null===a)&&(a=d),g(a)}function T(e,t){if(null==t&&(t=g(_)),!z(e)||null===e)return null;e=Math.round(e);var a=M(t),i=a.abs,r=a.rel,o=a.origin,d=O(e),u=(t%n+n)%n,l=s[o],f=Math.floor((e-(i-r))/c)*n;return g(l-u-l+s[d]+f+(o===c?n:0))}function z(e){return j(e)===e}function j(e){return f(e,u,l)}function D(){return i.loop}function O(e){return(e%c+c)%c}function I(t){var n;n=t-_,k.push({distance:n,timestamp:o()}),k.length>6&&(k=k.slice(-6)),_=g(t);var a=L().abs;if(a!==E){var i=null!==E;E=a,i&&e.emit("slideChanged")}}function L(o){var s=o?null:function(){if(c){var e=D(),t=e?(_%n+n)%n:_,o=(e?_%n:_)-r[0][2],s=0-(o<0&&e?n-Math.abs(o):o),d=0,f=M(_),b=f.abs,g=f.rel,w=r[g][2],y=r.map((function(t,a){var r=s+d;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>n-1&&e?n:0)*m(-r));var o=a-g,u=m(o),l=o+b;e&&(-1===u&&r>w&&(l+=c),1===u&&r<w&&(l-=c),null!==p&&l<p&&(r+=n),null!==v&&l>v&&(r-=n));var f=r+t[0]+t[1],h=Math.max(r>=0&&f<=1?1:f<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return d+=t[0]+t[1],{abs:l,distance:i.rtl?-1*r+1-t[0]:r,portion:h,size:t[0]}}));return b=j(b),g=O(b),{abs:j(b),length:a,max:x,maxIdx:l,min:h,minIdx:u,position:_,progress:e?t/n:_/a,rel:g,slides:y,slidesLength:n}}}();return t.details=s,e.emit("detailsChanged"),s}return t={absToRel:O,add:N,details:null,distToIdx:S,idxToDist:C,init:function(t){if(function(){if(i=e.options,r=(i.trackConfig||[]).map((function(e){return[b(e,"size",1),b(e,"spacing",0),b(e,"origin",0)]})),c=r.length){n=g(r.reduce((function(e,t){return e+t[0]+t[1]}),0));var t,o=c-1;a=g(n+r[0][2]-r[o][0]-r[o][2]-r[o][1]),s=r.reduce((function(e,n){if(!e)return[0];var a=r[e.length-1],i=e[e.length-1]+(a[0]+a[2])+a[1];return i-=n[2],e[e.length-1]>i&&(i=e[e.length-1]),i=g(i),e.push(i),(!t||t<i)&&(d=e.length-1),t=i,e}),null),0===a&&(d=0),s.push(g(n))}}(),!c)return L(!0);var o;!function(){var t=e.options.range,n=e.options.loop;p=u=n?b(n,"min",-1/0):0,v=l=n?b(n,"max",y):d;var a=b(t,"min",null),i=b(t,"max",null);a&&(u=a),i&&(l=i),h=u===-1/0?u:e.track.idxToDist(u||0,!0,0),x=l===y?l:C(l,!0,0),null===i&&(v=l),b(t,"align",!1)&&l!==y&&0===r[O(l)][2]&&(x-=1-r[O(l)][0],l=S(x-_)),h=g(h),x=g(x)}(),o=t,Number(o)===o?N(T(j(t))):L()},to:I,velocity:function(){var e=o(),t=k.reduce((function(t,n){var a=n.distance,i=n.timestamp;return e-i>200||(m(a)!==m(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=a),t.lastTimestamp&&(t.time+=i-t.lastTimestamp),t.lastTimestamp=i),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function y(e){var t,n,a,i,r,o,c,s;function d(e){return 2*e}function u(e){return f(e,c,s)}function l(e){return 1-Math.pow(1-e,3)}function p(){return a?e.track.velocity():0}function b(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function g(){var t=e.track.details;t&&(r=t.min,o=t.max,c=t.minIdx,s=t.maxIdx)}function v(){e.animator.stop()}e.on("updated",g),e.on("optionsChanged",g),e.on("created",g),e.on("dragStarted",(function(){a=!1,v(),t=n=e.track.details.abs})),e.on("dragChecked",(function(){a=!0})),e.on("dragEnded",(function(){var a=e.options.mode;"snap"===a&&function(){var a=e.track,i=e.track.details,c=i.position,s=m(p());(c>o||c<r)&&(s=0);var d=t+s;0===i.slides[a.absToRel(d)].portion&&(d-=s),t!==n&&(d=n),m(a.idxToDist(d,!0))!==s&&(d+=s),d=u(d);var l=a.idxToDist(d,!0);e.animator.start([{distance:l,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])}(),"free"!==a&&"free-snap"!==a||function(){v();var t="free-snap"===e.options.mode,n=e.track,a=p();i=m(a);var c=e.track.details,s=[];if(a||!t){var f=b(a),g=f.dist,h=f.dur;if(h=d(h),g*=i,t){var w=n.idxToDist(n.distToIdx(g),!0);w&&(g=w)}s.push({distance:g,duration:h,easing:l});var x=c.position,y=x+g;if(y<r||y>o){var k=y<r?r-x:o-x,E=0,_=a;if(m(k)===i){var N=Math.min(Math.abs(k)/Math.abs(g),1),S=function(e){return 1-Math.pow(1-e,1/3)}(N)*h;s[0].earlyExit=S,_=a*(1-N)}else s[0].earlyExit=0,E+=k;var M=b(_,100),C=M.dist*i;e.options.rubberband&&(s.push({distance:C,duration:d(M.dur),easing:l}),s.push({distance:-C+E,duration:500,easing:l}))}e.animator.start(s)}else e.moveToIdx(u(c.abs),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}()})),e.on("dragged",(function(){n=e.track.details.abs}))}function k(e){var t,n,a,i,r,o,c,p,b,g,v,h,w,x,y,k,E,_,N=l();function S(t){if(o&&p===t.id){var s=z(t);if(b){if(!T(t))return C(t);g=s,b=!1,e.emit("dragChecked")}if(k)return g=s;d(t);var l=function(t){if(E===-1/0&&_===1/0)return t;var a=e.track.details,o=a.length,c=a.position,s=f(t,E-c,_-c);if(0===o)return 0;if(!e.options.rubberband)return s;if(c<=_&&c>=E)return t;if(c<E&&n>0||c>_&&n<0)return t;var d=(c<E?c-E:c-_)/o,u=i*o,l=Math.abs(d*u),m=Math.max(0,1-l/r*2);return m*m*t}(c(g-s)/i*a);n=m(l);var w=e.track.details.position;(w>E&&w<_||w===E&&n>0||w===_&&n<0)&&u(t),v+=l,!h&&Math.abs(v*i)>5&&(h=!0),e.track.add(l),g=s,e.emit("dragged")}}function M(t){!o&&e.track.details&&e.track.details.length&&(v=0,o=!0,h=!1,b=!0,p=t.id,T(t),g=z(t),e.emit("dragStarted"))}function C(t){o&&p===t.idChanged&&(o=!1,e.emit("dragEnded"))}function T(e){var t=j(),n=t?e.y:e.x,a=t?e.x:e.y,i=void 0!==w&&void 0!==x&&Math.abs(x-a)<=Math.abs(w-n);return w=n,x=a,i}function z(e){return j()?e.y:e.x}function j(){return e.options.vertical}function D(){i=e.size,r=j()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(E=t.min,_=t.max)}function O(e){h&&(u(e),d(e))}function I(){if(N.purge(),e.options.drag&&!e.options.disabled){var n;n=e.options.dragSpeed||1,c="function"==typeof n?n:function(e){return e*n},a=e.options.rtl?-1:1,D(),t=e.container,function(){var e="data-keen-slider-clickable";s("[".concat(e,"]:not([").concat(e,"=false])"),t).map((function(e){N.add(e,"dragstart",u),N.add(e,"mousedown",u),N.add(e,"touchstart",u)}))}(),N.add(t,"dragstart",(function(e){d(e)})),N.add(t,"click",O,{capture:!0}),N.input(t,"ksDragStart",M),N.input(t,"ksDrag",S),N.input(t,"ksDragEnd",C),N.input(t,"mousedown",M),N.input(t,"mousemove",S),N.input(t,"mouseleave",C),N.input(t,"mouseup",C),N.input(t,"touchstart",M,{passive:!0}),N.input(t,"touchmove",S,{passive:!1}),N.input(t,"touchend",C),N.input(t,"touchcancel",C),N.add(window,"wheel",(function(e){o&&d(e)}));var i="data-keen-slider-scrollable";s("[".concat(i,"]:not([").concat(i,"=false])"),e.container).map((function(e){return function(e){var t;N.input(e,"touchstart",(function(e){t=z(e),k=!0,y=!0}),{passive:!0}),N.input(e,"touchmove",(function(n){var a=j(),i=a?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,r=t-z(n),o=a?e.scrollTop:e.scrollLeft,c=a&&"scroll"===e.style.overflowY||!a&&"scroll"===e.style.overflowX;if(t=z(n),(r<0&&o>0||r>0&&o<i)&&y&&c)return k=!0;y=!1,d(n),k=!1})),N.input(e,"touchend",(function(){k=!1}))}(e)}))}}e.on("updated",D),e.on("optionsChanged",I),e.on("created",I),e.on("destroyed",N.purge)}function E(e){var t,n,a=null;function i(t,n,a){e.animator.active?o(t,n,a):requestAnimationFrame((function(){return o(t,n,a)}))}function r(){i(!1,!1,n)}function o(n,i,r){var o=0,c=e.size,u=e.track.details;if(u&&t){var l=u.slides;t.forEach((function(e,t){if(n)!a&&i&&s(e,null,r),d(e,null,r);else{if(!l[t])return;var u=l[t].size*c;!a&&i&&s(e,u,r),d(e,l[t].distance*c-o,r),o+=u}}))}}function c(t){return"performance"===e.options.renderMode?Math.round(t):t}function s(e,t,n){var a=n?"height":"width";null!==t&&(t=c(t)+"px"),e.style["min-"+a]=t,e.style["max-"+a]=t}function d(e,t,n){if(null!==t){t=c(t);var a=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(a,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function u(){t&&(o(!0,!0,n),t=null),e.on("detailsChanged",r,!0)}function l(){i(!1,!0,n)}function f(){u(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(a="auto"===b(e.options.slides,"perView",null),e.on("detailsChanged",r),(t=e.slides).length&&l())}e.on("created",f),e.on("optionsChanged",f),e.on("beforeOptionsChanged",(function(){u()})),e.on("updated",l),e.on("destroyed",u)}function _(e,t){return function(n){var a,i,r,o,d,u=l();function f(e){var t;c(n.container,"reverse","rtl"!==(t=n.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||e?null:""),c(n.container,"v",n.options.vertical&&!e?"":null),c(n.container,"disabled",n.options.disabled&&!e?"":null)}function m(){g()&&k()}function g(){var e=null;if(o.forEach((function(t){t.matches&&(e=t.__media)})),e===a)return!1;a||n.emit("beforeOptionsChanged"),a=e;var t=e?r.breakpoints[e]:r;return n.options=h(h({},r),t),f(),M(),C(),_(),!0}function v(e){var t=p(e);return(n.options.vertical?t.height:t.width)/n.size||1}function w(){return n.options.trackConfig.length}function x(e){for(var c in a=!1,r=h(h({},t),e),u.purge(),i=n.size,o=[],r.breakpoints||[]){var s=window.matchMedia(c);s.__media=c,o.push(s),u.add(s,"change",m)}u.add(window,"orientationchange",S),u.add(window,"resize",N),g()}function y(e){n.animator.stop();var t=n.track.details;n.track.init(null!=e?e:t?t.abs:0)}function k(e){y(e),n.emit("optionsChanged")}function E(e,t){if(e)return x(e),void k(t);M(),C();var a=w();_(),w()!==a?k(t):y(t),n.emit("updated")}function _(){var e=n.options.slides;if("function"==typeof e)return n.options.trackConfig=e(n.size,n.slides);for(var t=n.slides,a=t.length,i="number"==typeof e?e:b(e,"number",a,!0),r=[],o=b(e,"perView",1,!0),c=b(e,"spacing",0,!0)/n.size||0,s="auto"===o?c:c/o,d=b(e,"origin","auto"),u=0,l=0;l<i;l++){var f="auto"===o?v(t[l]):1/o-c+s,m="center"===d?.5-f/2:"auto"===d?0:d;r.push({origin:m,size:f,spacing:c}),u+=f}if(u+=c*(i-1),"auto"===d&&!n.options.loop&&1!==o){var p=0;r.map((function(e){var t=u-p;return p+=e.size+c,t>=1||(e.origin=1-t-(u>1?0:1-u)),e}))}n.options.trackConfig=r}function N(){M();var e=n.size;n.options.disabled||e===i||(i=e,E())}function S(){N(),setTimeout(N,500),setTimeout(N,2e3)}function M(){var e=p(n.container);n.size=(n.options.vertical?e.height:e.width)||1}function C(){n.slides=s(n.options.selector,n.container)}n.container=(d=s(e,document)).length?d[0]:null,n.destroy=function(){u.purge(),n.emit("destroyed"),f(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=E,x(n.options)}}var N=function(e,t,n){try{return function(e,t){var n,a={};return n={emit:function(e){a[e]&&a[e].forEach((function(e){e(n)}));var t=n.options&&n.options[e];t&&t(n)},moveToIdx:function(e,t,a){var i=n.track.idxToDist(e,t);if(i){var r=n.options.defaultAnimation;n.animator.start([{distance:i,duration:b(a||r,"duration",500),easing:b(a||r,"easing",(function(e){return 1+--e*e*e*e*e}))}])}},on:function(e,t,n){void 0===n&&(n=!1),a[e]||(a[e]=[]);var i=a[e].indexOf(t);i>-1?n&&delete a[e][i]:n||a[e].push(t)},options:e},function(){if(n.track=x(n),n.animator=function(e){var t,n,a,i,r,o;function c(t){o||(o=t),s(!0);var r=t-o;r>a&&(r=a);var l=i[n];if(l[3]<r)return n++,c(t);var f=l[2],m=l[4],p=l[0],b=l[1]*(0,l[5])(0===m?1:(r-f)/m);if(b&&e.track.to(p+b),r<a)return u();o=null,s(!1),d(null),e.emit("animationEnded")}function s(e){t.active=e}function d(e){t.targetIdx=e}function u(){var e;e=c,r=window.requestAnimationFrame(e)}function l(){var t;t=r,window.cancelAnimationFrame(t),s(!1),d(null),o&&e.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),e.track.details){var r=0,o=e.track.details.position;n=0,a=0,i=t.map((function(e){var t,n=Number(o),i=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,c=e.easing,s=e.distance*c(i/e.duration)||0;o+=s;var d=a;return a+=i,r+=s,[n,e.distance,d,a,e.duration,c]})),d(e.track.distToIdx(r)),u(),e.emit("animationStarted")}},stop:l,targetIdx:null}}(n),t)for(var e=0,a=t;e<a.length;e++)(0,a[e])(n);n.track.init(n.options.initial||0),n.emit("created")}(),n}(t,w([_(e,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),E,k,y],n||[],!0))}catch(e){console.error(e)}};t.E=function(e,t){var n=a.useRef(null),i=a.useRef(!1),r=a.useRef(e),o=a.useCallback((function(a){a?(r.current=e,n.current=new N(a,e,t),i.current=!1):(n.current&&n.current.destroy&&n.current.destroy(),n.current=null)}),[]);return a.useEffect((function(){v(r.current,e)||(r.current=e,n.current&&n.current.update(r.current))}),[e]),[o,n]}},3607:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/667ef32890f48b011db96cfa1ab40084/9ff6b/bsci.webp","srcSet":"/static/667ef32890f48b011db96cfa1ab40084/70dfd/bsci.webp 150w,\\n/static/667ef32890f48b011db96cfa1ab40084/9b21f/bsci.webp 300w,\\n/static/667ef32890f48b011db96cfa1ab40084/9ff6b/bsci.webp 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[]},"width":600,"height":400}')},2492:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#283838","images":{"fallback":{"src":"/static/ab0e8575e0de555ba21f4c48bead331e/a764f/slider-four.jpg","srcSet":"/static/ab0e8575e0de555ba21f4c48bead331e/fb67e/slider-four.jpg 480w,\\n/static/ab0e8575e0de555ba21f4c48bead331e/3059d/slider-four.jpg 960w,\\n/static/ab0e8575e0de555ba21f4c48bead331e/a764f/slider-four.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/ab0e8575e0de555ba21f4c48bead331e/3a3a2/slider-four.webp 480w,\\n/static/ab0e8575e0de555ba21f4c48bead331e/bde8a/slider-four.webp 960w,\\n/static/ab0e8575e0de555ba21f4c48bead331e/c512e/slider-four.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},3186:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/5fa70eb91e5474ce07ebacf2e3a67842/9ff6b/accord.webp","srcSet":"/static/5fa70eb91e5474ce07ebacf2e3a67842/70dfd/accord.webp 150w,\\n/static/5fa70eb91e5474ce07ebacf2e3a67842/9b21f/accord.webp 300w,\\n/static/5fa70eb91e5474ce07ebacf2e3a67842/9ff6b/accord.webp 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[]},"width":600,"height":400}')},9162:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#585858","images":{"fallback":{"src":"/static/a4350862c49bf777eef28902fe4d43cd/a764f/slider-two.jpg","srcSet":"/static/a4350862c49bf777eef28902fe4d43cd/fb67e/slider-two.jpg 480w,\\n/static/a4350862c49bf777eef28902fe4d43cd/3059d/slider-two.jpg 960w,\\n/static/a4350862c49bf777eef28902fe4d43cd/a764f/slider-two.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/a4350862c49bf777eef28902fe4d43cd/3a3a2/slider-two.webp 480w,\\n/static/a4350862c49bf777eef28902fe4d43cd/bde8a/slider-two.webp 960w,\\n/static/a4350862c49bf777eef28902fe4d43cd/c512e/slider-two.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},6404:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#887878","images":{"fallback":{"src":"/static/63ddd79ca863902bede5a2ec6f5b65b7/a764f/slider-three.jpg","srcSet":"/static/63ddd79ca863902bede5a2ec6f5b65b7/fb67e/slider-three.jpg 480w,\\n/static/63ddd79ca863902bede5a2ec6f5b65b7/3059d/slider-three.jpg 960w,\\n/static/63ddd79ca863902bede5a2ec6f5b65b7/a764f/slider-three.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/63ddd79ca863902bede5a2ec6f5b65b7/3a3a2/slider-three.webp 480w,\\n/static/63ddd79ca863902bede5a2ec6f5b65b7/bde8a/slider-three.webp 960w,\\n/static/63ddd79ca863902bede5a2ec6f5b65b7/c512e/slider-three.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},9467:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6d57ea15b1342073b554a52dafdef538/9ff6b/smeta.webp","srcSet":"/static/6d57ea15b1342073b554a52dafdef538/70dfd/smeta.webp 150w,\\n/static/6d57ea15b1342073b554a52dafdef538/9b21f/smeta.webp 300w,\\n/static/6d57ea15b1342073b554a52dafdef538/9ff6b/smeta.webp 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[]},"width":600,"height":400}')},495:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/583877508bb57b1b9fce222d8372887c/a764f/slider-one.jpg","srcSet":"/static/583877508bb57b1b9fce222d8372887c/fb67e/slider-one.jpg 480w,\\n/static/583877508bb57b1b9fce222d8372887c/3059d/slider-one.jpg 960w,\\n/static/583877508bb57b1b9fce222d8372887c/a764f/slider-one.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/583877508bb57b1b9fce222d8372887c/3a3a2/slider-one.webp 480w,\\n/static/583877508bb57b1b9fce222d8372887c/bde8a/slider-one.webp 960w,\\n/static/583877508bb57b1b9fce222d8372887c/c512e/slider-one.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},5473:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e6192eb4fc91a15fcbd4070d57984801/9ff6b/oekotex.webp","srcSet":"/static/e6192eb4fc91a15fcbd4070d57984801/70dfd/oekotex.webp 150w,\\n/static/e6192eb4fc91a15fcbd4070d57984801/9b21f/oekotex.webp 300w,\\n/static/e6192eb4fc91a15fcbd4070d57984801/9ff6b/oekotex.webp 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[]},"width":600,"height":400}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5e2e54c7928eefd8ade5.js.map