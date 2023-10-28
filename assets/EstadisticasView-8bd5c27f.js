import{_ as p,a as c,c as u,o as l,b as d,d as t,w as x,e as m,j as g,F as b,n as f,t as r,q as h,p as y,h as k}from"./index-e015db1d.js";const w={data(){return{datos:[],total:0,paises:[],estados:[],anos:[],pais:"",estado:"todos",ano:"",formato:"",loading:!1,chartData:{labels:["January","February","March"],datasets:[{data:[40,20,12]}]},chartOptions:{responsive:!0}}},methods:{estadisticas(){var a={pais:this.pais,estado:this.estado,ano:this.ano,formato:this.formato};c.post(u.host+"wordcamp/estadisticas",a,{headers:{"content-type":"multipart/form-data"}}).then(o=>{this.datos=o.data,this.total=this.datos.data.length})},getPaises(){c.get(u.host+"wordcamps/paises").then(a=>{this.paises=a.data.data}).catch(a=>{console.log(a)}).finally(()=>this.loading=!1)},getAnos(){c.get(u.host+"wordcamps/anos").then(a=>{this.anos=a.data.data}).catch(a=>{console.log(a)}).finally(()=>this.loading=!1)},getEstados(){this.estado="todos";var a={pais:this.pais};c.post(u.host+"wordcamps/estado",a,{headers:{"content-type":"multipart/form-data"}}).then(o=>{this.estados=o.data})},reset(){this.pais="",this.estado="todos",this.ano="",this.formato="",this.total=0,this.datos=[]}},mounted(){this.getPaises(),this.getAnos()}},v={class:"bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased"},j={class:"mx-auto max-w-screen-xl"},S={class:"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"},A={class:"justify-between space-y-3 md:space-y-0 p-4"},E={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-8"},V={class:"flex"},F={class:"w-full"},N=t("label",{for:"paiss",class:"block text-sm font-medium text-gray-900 dark:text-white mb-2"},"Country",-1),C=t("option",{value:""},"All",-1),O=["value"],P={class:"flex"},R={class:"w-full"},U=t("label",{for:"estadoss",class:"block text-sm font-medium text-gray-900 dark:text-white mb-2"},"Wordcamp",-1),z=t("option",{value:"todos"},"All",-1),B=["value"],D={class:"flex"},M={class:"w-full"},W=t("label",{for:"anos",class:"block text-sm font-medium text-gray-900 dark:text-white mb-2"},"Year",-1),I=t("option",{value:""},"All",-1),T=["value"],q={class:"flex"},J={class:"w-full"},L=t("label",{for:"rols",class:"block text-sm font-medium text-gray-900 dark:text-white mb-2"},"Format",-1),Y=t("option",{value:""},"All",-1),G=t("option",{value:"online"},"Online",-1),H=t("option",{value:"presencial"},"In Person",-1),K=[Y,G,H],Q=t("button",{type:"submit",class:"mt-2 text-white bg-primary-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"See Results",-1),X={key:0},Z=t("div",{class:"mt-7 text-xl font-semibold text-gray-400 dark:text-white"},"Events",-1),$=t("label",{for:"eventos",class:"block mb-1 mt-2 text-sm font-small text-gray-900 dark:text-white"},"Number of Events",-1),tt={class:"w-full bg-gray-200 h-5 rounded-full dark:bg-gray-700"},et={class:"bg-blue-500 h-5 text-xs font-medium text-white text-center p-1 leading-none rounded-full",style:{width:"100%"}},st=t("div",{class:"mt-7 text-xl font-semibold text-gray-400 dark:text-white"},"Speakers",-1),ot=t("label",{for:"ponentes",class:"block mb-1 mt-2 text-sm font-small text-gray-900 dark:text-white"},"Total Number of Speakers",-1),at={class:"w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700"},rt={class:"bg-blue-500 text-xs h-5 font-medium text-white text-center p-1 leading-none rounded-full",style:{width:"100%"}},lt=t("label",{for:"mujerer",class:"block mb-1 mt-3 text-sm font-small text-gray-900 dark:text-white"},"Number of Women Speakers",-1),dt={class:"w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700"},it=t("div",{class:"mt-7 text-xl font-semibold text-gray-400 dark:text-white"},"Format",-1),nt=t("label",{for:"online",class:"block mb-1 mt-2 text-sm font-small text-gray-900 dark:text-white"},"Online Format (Amount)",-1),ct={class:"w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700"},ut=t("label",{for:"presencial",class:"block mb-1 mt-3 text-sm font-small text-gray-900 dark:text-white"},"In-person Format (Amount)",-1),mt={class:"w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700"},gt=t("div",{class:"mt-7 text-xl font-semibold text-gray-400 dark:text-white"},"Representation",-1),ht=t("label",{for:"representacion",class:"block mb-1 mt-2 text-sm font-small text-gray-900 dark:text-white"},"Representation of Women (%)",-1),bt={class:"w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700"};function ft(a,o,_,pt,e,i){return l(),d("section",v,[t("div",j,[t("div",S,[t("div",A,[t("form",{method:"POST",onSubmit:o[6]||(o[6]=x((...s)=>i.estadisticas&&i.estadisticas(...s),["prevent"]))},[t("div",null,[t("div",E,[t("div",V,[t("div",F,[N,m(t("select",{id:"paiss","onUpdate:modelValue":o[0]||(o[0]=s=>e.pais=s),onChange:o[1]||(o[1]=(...s)=>i.getEstados&&i.getEstados(...s)),class:"capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[C,(l(!0),d(b,null,f(e.paises,(s,n)=>(l(),d("option",{value:s.pais,key:n},r(s.pais),9,O))),128))],544),[[g,e.pais]])])]),t("div",P,[t("div",R,[U,m(t("select",{id:"estadoss","onUpdate:modelValue":o[2]||(o[2]=s=>e.estado=s),class:"capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[z,(l(!0),d(b,null,f(e.estados,(s,n)=>(l(),d("option",{value:s.estado,key:n},r(s.estado),9,B))),128))],512),[[g,e.estado]])])]),t("div",D,[t("div",M,[W,m(t("select",{id:"anos","onUpdate:modelValue":o[3]||(o[3]=s=>e.ano=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[I,(l(!0),d(b,null,f(e.anos,(s,n)=>(l(),d("option",{value:s.ano,key:n},r(s.ano),9,T))),128))],512),[[g,e.ano]])])]),t("div",q,[t("div",J,[L,m(t("select",{id:"rols","onUpdate:modelValue":o[4]||(o[4]=s=>e.formato=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},K,512),[[g,e.formato]])])]),Q,t("button",{type:"reset",onClick:o[5]||(o[5]=(...s)=>i.reset&&i.reset(...s)),class:"mt-2 text-white bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-400 dark:hover:bg-primary-500 dark:focus:ring-primary-600"},"Reset")])])],32),e.total>0?(l(),d("div",X,[Z,$,t("div",tt,[t("div",et,r(e.total),1)]),st,ot,t("div",at,[t("div",rt,r(e.datos.ponent_total_all),1)]),lt,t("div",dt,[t("div",{class:"bg-blue-500 text-xs h-5 font-medium text-white text-center p-1 leading-none rounded-full",style:h({width:e.datos.ponent_mujer_all*100/e.datos.ponent_total_all+"%"})},r(e.datos.ponent_mujer_all),5)]),it,nt,t("div",ct,[t("div",{class:"bg-blue-500 text-xs h-5 font-medium text-white text-center p-1 leading-none rounded-full",style:h({width:e.datos.formato_online*100/e.total+"%"})},r(e.datos.formato_online),5)]),ut,t("div",mt,[t("div",{class:"bg-blue-500 text-xs h-5 font-medium text-white text-center p-1 leading-none rounded-full",style:h({width:e.datos.formato_presencial*100/e.total+"%"})},r(e.datos.formato_presencial),5)]),gt,ht,t("div",bt,[t("div",{class:"bg-blue-500 text-xs h-5 font-medium text-white text-center p-1 leading-none rounded-full",style:h({width:e.datos.representacion_mujer})},r(e.datos.representacion_mujer),5)])])):y("",!0)])])])])}const _t=p(w,[["render",ft]]),yt={__name:"EstadisticasView",setup(a){return(o,_)=>(l(),d("main",null,[k(_t)]))}};export{yt as default};
