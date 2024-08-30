(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(601),a=n.n(r),o=n(314),l=n.n(o)()(a());l.push([e.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column;\n}\n.row {\n  height: 40px;\n  display: flex;\n}\n.space {\n  border: 1px solid black;\n  width: 40px;\n}\n.hit {\n  background-color: red;\n}\n.miss {\n  background-color: grey;\n}\n\n.game {\n  height: 60vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.labels {\n  display: flex;\n  justify-content: space-around;\n}\n#player1ships[open],\n#player2ships[open] {\n  display: flex;\n  justify-content: space-around;\n  height: 70vh;\n  width: max(500px, 40vw);\n}\n.ship,\n.ship2 {\n  margin: 5px;\n  font-size: 1px;\n  color: blue;\n  background-color: blue;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#horizontal-five {\n  height: 20px;\n  width: 100px;\n}\n#vertical-five {\n  height: 100px;\n  width: 20px;\n}\n#horizontal-four {\n  height: 20px;\n  width: 80px;\n}\n#vertical-four {\n  height: 80px;\n  width: 20px;\n}\n.h3 {\n  height: 20px;\n  width: 60px;\n}\n.v3 {\n  height: 60px;\n  width: 20px;\n}\n.placegame,\n.placegame2 {\n  display: flex;\n  flex-direction: column;\n}\n.placerow,\n.placerow2 {\n  height: 20px;\n  display: flex;\n}\n.placecell,\n.placecell2 {\n  width: 20px;\n  border: 1px solid, black;\n  color: white;\n  font-size: 2px;\n}\n.dragging {\n  opacity: 0.5;\n}\n.handle {\n  background-color: purple;\n  border: 2px purple inset;\n  height: 20px;\n  width: 20px;\n}\n.occupied {\n  background-color: red;\n}\n.hidden {\n  display: none;\n}\n\ndialog {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n}\nh1 {\n  text-align: center;\n}\n.over{\n  background-color: orangered;\n  opacity: 60%;\n}",""]);const d=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(l[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&l[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},l=[],d=0;d<e.length;d++){var i=e[d],s=r.base?i[0]+r.base:i[0],c=o[s]||0,u="".concat(s," ").concat(c);o[s]=c+1;var p=n(u),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=a(h,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}l.push(u)}return l}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var l=0;l<o.length;l++){var d=n(o[l]);t[d].references--}for(var i=r(e,a),s=0;s<o.length;s++){var c=n(o[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=i}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),l=n.n(o),d=n(659),i=n.n(d),s=n(56),c=n.n(s),u=n(540),p=n.n(u),h=n(113),f=n.n(h),m=n(208),g={};function v(e){return{type:e,board:function(){let e=[];for(let t=0;t<10;t++){let t=[];for(let e=0;e<10;e++)t.push({target:null,shot:!1});e.push(t)}let t=0,n=0;return{getBoard:function(){return e},placeShip:function(n,r,a){if(""===r)return"wrong input";let o=function(e){const t=e;let n=0;return{hit:function(){n++},isSunk:function(){return n>=t}}}(a),l=[];if("right"===r)for(let t=0;t<a;t++){let r=[n[0],n[1]+t];if(l.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}else if("up"===r)for(let t=0;t<a;t++){let r=[n[0]-t,n[1]];if(l.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}else if("left"===r)for(let t=0;t<a;t++){let r=[n[0],n[1]-t];if(l.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}else if("down"===r)for(let t=0;t<a;t++){let r=[n[0]+t,n[1]];if(l.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}for(let t=0;t<a;t++){let n=l[t];e[n[0]][n[1]].target=o}t++},receiveAttack:function(r){const a=e[r[0]][r[1]];return!0===a.shot?"Already shot":(a.shot=!0,null!==a.target&&(a.target.hit(),!0===a.target.isSunk())?(n++,n===t||"sunk"):void 0)}}}()}}function y(e,t,n=1){if("human"===t.type){let r=t.board,a=document.querySelector(".game"),o=document.createElement("div"),l=document.querySelector("#sunk");o.classList.add("gameboard"),r.getBoard().forEach((d=>{let i=document.createElement("div");i.classList.add("row"),d.forEach((o=>{let s=document.createElement("div");s.classList.add("space"),s.addEventListener("click",(()=>{if(1===n){let n=r.receiveAttack([r.getBoard().indexOf(d),d.indexOf(o)]);if(a.textContent="","Already shot"!==n?y(e,t,2):"Already shot"===n&&y(e,t,1),"sunk"===n){l.textContent="Player 2's ship sunk!";let e=document.createElement("button");e.textContent="Continue",e.addEventListener("click",(()=>{l.close()})),l.appendChild(e),l.showModal()}!0===n&&document.querySelector("#gameover").showModal()}})),!0===o.shot&&null!==o.target?s.classList.add("hit"):!0===o.shot&&null===o.target&&s.classList.add("miss"),i.appendChild(s)})),o.appendChild(i)})),a.appendChild(o);let d=e.board,i=document.createElement("div");i.classList.add("gameboard"),d.getBoard().forEach((r=>{let o=document.createElement("div");o.classList.add("row"),r.forEach((i=>{let s=document.createElement("div");s.classList.add("space"),s.addEventListener("click",(()=>{if(2===n){let n=d.receiveAttack([d.getBoard().indexOf(r),r.indexOf(i)]);if(a.textContent="","Already shot"!==n?y(e,t,1):"Already shot"===n&&y(e,t,2),"sunk"===n){l.textContent="Player 1's ship sunk!";let e=document.createElement("button");e.textContent="Continue",e.addEventListener("click",(()=>{l.close()})),l.appendChild(e),l.showModal()}!0===n&&document.querySelector("#gameover").showModal()}})),!0===i.shot&&null!==i.target?s.classList.add("hit"):!0===i.shot&&null===i.target&&s.classList.add("miss"),o.appendChild(s)})),i.appendChild(o)})),a.appendChild(i)}else if("computer"===t.type){let n=t.board,r=document.querySelector(".game"),a=document.createElement("div"),o=document.querySelector("#sunk");a.classList.add("gameboard"),n.getBoard().forEach((l=>{let d=document.createElement("div");d.classList.add("row"),l.forEach((a=>{let i=document.createElement("div");i.classList.add("space"),i.addEventListener("click",(()=>{let d=n.receiveAttack([n.getBoard().indexOf(l),l.indexOf(a)]);if(r.textContent="","Already shot"!==d){function i(){let t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),r=e.board.getBoard();!function(){for(let e=0;e<10;e++)for(let a=0;a<10;a++)if(null!==r[e][a].target&&!0===r[e][a].shot&&!1===r[e][a].target.isSunk()){if(e+1<=9&&!0===r[e+1][a].shot&&1==r[e+1][a].target&&e-1>=0&&!0!==r[e-1][a].shot)return t=e-1,void(n=a);if(a+1<=9&&!0===r[e][a+1].shot&&null!==r[e][a+1].target&&a-1>=0&&!0!==r[e][a-1].shot)return t=e,void(n=a-1);if(e-1>=0&&!0===r[e-1][a].shot&&null!==r[e-1][a].target&&e+1<=9&&!0!==r[e+1][a].shot)return t=e+1,void(n=a);if(a-1>=0&&!0===r[e][a-1].shot&&null!==r[e][a-1].target&&a+1<=9&&!0!==r[e][a+1].shot)return t=e,void(n=a+1);if(e+1<=9&&!0!==r[e+1][a].shot)return t=e+1,void(n=a);if(a+1<=9&&!0!==r[e][a+1].shot)return t=e,void(n=a+1);if(e-1>=0&&!0!==r[e-1][a].shot)return t=e-1,void(n=a);if(a-1>=0&&!0!==r[e][a-1].shot)return t=e,void(n=a-1)}}();let a=e.board.receiveAttack([t,n]);if("Already shot"===a&&i(),"sunk"===a){o.textContent="Player 1's ship sunk!";let e=document.createElement("button");e.textContent="Continue",e.addEventListener("click",(()=>{o.close()})),o.appendChild(e),o.showModal()}!0===a&&document.querySelector("#gameover").showModal()}i(),y(e,t,1)}else"Already shot"===d&&y(e,t,1);if("sunk"===d){o.textContent="Player 2's ship sunk!";let s=document.createElement("button");s.textContent="Continue",s.addEventListener("click",(()=>{o.close()})),o.appendChild(s),o.showModal()}!0===d&&document.querySelector("#gameover").showModal()})),!0===a.shot&&null!==a.target?i.classList.add("hit"):!0===a.shot&&null===a.target&&i.classList.add("miss"),d.appendChild(i)})),a.appendChild(d)})),r.appendChild(a);let l=e.board,d=document.createElement("div");d.classList.add("gameboard"),l.getBoard().forEach((e=>{let t=document.createElement("div");t.classList.add("row"),e.forEach((e=>{let n=document.createElement("div");n.classList.add("space"),!0===e.shot&&null!==e.target?n.classList.add("hit"):!0===e.shot&&null===e.target&&n.classList.add("miss"),t.appendChild(n)})),d.appendChild(t)})),r.appendChild(d)}}g.styleTagTransform=f(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=p(),a()(m.A,g),m.A&&m.A.locals&&m.A.locals,function e(){let t=document.querySelector("#players");t.showModal();let n,r=document.querySelector("#one-player"),a=document.querySelector("#two-player"),o=document.querySelector("#newgame"),l=document.querySelector("#gameover"),d=v("human");r.addEventListener("click",(()=>{n=v("computer"),u(d),function(e){function t(){return[[Math.floor(10*Math.random()),Math.floor(10*Math.random())],Math.floor(2*Math.random())]}(function n(){let r=t(),a="right";1===r[1]&&(a="down"),void 0!==e.board.placeShip(r[0],a,5)&&n()})(),function n(){let r=t(),a="right";1===r[1]&&(a="down"),void 0!==e.board.placeShip(r[0],a,4)&&n()}(),function n(){let r=t(),a="right";1===r[1]&&(a="down"),void 0!==e.board.placeShip(r[0],a,3)&&n()}(),function n(){let r=t(),a="right";1===r[1]&&(a="down"),void 0!==e.board.placeShip(r[0],a,3)&&n()}(),function n(){let r=t(),a="right";1===r[1]&&(a="down"),void 0!==e.board.placeShip(r[0],a,3)&&n()}()}(n),document.querySelector(".game").textContent="",y(d,n),t.close()})),a.addEventListener("click",(()=>{n=v("human"),p(n),u(d),document.querySelector(".game").textContent="",y(d,n),t.close()}));const i=document.querySelectorAll(".handle");let s=0,c=0;function u(e){const t=document.querySelectorAll(".ship");document.querySelector("#player1ships").showModal();let n=document.querySelector(".placegame"),r=e.board,a=null;n.textContent="",r.getBoard().forEach((t=>{let o=document.createElement("div");o.classList.add("placerow"),t.forEach((n=>{let l=document.createElement("div");l.classList.add("placecell"),null!==n.target&&l.classList.add("occupied"),l.addEventListener("dragover",(e=>{e.preventDefault(),l.classList.add("over")})),l.addEventListener("dragleave",(e=>{e.preventDefault(),l.classList.remove("over")})),l.addEventListener("drop",(o=>{o.preventDefault(),l.classList.remove("over");let d=a.textContent.split(","),i=parseInt(d[1]),c=d[0].replaceAll("'","");void 0===r.placeShip([r.getBoard().indexOf(t),t.indexOf(n)],c,i)&&(a.classList.contains("l5")&&document.querySelectorAll(".l5").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l4")&&document.querySelectorAll(".l4").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l31")&&document.querySelectorAll(".l31").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l32")&&document.querySelectorAll(".l32").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l33")&&document.querySelectorAll(".l33").forEach((e=>{e.classList.add("hidden")})),s++,5===s?(document.querySelectorAll(".hidden").forEach((e=>{e.classList.remove("hidden")})),document.querySelector("#player1ships").close()):u(e))})),o.appendChild(l)})),n.appendChild(o)})),i.forEach((e=>{e.addEventListener("mousedown",(e=>{e.target.parentNode.setAttribute("draggable","true")})),e.addEventListener("mouseup",(e=>{e.target.parentNode.setAttribute("draggable","false")}))})),t.forEach((e=>{e.addEventListener("dragstart",(e=>{a=e.target,a.classList.add("dragging")})),e.addEventListener("dragend",(()=>{a=null,e.classList.remove("dragging"),e.setAttribute("draggable","false")}))}))}function p(e){const t=document.querySelectorAll(".ship2");document.querySelector("#player2ships").showModal();let n=document.querySelector(".placegame2"),r=e.board,a=null;n.textContent="",r.getBoard().forEach((t=>{let o=document.createElement("div");o.classList.add("placerow2"),t.forEach((n=>{let l=document.createElement("div");l.classList.add("placecell2"),null!==n.target&&l.classList.add("occupied"),l.addEventListener("dragover",(e=>{e.preventDefault(),l.classList.add("over")})),l.addEventListener("dragleave",(e=>{e.preventDefault(),l.classList.remove("over")})),l.addEventListener("drop",(o=>{o.preventDefault(),l.classList.remove("over");let d=a.textContent.split(","),i=parseInt(d[1]),s=d[0].replaceAll("'","");void 0===r.placeShip([r.getBoard().indexOf(t),t.indexOf(n)],s,i)&&(a.classList.contains("l5")&&document.querySelectorAll(".l5").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l4")&&document.querySelectorAll(".l4").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l31")&&document.querySelectorAll(".l31").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l32")&&document.querySelectorAll(".l32").forEach((e=>{e.classList.add("hidden")})),a.classList.contains("l33")&&document.querySelectorAll(".l33").forEach((e=>{e.classList.add("hidden")})),c++,5===c?(document.querySelectorAll(".hidden").forEach((e=>{e.classList.remove("hidden")})),document.querySelector("#player2ships").close(),c=0):p(e))})),o.appendChild(l)})),n.appendChild(o)})),i.forEach((e=>{e.addEventListener("mousedown",(e=>{e.target.parentNode.setAttribute("draggable","true")})),e.addEventListener("mouseup",(e=>{e.target.parentNode.setAttribute("draggable","false")}))})),t.forEach((e=>{e.addEventListener("dragstart",(e=>{a=e.target,a.classList.add("dragging")})),e.addEventListener("dragend",(()=>{a=null,e.classList.remove("dragging"),e.setAttribute("draggable","false")}))}))}o.addEventListener("click",(()=>{document.querySelector(".game").textContent="",l.close(),e()}))}()})();