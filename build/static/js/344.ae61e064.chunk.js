/*! For license information please see 344.ae61e064.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[344],{9344:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(1811),i=function(t){var e,n,i,v=10*-f,l=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){v=(0,o.u)(t),E(t)},L=function(){clearTimeout(i),i=void 0,e&&(g(!1),e=void 0)},w=function(t){e||b(a(t),t)},E=function(t){b(void 0,t)},b=function(t,n){if(!t||t!==e){clearTimeout(i),i=void 0;var a=(0,o.q)(n),c=a.x,d=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||k(e,c,d),g(!0)}if(t){var f=h.get(t);f&&(clearTimeout(f),h.delete(t));var v=r(t)?0:u;t.classList.remove(s),i=setTimeout((function(){k(t,c,d),i=void 0}),v)}e=t}},k=function(t,e,o){l=Date.now(),t.classList.add(s);var i=p&&c(t);i&&i.addRipple&&(T(),n=i.addRipple(e,o))},T=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},g=function(t){T();var n=e;if(n){var o=d-Date.now()+l;if(t&&o>0&&!r(n)){var i=setTimeout((function(){n.classList.remove(s),h.delete(n)}),d);h.set(n,i)}else n.classList.remove(s)}},R=document;R.addEventListener("ionGestureCaptured",L),R.addEventListener("touchstart",(function(t){v=(0,o.u)(t),w(t)}),!0),R.addEventListener("touchcancel",m,!0),R.addEventListener("touchend",m,!0),R.addEventListener("pointercancel",L,!0),R.addEventListener("mousedown",(function(t){if(2!==t.button){var e=(0,o.u)(t)-f;v<e&&w(t)}}),!0),R.addEventListener("mouseup",(function(t){var e=(0,o.u)(t)-f;v<e&&E(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=344.ae61e064.chunk.js.map