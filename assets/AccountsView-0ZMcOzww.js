import{_ as p,o as a,c,a as e,e as u,t as d,g as _,F as h,i as f,b as M,r as A,p as v,d as g}from"./index-0SbMTNSn.js";import{M as $}from"./bootstrap.esm-uhsrVe-H.js";import{h as U}from"./header_line-QFSSNSPQ.js";const x={props:["tempUser","delUser"],data(){return{delModalAccount:null}},methods:{openDelModal(){this.delModalAccount.show()},closeDelModal(){this.delModalAccount.hide()}},mounted(){this.delModalAccount=new $(this.$refs.delAccountModal)}},w={id:"delAccountModal",ref:"delAccountModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delAccountModalLabel","aria-hidden":"true"},y={class:"modal-dialog"},D={class:"modal-content border-0"},E=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delAccountModalLabel",class:"modal-title"},[e("span",null,"刪除帳戶")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},V={class:"text-danger"},L={class:"modal-footer"},S=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function k(t,s,n,b,o,r){return a(),c("div",w,[e("div",y,[e("div",D,[E,e("div",I,[u(" 是否刪除 "),e("strong",V,d(n.tempUser.name),1),u(" 帳戶(刪除後將無法恢復)。 ")]),e("div",L,[S,e("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...i)=>n.delUser&&n.delUser(...i))},"確認刪除")])])])],512)}const R=p(x,[["render",k]]);var C={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_REPO_NAME:"travel590",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:m}=C,B={name:"AdminAccountsView",components:{DelAccountModal:R},data(){return{title:"帳戶管理",headerLine:U,users:[],tempUser:{}}},mounted(){this.getAccounts()},methods:{getAccounts(){const t=`${m}/users`;_.get(t).then(s=>{console.log(s.data),this.users=s.data}).catch(()=>{alert("取得帳戶資訊失敗")})},delUser(){const t=`${m}/users/${this.tempUser.id}`;_.delete(t).then(s=>{alert("刪除成功"),this.$refs.delModal.closeDelModal(),this.getAccounts()}).catch(()=>{alert("刪除失敗")})},openModal(t){this.tempUser={...t},this.$refs.delModal.openDelModal()}}},N=t=>(v("data-v-df523d5f"),t=t(),g(),t),P={class:"row"},T={class:"my-3"},O={class:"header-line"},F=["src"],j={class:"row"},q={class:"table mt-4 mx-2"},z=N(()=>e("thead",{class:"table-light"},[e("tr",null,[e("th",{width:"120"},"身分"),e("th",{width:"120"},"名稱"),e("th",{width:"120"},"電子信箱"),e("th",{width:"120",class:"text-center"},"刪除帳戶")])],-1)),G={class:"text-center"},H=["onClick"];function J(t,s,n,b,o,r){const i=A("Del-Account-Modal");return a(),c(h,null,[e("div",P,[e("h1",T,d(o.title),1),e("div",O,[e("img",{src:o.headerLine,alt:"header line"},null,8,F)]),e("div",j,[e("div",null,[e("table",q,[z,e("tbody",null,[(a(!0),c(h,null,f(o.users,l=>(a(),c("tr",{key:l.id},[e("td",null,d(l.role),1),e("td",null,d(l.username),1),e("td",null,d(l.email),1),e("td",G,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:K=>r.openModal(l)}," 刪除 ",8,H)])]))),128))])])])])]),M(i,{"temp-user":o.tempUser,"del-user":r.delUser,ref:"delModal"},null,8,["temp-user","del-user"])],64)}const Y=p(B,[["render",J],["__scopeId","data-v-df523d5f"]]);export{Y as default};
