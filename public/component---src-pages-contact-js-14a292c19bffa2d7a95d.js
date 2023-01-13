"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[501],{1822:function(e,t,a){var l=a(7294),r=a(8032);t.Z=e=>{let{title:t,image:a}=e;return l.createElement("div",{className:"banner"},l.createElement(r.G,{image:(0,r.c)(null==a?void 0:a.localFile),alt:a.altText,className:"banner__image"}),l.createElement("div",{className:"banner__overlay"},l.createElement("h2",{className:"banner__title"},t)))}},6561:function(e,t,a){var l=a(7294),r=a(1883),n=a(9583);t.Z=e=>{let{bcitems:t}=e;return l.createElement("div",{className:"breadcrumb"},l.createElement(r.Link,{className:"breadcrumb__link",to:"/"},l.createElement("span",{className:"breadcrumb__homeicon"},l.createElement(n.xng,null)),"Home"),t.map(((e,t)=>e.link?l.createElement(l.Fragment,{key:t},l.createElement("span",{className:"breadcrumb__separator"},l.createElement(n.Dli,{size:"1.2rem"})),l.createElement(r.Link,{to:e.link},e.text)):l.createElement(l.Fragment,{key:t},l.createElement("span",{className:"breadcrumb__separator"},l.createElement(n.Dli,{size:"1.2rem"})),l.createElement("span",null,e.text)))))}},7315:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),r=a(4384),n=a(1822);var i=()=>l.createElement("div",{className:"book__form"},l.createElement("form",{action:"#",className:"form"},l.createElement("div",{className:"u-margin-bottom-medium"},l.createElement("h2",{className:"heading-tertiary"},"Submit your inquiry")),l.createElement("div",{className:"form__group"},l.createElement("input",{type:"text",className:"form__input",placeholder:"Full name",id:"name",required:""}),l.createElement("label",{htmlFor:"name",className:"form__label"},"Full name")),l.createElement("div",{className:"form__group"},l.createElement("input",{type:"email",className:"form__input",placeholder:"Email address",id:"email",required:""}),l.createElement("label",{htmlFor:"email",className:"form__label"},"Email address")),l.createElement("div",{className:"form__group"},l.createElement("input",{type:"text",className:"form__input",placeholder:"Subject",id:"subject",required:""}),l.createElement("label",{htmlFor:"subject",className:"form__label"},"Subject")),l.createElement("div",{className:"form__group"},l.createElement("textarea",{className:"form__input",placeholder:"Content",id:"content",required:""}),l.createElement("label",{htmlFor:"content",className:"form__label"},"Content")),l.createElement("div",{className:"form__group"},l.createElement("button",{className:"btn btn--red"},"Send message →")))),s=a(6561),o=function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var l,r,n;if(Array.isArray(t)){if((l=t.length)!=a.length)return!1;for(r=l;0!=r--;)if(!e(t[r],a[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((l=(n=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(r=l;0!=r--;)if(!Object.prototype.hasOwnProperty.call(a,n[r]))return!1;for(r=l;0!=r--;){var i=n[r];if(!e(t[i],a[i]))return!1}return!0}return t!=t&&a!=a};const d="__googleMapsScriptId";var c;!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(c||(c={}));class m{constructor({apiKey:e,authReferrerPolicy:t,channel:a,client:l,id:r=d,language:n,libraries:i=[],mapIds:s,nonce:c,region:u,retries:h=3,url:g="https://maps.googleapis.com/maps/api/js",version:p}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=a,this.client=l,this.id=r||d,this.language=n,this.libraries=i,this.mapIds=s,this.nonce=c,this.region=u,this.retries=h,this.url=g,this.version=p,m.instance){if(!o(this.options,m.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(m.instance.options)}`);return m.instance}m.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?c.FAILURE:this.done?c.SUCCESS:this.loading?c.LOADING:c.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((a=>{a?t(a.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var u=e=>{let{lat:t,lng:a}=e;const r=(0,l.useRef)(null);return(0,l.useEffect)((()=>{let e;new m({apiKey:{}.GATSBY_PUBLIC_API_KEY,version:"weekly"}).load().then((()=>{const l=window.google;e=new l.maps.Map(r.current,{center:{lat:Number(t),lng:Number(a)},zoom:14});const n=new l.maps.InfoWindow,i=new l.maps.Marker({position:{lat:Number(t),lng:Number(a)},map:e,title:"Victor Bags BD Limited"});i.addListener("click",(()=>{n.close(),n.setContent(i.getTitle()),n.open(i.getMap(),i)}))}))})),l.createElement("div",{id:"map",ref:r})};var h=e=>{var t,a,o,d,c,m,h;let{data:g}=e;const p=null==g||null===(t=g.wpPage)||void 0===t||null===(a=t.featuredImage)||void 0===a?void 0:a.node,b=null==g||null===(o=g.wpPage)||void 0===o?void 0:o.title,v=null==g||null===(d=g.wpPage)||void 0===d?void 0:d.contactPage;console.log(g);const E={init:"linear-gradient(\n          to right,\n          rgba(255,255,255, 0.9) 0%,\n          rgba(255,255,255, 0.9) 100%),\n        url("+(null==v||null===(c=v.contactFormImage)||void 0===c?void 0:c.sourceUrl)+")",upto900:"linear-gradient(\n        105deg,\n        rgba(255,255,255, 0.9) 0%,\n        rgba(255,255,255, 0.9) 65%,\n        transparent 65%\n      ),\n      url("+(null==v||null===(m=v.contactFormImage)||void 0===m?void 0:m.sourceUrl)+")",upto1200:"linear-gradient(\n      105deg,\n      rgba(255,255,255, 0.9) 0%,\n      rgba(255,255,255, 0.9) 50%,\n      transparent 50%\n    ),\n    url("+(null==v||null===(h=v.contactFormImage)||void 0===h?void 0:h.sourceUrl)+")"};return l.createElement(r.Z,null,l.createElement(n.Z,{title:b,image:p}),l.createElement(s.Z,{bcitems:[{text:"Contact",link:""}]}),l.createElement("main",{className:"u-offset-x contact"},l.createElement("h2",{className:"heading-secondary"},null==v?void 0:v.contactHeading),l.createElement("p",{className:"paragraph"},null==v?void 0:v.contactDescription),l.createElement("div",{className:"address-box-wrapper"},l.createElement("div",{className:"address-box"},(null==v?void 0:v.addr1Heading)&&l.createElement("h3",{className:"heading-tertiary u-margin-bottom-small"},null==v?void 0:v.addr1Heading),(null==v?void 0:v.addr1Line1)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr1Line1),(null==v?void 0:v.addr1Line2)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr1Line2),(null==v?void 0:v.addr1Email)&&l.createElement("p",{className:"address-box__text"},"Email:",null==v?void 0:v.addr1Email),(null==v?void 0:v.addr1Mobile)&&l.createElement("p",{className:"address-box__text"},"Mobile:",null==v?void 0:v.addr1Mobile),(null==v?void 0:v.addr1Web)&&l.createElement("p",{className:"address-box__text"},"Web:",null==v?void 0:v.addr1Web)),l.createElement("div",{className:"address-box"},(null==v?void 0:v.addr2Heading)&&l.createElement("h3",{className:"heading-tertiary u-margin-bottom-small"},null==v?void 0:v.addr2Heading),(null==v?void 0:v.addr2Line1)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr2Line1),(null==v?void 0:v.addr2Line2)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr2Line2),(null==v?void 0:v.addr2Email)&&l.createElement("p",{className:"address-box__text"},"Email:",null==v?void 0:v.addr2Email),(null==v?void 0:v.addr2Mobile)&&l.createElement("p",{className:"address-box__text"},"Mobile:",null==v?void 0:v.addr2Mobile),(null==v?void 0:v.addr2Web)&&l.createElement("p",{className:"address-box__text"},"Web:",null==v?void 0:v.addr2Web)),l.createElement("div",{className:"address-box"},(null==v?void 0:v.addr3Heading)&&l.createElement("h3",{className:"heading-tertiary u-margin-bottom-small"},null==v?void 0:v.addr3Heading),(null==v?void 0:v.addr3Line1)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr3Line1),(null==v?void 0:v.addr3Line2)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr3Line2),(null==v?void 0:v.addr3Line3)&&l.createElement("p",{className:"address-box__text"},null==v?void 0:v.addr3Line3),(null==v?void 0:v.addr3Email)&&l.createElement("p",{className:"address-box__text"},"Email:",null==v?void 0:v.addr3Email),(null==v?void 0:v.addr3Mobile)&&l.createElement("p",{className:"address-box__text"},"Mobile:",null==v?void 0:v.addr3Mobile),(null==v?void 0:v.addr3Web)&&l.createElement("p",{className:"address-box__text"},"Web:",null==v?void 0:v.addr3Web))),l.createElement("div",{className:"contact-form u-margin-top-huge"},l.createElement("h2",{className:"heading-secondary"},null==v?void 0:v.messageHeading),l.createElement("p",{className:"paragraph"},null==v?void 0:v.messageDescription),l.createElement("div",{className:"book upto1200",style:{backgroundImage:E.upto1200}},l.createElement(i,null)),l.createElement("div",{className:"book upto900",style:{backgroundImage:E.upto900}},l.createElement(i,null)),l.createElement("div",{className:"book init",style:{backgroundImage:E.init}},l.createElement(i,null))),l.createElement("div",{className:"gmap u-margin-top-huge",id:"gmap"},l.createElement("h2",{className:"heading-secondary",style:{marginBottom:"2rem"}},"Location"),l.createElement(u,{lat:null==v?void 0:v.latitude,lng:null==v?void 0:v.longitude}))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-14a292c19bffa2d7a95d.js.map