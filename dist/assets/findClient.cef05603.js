import{_ as p,a as n,o as i,c as a,b as e,g as d,A as b,v as c,B as m,e as u,F as y,f,t as h}from"./index.8713e1d8.js";const g={data(){return{queryData:[],searchBy:"",firstName:"",lastName:"",phoneNumber:""}},mounted(){let l="https://cis4339project7.herokuapp.com//primarydata/";n.get(l).then(t=>{this.queryData=t.data}),window.scrollTo(0,0)},methods:{handleSubmitForm(){let l="";this.searchBy==="Client Name"?l=`https://cis4339project7.herokuapp.com//primarydata/search/?firstName=${this.firstName}&lastName=${this.lastName}&searchBy=name`:this.searchBy==="Client Number"&&(l=`https://cis4339project7.herokuapp.com//primarydata/search/?phoneNumbers.primaryPhone=${this.phoneNumber}&searchBy=number`),n.get(l).then(t=>{t.data=="Client not found"?alert(JSON.stringify(t.data)):this.queryData=t.data})},clearSearch(){this.searchBy="",this.firstName="",this.lastName="",this.phoneNumber="";let l="https://cis4339project7.herokuapp.com//primarydata/";n.get(l).then(t=>{this.queryData=t.data})},editClient(l){this.$router.push({name:"updateclient",params:{id:l}})}}},_=e("div",{style:{"border-radius":"7px",border:"2.5px solid black"}},[e("h1",{class:"font-bold text-4xl text-red-700 tracking-widest text-center mt-10"},"Find Client")],-1),x={class:"px-10 pt-20"},N={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"},C=e("h2",{class:"text-2xl font-bold"},"Search Client By",-1),k={class:"flex flex-col"},v=e("option",{value:"Client Name"},"Client Name",-1),S=e("option",{value:"Client Number"},"Client Number",-1),w=[v,S],B={key:0,class:"flex flex-col"},F={class:"block"},D={key:1,class:"flex flex-col"},U={class:"block"},V={key:2,class:"flex flex-col"},q={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"},L=e("div",null,null,-1),j=e("div",null,null,-1),E={class:"mt-5 grid-cols-2"},K=e("hr",{class:"mt-10 mb-10"},null,-1),P={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"},R=e("div",{class:"ml-10"},[e("h2",{class:"text-2xl font-bold"},"List of Clients"),e("h3",{class:"italic"},"Click table row to edit/display/delete an entry")],-1),M={class:"flex flex-col col-span-2"},T={class:"min-w-full shadow-md rounded",style:{border:".5px solid black"}},A=e("thead",{class:"bg-gray-50 text-xl"},[e("tr",null,[e("th",{class:"p-4 text-left",style:{border:".5px solid black"}},"Name"),e("th",{class:"p-4 text-left",style:{border:".5px solid black"}},"Phone number"),e("th",{class:"p-4 text-left",style:{border:".5px solid black"}},"City")])],-1),J={class:"divide-y divide-gray-300"},O=["onClick"],z={class:"p-2 text-left"},G={class:"p-2 text-left"},H={class:"p-2 text-left"};function I(l,t,Q,W,o,r){return i(),a("main",null,[_,e("div",x,[e("div",N,[C,e("div",k,[d(e("select",{class:"rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":t[0]||(t[0]=s=>o.searchBy=s)},w,512),[[b,o.searchBy]])]),o.searchBy==="Client Name"?(i(),a("div",B,[e("label",F,[d(e("input",{type:"text",class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":t[1]||(t[1]=s=>o.firstName=s),onKeyup:t[2]||(t[2]=m((...s)=>r.handleSubmitForm&&r.handleSubmitForm(...s),["enter"])),placeholder:"Enter first name"},null,544),[[c,o.firstName]])])])):u("",!0),o.searchBy==="Client Name"?(i(),a("div",D,[e("label",U,[d(e("input",{type:"text",class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":t[3]||(t[3]=s=>o.lastName=s),onKeyup:t[4]||(t[4]=m((...s)=>r.handleSubmitForm&&r.handleSubmitForm(...s),["enter"])),placeholder:"Enter last name"},null,544),[[c,o.lastName]])])])):u("",!0),o.searchBy==="Client Number"?(i(),a("div",V,[d(e("input",{class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",type:"text","onUpdate:modelValue":t[5]||(t[5]=s=>o.phoneNumber=s),onKeyup:t[6]||(t[6]=m((...s)=>r.handleSubmitForm&&r.handleSubmitForm(...s),["enter"])),placeholder:"Enter Client Phone Number"},null,544),[[c,o.phoneNumber]])])):u("",!0)]),e("div",q,[L,j,e("div",E,[e("button",{class:"mr-10 border border-red-700 bg-white text-red-700 rounded",onClick:t[7]||(t[7]=(...s)=>r.clearSearch&&r.clearSearch(...s)),type:"submit"},"Clear Search"),e("button",{class:"bg-red-700 text-white rounded",onClick:t[8]||(t[8]=(...s)=>r.handleSubmitForm&&r.handleSubmitForm(...s)),type:"submit"},"Search Client")])])]),K,e("div",P,[R,e("div",M,[e("table",T,[A,e("tbody",J,[(i(!0),a(y,null,f(o.queryData,s=>(i(),a("tr",{onClick:X=>r.editClient(s._id),key:s._id},[e("td",z,h(s.firstName+" "+s.lastName),1),e("td",G,h(s.phoneNumbers[0].primaryPhone),1),e("td",H,h(s.address.city),1)],8,O))),128))])])])])])}const Z=p(g,[["render",I]]);export{Z as default};
