!function r(s,a,c){function u(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return u(s[t][1][e]||e)},i,i.exports,r,s,a,c)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){t.exports=function(s){return function(e){var t,n,r=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof s?s:"[data-bespoke-bullet]"),0)}),o=function(o,i){t=o,n=i,r.forEach(function(e,n){e.forEach(function(e,t){e.classList.add("bespoke-bullet"),n<o||n===o&&t<=i?(e.classList.add("bespoke-bullet-active"),e.classList.remove("bespoke-bullet-inactive")):(e.classList.add("bespoke-bullet-inactive"),e.classList.remove("bespoke-bullet-active")),n===o&&t===i?e.classList.add("bespoke-bullet-current"):e.classList.remove("bespoke-bullet-current")})})},i=function(e){return void 0!==r[t][n+e]};e.on("next",function(){var e=t+1;if(i(1))return o(t,n+1),!1;r[e]&&o(e,0)}),e.on("prev",function(){var e=t-1;if(i(-1))return o(t,n-1),!1;r[e]&&o(e,r[e].length-1)}),e.on("slide",function(e){o(e.index,0)}),o(0,0)}}},{}],2:[function(e,t,n){t.exports=function(){return function(r){function s(e,t){e.classList.add("bespoke-"+t)}function a(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()}function t(e,t){var n=r.slides[r.slide()],o=t-r.slide(),i=0<o?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(a.bind(null,e)),e!==n&&["inactive",i,i+"-"+Math.abs(o)].map(s.bind(null,e))}s(r.parent,"parent"),r.slides.map(function(e){s(e,"slide")}),r.on("activate",function(e){r.slides.map(t),s(e.slide,"active"),a(e.slide,"inactive")})}}},{}],3:[function(e,t,n){t.exports=function(i){return function(t){var n=(i=i&&(i.object||i.name||i.scope)?i:{object:i}).object,e=i.name||"bespoke",o=i.scope||window;n?o[e]=n:n=o[e]?o[e]:o[e]={},(Array.isArray(n.decks)?n.decks:n.decks=[]).push(n.deck=t),t.on("destroy",function(){var e=n.decks.indexOf(t);0<=e&&n.decks.splice(e,1),delete n.deck})}}},{}],4:[function(e,t,n){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){!/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)&&"true"!==e.target.contentEditable||e.stopPropagation()})})}}},{}],5:[function(e,t,n){t.exports=function(){return function(o){function i(e){var t=-1<e&&e<o.slides.length?e:0;t!==o.slide()&&o.slide(t)}function e(){var n=window.location.hash.slice(1),e=parseInt(n,10);n&&(e?i(e-1):o.slides.forEach(function(e,t){e.getAttribute("data-bespoke-hash")!==n&&e.id!==n||i(t)}))}setTimeout(function(){e(),o.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",e)},0)}}},{}],6:[function(e,t,n){t.exports=function(){return function(t){function o(e,t,n,o){for(var i=-1,r=t.querySelectorAll(e+(o||"")),s=r.length;++i<s;n(r[i]));}function i(e,t){e.contentWindow.postMessage(JSON.stringify(t),"*")}function r(e){var t=e.hasAttribute("data-rewind"),n=Math.min(Math.max(parseFloat(e.getAttribute("data-volume")),0),10);if(e.play)t&&e.readyState&&(e.currentTime=0),0<=n&&(e.volume=n/10),e.play();else if(p.test(e.src))t&&i(e,{event:v,func:"seekTo",args:[0]}),0<=n&&i(e,{event:v,func:"setVolume",args:[10*n]}),i(e,{event:v,func:"playVideo"});else if(f.test(e.src)){if(b)return console.warn("WARNING: Cannot play Vimeo video when deck is loaded via file://.");t&&i(e,{method:"seekTo",value:0}),0<=n&&i(e,{method:"setVolume",value:n/10}),i(e,{method:"play"})}}function n(e){e.pause?e.pause():p.test(e.src)?i(e,{event:v,func:"pauseVideo"}):!b&&f.test(e.src)&&i(e,{method:"pause"})}function s(e,t){e[t||"src"]=e.getAttribute(t||"src")}function a(e){try{return e.contentDocument.rootElement}catch(e){}}function c(e,t){(a(e)||e).classList[t||"add"]("active")}function u(e){e.hasAttribute("data-reload")?s(e,"data"):a(e)?c(e):e.onload=function(){t.slides[t.slide()].contains(e)&&c(e)}}function l(e){c(e,"remove")}function d(e){m(e,n)}var f=/\/\/player\.vimeo\.com\//,p=/\/\/www\.youtube\.com\/embed\//,v="command",b="file:"===location.protocol,m=o.bind(null,"audio,video,iframe"),h=o.bind(null,'object[type="image/svg+xml"]');t.on("activate",function(e){if(e.preview)return d(e.slide);var t,n;t=e.slide,m(t,r),n=e.slide,h(n,u),o('img[data-reload][src$=".gif"]',e.slide,s)}),t.on("deactivate",function(e){var t;d(e.slide),t=e.slide,h(t,l,":not([data-reload])")})}}},{}],7:[function(e,t,n){t.exports=function(){return function(o){function e(e){if(n=(t=e).which,!(t.ctrlKey||t.shiftKey&&(36===n||35===n)||t.altKey||t.metaKey))switch(e.which){case 32:return(e.shiftKey?o.prev:o.next)();case 39:case 34:case 76:return o.next();case 37:case 33:case 72:return o.prev();case 36:return o.slide(0);case 35:return o.slide(o.slides.length-1)}var t,n}var t="keydown";o.on("destroy",function(){document.removeEventListener(t,e)}),document.addEventListener(t,e)}}},{}],8:[function(e,t,n){t.exports=function(p){return function(t){function e(e){u=1===e.touches.length?e.touches[0][d]:null}function n(e){if(null!==u)return void 0===u?e.preventDefault():void(Math.abs(l=e.touches[0][d]-u)>f&&((0<l?t.prev:t.next)(),u=e.preventDefault()))}var o=p||{},i="touchstart",r="touchmove",s="addEventListener",a="removeEventListener",c=t.parent,u=null,l=null,d="page"+("y"===o.axis?"Y":"X"),f="number"==typeof o.threshold?o.threshold:50/window.devicePixelRatio;t.on("destroy",function(){c[a](i,e),c[a](r,n)}),c[s](i,e),c[s](r,n)}}},{}],9:[function(o,e,t){e.exports=function(e){e=e||{};var t=o("bespoke-nav-kbd")(e.kbd),n=o("bespoke-nav-touch")(e.touch);return function(e){t(e),n(e)}}},{"bespoke-nav-kbd":7,"bespoke-nav-touch":8}],10:[function(e,t,n){t.exports=function(d){return function(e){function t(){var e=o.offsetWidth/s,t=o.offsetHeight/r;c.forEach(l.bind(null,Math.min(e,t)))}var n,o=e.parent,i=e.slides[0],r=i.offsetHeight,s=i.offsetWidth,a="zoom"===d||"zoom"in o.style&&"transform"!==d,c=a?e.slides:e.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),u=(n="Transform","Moz Webkit O ms".split(" ").reduce(function(e,t){return t+n in o.style?t+n:e},n.toLowerCase())),l=a?function(e,t){t.style.zoom=e}:function(e,t){t.style[u]="scale("+e+")"};window.addEventListener("resize",t),t()}}},{}],11:[function(e,t,n){t.exports={from:function(e,t){function o(e,t){r[e]&&(u("deactivate",l(s,t)),s=r[e],u("activate",l(s,t)))}function n(e,t){var n=r.indexOf(s)+e;u(0<e?"next":"prev",l(s,t))&&o(n,t)}var i=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),r=[].filter.call("string"==typeof e.slides?i.querySelectorAll(e.slides):e.slides||i.children,function(e){return"SCRIPT"!==e.nodeName}),s=r[0],a={},c=function(e,t){a[e]=(a[e]||[]).filter(function(e){return e!==t})},u=function(e,n){return(a[e]||[]).reduce(function(e,t){return e&&!1!==t(n)},!0)},l=function(e,t){return(t=t||{}).index=r.indexOf(e),t.slide=e,t},d={on:function(e,t){return(a[e]||(a[e]=[])).push(t),c.bind(null,e,t)},off:c,fire:u,slide:function(e,t){if(!arguments.length)return r.indexOf(s);u("slide",l(r[e],t))&&o(e,t)},next:n.bind(null,1),prev:n.bind(null,-1),parent:i,slides:r};return(t||[]).forEach(function(e){e(d)}),o(0),d}}},{}],12:[function(e,t,n){var o=e("bespoke"),i=e("bespoke-classes"),r=e("bespoke-nav"),s=e("bespoke-forms"),a=e("bespoke-scale"),c=e("bespoke-bullets"),u=e("bespoke-hash"),l=e("bespoke-multimedia"),d=e("bespoke-extern"),f=o.from({parent:"article.deck",slides:"section"},[i(),r(),s(),a(),c(".build, .build-items > *:not(.build-items)"),u(),l(),d(o)]),p=new Event("initialize");f.on("activate",function(e){var t=f.slides[e.index].getElementsByTagName("textarea");try{Array.from(t).forEach(function(e){e.dispatchEvent(p)})}catch(e){}})},{bespoke:11,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-extern":3,"bespoke-forms":4,"bespoke-hash":5,"bespoke-multimedia":6,"bespoke-nav":9,"bespoke-scale":10}]},{},[12]);