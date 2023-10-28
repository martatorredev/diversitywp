import{_ as f,c as m,a as h,m as v,i as k,o as s,b as i,d as e,e as d,v as g,g as u,F as b,n as x,t as c,w as _,j as p,h as w}from"./index-e015db1d.js";const M={data(){return{datos:[],loading:!1,img:m.img,id:0,ver:{photo:null,name:"",email:"",activo:1,rol:"user",password:""},buscar:null,modalEdit:"",modalDelect:"",modalAdd:"",apellido:"",user:[],total:0,from:0,to:0,links:[],firt:"",last:"",next:"",prev:"",current_page:1}},methods:{toggleModalEdit(){this.modalEdit.toggle()},toggleModalDelect(){this.modalDelect.toggle()},toggleModalAdd(){this.modalAdd.toggle()},limpiar(){this.ver.photo=null,this.ver.name="",this.ver.password="",this.ver.email="",this.ver.rol="user",this.apellido="",this.ver.activo=1;var a=document.getElementById("photo");a.value=""},registro(){this.ver.name=this.ver.name+" "+this.apellido,h.post(m.host+"registro",this.ver,{headers:{"content-type":"multipart/form-data"}}).then(a=>{a.data.res===!0?(this.get(),this.ver.password=""):(this.get(),this.ver.password="")})},get(){h.get(m.host+"users/pagination?page=1").then(a=>{this.datos=a.data.data.data,this.total=a.data.data.total,this.from=a.data.data.from,this.to=a.data.data.to,this.links=a.data.data.links.slice(1,a.data.data.links.length-1),this.firt=a.data.data.first_page_url,this.last=a.data.data.last_page_url,this.next=a.data.data.next_page_url,this.prev=a.data.data.prev_page_url,this.current_page=a.data.data.current_page}).catch(a=>{console.log(a)}).finally(()=>this.loading=!1)},pagination(a){h.get(a).then(t=>{this.datos=t.data.data.data,this.total=t.data.data.total,this.from=t.data.data.from,this.to=t.data.data.to,this.links=t.data.data.links.slice(1,t.data.data.links.length-1),this.firt=t.data.data.first_page_url,this.last=t.data.data.last_page_url,this.next=t.data.data.next_page_url,this.prev=t.data.data.prev_page_url,this.current_page=t.data.data.current_page}).catch(t=>{console.log(t)}).finally(()=>this.loading=!1)},fecha(a){return v(a).format("D/MM/YYYY")},guardarID(a){this.id=a},eliminar(){h.delete(m.host+"user/eliminar/"+this.id).then(a=>{a.data.res===!0?(this.get(),this.modalDelect.toggle()):(this.get(),this.modalDelect.toggle())})},verID(a){var t=document.getElementById("photo");t.value="",this.id=a,h.get(m.host+"user/"+this.id).then(n=>{this.ver.photo=n.data.data.photo,this.ver.name=n.data.data.name,this.ver.email=n.data.data.email,this.ver.rol=n.data.data.rol,this.ver.activo=n.data.data.activo,this.ver.password=""})},onChange(a){this.ver.photo=a.target.files[0]},editar(){let a={photo:this.ver.photo,name:this.ver.name,password:this.ver.password,email:this.ver.email,rol:this.ver.rol,activo:this.ver.activo};h.post(m.host+"user/update/"+this.id,a,{headers:{"content-type":"multipart/form-data"}}).then(t=>{t.data.res===!0?(this.get(),this.ver.password="",this.toggleModalEdit()):(this.get(),this.ver.password="",this.toggleModalEdit())})},buscador(){this.buscar?h.get(m.host+"buscar_user/"+this.buscar).then(a=>{this.datos=a.data.data.data,this.total=a.data.data.total,this.from=a.data.data.from,this.to=a.data.data.to,this.links=a.data.data.links.slice(1,a.data.data.links.length-1),this.firt=a.data.data.first_page_url,this.last=a.data.data.last_page_url,this.next=a.data.data.next_page_url,this.prev=a.data.data.prev_page_url,this.current_page=a.data.data.current_page}):this.get()}},mounted(){const a=document.getElementById("updateModal"),t=document.getElementById("deleteModal"),n=document.getElementById("createModal");this.modalEdit=new Modal(a),this.modalDelect=new Modal(t),this.modalAdd=new Modal(n),k(),this.get(),this.user=JSON.parse(localStorage.getItem("user"))}},C={class:"bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased"},V={class:"mx-auto max-w-screen-xl"},z={class:"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"},E={class:"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"},U={class:"w-full md:w-1/3"},D={class:"flex items-center"},L=e("label",{for:"simple-search",class:"sr-only"},"Search",-1),I={class:"relative w-full"},A=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),j={class:"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"},N=e("svg",{class:"h-3.5 w-3.5 mr-2",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"})],-1),S={class:"overflow-x-auto"},P={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},B=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-4 py-4"},"Name"),e("th",{scope:"col",class:"px-5 py-3"},"Email"),e("th",{scope:"col",class:"px-4 py-3"},"Role"),e("th",{scope:"col",class:"px-4 py-3"},"Created"),e("th",{scope:"col",class:"px-4 py-3"},"Status"),e("th",{scope:"col",class:"px-4 py-3"},[e("span",{class:"sr-only"},"Actions")])])],-1),H={scope:"row",class:"px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"},q={class:"flex items-center mr-3"},G=["src","alt"],F={class:"capitalize"},Y={class:"px-5 py-3"},R={class:"px-4 py-3"},J={key:0,class:"bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"},T={key:1,class:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"},O={class:"px-4 py-3 max-w-[12rem] truncate"},K={class:"px-4 py-3"},Q={key:0,class:"flex items-center text-sm font-medium text-gray-900 dark:text-white"},W=e("span",{class:"flex w-2.5 h-2.5 bg-green-500 rounded-full mr-1.5 flex-shrink-0"},null,-1),X={key:1,class:"flex items-center text-sm font-medium text-gray-900 dark:text-white"},Z=e("span",{class:"flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"},null,-1),$={class:"px-4 py-3 flex items-center justify-end"},ee={class:"flex items-center space-x-4"},te=["onClick"],re=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 -ml-0.5",viewbox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),e("path",{"fill-rule":"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clip-rule":"evenodd"})],-1),ae=["onClick"],oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-2 -ml-0.5",viewbox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),le={class:"flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4","aria-label":"Table navigation"},de={class:"text-sm font-normal text-gray-500 dark:text-gray-400"},se={class:"font-semibold text-gray-900 dark:text-white"},ie={class:"font-semibold text-gray-900 dark:text-white"},ne={class:"inline-flex items-stretch -space-x-px"},ge=e("span",{class:"sr-only"},"Previous",-1),ce=e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),ue=[ge,ce],me=["onClick"],he=["onClick"],pe=e("span",{class:"sr-only"},"Next",-1),ye=e("svg",{class:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),be=[pe,ye],xe={id:"createModal",tabindex:"-1","aria-hidden":"true",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},fe={class:"relative p-4 w-full max-w-2xl max-h-full"},ve={class:"relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},ke=e("div",{class:"flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"},[e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"Add User"),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-target":"createModal","data-modal-toggle":"createModal"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})]),e("span",{class:"sr-only"},"Close modal")])],-1),_e={class:"grid gap-4 mb-4 sm:grid-cols-2"},we={class:"sm:col-span-2"},Me=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input"},"Profile Picture",-1),Ce=e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help"},"PNG, JPG ó GIF",-1),Ve=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),ze=e("label",{for:"apellido",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Last Name",-1),Ee=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),Ue=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),De=e("label",{for:"rol",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Role",-1),Le=e("option",{selected:"",value:"user"},"User",-1),Ie=e("option",{value:"admin"},"Administrator",-1),Ae=[Le,Ie],je=e("label",{for:"status",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Status",-1),Ne=e("option",{selected:"",value:"1"},"Active",-1),Se=e("option",{value:"0"},"Inactive",-1),Pe=[Ne,Se],Be=e("button",{type:"submit","data-modal-target":"createModal","data-modal-toggle":"createModal",class:"text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},[e("svg",{class:"mr-1 -ml-1 w-6 h-6",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})]),u(" Register ")],-1),He={id:"updateModal",tabindex:"-1","aria-hidden":"true",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},qe={class:"relative p-4 w-full max-w-2xl max-h-full"},Ge={class:"relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},Fe={class:"flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600"},Ye=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"Edit User",-1),Re=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Je=e("span",{class:"sr-only"},"Close modal",-1),Te=[Re,Je],Oe={action:"#"},Ke={class:"grid gap-4 mb-4 sm:grid-cols-2"},Qe={class:"sm:col-span-2"},We=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input"},"Profile Picture",-1),Xe=e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help"},"PNG, JPG ó GIF",-1),Ze=e("label",{for:"namee",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),$e=e("label",{for:"passworde",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Change Password",-1),et=e("label",{for:"emaile",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),tt=e("label",{for:"role",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Role",-1),rt=e("option",{selected:"",value:"user"},"User",-1),at=e("option",{value:"admin"},"Administrator",-1),ot=[rt,at],lt=e("label",{for:"statuse",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Status",-1),dt=e("option",{selected:"",value:"1"},"Active",-1),st=e("option",{value:"0"},"Inactive",-1),it=[dt,st],nt={class:"flex items-center space-x-4"},gt={id:"deleteModal",tabindex:"-1","aria-hidden":"true",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},ct={class:"relative p-4 w-full max-w-md max-h-full"},ut={class:"relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"},mt=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ht=e("span",{class:"sr-only"},"Close modal",-1),pt=[mt,ht],yt=e("svg",{class:"text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto","aria-hidden":"true",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),bt=e("p",{class:"mb-4 text-gray-500 dark:text-gray-300"},"Are you sure you want to delete this item?",-1),xt={class:"flex justify-center items-center space-x-4"};function ft(a,t,n,kt,o,l){return s(),i(b,null,[e("section",C,[e("div",V,[e("div",z,[e("div",E,[e("div",U,[e("form",D,[L,e("div",I,[A,d(e("input",{type:"text",id:"buscaru",onInput:t[0]||(t[0]=(...r)=>l.buscador&&l.buscador(...r)),"onUpdate:modelValue":t[1]||(t[1]=r=>o.buscar=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Search"},null,544),[[g,o.buscar]])])])]),e("div",j,[e("button",{type:"button",onClick:t[2]||(t[2]=(...r)=>l.limpiar&&l.limpiar(...r)),id:"createModalButton","data-modal-target":"createModal","data-modal-toggle":"createModal",class:"flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"},[N,u(" Add User ")])])]),e("div",S,[e("table",P,[B,e("tbody",null,[(s(!0),i(b,null,x(o.datos,r=>(s(),i("tr",{key:r.id,class:"border-b dark:border-gray-700"},[e("th",H,[e("div",q,[e("img",{src:o.img+r.photo,alt:r.photo,class:"h-10 w-10 rounded-full mr-3"},null,8,G),e("span",F,c(r.name),1)])]),e("td",Y,c(r.email),1),e("td",R,[r.rol==="admin"?(s(),i("span",J,"Administrator")):(s(),i("span",T,"User"))]),e("td",O,c(l.fecha(r.created_at)),1),e("td",K,[r.activo===1?(s(),i("span",Q,[W,u("Active")])):(s(),i("span",X,[Z,u("Inactive")]))]),e("td",$,[e("div",ee,[e("button",{type:"button",onClick:y=>{l.toggleModalEdit(),l.verID(r.id)},class:"py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},[re,u(" Edit ")],8,te),e("button",{type:"button",onClick:y=>{l.guardarID(r.id),l.toggleModalDelect()},class:"flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"},[oe,u(" Delete ")],8,ae)])])]))),128))])])]),e("nav",le,[e("span",de,[u(" Showing "),e("span",se,c(o.from)+"-"+c(o.to),1),u(" of "),e("span",ie,c(o.total),1)]),e("ul",ne,[e("li",null,[e("a",{href:"#",onClick:t[3]||(t[3]=r=>l.pagination(o.prev)),class:"flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},ue)]),(s(!0),i(b,null,x(o.links,r=>(s(),i("li",{key:r.label},[r.label==o.current_page?(s(),i("a",{key:0,href:"#",onClick:y=>l.pagination(r.url),class:"flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-700 bg-primary-100 border border-gray-300 hover:bg-primary-200 hover:text-primary-900 dark:border-gray-700"},c(r.label),9,me)):(s(),i("a",{key:1,href:"#",onClick:y=>l.pagination(r.url),class:"flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},c(r.label),9,he))]))),128)),e("li",null,[e("a",{href:"#",onClick:t[4]||(t[4]=r=>l.pagination(o.next)),class:"flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},be)])])])])])]),e("div",xe,[e("div",fe,[e("div",ve,[ke,e("form",{onSubmit:t[12]||(t[12]=_((...r)=>l.registro&&l.registro(...r),["prevent"]))},[e("div",_e,[e("div",we,[Me,e("input",{class:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"file",id:"photo",ref:"file",name:"photo",accept:"image/*",onChange:t[5]||(t[5]=(...r)=>l.onChange&&l.onChange(...r))},null,544),Ce]),e("div",null,[Ve,d(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":t[6]||(t[6]=r=>o.ver.name=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Name",required:""},null,512),[[g,o.ver.name]])]),e("div",null,[ze,d(e("input",{type:"text",name:"apellido",id:"apellido","onUpdate:modelValue":t[7]||(t[7]=r=>o.apellido=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Last Name",required:""},null,512),[[g,o.apellido]])]),e("div",null,[Ee,d(e("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[8]||(t[8]=r=>o.ver.email=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"nombre@correo.com",required:""},null,512),[[g,o.ver.email]])]),e("div",null,[Ue,d(e("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[9]||(t[9]=r=>o.ver.password=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"******",required:""},null,512),[[g,o.ver.password]])]),e("div",null,[De,d(e("select",{id:"rol","onUpdate:modelValue":t[10]||(t[10]=r=>o.ver.rol=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},Ae,512),[[p,o.ver.rol]])]),e("div",null,[je,d(e("select",{id:"status","onUpdate:modelValue":t[11]||(t[11]=r=>o.ver.activo=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},Pe,512),[[p,o.ver.activo]])])]),Be],32)])])]),e("div",He,[e("div",qe,[e("div",Ge,[e("div",Fe,[Ye,e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:t[13]||(t[13]=(...r)=>l.toggleModalEdit&&l.toggleModalEdit(...r))},Te)]),e("form",Oe,[e("div",Ke,[e("div",Qe,[We,e("input",{class:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"file",id:"photoe",ref:"file",name:"photoe",onChange:t[14]||(t[14]=(...r)=>l.onChange&&l.onChange(...r))},null,544),Xe]),e("div",null,[Ze,d(e("input",{type:"text",name:"namee",id:"namee","onUpdate:modelValue":t[15]||(t[15]=r=>o.ver.name=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Nombre",required:""},null,512),[[g,o.ver.name]])]),e("div",null,[$e,d(e("input",{type:"password",name:"passworde",id:"passworde","onUpdate:modelValue":t[16]||(t[16]=r=>o.ver.password=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"******"},null,512),[[g,o.ver.password]])]),e("div",null,[et,d(e("input",{type:"email",name:"emaile",id:"emaile","onUpdate:modelValue":t[17]||(t[17]=r=>o.ver.email=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"nombre@correo.com",required:""},null,512),[[g,o.ver.email]])]),e("div",null,[tt,d(e("select",{id:"role","onUpdate:modelValue":t[18]||(t[18]=r=>o.ver.rol=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},ot,512),[[p,o.ver.rol]])]),e("div",null,[lt,d(e("select",{id:"statuse","onUpdate:modelValue":t[19]||(t[19]=r=>o.ver.activo=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},it,512),[[p,o.ver.activo]])])]),e("div",nt,[e("button",{type:"submit",class:"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",onClick:t[20]||(t[20]=(...r)=>l.editar&&l.editar(...r))},"Save Changes")])])])])]),e("div",gt,[e("div",ct,[e("div",ut,[e("button",{type:"button",class:"text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",onClick:t[21]||(t[21]=(...r)=>l.toggleModalDelect&&l.toggleModalDelect(...r))},pt),yt,bt,e("div",xt,[e("button",{onClick:t[22]||(t[22]=(...r)=>l.toggleModalDelect&&l.toggleModalDelect(...r)),type:"button",class:"py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"No, cancel"),e("button",{type:"button",onClick:t[23]||(t[23]=(...r)=>l.eliminar&&l.eliminar(...r)),class:"py-2 px-3 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"},"Yes, I'm sure")])])])])],64)}const vt=f(M,[["render",ft]]),wt={__name:"UserCrudView",setup(a){return(t,n)=>(s(),i("main",null,[w(vt)]))}};export{wt as default};