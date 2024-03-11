import{S as p}from"./sweetalert2.all-4n2bwDZ0.js";import{_ as R,L as O,m as V,I as U,g as l,h as D,c,a as s,b as I,w as $,F as v,i as _,y as x,M as E,z as N,j as u,e as w,x as m,r as L,o as d,t as g,k as C,p as B,d as T,f as j}from"./index-0SbMTNSn.js";import{u as P}from"./user-T-MQSPik.js";/* empty css              */import{W as y}from"./WineGlassLoader-FtgKBGN8.js";import{_ as M}from"./footerContainer-g7u_3nq6.js";import"./helpers-Hx-ZzB2u.js";var A={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_REPO_NAME:"travel590",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:h}=A,W={name:"UserProductsView",data(){return{products:[],selectedRegion:"熱賣酒品",productsContent:"",currentSort:"",selectedRegionProducts:[],cart:[],ascendingOrderPrice:!0,ascendingOrderStar:!0,searchKeyword:"",favoriteList:[],allFavoriteList:[],userId:"",isLoading:!1,fullPage:!0}},components:{Loading:O,WineGlassLoader:y},methods:{...V(P,["setUser","cleanUser","getUserCookie"]),doLoading(){this.$loading.show({props:{spinner:y},container:this.$refs.loadingContainer,canCancel:!0,color:"#000000",loader:"spinner",width:64,height:64,backgroundColor:"#ffffff",opacity:.5,zIndex:999},{default:U("WineGlassLoader")}).hide()},setLoadingTime(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},800)},getProductList(){const t=`${h}/products`;l.get(t).then(e=>{this.setLoadingTime(),this.products=e.data,this.selectedRegionProducts=this.products.filter(r=>r.is_hot===1)}).catch(()=>{alert("未正確取得產品資訊，請稍後再試～")})},getCartList(){const t=`${h}/carts`;l.get(t).then(e=>{this.cart=e.data.filter(r=>r.userId===this.userId)}).catch(()=>{})},updateContent(t){const e=`${h}/productsContent`;l.get(e).then(r=>{this.productsContent=r.data}).catch(()=>{})},sortBy(t){t==="price"?this.ascendingOrderPrice=!this.ascendingOrderPrice:t==="star"&&(this.ascendingOrderStar=!this.ascendingOrderStar),this.currentSort=t},addToCart(t){if(!this.userId){alert("請先登入");return}const e=`${h}/carts`,r=this.cart.findIndex(a=>a.product_id===t.id&&a.userId===this.userId);if(r===-1){const a={product_id:t.id,chineseName:t.chineseName,image:t.image,price:t.price,is_hot:t.is_hot,star:t.star,qty:1,userId:this.userId};l.post(e,a).then(o=>{p.fire({title:"成功加入購物車",text:"商品已經成功加入購物車",icon:"success"})}).catch(()=>{p.fire({title:"加入購物車失敗",text:"請稍後再試",icon:"error"})})}else{const a=this.cart[r].id;this.cart[r].qty+=1;const o={qty:this.cart[r].qty};l.patch(`${e}/${a}`,o).then(n=>{p.fire({title:"成功加入購物車",text:"商品已經成功加入購物車",icon:"success"})}).catch(()=>{p.fire({title:"加入購物車失敗",text:"請稍後再試",icon:"error"})})}this.getCartList()},seeProduct(t){this.$router.push({name:"ProductDetail",params:{id:t}})},getFavoriteList(){const t=`${h}/favorite`;l.get(t).then(e=>{this.allFavoriteList=e.data,this.favoriteList=e.data.filter(r=>r.userId===this.userId),this.checkFavoriteStatus()}).catch(()=>{})},checkFavoriteStatus(){this.sortedProducts.forEach(t=>{t.isFavorite=this.isProductInFavorite(t.id)})},isProductInFavorite(t){return this.favoriteList.some(e=>e.productId===t)},addToFavorite(t){if(!this.userId){alert("請先登入");return}const e=`${h}/favorite`,r=new Date,a=`${r.getFullYear()}/${(r.getMonth()+1).toString().padStart(2,"0")}/${r.getDate().toString().padStart(2,"0")}`,o={userId:this.userId,productId:t,created_at:a};l.post(e,o).then(n=>{this.getFavoriteList(),p.fire({title:"加入最愛",text:"商品已經成功加入最愛清單。",icon:"success"})}).catch(()=>{})},toggleFavorite(t){this.isProductInFavorite(t.id)?this.removeFromFavorite(t.id):this.addToFavorite(t.id)},removeFromFavorite(t){if(!this.userId){alert("請先登入");return}const e=`${h}/favorite`,r=this.allFavoriteList.findIndex(o=>o.productId===t&&o.userId===this.userId),a=this.allFavoriteList[r].id;l.delete(`${e}/${a}`,{userId:this.userId,id:r}).then(o=>{this.getFavoriteList()}).catch(()=>{})}},computed:{...D(P,["getUser"]),sortedProducts(){return this.selectedRegionProducts.slice().sort((t,e)=>this.currentSort==="price"?this.ascendingOrderPrice?t.price-e.price:e.price-t.price:this.currentSort==="star"?this.ascendingOrderStar?t.star-e.star:e.star-t.star:0)}},watch:{selectedRegion(t){this.updateContent(t),t==="熱賣酒品"?this.selectedRegionProducts=this.products.filter(e=>e.is_hot===1):this.selectedRegionProducts=this.products.filter(e=>e.place===t)}},mounted(){const{userId:t}=this.getUserCookie();this.userId=t,this.getProductList(),this.getCartList(),this.updateContent(),this.getFavoriteList()}},b=t=>(B("data-v-f01f80ed"),t=t(),T(),t),q={class:"bg-products pb-4"},G={class:"container"},z={class:"row justify-content-between"},K={class:"col-lg-6"},Q={key:0},Y={class:"pb-5 text-white"},H={class:"text-white lh-large fs-5 font-monospace"},J={class:"col-12 col-lg-5 d-flex flex-column justify-content-end"},X={class:"searchArea mx-3"},Z=b(()=>s("i",{class:"bi bi-search"},null,-1)),tt={class:"filterBox mx-3"},et=b(()=>s("label",{for:"wineRegion",class:"text-white fs-5 pb-1"},"請選擇產區:",-1)),st=j('<option value="" disabled selected hidden data-v-f01f80ed>產區: 請選擇產區</option><option value="波爾多" data-v-f01f80ed>波爾多</option><option value="布根地" data-v-f01f80ed>布根地</option><option value="香檳" data-v-f01f80ed>香檳</option><option value="羅亞爾河谷" data-v-f01f80ed>羅亞爾河谷</option><option value="薄酒萊" data-v-f01f80ed>薄酒萊</option><option value="熱賣酒品" data-v-f01f80ed>熱賣酒品</option>',7),it=[st],ot={class:"filterBtn d-flex justify-content-between gap-3"},rt={class:"container"},at=b(()=>s("img",{src:M,class:"w-100 mb-5"},null,-1)),nt={class:"productList pb-5 align-items-stretch"},ct={class:"row mb-3 gy-3"},dt={class:"card h-100 p-2 product_card"},lt={class:"row h-100"},ht={class:"col-4"},ut=["onClick"],ft=["onClick"],pt=["src","alt"],gt={class:"col-8"},vt={class:"card-body d-flex flex-column h-100 justify-content-between"},_t={class:"mb-2"},mt={class:"d-flex mb-1 justify-content-between"},bt={key:0,class:"badge bg-danger mb-2"},It={class:"d-flex gap-1"},xt=["onClick"],wt={class:"card-title flex-fill"},Lt={class:"card-text text-danger fw-bold"},Ct=["onClick"];function Pt(t,e,r,a,o,n){const F=L("WineGlassLoader"),S=L("loading");return d(),c("div",null,[s("div",q,[I(S,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=i=>o.isLoading=i),"is-full-page":o.fullPage},{default:$(()=>[I(F)]),_:1},8,["active","is-full-page"]),s("div",G,[s("div",z,[s("div",K,[(d(!0),c(v,null,_(o.productsContent,i=>(d(),c("div",{class:"px-3",key:i.title},[o.selectedRegion===i.title?(d(),c("div",Q,[s("h2",Y,"法國五大產區 - "+g(i.title),1),s("p",H,g(i.content),1)])):C("",!0)]))),128))]),s("div",J,[s("div",X,[Z,x(s("input",{type:"text",placeholder:"請輸入關鍵字",class:"w-100 fs-5","onUpdate:modelValue":e[1]||(e[1]=i=>o.searchKeyword=i)},null,512),[[E,o.searchKeyword]])]),s("div",tt,[et,x(s("select",{id:"wineRegion",name:"wineRegion",class:"mb-3 fs-5","onUpdate:modelValue":e[2]||(e[2]=i=>o.selectedRegion=i),onChange:e[3]||(e[3]=i=>n.updateContent(o.selectedRegion))},it,544),[[N,o.selectedRegion]]),s("div",ot,[s("a",{type:"button",class:"btn btn-primary btn-lg px-4 py-2",onClick:e[4]||(e[4]=u(i=>n.sortBy("price"),["prevent"]))},[w(" 價格 "),s("i",{class:m(o.ascendingOrderPrice?"bi bi-arrow-down":"bi bi-arrow-up")},null,2)]),s("a",{type:"button",class:"btn btn-primary btn-lg px-4 py-2 me-0",onClick:e[5]||(e[5]=u(i=>n.sortBy("star"),["prevent"]))},[w(" 評價 "),s("i",{class:m(o.ascendingOrderStar?"bi bi-arrow-down":"bi bi-arrow-up")},null,2)])])])])])])]),s("div",rt,[at,s("div",nt,[s("div",ct,[(d(!0),c(v,null,_(n.sortedProducts,(i,k)=>(d(),c("div",{class:"col-12 col-md-6 col-lg-4",key:k},[s("div",dt,[s("div",lt,[s("div",ht,[s("a",{href:"#",onClick:u(f=>n.toggleFavorite(i),["prevent"])},[s("i",{class:m(["bi heart position-absolute top-5 start-5",{"bi-heart":!i.isFavorite,"bi-heart-fill":i.isFavorite}])},null,2)],8,ut),s("a",{href:"#",onClick:u(f=>n.seeProduct(i.id),["prevent"])},[s("img",{src:t.$filters.imgPath(`/images/wine_images/${i.image}.jpg`),class:"card-img-top h-100",alt:i.chineseName},null,8,pt)],8,ft)]),s("div",gt,[s("div",vt,[s("div",_t,[s("div",mt,[i.is_hot?(d(),c("span",bt,"熱門推薦")):C("",!0),s("div",It,[(d(!0),c(v,null,_(i.star,f=>(d(),c("i",{class:"bi bi-star-fill text-warning",key:f}))),128))])]),s("div",null,[s("a",{href:"#",class:"text-black",onClick:u(f=>n.seeProduct(i.id),["prevent"])},[s("h5",wt,g(i.chineseName),1)],8,xt),s("p",Lt,"$ "+g(i.price),1)])]),s("a",{href:"#",class:"btn btn-primary w-100",onClick:u(f=>n.addToCart(i),["prevent"])},"加入購物車",8,Ct)])])])])]))),128))])])])])}const Ut=R(W,[["render",Pt],["__scopeId","data-v-f01f80ed"]]);export{Ut as default};
