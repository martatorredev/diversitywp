import{_ as c,a as u,c as g,i as p,o as l,b as n,d as e,w as f,e as i,v as d,t as y,f as b,g as h,h as x}from"./index-e015db1d.js";const _={data(){return{userData:{email:"",password:""},message:""}},methods:{login(){u.post(g.host+"login",this.userData).then(r=>{r.data.res===!0?(this.message=r.data.message,localStorage.setItem("user",JSON.stringify(r.data.data)),this.$router.push("wordcamp/crud")):this.message=r.data.message})}},mounted(){p()}},k={class:"bg-gray-50 dark:bg-gray-900 h-screen"},w={class:"flex flex-col items-center justify-center px-6 mx-auto h-full lg:py-0"},v=e("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[e("img",{class:"w-8 h-8 mr-2",src:b,alt:"logo"}),h(" DiversityWP ")],-1),D={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},S={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},V=e("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Sign in to your account. ",-1),N=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),T=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),B={class:"flex items-center justify-between"},P={class:""},j={class:"text-red-600 text-sm font-medium ml-1"},q=e("button",{type:"submit",class:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Sign in",-1);function E(r,t,m,O,s,o){return l(),n("section",k,[e("div",w,[v,e("div",D,[e("div",S,[V,e("form",{class:"space-y-4 md:space-y-6",method:"POST",autocomplete:"off",onSubmit:t[2]||(t[2]=f((...a)=>o.login&&o.login(...a),["prevent"]))},[e("div",null,[N,i(e("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>s.userData.email=a),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:"",autofocus:""},null,512),[[d,s.userData.email]])]),e("div",null,[T,i(e("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=a=>s.userData.password=a),placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[d,s.userData.password]])]),e("div",B,[e("div",P,[e("div",j,y(s.message),1)])]),q],32)])])])])}const M=c(_,[["render",E]]),W={__name:"HomeView",setup(r){return(t,m)=>(l(),n("main",null,[x(M)]))}};export{W as default};
