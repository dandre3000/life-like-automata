(()=>{"use strict";var e={375:(e,t,a)=>{a.d(t,{Et:()=>v,s:()=>f,Xl:()=>m,Jz:()=>w,jR:()=>p,dp:()=>y});const n=["purple","indigo","blue","cyan","green","lightgreen","yellow","gold","orange","orangered","red"];class o{constructor(e,t,a=0){this.row=e,this.col=t,this.x=t*y,this.y=e*y,this.value=a}toggle(){return 0==this.value?this.value=1:this.value=0}update(){let e=0;for(let t=this.row-1;t<this.row+2;t++)for(let a=this.col-1;a<this.col+2;a++)t==this.row&&a==this.col||1==r.data[t<0?r.data.length-1:t>r.data.length-1?0:t][a>r.data[0].length-1?0:a<0?r.data[0].length-1:a].value&&e++;this.value>0?(({S:e},t)=>{for(let a in e)if(t==e[a])return!0;return!1})(p,e)||(r.shadow[this.row][this.col].value=this.value+1):r.shadow[this.row][this.col].value=(({B:e},t)=>{for(let a in e)if(t==e[a])return!0;return!1})(p,e),r.shadow[this.row][this.col].value>=p.G&&(r.shadow[this.row][this.col].value=0)}draw(e){e.fillStyle=this.value?n[this.value-1]:"white",e.fillRect(r.x+this.x+.5,r.y+this.y+.5,y-1,y-1)}}const r=window.matrix={data:[],shadow:[],x:16,y:16,init:()=>{for(let e=0;e<36;e++){r.data.push([]),r.shadow.push([]);for(let t=0;t<48;t++)r.data[e].push(new o(e,t)),r.shadow[e].push(new o(e,t))}},clear:()=>{r.data.forEach(((e,t)=>{e.forEach(((e,a)=>{e.value=0,r.shadow[t][a].value=0}))}))},random:()=>{r.data.forEach(((e,t)=>{e.forEach(((e,a)=>{e.value=Math.round(Math.random()),r.shadow[t][a].value=0}))}))},update:()=>{r.data.forEach(((e,t)=>{e.forEach(((e,t)=>{e.update()}))})),r.data.forEach(((e,t)=>{e.forEach(((e,a)=>{e.value=r.shadow[t][a].value}))}))},draw:()=>{r.data.forEach(((e,t)=>{e.forEach(((e,t)=>{e.draw(f.getContext("2d"))}))}))}},i={Life:{B:[3],S:[2,3],G:2},"Day & Night":{B:[3,6,7,8],S:[3,4,6,7,8],G:2},Seeds:{B:[2],S:[],G:2},Lines:{B:[4,5,8],S:[0,1,2,3,4,5],G:7},"Star Wars":{B:[2],S:[3,4,5],G:4}};let d=0,l=0,s=0,u=!1,c=!1;const h=()=>{const e=1e3/v;let t=window.performance.now(),a=0==l?0:t-l;for(l=t,d+=a;u&&d>=e;)c&&r.update(),d-=e;m.fillStyle="black",m.fillRect(0,0,f.width,f.height),r.draw(m),m.fillStyle="red",m.fillRect(w.x,w.y,1,1),u?s=requestAnimationFrame(h):cancelAnimationFrame(s)};var f,m,v=30,p={...i.Life};const w={x:0,y:0},y=16;window.addEventListener("DOMContentLoaded",(e=>{(f=document.querySelector("canvas")).width=800,f.height=600,m=f.getContext("2d"),f.addEventListener("mousemove",(e=>{w.x=e.offsetX,w.y=e.offsetY})),f.addEventListener("mousedown",(e=>{for(let t in r.data)for(let a in r.data[t])e.offsetX>=r.x+r.data[t][a].x&&e.offsetX<=r.x+r.data[t][a].x+y-1&&e.offsetY>=r.y+r.data[t][a].y&&e.offsetY<=r.y+r.data[t][a].y+y-1&&(r.shadow[t][a].toggle(),r.data[t][a].toggle())}));const t=document.getElementById("play");t.addEventListener("click",(e=>{t.innerText=(c=!c)?"Play":"Pause"})),document.getElementById("clear").addEventListener("click",(e=>{r.clear()})),document.getElementById("random").addEventListener("click",(e=>{r.random()}));const a=document.querySelector("#rules ~ .dropdown-content");Object.getOwnPropertyNames(i).forEach((e=>{const t=document.createElement("li");t.innerText=e,t.addEventListener("click",(t=>{name=e,p={...i[name]},n.value=p.B,o.value=p.S,d.value=p.G})),a.appendChild(t)}));const n=document.getElementById("B-input");n.addEventListener("input",(e=>{const t=[],a=n.value.replace(/,*/g,"");for(let e in a){const n=Number(a[e]);if(isNaN(n))return!1;t.push(n)}p.B=t}));const o=document.getElementById("S-input");o.addEventListener("input",(e=>{const t=[],a=o.value.replace(/,*/g,"");for(let e in a){const n=Number(a[e]);if(isNaN(n))return!1;t.push(n)}p.S=t}));const d=document.getElementById("G-input");d.addEventListener("input",(e=>{p.G=d.value}));const g=document.getElementById("fps");g.addEventListener("input",(e=>{document.querySelector("#fps+span").innerText=v=g.value})),document.querySelector("#fps+span").innerText=v=g.value,r.init(),(()=>{if(u)throw new Error("timeStep is already running: cannot start another animation frame request");l=0,u=!0,s=requestAnimationFrame(h)})()}))}},t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(375)})();
//# sourceMappingURL=main.bundle.js.map