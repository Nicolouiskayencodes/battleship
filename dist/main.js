(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n\n.gameboard {\n  display: flex;\n  flex-direction: column;\n}\n.row {\n  height: 40px;\n  display: flex;\n}\n.space{\n  border: 1px solid black;\n  width: 40px;\n}\n.hit {\n  background-color: red;\n}\n.miss {\n  background-color: grey;\n}\n\n.game {\n  height: 60vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),l=n(56),d=n.n(l),u=n(540),p=n.n(u),f=n(113),h=n.n(f),m=n(208),v={};function g(e){return{type:e,board:function(){let e=[];for(let t=0;t<10;t++){let t=[];for(let e=0;e<10;e++)t.push({target:null,shot:!1});e.push(t)}let t=0,n=0;return{getBoard:function(){return e},placeShip:function(n,r,o){let a=function(e){const t=e;let n=0;return{hit:function(){n++},isSunk:function(){return n>=t}}}(o),i=[];if("right"===r)for(let t=0;t<o;t++){let r=[n[0],n[1]+t];if(i.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}else if("up"===r)for(let t=0;t<o;t++){let r=[n[0]-t,n[1]];if(i.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}else if("left"===r)for(let t=0;t<o;t++){let r=[n[0],n[1]-t];if(i.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}else if("down"===r)for(let t=0;t<o;t++){let r=[n[0]+t,n[1]];if(i.push(r),r[0]<0||r[0]>9||r[1]<0||r[1]>9)return"Out of bounds";if(null!==e[r[0]][r[1]].target)return"Occupied space"}for(let t=0;t<o;t++){let n=i[t];e[n[0]][n[1]].target=a}t++},receiveAttack:function(r){const o=e[r[0]][r[1]];return!0===o.shot?"Already shot":(o.shot=!0,null!==o.target&&(o.target.hit(),!0===o.target.isSunk())?(n++,n===t||"sunk"):void 0)}}}()}}v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;let b=g("human"),y=g("computer");b.board.placeShip([0,0],"right",5),b.board.placeShip([1,1],"down",4),b.board.placeShip([3,1],"right",3),b.board.placeShip([3,6],"right",3),b.board.placeShip([6,1],"right",3),y.board.placeShip([0,0],"right",5),y.board.placeShip([1,1],"down",4),y.board.placeShip([3,1],"right",3),y.board.placeShip([3,6],"right",3),y.board.placeShip([6,1],"right",3),function e(t,n,r=1){let o=t.board,a=document.querySelector(".game"),i=document.createElement("div"),c=document.querySelector("dialog");i.classList.add("gameboard"),o.getBoard().forEach((s=>{let l=document.createElement("div");l.classList.add("row"),s.forEach((i=>{let d=document.createElement("div");d.classList.add("space"),d.addEventListener("click",(()=>{if(1===r){let r=o.receiveAttack([o.getBoard().indexOf(s),s.indexOf(i)]);if(a.textContent="","Already shot"!==r?e(t,n,2):"Already shot"===r&&e(t,n,1),"sunk"===r){c.textContent="Ship sunk!";let e=document.createElement("button");e.textContent="Continue",e.addEventListener("click",(()=>{c.close()})),c.appendChild(e),c.showModal()}if(!0===r){c.textContent="All ships sunk. Game Over!";let e=document.createElement("button");e.textContent="New Game",e.addEventListener("click",(()=>{c.close()})),c.appendChild(e),c.showModal()}}})),!0===i.shot&&null!==i.target?d.classList.add("hit"):!0===i.shot&&null===i.target&&d.classList.add("miss"),l.appendChild(d)})),i.appendChild(l)})),a.appendChild(i);let s=n.board,l=document.createElement("div");l.classList.add("gameboard"),s.getBoard().forEach((o=>{let i=document.createElement("div");i.classList.add("row"),o.forEach((l=>{let d=document.createElement("div");d.classList.add("space"),d.addEventListener("click",(()=>{if(2===r){let r=s.receiveAttack([s.getBoard().indexOf(o),o.indexOf(l)]);if(a.textContent="","Already shot"!==r?e(t,n,1):"Already shot"===r&&e(t,n,2),"sunk"===r){c.textContent="Ship sunk!";let e=document.createElement("button");e.textContent="Continue",e.addEventListener("click",(()=>{c.close()})),c.appendChild(e),c.showModal()}if(!0===r){c.textContent="All ships sunk. Game Over!";let e=document.createElement("button");e.textContent="New Game",e.addEventListener("click",(()=>{c.close()})),c.appendChild(e),c.showModal()}}})),!0===l.shot&&null!==l.target?d.classList.add("hit"):!0===l.shot&&null===l.target&&d.classList.add("miss"),i.appendChild(d)})),l.appendChild(i)})),a.appendChild(l)}(b,y)})();