import{_ as r,s as o,r as _}from"./index.0ee44b72.js";import{r as l,o as d,c as m,a as t,n as v,b as h,w as u,p,d as x,e as E}from"./vendor.44295e5f.js";const f={name:"BirthYear",data(){return{width:"21px",isActive:!0,birth_year:""}},methods:{activeElement(s){document.querySelectorAll(".contaner-item").forEach(e=>{e.classList.remove("activeBackground")}),document.querySelectorAll(".contaner-item__active").forEach(e=>{e.classList.remove("activeItems")}),document.querySelectorAll(".contaner-item__text").forEach(e=>{e.classList.remove("activeText")}),this.birth_year=s.target.innerText,s.currentTarget.classList.add("activeBackground"),s.currentTarget.firstElementChild.classList.add("activeItems"),s.currentTarget.lastElementChild.classList.add("activeText"),this.width="42px"},submitElement(){o.dispatch("incrementPush",{birth_year:this.birth_year}),_.beforeEach(()=>{if(this.birth_year==="")return!1})}}},i=s=>(p("data-v-4fd35219"),s=s(),x(),s),b={class:"about"},k={class:"containerMain"},y={class:"containerMain-items"},g={class:"progressBar"},B=i(()=>t("p",{class:"text"},"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043E\u0437\u0440\u0430\u0441\u0442:",-1)),C=i(()=>t("div",{class:"contaner-item__active"},null,-1)),L=i(()=>t("p",{class:"contaner-item__text"},"\u0414\u043E 18",-1)),w=[C,L],S=i(()=>t("div",{class:"contaner-item__active"},null,-1)),T=i(()=>t("p",{class:"contaner-item__text"},"\u041E\u0442 18 \u0434\u043E 28",-1)),I=[S,T],A=i(()=>t("div",{class:"contaner-item__active"},null,-1)),Y=i(()=>t("p",{class:"contaner-item__text"},"\u041E\u0442 29 \u0434\u043E 35",-1)),q=[A,Y],M=i(()=>t("div",{class:"contaner-item__active"},null,-1)),N=i(()=>t("p",{class:"contaner-item__text"},"\u041E\u0442 36",-1)),V=[M,N],R=E("\u0434\u0430\u043B\u0435\u0435");function z(s,e,P,j,D,a){const n=l("RouterLink");return d(),m("main",b,[t("div",k,[t("div",y,[t("div",g,[t("div",{class:"progressBar-state",style:v({width:this.width})},null,4)]),B,t("div",{class:"contaner-item",onClick:e[0]||(e[0]=(...c)=>a.activeElement&&a.activeElement(...c))},w),t("div",{class:"contaner-item",onClick:e[1]||(e[1]=(...c)=>a.activeElement&&a.activeElement(...c))},I),t("div",{class:"contaner-item",onClick:e[2]||(e[2]=(...c)=>a.activeElement&&a.activeElement(...c))},q),t("div",{class:"contaner-item",onClick:e[3]||(e[3]=(...c)=>a.activeElement&&a.activeElement(...c))},V),h(n,{class:"containerMain-items__buttom",onClick:a.submitElement,to:"/gender/birthYear/excess"},{default:u(()=>[R]),_:1},8,["onClick"])])])])}var H=r(f,[["render",z],["__scopeId","data-v-4fd35219"]]);export{H as default};
