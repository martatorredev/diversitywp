import{_ as b,a as p,c as y,i as f,r as x,o as n,b as c,d as e,w as k,e as s,v as d,j as h,g as l,h as m,k as _,l as w}from"./index-e015db1d.js";const v={data(){return{userData:{name:"",email:"",rol:"user",password:""}}},methods:{createUser(){p.post(y.host+"registro",this.userData).then(o=>console.log(o))}},mounted(){f()}},D={class:"bg-gray-50 dark:bg-gray-900"},U={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"},V=e("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[e("img",{class:"w-8 h-8 mr-2",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",alt:"logo"}),l(" DiversityWP ")],-1),C={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},N={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},S=e("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Create and account ",-1),q=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Nombre y Apellido",-1),A=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),T=e("label",{for:"rol",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Seleccione una opción",-1),B=e("option",{selected:"",value:"user"},"User",-1),M=e("option",{value:"admin"},"Admin",-1),P=[B,M],j=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),E=w('<div class="flex items-start"><div class="flex items-center h-5"><input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></div><div class="ml-3 text-sm"><label for="terms" class="font-light text-gray-500 dark:text-gray-300">Acepto los <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terminos y Condiciones</a></label></div></div><button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear una Cuenta</button>',2),R={class:"text-sm font-light text-gray-500 dark:text-gray-400"};function z(o,r,u,L,a,i){const g=x("router-link");return n(),c("section",D,[e("div",U,[V,e("div",C,[e("div",N,[S,e("form",{class:"space-y-4 md:space-y-6",method:"POST",onSubmit:r[4]||(r[4]=k((...t)=>i.createUser&&i.createUser(...t),["prevent"]))},[e("div",null,[q,s(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":r[0]||(r[0]=t=>a.userData.name=t),autofocus:"",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Nombre Apellido",required:""},null,512),[[d,a.userData.name]])]),e("div",null,[A,s(e("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":r[1]||(r[1]=t=>a.userData.email=t),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[d,a.userData.email]])]),e("div",null,[T,s(e("select",{id:"rol","onUpdate:modelValue":r[2]||(r[2]=t=>a.userData.rol=t),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},P,512),[[h,a.userData.rol]])]),e("div",null,[j,s(e("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":r[3]||(r[3]=t=>a.userData.password=t),placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[d,a.userData.password]])]),E,e("p",R,[l(" Ya tienes una Cuenta? "),m(g,{to:"/",class:"font-medium text-primary-600 hover:underline dark:text-primary-500"},{default:_(()=>[l("Login")]),_:1})])],32)])])])])}const F=b(v,[["render",z]]),W={__name:"UserRegisterView",setup(o){return(r,u)=>(n(),c("main",null,[m(F)]))}};export{W as default};
