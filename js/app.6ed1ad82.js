(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0400":function(t,e,a){t.exports=a.p+"img/smiley-down.5e8286f9.svg"},"0ead":function(t,e,a){t.exports=a.p+"img/faq.49dc631c.svg"},"17d9":function(t,e,a){t.exports=a.p+"img/sticker-02.4da59e1b.svg"},1870:function(t,e,a){t.exports=a.p+"img/sticker-01.7c771791.svg"},1969:function(t,e,a){t.exports=a.p+"img/sticker-footer.c671fca0.gif"},"34e6":function(t,e,a){"use strict";var i=a("946b"),s=a.n(i);s.a},"3e74":function(t,e,a){t.exports=a.p+"img/sticker-04.8a9e2633.svg"},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},"7c8f":function(t,e,a){t.exports=a.p+"img/sticker-03.f20cb7bb.svg"},"916b":function(t,e,a){t.exports=a.p+"img/button-download.3bc70c64.svg"},"946b":function(t,e,a){},"9c0c":function(t,e,a){},a2ad:function(t,e,a){t.exports=a.p+"img/scroll-down.d2549f53.svg"},b807:function(t,e,a){t.exports=a.p+"img/button-close.b1def6c1.svg"},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("a026"),s=a("0150"),r=a.n(s),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"},on:{mousemove:t.updateFireflyPosition}},[t.myImage.length&&t.showMyCrop?i("div",{staticClass:"column-container crop-overlay",on:{mouseover:function(e){t.anyFireflyActivated=!1},mouseleave:function(e){t.anyFireflyActivated=!0}}},[i("div",{staticStyle:{flex:"1 0 10em"}}),i("vue-cropper",{ref:"myCropper",staticStyle:{margin:"auto",flex:"1 1 0","max-height":"80%"},attrs:{"aspect-ratio":1,src:t.myImage[0].url}}),i("div",{staticClass:"row-container",staticStyle:{flex:"1 0 10em",margin:"0 auto"}},[i("button",{staticClass:"crop-black-button",on:{click:function(e){return e.preventDefault(),t.cropImage(t.myImage,"myCropper")}}},[t._v(" Crop ")])])],1):t._e(),t.theirImage.length&&t.showTheirCrop?i("div",{staticClass:"column-container crop-overlay",on:{mouseover:function(e){t.anyFireflyActivated=!1},mouseleave:function(e){t.anyFireflyActivated=!0}}},[i("div",{staticStyle:{flex:"1 0 10em"}}),i("vue-cropper",{ref:"theirCropper",staticStyle:{margin:"auto",flex:"1 1 0","max-height":"80%"},attrs:{"aspect-ratio":1,src:t.theirImage[0].url}}),i("div",{staticClass:"row-container",staticStyle:{flex:"1 0 10em",margin:"0 auto"}},[i("button",{staticClass:"crop-black-button",on:{click:function(e){return e.preventDefault(),t.cropImage(t.theirImage,"theirCropper")}}},[t._v(" Crop ")])])],1):t._e(),i("img",{ref:"firefly",attrs:{id:"firefly",src:t.anyFireflyActivated?t.redFireflyActivated?"cursor-red.svg":"cursor.svg":"empty-pixel.svg"}}),t.showFAQSection?i("FAQ",{on:{"close-FAQ":function(e){t.showFAQSection=!1,t.redFireflyActivated=!1,t.blockBodyScrolling=!1,t.document.body.style.overflow="initial"},"activate-red-firefly":function(e){t.redFireflyActivated=!0},"deactivate-red-firefly":function(e){t.redFireflyActivated=!1}}}):t._e(),t.showFAQSection?t._e():i("button",{attrs:{id:"faq-button"},on:{mouseover:function(e){t.redFireflyActivated=!0},mouseleave:function(e){t.redFireflyActivated=!1},click:function(e){t.showFAQSection=!0,t.redFireflyActivated=!1,t.document.body.style.overflow="hidden"}}},[i("img",{attrs:{src:a("0ead")}})]),i("div",{staticStyle:{display:"flex","align-items":"center"},attrs:{id:"banner-section"},on:{mouseover:function(e){t.pauseBanner=!0},mouseleave:function(e){t.pauseBanner=!1}}},[i("marquee-text",{attrs:{duration:40,repeat:10,paused:t.pauseBanner}},[i("div",{staticClass:"row-container auto-margin"},[i("div",{staticClass:"row-container"},[i("img",{staticClass:"auto-margin undraggable-image",staticStyle:{width:"2.3em"},attrs:{src:a("3e74"),alt:"Sticker: back away"}})]),i("div",{staticClass:"auto-margin"},[i("span",{staticStyle:{opacity:"0"}},[t._v("_")]),t._v(" Avoid physical contact with people who don't share your home. "),i("span",{staticStyle:{opacity:"0"}},[t._v("_")])]),i("div",{staticClass:"row-container"},[i("img",{staticClass:"auto-margin undraggable-image",staticStyle:{width:"2.3em"},attrs:{src:a("7c8f"),alt:"Sticker: stay home"}})]),i("div",{staticClass:"auto-margin"},[i("span",{staticStyle:{opacity:"0"}},[t._v("_")]),t._v(" Don’t leave the house unless you absolutely have to. "),i("span",{staticStyle:{opacity:"0"}},[t._v("_")])]),i("div",{staticClass:"row-container"},[i("img",{staticClass:"auto-margin undraggable-image",staticStyle:{width:"6.7em"},attrs:{src:a("1870"),alt:"Sticker: 1 social distance = 6 feet = 2 meters"}})]),i("div",{staticClass:"auto-margin"},[i("span",{staticStyle:{opacity:"0"}},[t._v("_")]),t._v(" Social distancing is about creating physical distance between people who don’t live together. "),i("span",{staticStyle:{opacity:"0"}},[t._v("_")])]),i("div",{staticClass:"row-container"},[i("img",{staticClass:"auto-margin undraggable-image",staticStyle:{width:"2.3em"},attrs:{src:a("17d9"),alt:"Sticker: 6 feet plz"}})]),i("div",{staticClass:"auto-margin"},[i("span",{staticStyle:{opacity:"0"}},[t._v("_")]),t._v(" Keep 6 ft. of distance between you & others while in public. "),i("span",{staticStyle:{opacity:"0"}},[t._v("_")])])])])],1),i("div",{staticClass:"column-container black-bottom-border",attrs:{id:"la-section"}},[i("div",{staticClass:"banner-offset-bar"}),i("header",[i("marquee-text",{staticClass:"header",attrs:{repeat:10}},[t._v(" Keep Your Distance "),i("span",{staticStyle:{color:"rgba(0,0,0,0)","-webkit-text-stroke":"1px black"}},[t._v(" Join the Club")]),i("span",{staticStyle:{opacity:"0"}},[t._v(".")])])],1),i("div",{staticClass:"la-body item-1 column-container"},[i("div",{staticClass:"item-1 row-container"},[i("div",{staticClass:"la-column"}),i("div",{staticClass:"item-8 row-container"},[i("div",{staticClass:"item-6 if-gt-large"}),i("div",{attrs:{id:"la-right-side"}},[i("div",{staticClass:"general-space-bar"}),i("section",[i("header",[t._v(" perks & benefits for club members: ")]),i("ul",[i("li",[t._v(" recognition as a responsible &"+t._s(t.nonBreakableSpace)+"awesome human being ")]),t._m(0),i("li",[t._v("unlimited access to stickers")])])]),i("div",{attrs:{id:"la-mid-section-space"}}),t._m(1),i("br"),i("br"),t._m(2)])]),i("div",{staticClass:"la-column"})]),i("div",{staticClass:"banner-offset-bar",attrs:{id:"la-bottom-banner-offset-bar"}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:this.currentAppState!=this.AppState.DONE,expression:"this.currentAppState != this.AppState.DONE"}],staticClass:"section-min-100 column-container black-bottom-border"},[i("header",[i("marquee-text",{staticClass:"header-small",attrs:{repeat:10}},[t._v(" Fill out this form"),i("span",{staticStyle:{opacity:"0"}},[t._v(".")]),i("span",{staticStyle:{color:"rgba(0,0,0,0)","-webkit-text-stroke":"1px black"}},[t._v(" & click on submit")]),i("span",{staticStyle:{opacity:"0"}},[t._v(".")])])],1),i("form",{staticClass:"section-content-centerer item-12 row-container",attrs:{autocomplete:"off",onsubmit:"return false"}},[i("div",{staticClass:"nf-outer-column"}),i("div",{attrs:{id:"nf-outer-central-column"}},[i("div",{staticClass:"general-space-bar"}),i("div",{staticClass:"uber-wrapper"},[i("div",{staticClass:"nf-subform"},[i("div",{staticClass:"nf-left-side"},[t._m(3),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.myName,expression:"form.myName",modifiers:{trim:!0}}],staticClass:"nf-subform-name",attrs:{placeholder:"My Name, e.g., Ania",type:"text",required:""},domProps:{value:t.form.myName},on:{input:function(e){e.target.composing||t.$set(t.form,"myName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.myLocation,expression:"form.myLocation",modifiers:{trim:!0}}],staticClass:"nf-subform-location",attrs:{id:"nf-my-location",placeholder:"My Location, e.g., Hardenbergstraße 22, Berlin",type:"text",required:""},domProps:{value:t.form.myLocation},on:{input:function(e){e.target.composing||t.$set(t.form,"myLocation",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"nf-frame"},[i("label",{attrs:{for:"myImageLabel"},on:{mouseover:function(e){t.anyFireflyActivated=!1},mouseleave:function(e){t.anyFireflyActivated=!0}}},[t.myImage.length?i("img",{staticClass:"thumbnail",attrs:{id:"my-image",src:t.myImage[0].url,alt:"My image"}}):i("img",{staticClass:"upload-image undraggable-image",attrs:{id:"my-image",src:"/button-upload.svg",alt:"Upload button"}})]),i("file-upload",{attrs:{drop:!1,extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp",name:"myImageLabel"},on:{"input-filter":t.inputFilter,"input-file":t.inputMyFile},model:{value:t.myImage,callback:function(e){t.myImage=e},expression:"myImage"}})],1)]),i("div",{staticClass:"nf-mid-subform-space"}),i("div",{staticClass:"nf-subform"},[i("div",{staticClass:"nf-left-side"},[t._m(4),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.theirName,expression:"form.theirName",modifiers:{trim:!0}}],staticClass:"nf-subform-name",attrs:{placeholder:"Your Name, e.g., Joi",type:"text",required:""},domProps:{value:t.form.theirName},on:{input:function(e){e.target.composing||t.$set(t.form,"theirName",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.theirLocation,expression:"form.theirLocation",modifiers:{trim:!0}}],staticClass:"nf-subform-location",attrs:{id:"nf-their-location",placeholder:"Your Location, e.g., 220 E Chicago Ave, Chicago, IL",type:"text",required:""},domProps:{value:t.form.theirLocation},on:{input:function(e){e.target.composing||t.$set(t.form,"theirLocation",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"nf-frame"},[i("label",{attrs:{for:"theirImageLabel"},on:{mouseover:function(e){t.anyFireflyActivated=!1},mouseleave:function(e){t.anyFireflyActivated=!0}}},[t.theirImage.length?i("img",{staticClass:"thumbnail",attrs:{id:"their-image",src:t.theirImage[0].url,alt:"Your image"}}):i("img",{staticClass:"upload-image undraggable-image",attrs:{id:"their-image",src:"/button-upload.svg",alt:"Upload button"}})]),i("file-upload",{attrs:{drop:!1,extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp",name:"theirImageLabel"},on:{"input-filter":t.inputFilter,"input-file":t.inputTheirFile},model:{value:t.theirImage,callback:function(e){t.theirImage=e},expression:"theirImage"}})],1)]),i("div",{staticClass:"nf-mid-subform-space"}),i("div",{staticClass:"nf-submission"},[i("button",{attrs:{type:"submit"},on:{mouseover:function(e){t.redFireflyActivated=!0},mouseleave:function(e){t.redFireflyActivated=!1},click:t.generateImages}},[t._v(" "+t._s(t.currentAppState==t.AppState.PROCESSING?"Processing...":"Submit →")+" ")]),i("summary",[t._v(t._s(t.longErrorMessage))])])])]),i("div",{staticClass:"nf-outer-column"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:this.currentAppState===this.AppState.DONE,expression:"this.currentAppState === this.AppState.DONE"}]},[i("div",{staticClass:"section-min-100 column-container black-bottom-border"},[i("header",[i("marquee-text",{staticClass:"header-small",attrs:{repeat:10}},[t._v(" Welcome to the club"),i("span",{staticStyle:{opacity:"0"}},[t._v(".")]),i("span",{staticStyle:{color:"rgba(0,0,0,0)","-webkit-text-stroke":"1px black"}},[t._v(" You are awesome")]),i("span",{staticStyle:{opacity:"0"}},[t._v(".")])])],1),i("div",{staticClass:"item-12 column-container",attrs:{id:"so-body"}},[i("div",{staticClass:"general-space-bar"}),i("div",{staticClass:"item-12 row-container"},[i("div",{staticClass:"so-side-column"}),i("div",{attrs:{id:"so-central-column"}},[i("section",[i("figure",[i("img",{attrs:{id:"tall-image",alt:"Generated story image"}}),i("a",{attrs:{id:"tall-download-link",href:""},on:{mouseover:function(e){t.redFireflyActivated=!0},mouseleave:function(e){t.redFireflyActivated=!1}}},[i("img",{attrs:{src:a("916b"),alt:"Download button"}})])]),i("div",{staticClass:"item-1 column-container"}),i("figure",[i("img",{staticStyle:{width:"100%"},attrs:{id:"square-image",alt:"Generated square image"}}),i("a",{attrs:{id:"square-download-link",href:""},on:{mouseover:function(e){t.redFireflyActivated=!0},mouseleave:function(e){t.redFireflyActivated=!1}}},[i("img",{attrs:{src:a("916b"),alt:"Download button"}})])])])]),i("div",{staticClass:"so-side-column"})]),i("div",{staticClass:"general-space-bar"})])]),t._m(5)]),i("canvas",{staticStyle:{display:"none"},attrs:{id:"square-canvas"}}),i("canvas",{staticStyle:{display:"none"},attrs:{id:"tall-canvas"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._v(" stigma-free "),a("span",{staticStyle:{"text-decoration":"line-through"}},[t._v("long")]),t._v(" social distance relationship 🏝 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("header",[t._v(" Here’s how you can join: ")]),a("ul",[a("li",[t._v("find a friend")]),a("li",[t._v("fill in the form together")]),a("li",[t._v(" support each other in difficult times & grab an online drink 🍸 ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"la-wheel-container"}},[i("img",{staticClass:"undraggable-image",attrs:{src:a("a2ad"),alt:"Scroll down wheel (animation)"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("span",{staticClass:"bold"},[t._v("Step 01:")]),t._v(" Me "),i("img",{attrs:{src:a("f3c7"),alt:"Smiley face"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("span",{staticClass:"bold"},[t._v("Step 02:")]),t._v(" You "),i("img",{staticStyle:{left:"6.7em"},attrs:{src:a("0400"),alt:"Upside-down smiley face"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column-container",staticStyle:{background:"black"},attrs:{id:"footer"}},[i("div",{staticClass:"banner-offset-bar"}),i("div",{staticClass:"section-content-centerer item-12 column-container"},[i("div",{staticClass:"item-12 row-container"},[i("div",{staticClass:"fo-side-column"}),i("div",{attrs:{id:"fo-central-column"}},[i("div",{staticClass:"item-8 column-container"},[i("div",{staticClass:"item-12 column-container"},[i("img",{staticClass:"undraggable-image",attrs:{alt:"Sticker: flatten the curve",src:a("1969")}})])]),i("div",{attrs:{id:"so-mid-side-space"}}),i("div",{staticClass:"item-8 column-container"},[i("p",{staticClass:"stickers-text"},[i("span",{staticClass:"bold"},[t._v("↓↓↓")]),t._v(" "),i("br"),t._v(" Click "),i("a",{staticClass:"bold external-link",attrs:{href:"https://signal.art/addstickers/#pack_id=8a9e742d7757663c70764b28e8f634f0&pack_key=039beb77a4cf392204c331aabf9c69ecd2114790361de60420e9443b697a8b9c",target:"_blank"}},[t._v(" here")]),t._v(" to get our stickers for Signal. Soon you'll find our stickers on GIPHY under "),i("a",{staticClass:"bold external-link",attrs:{href:"https://giphy.com/search/keepyourdistanceclub",target:"_blank"}},[t._v("#keepyourdistanceclub")]),t._v(" or "),i("a",{staticClass:"bold external-link",attrs:{href:"https://giphy.com/search/kydc",target:"_blank"}},[t._v("#KYDC")]),t._v(". We are working on getting them uploaded on other messaging platforms, so stay tuned! ")])])]),i("div",{staticClass:"fo-side-column"})])]),i("div",{staticClass:"banner-offset-bar"})])}],c=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("d4ec")),l=a("bee2"),u=a("2caf"),d=a("262e"),m=a("60a3"),f=a("8019"),p=a.n(f),h=a("95c3"),g=a.n(h),v=(a("6107"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("marquee-text",{staticClass:"marquee"},[a("span",{staticClass:"color-container yellow-box"},[t._v(" 1 Social Distance ")]),t._v(" = "),a("span",{staticClass:"color-container black-circle"},[t._v("6ft")]),t._v(" = "),a("span",{staticClass:"color-container black-circle"},[t._v("2m")]),t._v(" = <3 Social Distancing is about creting physical distance between people who don't live together ")])],1)}),b=[],y=a("9ab4"),w=function(t){Object(d["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(m["b"]);w=Object(y["a"])([m["a"]],w);var _=w,k=_,C=(a("34e6"),a("2877")),S=Object(C["a"])(k,v,b,!1,null,"1c96e28b",null),x=S.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper"}},[i("div",{attrs:{id:"faq"}},[i("span",{staticClass:"faq-title"},[t._v("FAQ")]),i("button",{staticClass:"show-faq-button close-button",on:{click:function(e){return t.$emit("close-FAQ")},mouseover:function(e){return t.$emit("activate-red-firefly")},mouseleave:function(e){return t.$emit("deactivate-red-firefly")}}},[i("img",{attrs:{src:a("b807"),alt:"Close button"}})]),i("br"),i("br"),i("br"),i("br"),t._m(0)])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"faq-questions"}},[a("section",[a("span",{staticClass:"row-container"},[a("p",{staticClass:"question",attrs:{id:"faq-first-question"}},[t._v(" We’ll never know who you are. Actually, we don’t even know that you’re here. ")])]),a("div",{staticClass:"answer-wrapper"},[a("p",{staticClass:"answer"},[t._v(" The web application running in the background of this website requires two names, two locations, and two images to generate the membership cards for you. The names and images never leave your machine; everything is generated within your own browser. The locations you've entered are sent to the "),a("a",{staticClass:"bold external-link-links",attrs:{href:"https://nominatim.openstreetmap.org/",target:"_blank"}},[t._v("Nominatim")]),t._v(" search engine (run and developed by "),a("a",{staticClass:"bold external-link-links",attrs:{href:"https://www.openstreetmap.org/",target:"_blank"}},[t._v(" OpenStreetMap")]),t._v(") to figure out the correct coordinates. Moreover, this website is hosted via "),a("a",{staticClass:"bold external-link-links",attrs:{href:"https://pages.github.com/",target:"_blank"}},[t._v("GitHub Pages")]),t._v(" , which may collect some data on its own (please see "),a("a",{staticClass:"bold external-link-links",attrs:{href:"https://help.github.com/en/github/site-policy/github-privacy-statement#github-pages",target:"_blank"}},[t._v("GitHub Privacy Statement")]),t._v(" for more details). ")])])]),a("div",{staticClass:"faq-offset-bar"}),a("section",[a("span",{staticClass:"row-container"},[a("p",{staticClass:"question"},[t._v("I don't get this...")])]),a("div",{staticClass:"answer-wrapper"},[a("p",{staticClass:"answer"},[t._v(" You are probably wondering what this is all about. keepyourdistance.club is an exclusive club for all of those who are willing to stay at least 1 social distance (6 feet or 2 meters) away from others (unless you live together or you’re taking care of the elders). To become a member, you need to find a friend who will also follow this rule. And to get an official membership card, fill out the form together. The address helps us determine if you’re eligible, which means at least 1 social distance apart ;) But yeah, it’s just a fun way of sharing the idea of social distancing during the current pandemic—this is "),a("span",{staticClass:"bold",staticStyle:{"font-style":"italic"}},[t._v("not a real")]),t._v(" club :) ")])])]),a("div",{staticClass:"faq-offset-bar"}),a("section",[a("span",{staticClass:"row-container"},[a("p",{staticClass:"question"},[t._v(" Who are you guys? ")])]),a("div",{staticClass:"answer-wrapper"},[a("p",{staticClass:"answer"},[t._v(" We are a group of friends (or rather friends of friends) based in Berlin and Chicago who decided to do something fun during the quarantine. For more visual randomness, follow "),a("a",{staticClass:"bold external-link",attrs:{href:"https://www.instagram.com/aniabui___/",target:"_blank"}},[t._v("@aniabui___")]),t._v(" and "),a("a",{staticClass:"bold external-link",attrs:{href:"https://www.instagram.com/joi_stack/",target:"_blank"}},[t._v("@joi_stack")]),t._v(" on Instagram. And for more bits and bytes, check out "),a("a",{staticClass:"bold external-link",attrs:{href:"https://github.com/0mp",target:"_blank"}},[t._v("@0mp")]),t._v(" and "),a("a",{staticClass:"bold external-link",attrs:{href:"https://github.com/janek",target:"_blank"}},[t._v("@janek")]),t._v(" on GitHub. For general inquiries, drop us a line at "),a("a",{staticClass:"bold external-link",attrs:{href:"mailto:hello@keepyourdistance.club"}},[t._v("hello@keepyourdistance.club")]),t._v(". ")])])]),a("div",{staticClass:"faq-offset-bar"}),a("section",[a("span",{staticClass:"row-container"},[a("p",{staticClass:"question"},[t._v(" I want some stickers! ")])]),a("div",{staticClass:"answer-wrapper"},[a("p",{staticClass:"answer"},[t._v(" Click "),a("a",{staticClass:"bold external-link",attrs:{href:"https://signal.art/addstickers/#pack_id=8a9e742d7757663c70764b28e8f634f0&pack_key=039beb77a4cf392204c331aabf9c69ecd2114790361de60420e9443b697a8b9c",target:"_blank"}},[t._v(" here")]),t._v(" to get our stickers for Signal. Soon you'll find our stickers on GIPHY under "),a("a",{staticClass:"bold external-link",attrs:{href:"https://giphy.com/search/keepyourdistanceclub",target:"_blank"}},[t._v("#keepyourdistanceclub")]),t._v(" or "),a("a",{staticClass:"bold external-link",attrs:{href:"https://giphy.com/search/kydc",target:"_blank"}},[t._v("#KYDC")]),t._v(". We are working on getting them uploaded on other messaging platforms, so stay tuned! ")])])]),a("div",{staticClass:"faq-offset-bar"}),a("section",[a("span",{staticClass:"row-container"},[a("p",{staticClass:"question"},[t._v(" Links ")])]),a("ul",[a("li",{staticClass:"answer"},[a("a",{staticClass:"external-link-links",attrs:{href:"https://www.who.int/health-topics/coronavirus",target:"_blank"}},[t._v("WHO: Basic Information")])]),a("li",{staticClass:"answer"},[a("a",{staticClass:"external-link-links",attrs:{href:"https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/what-you-can-do.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fneed-extra-precautions%2Fget-ready.html",target:"_blank"}},[t._v("CDC: What You Can Do")])]),a("li",{staticClass:"answer"},[a("a",{staticClass:"external-link-links",attrs:{href:"https://coronavirus.jhu.edu/map.html",target:"_blank"}},[t._v("John Hopkins University: COVID-19 Map")])]),a("li",{staticClass:"answer"},[a("a",{staticClass:"external-link-links",attrs:{href:"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/",target:"_blank"}},[t._v("The Washington Post: Curve Simulator")])]),a("li",{staticClass:"answer"},[a("a",{staticClass:"external-link-links",attrs:{href:"https://www.nytimes.com/2020/03/19/well/live/coronavirus-quarantine-social-distancing.html",target:"_blank"}},[t._v("Deciding How Much Distance You Should Keep")])]),a("li",{staticClass:"answer"},[a("a",{staticClass:"external-link-links",attrs:{href:"https://foldingathome.org",target:"_blank"}},[t._v("Folding@home")])])])])])}],E=function(t){Object(d["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return a}(m["b"]);E=Object(y["a"])([m["a"]],E);var O=E,N=O,F=Object(C["a"])(N,I,A,!1,null,"98e3b12c",null),L=F.exports,M=a("bc3a"),R=a.n(M);function j(t,e,a,i){if(t==a&&e==i)return 0;var s=Math.PI*t/180,r=Math.PI*a/180,n=e-i,o=Math.PI*n/180,c=Math.sin(s)*Math.sin(r)+Math.cos(s)*Math.cos(r)*Math.cos(o);return c>1&&(c=1),c=Math.acos(c),c=180*c/Math.PI,c=60*c*1.1515,Math.round(5280*c/6)}a("a15b"),a("ac1f"),a("1276");var q,T,P,D={src:"/template-sda.svg",x:1750,y:2915,width:294,height:148},$={src:"/template-v3-sda.svg",x:1750,y:2915,width:254,height:148},B={src:"/template-sda.svg",x:2e3,y:900,width:294,height:148},Y={src:"/template-v3-sda.svg",x:2e3,y:900,width:254,height:148},U={background:{src:"/template-v1-tall.png"},stickers:{_1:{src:"/template-v1-tall-sticker-6ft.svg",x:1e3,y:450,width:250,height:250},_2:{src:"/template-v1-tall-sticker-stayhome.svg",x:310,y:850,width:300,height:300},_3:{src:"/template-v1-tall-sticker-flatten.svg",x:900,y:1550,width:467.5,height:316.2}},sda:D},z={background:{src:"/template-v2-tall.png"},stickers:{_1:{src:"/template-v2-tall-sticker-flatten.svg",x:800,y:450,width:467.5,height:316.2},_2:{src:"/template-v3-tall-sticker-backaway.svg",x:280,y:900,width:300,height:300},_3:{src:"/template-v2-tall-sticker-keepaway.svg",x:920,y:1450,width:173*1.8,height:424.8}},sda:D},G={background:{src:"/template-v3-tall.png"},stickers:{_1:{src:"/template-v3-tall-sticker-warning.svg",x:950,y:450,width:300,height:300},_2:{src:"/template-v3-tall-sticker-backaway.svg",x:280,y:900,width:300,height:300},_3:{src:"/template-v3-tall-sticker-prettyclose.svg",x:900,y:1550,width:364,height:276}},sda:$},W={background:{src:"/template-v1-square.png"},sda:B},H={background:{src:"/template-v2-square.png"},sda:B},V={background:{src:"/template-v3-square.png"},sda:Y};function Q(t,e,a,i,s){for(var r=t.getImageData(e/2,a/2,i/2,s/2),n=0;n<r.height;n++)for(var o=0;o<r.width;o++){var c=4*o*r.width+4*n,l=r.data[c],u=r.data[c+1],d=r.data[c+2],m=r.data[c+3],f=.299*l+.587*u+.114*d;r.data[c]=f,r.data[c+1]=f,r.data[c+2]=f,r.data[c+3]=m}t.putImageData(r,e/2,a/2)}function K(t,e,a,i){var s=document.getElementById(i);return s.style.width=t,s.style.height=e,s.width=t*a,s.height=e*a,s}function J(t,e,a){t.font=a.fontSize.default+"px Michroma",t.strokeStyle="#003300",t.textBaseline="top",t.textAlign="left";var i=a.x0,s=a.y0,r=14/13,n=s+a.fontSize.default*r,o=n+a.fontSize.default*r,c=o+a.fontSize.default*r;t.fillText(a._1,i,s),t.fillText(a._2,i,n),t.fillText(a._3,i,o);var l=a.fontSize.distance;t.font=l+"px Michroma",t.lineWidth=4,t.strokeText(a._4,i,c),t.fillStyle="white",t.fillRect(2282,0,e.width,o),t.fillStyle="black"}function X(t,e){var a=e.x0+e.delta.x,i=e.y0+e.delta.y,s=document.getElementById("my-image");t.drawImage(s,e.x0,e.y0,e.size,e.size),Q(t,e.x0,e.y0,e.size,e.size);var r=document.getElementById("their-image");t.drawImage(r,a,i,e.size,e.size),Q(t,a,i,e.size,e.size),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(e.x0,e.y0,e.size,e.size),t.fillRect(a,i,e.size,e.size)}function Z(t,e,a){var i=3840,s=2160,r=.5,n=K(s,i,r,"tall-canvas"),o=n.getContext("2d");o.scale(r,r);var c=new Image;c.src=a.background.src,c.onload=function(){o.drawImage(c,0,0,s,i),J(o,n,t),X(o,e);var r=new Image;r.src="/template-seal.svg",r.onload=function(){var t=500;o.drawImage(r,1455,1050,t,t);var e=new Image,i=a.stickers._1;e.src=i.src,e.onload=function(){o.drawImage(e,i.x,i.y,i.width,i.height);var t=new Image,s=a.stickers._2;t.src=s.src,t.onload=function(){o.drawImage(t,s.x,s.y,s.width,s.height);var e=new Image,i=a.stickers._3;e.src=i.src,e.onload=function(){o.drawImage(e,i.x,i.y,i.width,i.height);var t=new Image,s=a.sda;t.src=s.src,t.onload=function(){o.drawImage(t,s.x,s.y,s.width,s.height);var e=n.toDataURL("image/png"),a=document.getElementById("tall-image"),i=document.getElementById("tall-download-link");a.src=e,i.download="keep-your-distance-club-story.png",i.href=e}}}}}}}function tt(t,e,a){var i=2400,s=i,r=.5,n=K(s,i,r,"square-canvas"),o=n.getContext("2d");o.scale(r,r);var c=new Image;c.src=a.background.src,c.onload=function(){o.drawImage(c,0,0,s,i),J(o,n,t),X(o,e);var r=new Image;r.src="/template-seal.svg",r.onload=function(){var t=405;o.drawImage(r,1160,1710,t,t);var e=new Image,i=a.sda;e.src=i.src,e.onload=function(){o.drawImage(e,i.x,i.y,i.width,i.height);var t=n.toDataURL("image/png"),a=document.getElementById("square-image"),s=document.getElementById("square-download-link");a.src=t,s.download="keep-your-distance-club-square.png",s.href=t}}}}function et(t,e,a){var i,s;a<=1||isNaN(a)?(a=1,i=V,s=G):a%2==0?(i=W,s=U):(i=H,s=z);var r="".concat(t).toUpperCase(),n="+ ".concat(e).toUpperCase(),o="ARE:",c=("0000000"+a).split("").reverse().join("").substr(0,8).split("").reverse().join(""),l=554,u={size:l,x0:171,y0:1424,delta:{x:58+l,y:0}},d=610,m={size:d,x0:425,y0:1070,delta:{x:d+95,y:160-d}};tt({_1:r,_2:n,_3:o,_4:c,x0:100,y0:100,fontSize:{default:240,distance:230}},u,i),Z({_1:r,_2:n,_3:o,_4:c,x0:125,y0:2188,fontSize:{default:220,distance:200}},m,s)}function at(t,e){switch(t){case q.NO_ERROR:if("short"===e)return"";if("long"===e)return"";break;case q.INVALID_LOCATION:if("short"===e)return"Invalid location";if("long"===e)return"We couldn't measure the distance between these locations. Try again? 🤗";break;case q.INVALID_CHARACTERS:if("short"===e)return"Invalid characters";if("long"===e)return"One of the names you entered contains characters we cannot process 😭";break;case q.FIELD_EMPTY:if("short"===e)return"Empty field";if("long"===e)return"Please fill out all the text fields!";break;case q.MISSING_IMAGE:if("short"===e)return"Missing image";if("long"===e)return"Please upload both images!";break;case q.RESPONSE_EMPTY:if("short"===e)return"City not found";if("long"===e)return"We were not able to find one of your locations!";break;case q.UNKNOWN_ERROR:if("short"===e)return"Unknown error";if("long"===e)return"Oops, unknown error! 🤭 Refresh?";break;default:if("short"===e)return"Unknown error";if("long"===e)return"Oops, unknown error! 🤭 Refresh?"}return""}(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["INVALID_LOCATION"]=1]="INVALID_LOCATION",t[t["INVALID_CHARACTERS"]=2]="INVALID_CHARACTERS",t[t["FIELD_EMPTY"]=3]="FIELD_EMPTY",t[t["RESPONSE_EMPTY"]=4]="RESPONSE_EMPTY",t[t["MISSING_IMAGE"]=5]="MISSING_IMAGE",t[t["UNKNOWN_ERROR"]=6]="UNKNOWN_ERROR"})(q||(q={}));var it=(T=Object(m["a"])({components:{Header:x,FAQ:L,FileUpload:p.a,VueCropper:g.a}}),T(P=function(t){Object(d["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return Object(l["a"])(a,[{key:"data",value:function(){return{document:document,AppState:{INITIAL:1,FORM_INVALID:2,PROCESSING:3,DONE:4},nonBreakableSpace:" ",redFireflyActivated:!1,anyFireflyActivated:!0,myImage:[],theirImage:[],apiCallsBlocked:!1,form:{myName:"",theirName:"",myLocation:"",theirLocation:""},distanceInfo:{myLatitude:"lat",myLongitude:"long",theirLatitude:"lat",theirLongitude:"long"},showMyCrop:!0,showTheirCrop:!0,pauseBanner:!1,showFAQSection:!1,skipForm:!1,currentAppState:1,longErrorMessage:"",shortErrorMessage:""}}},{key:"mounted",value:function(){this.$nextTick((function(){setTimeout((function(){var t=document.getElementById("loading");t&&t.remove(),window.innerWidth<=500&&(document.getElementById("nf-my-location").placeholder="My Location, e.g., Berlin",document.getElementById("nf-their-location").placeholder="Your Location, e.g., Chicago")}),1e3)})),this.skipForm&&this.generateImages()}},{key:"updateFireflyPosition",value:function(t){this.$refs.firefly.style.top=t.pageY-60+"px",document.getElementById("firefly").style.left=t.pageX-60+"px"}},{key:"setFormErrorState",value:function(t){this.currentAppState=this.AppState.FORM_INVALID,this.longErrorMessage=at(t,"long"),this.shortErrorMessage=at(t,"short")}},{key:"generateImages",value:function(){var t=this;if(this.skipForm)return et("Tray","grześ",44444444),void(this.currentAppState=this.AppState.DONE);this.form.myName&&this.form.myLocation&&this.form.theirName&&this.form.theirLocation?this.myImage.length&&this.theirImage.length?(this.currentAppState=this.AppState.PROCESSING,this.apiCallsBlocked||setTimeout((function(){var e=function(e){e===q.RESPONSE_EMPTY?t.setFormErrorState(e):t.setFormErrorState(q.UNKNOWN_ERROR)};R.a.get("https://nominatim.openstreetmap.org/search?q=".concat(t.form.myLocation,"&format=json&limit=1")).then((function(a){if(null==a.data[0])throw q.RESPONSE_EMPTY;t.distanceInfo.myLatitude=a.data[0].lat.substring(0,5),t.distanceInfo.myLongitude=a.data[0].lon.substring(0,5),setTimeout((function(){R.a.get("https://nominatim.openstreetmap.org/search?q=".concat(t.form.theirLocation,"&format=json&limit=1")).then((function(e){if(null==e.data[0])throw q.RESPONSE_EMPTY;t.distanceInfo.theirLatitude=e.data[0].lat.substring(0,5),t.distanceInfo.theirLongitude=e.data[0].lon.substring(0,5);var a=j(t.distanceInfo.myLatitude,t.distanceInfo.myLongitude,t.distanceInfo.theirLatitude,t.distanceInfo.theirLongitude);et(t.form.myName,t.form.theirName,a),t.currentAppState=t.AppState.DONE,setTimeout((function(){document.getElementById("la-bottom-banner-offset-bar").scrollIntoView({behavior:"smooth"})}),500)})).catch((function(t){e(t)}))}),1e3)})).catch((function(t){e(t)}))}),1e3)):this.setFormErrorState(q.MISSING_IMAGE):this.setFormErrorState(q.FIELD_EMPTY)}},{key:"cropImage",value:function(t,e){"myCropper"==e?this.showMyCrop=!1:this.showTheirCrop=!1,t[0].url=this.$refs[e].getCroppedCanvas().toDataURL()}},{key:"inputMyFile",value:function(t,e,a){t&&!e&&this.$nextTick((function(){this.showMyCrop=!0})),!t&&e&&(this.showMyCrop=!1)}},{key:"inputTheirFile",value:function(t,e,a){t&&!e&&this.$nextTick((function(){this.showTheirCrop=!0})),!t&&e&&(this.showTheirCrop=!1)}},{key:"inputFilter",value:function(t,e,a){if(t&&!e&&!/\.(gif|jpg|jpeg|png|webp)$/i.test(t.name))return this.alert("Your choice is not a picture"),a();if(t&&(!e||t.file!==e.file)){t.url="";var i=window.URL||window.webkitURL;i&&i.createObjectURL&&(t.url=i.createObjectURL(t.file))}}}]),a}(m["b"]))||P),st=it,rt=(a("5c0b"),Object(C["a"])(st,n,o,!1,null,null,null)),nt=rt.exports;i["a"].config.productionTip=!1,i["a"].component("marquee-text",r.a),new i["a"]({render:function(t){return t(nt)}}).$mount("#app")},f3c7:function(t,e,a){t.exports=a.p+"img/smiley-up.1d6b8290.svg"}});
//# sourceMappingURL=app.6ed1ad82.js.map