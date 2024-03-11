import{e as he,c as fe,m as z,a as ve,b as le,d as be,S as Z,f as ee}from"./swiper-vue-TCzvfXph.js";import{_ as q,o as c,c as p,a as e,F as P,i as N,j as J,k as se,t as H,s as ne,l as B,n as oe,q as ce,b as I,w as O,u as te,v as S,e as V,x as $e,g as re,p as ae,d as ie,r as E,y as ye,z as xe,A as K,f as we,L as Ce}from"./index-FDdSSu7m.js";import{M as ke}from"./bootstrap.esm-uhsrVe-H.js";import{v as Le}from"./vertical_line-N5lP2v9v.js";import{g as de}from"./helpers-Hx-ZzB2u.js";import{u as pe}from"./user-h2UowS-I.js";import{W as Se}from"./WineGlassLoader-x5xDUxi2.js";import"./sweetalert2.all-CxW6M65U.js";const Pe="/test/images/hot_icon.svg",me="/test/images/switch.png",Me="/test/images/wine_icon.svg";function Te(o,s,h,u){return o.params.createElements&&Object.keys(u).forEach(r=>{if(!h[r]&&h.auto===!0){let n=he(o.el,`.${u[r]}`)[0];n||(n=fe("div",u[r]),n.className=u[r],o.el.append(n)),h[r]=n,s[r]=n}}),h}function Y(o){return o===void 0&&(o=""),`.${o.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function _e(o){let{swiper:s,extendParams:h,on:u,emit:r}=o;const n="swiper-pagination";h({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),s.pagination={el:null,bullets:[]};let d,f=0;function D(){return!s.params.pagination.el||!s.pagination.el||Array.isArray(s.pagination.el)&&s.pagination.el.length===0}function A(t,a){const{bulletActiveClass:l}=s.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${l}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${l}-${a}-${a}`)))}function M(t){const a=t.target.closest(Y(s.params.pagination.bulletClass));if(!a)return;t.preventDefault();const l=le(a)*s.params.slidesPerGroup;if(s.params.loop){if(s.realIndex===l)return;s.slideToLoop(l)}else s.slideTo(l)}function L(){const t=s.rtl,a=s.params.pagination;if(D())return;let l=s.pagination.el;l=z(l);let g,x;const R=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.slides.length,U=s.params.loop?Math.ceil(R/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop?(x=s.previousRealIndex||0,g=s.params.slidesPerGroup>1?Math.floor(s.realIndex/s.params.slidesPerGroup):s.realIndex):typeof s.snapIndex<"u"?(g=s.snapIndex,x=s.previousSnapIndex):(x=s.previousIndex||0,g=s.activeIndex||0),a.type==="bullets"&&s.pagination.bullets&&s.pagination.bullets.length>0){const i=s.pagination.bullets;let v,_,T;if(a.dynamicBullets&&(d=ve(i[0],s.isHorizontal()?"width":"height",!0),l.forEach(b=>{b.style[s.isHorizontal()?"width":"height"]=`${d*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&x!==void 0&&(f+=g-(x||0),f>a.dynamicMainBullets-1?f=a.dynamicMainBullets-1:f<0&&(f=0)),v=Math.max(g-f,0),_=v+(Math.min(i.length,a.dynamicMainBullets)-1),T=(_+v)/2),i.forEach(b=>{const w=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${a.bulletActiveClass}${C}`)].map(C=>typeof C=="string"&&C.includes(" ")?C.split(" "):C).flat();b.classList.remove(...w)}),l.length>1)i.forEach(b=>{const w=le(b);w===g?b.classList.add(...a.bulletActiveClass.split(" ")):s.isElement&&b.setAttribute("part","bullet"),a.dynamicBullets&&(w>=v&&w<=_&&b.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),w===v&&A(b,"prev"),w===_&&A(b,"next"))});else{const b=i[g];if(b&&b.classList.add(...a.bulletActiveClass.split(" ")),s.isElement&&i.forEach((w,C)=>{w.setAttribute("part",C===g?"bullet-active":"bullet")}),a.dynamicBullets){const w=i[v],C=i[_];for(let G=v;G<=_;G+=1)i[G]&&i[G].classList.add(...`${a.bulletActiveClass}-main`.split(" "));A(w,"prev"),A(C,"next")}}if(a.dynamicBullets){const b=Math.min(i.length,a.dynamicMainBullets+4),w=(d*b-d)/2-T*d,C=t?"right":"left";i.forEach(G=>{G.style[s.isHorizontal()?C:"top"]=`${w}px`})}}l.forEach((i,v)=>{if(a.type==="fraction"&&(i.querySelectorAll(Y(a.currentClass)).forEach(_=>{_.textContent=a.formatFractionCurrent(g+1)}),i.querySelectorAll(Y(a.totalClass)).forEach(_=>{_.textContent=a.formatFractionTotal(U)})),a.type==="progressbar"){let _;a.progressbarOpposite?_=s.isHorizontal()?"vertical":"horizontal":_=s.isHorizontal()?"horizontal":"vertical";const T=(g+1)/U;let b=1,w=1;_==="horizontal"?b=T:w=T,i.querySelectorAll(Y(a.progressbarFillClass)).forEach(C=>{C.style.transform=`translate3d(0,0,0) scaleX(${b}) scaleY(${w})`,C.style.transitionDuration=`${s.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(i.innerHTML=a.renderCustom(s,g+1,U),v===0&&r("paginationRender",i)):(v===0&&r("paginationRender",i),r("paginationUpdate",i)),s.params.watchOverflow&&s.enabled&&i.classList[s.isLocked?"add":"remove"](a.lockClass)})}function j(){const t=s.params.pagination;if(D())return;const a=s.virtual&&s.params.virtual.enabled?s.virtual.slides.length:s.grid&&s.params.grid.rows>1?s.slides.length/Math.ceil(s.params.grid.rows):s.slides.length;let l=s.pagination.el;l=z(l);let g="";if(t.type==="bullets"){let x=s.params.loop?Math.ceil(a/s.params.slidesPerGroup):s.snapGrid.length;s.params.freeMode&&s.params.freeMode.enabled&&x>a&&(x=a);for(let R=0;R<x;R+=1)t.renderBullet?g+=t.renderBullet.call(s,R,t.bulletClass):g+=`<${t.bulletElement} ${s.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?g=t.renderFraction.call(s,t.currentClass,t.totalClass):g=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?g=t.renderProgressbar.call(s,t.progressbarFillClass):g=`<span class="${t.progressbarFillClass}"></span>`),s.pagination.bullets=[],l.forEach(x=>{t.type!=="custom"&&(x.innerHTML=g||""),t.type==="bullets"&&s.pagination.bullets.push(...x.querySelectorAll(Y(t.bulletClass)))}),t.type!=="custom"&&r("paginationRender",l[0])}function m(){s.params.pagination=Te(s,s.originalParams.pagination,s.params.pagination,{el:"swiper-pagination"});const t=s.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&s.isElement&&(a=s.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(s.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...s.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(l=>be(l,".swiper")[0]===s.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(s.pagination,{el:a}),a=z(a),a.forEach(l=>{t.type==="bullets"&&t.clickable&&l.classList.add(...(t.clickableClass||"").split(" ")),l.classList.add(t.modifierClass+t.type),l.classList.add(s.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(l.classList.add(`${t.modifierClass}${t.type}-dynamic`),f=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&l.classList.add(t.progressbarOppositeClass),t.clickable&&l.addEventListener("click",M),s.enabled||l.classList.add(t.lockClass)}))}function F(){const t=s.params.pagination;if(D())return;let a=s.pagination.el;a&&(a=z(a),a.forEach(l=>{l.classList.remove(t.hiddenClass),l.classList.remove(t.modifierClass+t.type),l.classList.remove(s.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(l.classList.remove(...(t.clickableClass||"").split(" ")),l.removeEventListener("click",M))})),s.pagination.bullets&&s.pagination.bullets.forEach(l=>l.classList.remove(...t.bulletActiveClass.split(" ")))}u("changeDirection",()=>{if(!s.pagination||!s.pagination.el)return;const t=s.params.pagination;let{el:a}=s.pagination;a=z(a),a.forEach(l=>{l.classList.remove(t.horizontalClass,t.verticalClass),l.classList.add(s.isHorizontal()?t.horizontalClass:t.verticalClass)})}),u("init",()=>{s.params.pagination.enabled===!1?W():(m(),j(),L())}),u("activeIndexChange",()=>{typeof s.snapIndex>"u"&&L()}),u("snapIndexChange",()=>{L()}),u("snapGridLengthChange",()=>{j(),L()}),u("destroy",()=>{F()}),u("enable disable",()=>{let{el:t}=s.pagination;t&&(t=z(t),t.forEach(a=>a.classList[s.enabled?"remove":"add"](s.params.pagination.lockClass)))}),u("lock unlock",()=>{L()}),u("click",(t,a)=>{const l=a.target,g=z(s.pagination.el);if(s.params.pagination.el&&s.params.pagination.hideOnClick&&g&&g.length>0&&!l.classList.contains(s.params.pagination.bulletClass)){if(s.navigation&&(s.navigation.nextEl&&l===s.navigation.nextEl||s.navigation.prevEl&&l===s.navigation.prevEl))return;const x=g[0].classList.contains(s.params.pagination.hiddenClass);r(x===!0?"paginationShow":"paginationHide"),g.forEach(R=>R.classList.toggle(s.params.pagination.hiddenClass))}});const y=()=>{s.el.classList.remove(s.params.pagination.paginationDisabledClass);let{el:t}=s.pagination;t&&(t=z(t),t.forEach(a=>a.classList.remove(s.params.pagination.paginationDisabledClass))),m(),j(),L()},W=()=>{s.el.classList.add(s.params.pagination.paginationDisabledClass);let{el:t}=s.pagination;t&&(t=z(t),t.forEach(a=>a.classList.add(s.params.pagination.paginationDisabledClass))),F()};Object.assign(s.pagination,{enable:y,disable:W,render:j,update:L,init:m,destroy:F})}const Ae={props:["tempProducts","favorites"],data(){return{modalProduct:null}},methods:{openModal(){this.modalProduct.show()},closeModal(){this.modalProduct.hide()},seeProduct(o){this.closeModal(),setTimeout(()=>{this.$router.push({name:"ProductDetail",params:{id:o}})},0)},addToCart(o){this.$emit("add-to-cart",o)},addFavorite(o){this.$emit("add-to-favorite",o)}},mounted(){this.modalProduct=new ke(this.$refs.productModal)}},Ie={ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"selectProductModalLabel","aria-hidden":"true"},je={class:"modal-dialog modal-xl"},Be={class:"modal-content border-0"},He=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"selectProductModalLabel",class:"modal-title"},[e("span",null,"推薦酒品")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),De={class:"modal-body"},Fe={class:"row"},Re={class:"card h-100 p-2"},ze={class:"row h-100"},Ne={class:"col-4"},Oe=["onClick"],We={key:0,class:"bi bi-heart-fill me-1"},Ee={key:1,class:"bi bi-heart me-1"},Ge=["onClick"],Ve=["src","alt"],qe={class:"col-8"},Ue={class:"card-body d-flex flex-column h-100 justify-content-between"},Ye={class:"mb-2"},Xe={class:"d-flex mb-1 justify-content-between"},Je={key:0,class:"badge bg-danger mb-2"},Ke={class:"d-flex gap-1"},Qe=["onClick"],Ze={class:"card-title flex-fill"},es={class:"card-text text-danger fw-bold"},ss=["onClick"],ts=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function as(o,s,h,u,r,n){return c(),p("div",Ie,[e("div",je,[e("div",Be,[He,e("div",De,[e("div",Fe,[(c(!0),p(P,null,N(h.tempProducts,d=>(c(),p("div",{class:"col-12 col-md-6 col-lg-4 mb-3",key:d.id},[e("div",Re,[e("div",ze,[e("div",Ne,[e("a",{href:"#",onClick:J(f=>n.addFavorite(d),["prevent"])},[h.favorites.includes(d.id)?(c(),p("i",We)):(c(),p("i",Ee))],8,Oe),e("a",{href:"#",onClick:J(f=>n.seeProduct(d.id),["prevent"])},[e("img",{src:o.$filters.imgPath(`/images/wine_images/${d.image}.jpg`),class:"card-img-top",alt:d.chineseName},null,8,Ve)],8,Ge)]),e("div",qe,[e("div",Ue,[e("div",Ye,[e("div",Xe,[d.is_hot?(c(),p("span",Je,"熱門推薦")):se("",!0),e("div",Ke,[(c(!0),p(P,null,N(d.star,f=>(c(),p("i",{class:"bi bi-star-fill text-warning",key:f}))),128))])]),e("div",null,[e("a",{href:"#",class:"text-black",onClick:J(f=>n.seeProduct(d.id),["prevent"])},[e("h5",Ze,H(d.chineseName),1)],8,Qe),e("p",es,"$ "+H(d.price),1)])]),e("a",{href:"#",class:"btn btn-primary w-100",onClick:J(f=>n.addToCart(d),["prevent"])},"加入購物車",8,ss)])])])])]))),128))])]),ts])])],512)}const is=q(Ae,[["render",as]]),X=o=>(ae("data-v-fdbce52e"),o=o(),ie(),o),ls={class:"selection-container container-lg mt-5"},ns={class:"row justify-content-between"},os={class:"hot-container col-md-12 col-lg-6"},cs={class:"info"},rs=X(()=>e("div",{class:"title d-flex justify-content-between align-items-center mb-3"},[e("div",null,[e("img",{src:Pe,class:"mb-2 me-1",alt:"hot"}),e("h5",{class:"d-inline-block text-primary"},"熱賣商品")]),e("div",{id:"hot_pagination",class:"swiper-pagination homeswiper-pagination"})],-1)),ds={class:"region-card card bg-white"},ps={class:"card-body px-0"},ms={class:"region-card_head d-flex"},_s={class:"image-wine"},gs=["src"],us=X(()=>e("img",{class:"image-switch",src:me,alt:"wine"},null,-1)),hs={class:"info single-ellipsis"},fs={class:"text-black mt-2"},vs={class:"card-subtitle mt-2 single-ellipsis"},bs={class:"d-flex gap-1 mt-2"},$s={class:"price-block d-flex justify-content-between align-items-center"},ys={class:"price text-primary"},xs=["disabled","onClick"],ws=X(()=>e("span",null,"立即購買",-1)),Cs=X(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),ks={class:"text-center vertical-line"},Ls=["src"],Ss={class:"select-container col-md-12 col-lg-6 d-flex justify-content-end"},Ps={class:"info"},Ms={class:"title d-flex justify-content-between align-items-center mb-3"},Ts=X(()=>e("div",null,[e("img",{src:Me,class:"mb-2 me-1",alt:"hot"}),e("h5",{class:"d-inline-block text-primary"},"引導選酒區")],-1)),As={key:0},Is={key:1},js={class:"container"},Bs={class:"row justify-content-between"},Hs=["onClick"],Ds=["src"],Fs={__name:"HomeWineSelection",emits:["isReady"],setup(o,{emit:s}){const h=pe(),u=s,{getUser:r,getFavorites:n}=ne(h),d=B("taste"),f=B(0),D=B(null),A=B(null),M=B(null),L=B([]),j=B([]),m=B([]),F=[{id:0,type:["taste","food"],options:[{name:"純品酒",image:"/images/select_wine1.png",next:1},{name:"搭配餐酒",image:"/images/select_wine2.png",next:10}]},{id:1,type:["taste"],options:[{name:"偏甜",image:"/images/lead_wine/sweet.png",next:2},{name:"偏酸",image:"/images/lead_wine/sour.png",next:2},{name:"偏乾",image:"/images/lead_wine/dry.png",next:90}]},{id:2,type:["taste"],options:[{name:"飽滿",image:"/images/lead_wine/filling.png",next:90},{name:"輕盈",image:"/images/lead_wine/light.png",next:90}]},{id:10,type:["food"],options:[{name:"開胃菜",image:"/images/lead_wine/appetizer.png",next:90},{name:"主菜",image:"/images/lead_wine/main_course.png",next:90},{name:"甜點",image:"/images/lead_wine/dessert.png",next:90}]},{id:90,type:["taste","food"],options:[{name:"氣泡",image:"/images/lead_wine/sparkling.png",next:99},{name:"無氣泡",image:"/images/lead_wine/sparkling_non.png",next:99}]},{id:99,type:["taste","food"],options:[{name:"紅葡萄酒",image:"/images/lead_wine/red_wine.png",next:-1},{name:"白葡萄酒",image:"/images/lead_wine/white_wine.png",next:-1}]}],y=()=>{re.get("https://vue3-course-api.hexschool.io/v2/products").then(i=>{j.value=i.data,L.value=i.data.filter(v=>!!v.is_hot&&v.star>3).slice(0,3),u("isReady")}).catch(i=>{console.log(i.response)})},W=i=>{A.value=i,A.value.slideReset(),A.value.slideTo(0)},t=i=>{M.value=i,M.value.slideReset(),M.value.slideTo(0)},a=i=>{i.name==="搭配餐酒"?d.value="food":i.name==="純品酒"&&(d.value="taste"),i&&i.next>0?M.value.slideNext():(f.value=i.next,x(i))},l=i=>{var v;i&&i.id&&((v=r.value)!=null&&v.id)&&h.addToCart(i)},g=i=>{var v;if(i.id&&((v=r.value)!=null&&v.id)&&!n.value.includes(i.id)){const _={userId:r.value.id,productId:i.id,created_at:de()};h.addToFavorite(_)}},x=i=>{m.value=j.value.filter(v=>v.wineStyle===i.name).slice(0,6),D.value.openModal()},R=()=>{f.value===-1&&(f.value=0,M.value.slideReset(),M.value.slideTo(0))},U=oe(()=>F.filter(i=>i.type.includes(d.value)));return ce(()=>{y()}),(i,v)=>(c(),p("div",ls,[e("div",ns,[e("div",os,[e("div",cs,[rs,I(S(ee),{pagination:{el:"#hot_pagination"},onSwiper:W,modules:[S(_e)],class:"mySwiper"},{default:O(()=>[(c(!0),p(P,null,N(L.value,_=>(c(),te(S(Z),{key:_.id},{default:O(()=>{var T;return[e("div",ds,[e("div",null,[e("div",ps,[e("div",ms,[e("div",_s,[e("img",{src:i.$filters.imgPath(`/images/wine_images/${_.image}.jpg`),alt:"wine"},null,8,gs)]),us,e("div",hs,[e("h5",fs,H(_.chineseName),1),e("h6",vs,H(_.englishName),1),e("div",bs,[(c(!0),p(P,null,N(_.star,b=>(c(),p("i",{class:"bi bi-star-fill text-warning",key:b}))),128))]),e("div",$s,[e("h5",ys,"NT$"+H(i.$filters.currency(_.price)),1),e("button",{type:"button",class:"btn btn-primary me-0",disabled:!((T=S(r))!=null&&T.id),onClick:b=>l(_)},[ws,V(),Cs],8,xs)])])])])])])]}),_:2},1024))),128))]),_:1},8,["modules"])]),e("div",ks,[e("img",{src:S(Le),alt:"vertical Line"},null,8,Ls)])]),e("div",Ss,[e("div",Ps,[e("div",Ms,[Ts,e("button",{type:"button",class:"btn btn-primary btn-next",onClick:R},[f.value===-1?(c(),p("span",As,"重新選擇")):(c(),p("span",Is,"下一步"))])]),I(S(ee),{onSwiper:t,allowTouchMove:!1,class:"mySwiper"},{default:O(()=>[(c(!0),p(P,null,N(U.value,_=>(c(),te(S(Z),{key:_.id},{default:O(()=>[e("div",js,[e("div",Bs,[(c(!0),p(P,null,N(_.options,T=>(c(),p("div",{class:$e(["",[_.options.length>=3?"col-4":"col-6 g-0"]]),key:`child-${T.id}`},[e("div",{class:"card-select",onClick:b=>a(T)},[e("img",{src:i.$filters.imgPath(T.image),alt:"wine"},null,8,Ds),e("h5",null,H(T.name),1)],8,Hs)],2))),128))])])]),_:2},1024))),128))]),_:1})])])]),I(is,{ref_key:"selectProductModal",ref:D,tempProducts:m.value,favorites:S(n),onAddToCart:l,onAddToFavorite:g},null,8,["tempProducts","favorites"])]))}},Rs=q(Fs,[["__scopeId","data-v-fdbce52e"]]),ge="/test/images/slider-image.png",zs="/test/images/slider-left.png",ue="/test/images/slider-right.png",Ns={name:"HomeNews",data(){return{}}},k=o=>(ae("data-v-126fdab9"),o=o(),ie(),o),Os={class:"container-xl"},Ws={class:"row"},Es={class:"col-md-12 news-container mt-5 mb-5"},Gs=k(()=>e("h2",{class:"text-primary text-center mt-5"},"最新消息",-1)),Vs={class:"news-image d-none d-lg-flex justify-content-lg-center align-items-lg-center"},qs=k(()=>e("div",{class:"bg-slider"},null,-1)),Us=k(()=>e("img",{src:ge,class:"img-slider2",alt:"slider image"},null,-1)),Ys=k(()=>e("img",{src:zs,class:"img-slider1 d-none d-lg-block",alt:"slider left"},null,-1)),Xs=k(()=>e("img",{src:ue,class:"img-slider3",alt:"slider right"},null,-1)),Js={class:"info-slider"},Ks=k(()=>e("h3",{class:""},"2024 龍年禮盒 85 折起",-1)),Qs=k(()=>e("div",{class:"text-info"},[e("p",{class:""},"滿額好禮大方送給您 ！！"),e("p",null,"別錯過新春特別優惠")],-1)),Zs=k(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),et={class:"news-md-image d-lg-none d-flex justify-content-center"},st=k(()=>e("div",{class:"bg-slider"},null,-1)),tt={class:"card"},at=k(()=>e("img",{src:ge,class:"card-img-top",alt:"slider image"},null,-1)),it={class:"card-body"},lt=k(()=>e("h5",{class:"card-title"},"2024 龍年禮盒 85 折起",-1)),nt=k(()=>e("div",{class:"text-info my-3"},[e("p",{class:""},"滿額好禮大方送給您 ！！"),e("p",null,"別錯過新春特別優惠")],-1)),ot=k(()=>e("span",null,"馬上逛逛",-1)),ct=k(()=>e("i",{class:"bi bi-arrow-right"},null,-1)),rt=k(()=>e("img",{src:ue,class:"img-slider3",alt:"slider right"},null,-1));function dt(o,s,h,u,r,n){const d=E("RouterLink");return c(),p("div",Os,[e("div",Ws,[e("div",Es,[Gs,e("div",Vs,[qs,Us,Ys,Xs,e("div",Js,[Ks,Qs,I(d,{to:"/products"},{default:O(()=>[V(" 馬上逛逛 "),Zs]),_:1})])]),e("div",et,[st,e("div",tt,[at,e("div",it,[lt,nt,I(d,{class:"btn btn-primary",to:"/products"},{default:O(()=>[ot,V(),ct]),_:1})])]),rt])])])])}const pt=q(Ns,[["render",dt],["__scopeId","data-v-126fdab9"]]),mt="/test/images/region2.jpg",_t="/test/images/region1.jpg",gt="/test/images/card-top-line.svg",$=o=>(ae("data-v-298cb983"),o=o(),ie(),o),ut={class:"region-container bg-accent-brown"},ht={class:"container"},ft={class:"row justify-content-center flex-lg-row flex-column align-content-center"},vt={class:"col-lg-5 col-md-8"},bt={class:"d-flex justify-content-between flex-lg-row flex-column align-items-center"},$t=$(()=>e("h3",{class:"title text-primary"},"法國特色產區",-1)),yt=$(()=>e("label",{for:"select-region",class:"form-label region-label"},"選擇產區",-1)),xt=$(()=>e("option",{value:"1",selected:""},"法國產區 薄酒萊",-1)),wt=$(()=>e("option",{value:"2"},"法國產區 波爾多",-1)),Ct=[xt,wt],kt={class:"region-image d-flex"},Lt=$(()=>e("img",{src:mt,alt:"region image"},null,-1)),St=$(()=>e("div",{class:"info bg-primary d-flex flex-wrap align-content-center justify-content-center"},[e("h4",null,"薄酒萊新酒"),e("p",null,"Beaujolais Nouveau")],-1)),Pt=$(()=>e("img",{src:_t,alt:"region image"},null,-1)),Mt=$(()=>e("div",{class:"info bg-primary d-flex flex-wrap align-content-center justify-content-center"},[e("h4",null,"波爾多新酒"),e("p",null,"Bordeaux Nouveau")],-1)),Tt=$(()=>e("div",{class:"region-content text-start"},[e("p",{class:"lead"},"特色"),e("ol",null,[e("li",null,"每年的11月份的第三個星期四，葡萄採收馬上被裝瓶上架"),e("li",null,"主要以 Gamay 葡萄品種"),e("li",null,"適合用在慶祝活動"),e("li",null,"果味濃郁(草莓、覆盆子和櫻桃)、單寧低、口感輕盈"),e("li",null,"試飲期一到兩年飲用")])],-1)),At={class:"col-lg-5 col-md-8"},It={class:"region-card card bg-white"},jt={class:"card-body px-0"},Bt={class:"region-card_head d-flex"},Ht={class:"image-wine"},Dt=["src"],Ft=$(()=>e("img",{class:"image-switch",src:me,alt:"wine"},null,-1)),Rt={class:"single-ellipsis"},zt={class:"text-black mt-2"},Nt={class:"card-subtitle mt-2 single-ellipsis"},Ot={class:"price text-primary mt-3"},Wt={class:"region-info mt-2"},Et=$(()=>e("img",{src:gt,class:"line-image",alt:"line"},null,-1)),Gt={class:"taste mt-4"},Vt=$(()=>e("p",{class:"taste-title mb-3"},"這款酒喝起來的味道如何？",-1)),qt={class:"container-fluid taste-content px-0 mt-1"},Ut={class:"row"},Yt={class:"col-md-6 d-flex align-items-center mb-1"},Xt=$(()=>e("p",null,"單寧",-1)),Jt={class:"progress-bar"},Kt={class:"col-md-6 d-flex align-items-center mb-1"},Qt=$(()=>e("p",null,"酸度",-1)),Zt={class:"progress-bar"},ea={class:"col-md-6 d-flex align-items-center mb-1"},sa=$(()=>e("p",null,"甜度",-1)),ta={class:"progress-bar"},aa={class:"col-md-6 d-flex align-items-center mb-1"},ia=$(()=>e("p",null,"酒體",-1)),la={class:"progress-bar"},na={class:"region-taste container-fluid px-0 my-4"},oa={class:"row"},ca={class:"col-6"},ra=$(()=>e("p",{class:"mb-2"},"風味分類",-1)),da={class:"d-flex justify-content-between"},pa=["src"],ma={class:"icon-text text-center"},_a={class:"col-6"},ga=$(()=>e("p",{class:"mb-2"},"搭配餐酒",-1)),ua={class:"d-flex justify-content-between"},ha=["src"],fa={class:"icon-text text-center"},va={class:"region-button d-flex justify-content-between"},ba=["onClick","disabled"],$a=$(()=>e("i",{class:"bi bi-heart-fill me-1"},null,-1)),ya=$(()=>e("i",{class:"bi bi-heart me-1"},null,-1)),xa=["disabled","onClick"],wa=$(()=>e("i",{class:"bi bi-cart3 me-1"},null,-1)),Ca=$(()=>e("div",{id:"region_pagination",class:"swiper-pagination homeswiper-pagination mt-3"},null,-1)),ka={__name:"HomeWineRegion",setup(o){const s=pe(),{getUser:h,getFavorites:u}=ne(s),r=B(null),n=B("1"),d=B([]),f=oe(()=>n.value==="2"?d.value.filter(m=>m.place==="波爾多").slice(0,3):d.value.filter(m=>m.place==="薄酒萊").slice(0,3)),D=()=>{re.get("https://vue3-course-api.hexschool.io/v2/products").then(m=>{d.value=m.data}).catch(m=>{console.log(m.response)})},A=m=>{if(m&&h.value.id&&!u.value.includes(m)){const F={userId:h.value.id,productId:m,created_at:de()};s.addToFavorite(F)}},M=m=>{m&&m.id&&h.value.id&&s.addToCart(m)},L=()=>{r.value&&(r.value.slideReset(),r.value.slideTo(0))},j=m=>{r.value=m,r.value.slideReset(),r.value.slideTo(0)};return ce(()=>{D()}),(m,F)=>(c(),p("div",ut,[e("div",ht,[e("div",ft,[e("div",vt,[e("div",bt,[$t,e("div",null,[yt,ye(e("select",{id:"select-region",class:"form-select region text-primary","aria-label":"選擇產區","onUpdate:modelValue":F[0]||(F[0]=y=>n.value=y),onChange:L},Ct,544),[[xe,n.value]])])]),e("div",kt,[n.value==="1"?(c(),p(P,{key:0},[Lt,St],64)):se("",!0),n.value==="2"?(c(),p(P,{key:1},[Pt,Mt],64)):se("",!0)]),Tt]),e("div",At,[I(S(ee),{pagination:{el:"#region_pagination"},onSwiper:j,modules:[S(_e)],class:"mySwiper"},{default:O(()=>[(c(!0),p(P,null,N(f.value,y=>(c(),te(S(Z),{key:y.id},{default:O(()=>{var W,t;return[e("div",It,[e("div",null,[e("div",jt,[e("div",Bt,[e("div",Ht,[e("img",{src:m.$filters.imgPath(`/images/wine_images/${y.image}.jpg`),alt:"wine"},null,8,Dt)]),Ft,e("div",Rt,[e("h5",zt,H(y.chineseName),1),e("h6",Nt,H(y.englishName),1),e("h5",Ot,"NT$ "+H(m.$filters.currency(y.price)),1)])]),e("div",Wt,[Et,e("div",Gt,[Vt,e("div",qt,[e("div",Ut,[e("div",Yt,[Xt,e("div",Jt,[e("div",{class:"progress",style:K({width:y.taste.tannin})},null,4)])]),e("div",Kt,[Qt,e("div",Zt,[e("div",{class:"progress",style:K({width:y.taste.acidity})},null,4)])]),e("div",ea,[sa,e("div",ta,[e("div",{class:"progress",style:K({width:y.taste.sweet})},null,4)])]),e("div",aa,[ia,e("div",la,[e("div",{class:"progress",style:K({width:y.taste.body})},null,4)])])])])])]),e("div",na,[e("div",oa,[e("div",ca,[ra,e("div",da,[(c(!0),p(P,null,N(y.flavor.slice(0,3),(a,l)=>(c(),p("div",{class:"icon-container",key:a},[e("img",{src:m.$filters.imgPath(`/images/taste/t${l+1}.png`),alt:"Icon",class:"icon mb-1"},null,8,pa),e("p",ma,H(a),1)]))),128))])]),e("div",_a,[ga,e("div",ua,[(c(!0),p(P,null,N(y.food.slice(0,3),(a,l)=>(c(),p("div",{class:"icon-container",key:a},[e("img",{src:m.$filters.imgPath(`/images/taste/f${l+1}.png`),alt:"Icon",class:"icon mb-1"},null,8,ha),e("p",fa,H(a),1)]))),128))])])])]),e("div",va,[e("button",{type:"button",class:"btn btn-black me-0",onClick:a=>A(y.id),disabled:!((W=S(h))!=null&&W.id)},[S(u).includes(y.id)?(c(),p(P,{key:0},[$a,V(" 已收藏 ")],64)):(c(),p(P,{key:1},[ya,V(" 加入收藏 ")],64))],8,ba),e("button",{type:"button",class:"btn btn-primary me-0",disabled:!((t=S(h))!=null&&t.id),onClick:a=>M(y)},[wa,V(" 加入購物車 ")],8,xa)])])])])]}),_:2},1024))),128))]),_:1},8,["modules"]),Ca])])])]))}},La=q(ka,[["__scopeId","data-v-298cb983"]]),Sa="/test/images/Deco_3.png",Pa="/test/images/Article_3.png",Q="/test/assets/Slider-YhrfYd7l.svg",Ma="/test/images/Article_2.png",Ta="/test/images/Article_1.png",Aa={name:"HomePosts",data(){return{}}},Ia={class:"container-fluid d-flex justify-content-center bg-white-2 container-post"},ja=we('<img src="'+Sa+'" alt="Deco_3" class="deco w-100" data-v-ea5912b5><div data-v-ea5912b5><h2 class="text-primary text-center my-5" data-v-ea5912b5>好文分享</h2><div class="row mb-5" style="max-width:1296px;" data-v-ea5912b5><div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center" data-v-ea5912b5><div class="card border-0" data-v-ea5912b5><img src="'+Pa+'" class="card-img-top" alt="" data-v-ea5912b5><div class="card-body" data-v-ea5912b5><h5 class="text-primary" data-v-ea5912b5>送酒推薦搭配指南</h5><p class="text-black-70" data-v-ea5912b5>紅酒推薦挑選方法</p><p class="text-black" data-v-ea5912b5> 紅酒、白酒都是葡萄做為原料而製成，根據不同葡萄品種、產區、釀造方法等，有極廣泛的風味...... </p><p class="text-end" data-v-ea5912b5><a href="https://www.9hunters.com/gift-recommendation/" data-v-ea5912b5>繼續閱讀 <img src="'+Q+'" alt="Slider" class="mb-1" data-v-ea5912b5></a></p></div></div></div><div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center" data-v-ea5912b5><div class="card border-0" data-v-ea5912b5><img src="'+Ma+'" class="card-img-top" alt="" data-v-ea5912b5><div class="card-body" data-v-ea5912b5><h5 class="text-primary" data-v-ea5912b5>西班牙 CAVA 的由來</h5><p class="text-black-70" data-v-ea5912b5>葡萄酒知識</p><p class="text-black" data-v-ea5912b5> CAVA是傳統法釀造的氣泡酒，釀造方式使用「二次瓶中發酵法」與香檳相同...... </p><p class="text-end" data-v-ea5912b5><a href="https://www.9hunters.com/wine-knowledge-cava/" data-v-ea5912b5>繼續閱讀 <img src="'+Q+'" alt="Slider" class="mb-1" data-v-ea5912b5></a></p></div></div></div><div class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center" data-v-ea5912b5><div class="card border-0" data-v-ea5912b5><img src="'+Ta+'" class="card-img-top" alt="" data-v-ea5912b5><div class="card-body" data-v-ea5912b5><h5 class="text-primary" data-v-ea5912b5>六款值得收藏紅酒推薦</h5><p class="text-black-70" data-v-ea5912b5>紅酒歷史由來</p><p class="text-black" data-v-ea5912b5> 從最早的自然發酵到現今專業的釀酒，其多變的風味與香氣，更迷倒了古今中外的無數人...... </p><p class="text-end" data-v-ea5912b5><a href="https://www.9hunters.com/red-wine-recommendation/" data-v-ea5912b5>繼續閱讀 <img src="'+Q+'" alt="Slider" class="mb-1" data-v-ea5912b5></a></p></div></div></div></div></div>',2),Ba=[ja];function Ha(o,s,h,u,r,n){return c(),p("div",Ia,Ba)}const Da=q(Aa,[["render",Ha],["__scopeId","data-v-ea5912b5"]]),Fa={name:"HomeView",components:{HomeWineSelection:Rs,HomeNews:pt,HomeWineRegion:La,HomePosts:Da,WineGlassLoader:Se,Loading:Ce},data(){return{isLoading:!0}},methods:{onIsReady(){setTimeout(()=>{this.isLoading=!1},600)}}};function Ra(o,s,h,u,r,n){const d=E("WineGlassLoader"),f=E("loading"),D=E("HomeWineSelection"),A=E("HomeNews"),M=E("HomeWineRegion"),L=E("HomePosts");return c(),p(P,null,[I(f,{active:r.isLoading,"onUpdate:active":s[0]||(s[0]=j=>r.isLoading=j)},{default:O(()=>[I(d)]),_:1},8,["active"]),I(D,{onIsReady:n.onIsReady},null,8,["onIsReady"]),I(A),I(M),I(L)],64)}const Ua=q(Fa,[["render",Ra]]);export{Ua as default};
