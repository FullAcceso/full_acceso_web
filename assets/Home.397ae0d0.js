import{_ as h,e as u,r as P,o as l,c,a as e,b as f,f as _,w as Z,g as b,T as A,F as C,h as B,v as H,t as Y,i as V,p as E,j,k as w,l as $,d as J,m as z,n as Q}from"./index.524441f8.js";const G={id:"navbar",class:"fixed shadow-5 flex align-content-center"},K={__name:"NavBar",emits:["navigation"],setup(n,{emit:i}){const a=u(!1),t=()=>{a.value=!a.value};return(o,s)=>{const d=P("font-awesome-icon");return l(),c("div",G,[e("div",{onClick:s[0]||(s[0]=r=>o.$emit("navigation","home")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Inicio"),e("div",{onClick:s[1]||(s[1]=r=>o.$emit("navigation","about")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Servicios"),e("div",{onClick:s[2]||(s[2]=r=>o.$emit("navigation","clients")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Galer\xEDa"),e("div",{onClick:s[3]||(s[3]=r=>o.$emit("navigation","contact")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Contacto"),e("div",{onClick:t,class:"button-link lg:hidden cursor-pointer flex align-items-center justify-content-center"},[f(d,{icon:"fa-solid fa-bars"})]),a.value?(l(),c("div",{key:0,onClick:t,class:"px-5"},[e("div",{onClick:s[4]||(s[4]=r=>o.$emit("navigation","home")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Inicio"),e("div",{onClick:s[5]||(s[5]=r=>o.$emit("navigation","about")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Servicios"),e("div",{onClick:s[6]||(s[6]=r=>o.$emit("navigation","clients")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Galer\xEDa"),e("div",{onClick:s[7]||(s[7]=r=>o.$emit("navigation","contact")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Contacto")])):_("",!0)])}}},ee=h(K,[["__scopeId","data-v-d8a88148"]]),te="/assets/logo.7cf09e80.png",se="/assets/logo1.47418c8f.png";const oe={key:0,class:"z-5 logo-2 fixed cursor-pointer",src:se,alt:"Logo"},ne={__name:"Logo",props:["position"],emits:["navigation"],setup(n,{emit:i}){const a=n,t=u(!0);return Z(()=>a.position,()=>{a.position>100?t.value=!1:t.value=!0}),(o,s)=>(l(),c(C,null,[f(A,{name:"follow"},{default:b(()=>[t.value?_("",!0):(l(),c("img",{key:0,onClick:s[0]||(s[0]=d=>o.$emit("navigation","home")),class:"z-5 logo-1 fixed cursor-pointer",src:te,alt:"Logo"}))]),_:1}),f(A,{name:"stay"},{default:b(()=>[t.value?(l(),c("img",oe)):_("",!0)]),_:1})],64))}},ae=h(ne,[["__scopeId","data-v-c1643ac7"]]),ie="/assets/logo3.803c00a6.png",I={_origin:"https://api.emailjs.com"},le=(n,i="https://api.emailjs.com")=>{I._userID=n,I._origin=i},W=(n,i,a)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!i)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class T{constructor(i){this.status=i.status,this.text=i.responseText}}const M=(n,i,a={})=>new Promise((t,o)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:d})=>{const r=new T(d);r.status===200||r.text==="OK"?t(r):o(r)}),s.addEventListener("error",({target:d})=>{o(new T(d))}),s.open("POST",I._origin+n,!0),Object.keys(a).forEach(d=>{s.setRequestHeader(d,a[d])}),s.send(i)}),ce=(n,i,a,t)=>{const o=t||I._userID;W(o,n,i);const s={lib_version:"3.2.0",user_id:o,service_id:n,template_id:i,template_params:a};return M("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},de=n=>{let i;if(typeof n=="string"?i=document.querySelector(n):i=n,!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return i},re=(n,i,a,t)=>{const o=t||I._userID,s=de(a);W(o,n,i);const d=new FormData(s);return d.append("lib_version","3.2.0"),d.append("service_id",n),d.append("template_id",i),d.append("user_id",o),M("/api/v1.0/email/send-form",d)},ue={init:le,send:ce,sendForm:re};const y=n=>(E("data-v-b55377c3"),n=n(),j(),n),fe={id:"formulario"},pe=["onSubmit"],ve=y(()=>e("div",{class:"title flex"},[w(" Contacto "),e("img",{class:"logo-form",src:ie})],-1)),_e=y(()=>e("div",{class:"form-text"},[w(" Escribenos tu informaci\xF3n de contacto y "),e("br"),w("responderemos a la brevedad. ")],-1)),me={class:"field"},ge=y(()=>e("label",{for:"name"},"Nombre",-1)),he={class:"field"},we=y(()=>e("label",{for:"email"},"Correo",-1)),be={class:"field"},Ae=y(()=>e("label",{for:"phone"},"Tel\xE9fono",-1)),ye={class:"select-none",style:{color:"red","margin-bottom":"2%"}},xe=y(()=>e("div",{class:"flex justify-content-end"},[e("input",{class:"boton-mail select-none cursor-pointer",type:"submit",value:"Enviar correo"})],-1)),Re={__name:"Formulario",emits:["email"],setup(n,{emit:i}){const a=u(""),t=u(""),o=u("");u("");const s=u(""),d=r=>{let v=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;if(!t.value.match(v)){s.value="Ingrese un correo valido, por favor";return}if(!o.value.match(/^[0-9]*$/)){s.value="Ingrese un numero de telefono, por favor";return}try{ue.sendForm("service_mw0hz5p","template_hfjklau",r.target,"x1wwRWXVFLCH2mrJI"),console.log("enviado")}catch(m){console.log({error:m})}s.value="",a.value="",t.value="",o.value=""};return(r,v)=>{const m=P("font-awesome-icon");return l(),c("div",fe,[e("form",{class:"formulario shadow-5",onSubmit:V(d,["prevent"])},[e("div",{class:"boton-close select-none cursor-pointer",onClick:v[0]||(v[0]=g=>r.$emit("email"))},[f(m,{icon:"fa-solid fa-xmark"})]),ve,_e,e("div",me,[ge,B(e("input",{id:"name",placeholder:"Nombre",class:"outline-none",name:"name",type:"text","onUpdate:modelValue":v[1]||(v[1]=g=>a.value=g),required:"true",autofocus:""},null,512),[[H,a.value,void 0,{trim:!0}]])]),e("div",he,[we,B(e("input",{id:"email",placeholder:"Correo",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":v[2]||(v[2]=g=>t.value=g),required:"true",autofocus:""},null,512),[[H,t.value,void 0,{trim:!0}]])]),e("div",be,[Ae,B(e("input",{id:"phone",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone",type:"text","onUpdate:modelValue":v[3]||(v[3]=g=>o.value=g),required:"true",autofocus:""},null,512),[[H,o.value,void 0,{trim:!0}]])]),e("h1",ye,Y(s.value),1),xe],40,pe)])}}},Ie=h(Re,[["__scopeId","data-v-b55377c3"]]);const Le={class:"flex justify-content-center"},Ce=["src"],Ee={__name:"ImageView",props:["image"],emits:["close"],setup(n,{emit:i}){const a=n;return(t,o)=>(l(),c("div",{id:"viewer",onClick:o[0]||(o[0]=s=>t.$emit("close"))},[e("div",Le,[e("img",{class:"foto",src:a.image},null,8,Ce)])]))}},je=h(Ee,[["__scopeId","data-v-420199e7"]]),N="/assets/banner.67127d24.mp4",ke="/assets/irata-logo.e780d53e.png";const Ue={id:"home"},Oe=J('<video id="video_home" class="banner" autoplay loop muted data-v-25c7dcff><source src="'+N+'" type="video/webm" data-v-25c7dcff><source src="'+N+'" type="video/mp4" data-v-25c7dcff> Your browser does not support the video tag. </video><div class="gradient2" data-v-25c7dcff></div><div class="gradient" data-v-25c7dcff><div class="main-text flex align-items-center justify-content-center" data-v-25c7dcff>Realizaci\xF3n de trabajos sobre altura con un alto nivel de <br data-v-25c7dcff>profesionalidad, equipamiento y seguridad.</div></div><div class="logo-irata" data-v-25c7dcff><div class="certificado flex align-items-center justify-content-center" data-v-25c7dcff>Certificaci\xF3n internacional</div><img src="'+ke+'" alt="Logo" data-v-25c7dcff></div>',4),Be=[Oe],He={__name:"Home",setup(n){const i=u(window.innerWidth),a=u(!1);return $(()=>{let t=document.getElementById("video_home");window.innerWidth<=990?(t.src=new URL("/assets/banner_mobile.b6bb315e.mp4",self.location).href,a.value=!0,t.load()):window.innerWidth>990&&(t.src=new URL("/assets/banner.67127d24.mp4",self.location).href,a.value=!1,t.load()),window.onresize=()=>{i.value=window.innerWidth,window.innerWidth<=990&&!a.value?(t.src=new URL("/assets/banner_mobile.b6bb315e.mp4",self.location).href,a.value=!0,t.load()):window.innerWidth>990&&a.value&&(t.src=new URL("/assets/banner.67127d24.mp4",self.location).href,a.value=!1,t.load())}}),(t,o)=>(l(),c("div",Ue,Be))}},Pe=h(He,[["__scopeId","data-v-25c7dcff"]]),D="/assets/01.d5aac27a.mp4",$e="/assets/1.923ef232.png",q="/assets/02.7eda3060.mp4",Se="/assets/2.d0308c4c.png",F="/assets/03.965b39ca.mp4",ze="/assets/3.8196d9b6.png";const p=n=>(E("data-v-ad5c5425"),n=n(),j(),n),Qe={id:"about",class:"grid"},Te=J('<div class="about-title col-12" data-v-ad5c5425>SERVICIOS</div><div class="col-12 lg:col-8 flex flex-wrap justify-content-center py-2" data-v-ad5c5425><div class="contenido" data-v-ad5c5425><div class="image" data-v-ad5c5425><video class="video" autoplay loop muted data-v-ad5c5425><source src="'+D+'" type="video/webm" data-v-ad5c5425><source src="'+D+'" type="video/mp4" data-v-ad5c5425> Your browser does not support the video tag. </video><img class="icons" src="'+$e+'" data-v-ad5c5425></div><div class="text-info" data-v-ad5c5425>En Full Acceso, nos preocupamos por la seguridad y contamos con material y equipo certificados de acuerdo a normativas europeas, adem\xE1s de un riguroso plan de evaluaci\xF3n de riesgos, planes de rescates espec\xEDficos para cada trabajo y un personal altamente capacitado.</div></div><div class="contenido" data-v-ad5c5425><div class="image" data-v-ad5c5425><video class="video" autoplay loop muted data-v-ad5c5425><source src="'+q+'" type="video/webm" data-v-ad5c5425><source src="'+q+'" type="video/mp4" data-v-ad5c5425> Your browser does not support the video tag. </video><img class="icons" src="'+Se+'" data-v-ad5c5425></div><div class="text-info" data-v-ad5c5425>Ofrecemos el servicio de consultor\xEDa a empresas constructoras y estudios de dise\xF1o arquitectura. <br data-v-ad5c5425><br data-v-ad5c5425>Full Acceso puede ayudarte a dise\xF1ar cualquier tipo de proyecto de infraestructura para el trabajo en altura.</div></div><div class="contenido" data-v-ad5c5425><div class="image" data-v-ad5c5425><video class="video" autoplay loop muted data-v-ad5c5425><source src="'+F+'" type="video/webm" data-v-ad5c5425><source src="'+F+'" type="video/mp4" data-v-ad5c5425> Your browser does not support the video tag. </video><img class="icons" src="'+ze+'" data-v-ad5c5425></div><div class="text-info" data-v-ad5c5425>Nuestros equipos hacen instalaciones avanzadas para clientes con altas exigencias de seguridad y calidad, con capacidad para levantar hasta 200 kg sin asistencia de gr\xFAa. Adem\xE1s de la realizaci\xF3n de mantenimiento de edificios, con serivicios de limpieza, reparaci\xF3n, diagn\xF3stico y reemplazo.</div></div></div>',2),Ne={class:"col-12 lg:col-4 pt-4"},De={key:0},qe=p(()=>e("li",null,"Impermeabilizaci\xF3n de fachadas",-1)),Fe=p(()=>e("li",null,"Reparaci\xF3n de sellos",-1)),Je=p(()=>e("li",null,"Pinturas de fachadas ",-1)),We=p(()=>e("li",null,"Recambio de vidrios",-1)),Me=[qe,Fe,Je,We],Xe={key:0},Ze=p(()=>e("li",null,"Izado de carga",-1)),Ye=p(()=>e("li",null,"Limpieza de vidrios",-1)),Ve=p(()=>e("li",null,"Espacios confinados",-1)),Ge=p(()=>e("li",null,"Montajes publicitarios",-1)),Ke=p(()=>e("li",null,"Hidrolavados de altura",-1)),et=[Ze,Ye,Ve,Ge,Ke],tt={key:0},st=p(()=>e("li",null,"Inspecci\xF3n de palas aerogeneradores",-1)),ot=p(()=>e("li",null,"Reparaciones de palas",-1)),nt=[st,ot],at={key:0},it=p(()=>e("li",null,"Limpieza o erosiones",-1)),lt=p(()=>e("li",null,"Grietas longitudinales y transversales",-1)),ct=p(()=>e("li",null,"Impactos de rayos o aves",-1)),dt=p(()=>e("li",null,"Aperturas en borde de ataque y salida",-1)),rt=p(()=>e("li",null,"Reparaci\xF3n o instalaci\xF3n de elementos aerodin\xE1micos",-1)),ut=p(()=>e("li",null,"Inspecciones en altura o desde el suelo",-1)),ft=p(()=>e("li",null,"Instalaci\xF3n de cinta protectora del borde de ataque",-1)),pt=[it,lt,ct,dt,rt,ut,ft],vt=p(()=>e("div",{class:"select-title select-none"},"CONSULTOR\xCDAS Y CAPACITACIONES",-1)),_t={__name:"About",setup(n){const i=u(!1),a=u(!1),t=u(!1),o=u(!1),s=()=>{i.value=!i.value},d=()=>{a.value=!a.value},r=()=>{t.value=!t.value},v=()=>{o.value=!o.value};return(m,g)=>(l(),c("div",Qe,[Te,e("div",Ne,[e("div",{class:"select-title select-none cursor-pointer",onClick:s},"\xC1REA ARQUITECT\xD3NICA URBANA"),f(A,{name:"inf"},{default:b(()=>[i.value?(l(),c("ul",De,Me)):_("",!0)]),_:1}),e("div",{class:"select-title select-none cursor-pointer",onClick:d},"\xC1REA INDUSTRIAL"),f(A,{name:"inf"},{default:b(()=>[a.value?(l(),c("ul",Xe,et)):_("",!0)]),_:1}),e("div",{class:"select-title select-none cursor-pointer",onClick:r},"SECTOR ENERG\xCDA"),f(A,{name:"inf"},{default:b(()=>[t.value?(l(),c("ul",tt,nt)):_("",!0)]),_:1}),e("div",{class:"select-title select-none cursor-pointer",onClick:v},"REPARACI\xD3N DE PALAS DE AEROGENERADORES"),f(A,{name:"inf"},{default:b(()=>[o.value?(l(),c("ul",at,pt)):_("",!0)]),_:1}),vt])]))}},mt=h(_t,[["__scopeId","data-v-ad5c5425"]]);const k=n=>(E("data-v-39de8f5c"),n=n(),j(),n),gt={id:"clients"},ht=k(()=>e("div",{class:"bg-clients"},null,-1)),wt=k(()=>e("div",{class:"gradient"},null,-1)),bt={style:{padding:"10% 3% 5% 3%"}},At=k(()=>e("div",{class:"my-5 title-text arriba"},"GALER\xCDA TRABAJOS PREVIOS",-1)),yt={key:0,class:"flex flex-wrap my-3 justify-content-center"},xt=["onClick"],Rt=["src"],It={class:"expand"},Lt={key:1,class:"grid",style:{margin:"0 !important"}},Ct={class:"col-1 flex justify-content-end align-items-center",style:{padding:"0 !important"}},Et={class:"col-10 flex flex-wrap my-3 justify-content-center"},jt={class:"work-img",style:{"text-align":"center"}},kt=["src"],Ut={class:"col-1 flex justify-content-start align-items-center",style:{padding:"0 !important"}},Ot=k(()=>e("div",{class:"my-5 title-text abajo"},"NUESTROS CLIENTES",-1)),Bt={key:2,class:"flex flex-wrap justify-content-center"},Ht=["src"],Pt={key:3,class:"grid",style:{margin:"0 !important"}},$t={class:"col-1 flex justify-content-end align-items-center",style:{padding:"0 !important"}},St={class:"col-10 flex flex-wrap justify-content-center"},zt={class:"logos flex align-items-center justify-content-center",style:{"text-align":"center"}},Qt=["src"],Tt={class:"col-1 flex justify-content-start align-items-center",style:{padding:"0 !important"}},Nt={__name:"Clients",props:["position","client_pos"],emits:["image-pop"],setup(n,{emit:i}){const a=u(window.innerWidth),t=u(!1),o=u(0),s=u(0);$(()=>{window.innerWidth<=990?t.value=!0:window.innerWidth>990&&(t.value=!1),window.onresize=()=>{a.value=window.innerWidth,window.innerWidth<=990&&!t.value?t.value=!0:window.innerWidth>990&&t.value&&(t.value=!1)}});const d=u([new URL("/assets/1.3c5fde59.jpg",self.location).href,new URL("/assets/2.37c63d22.jpg",self.location).href,new URL("/assets/3.e42c9e76.jpg",self.location).href,new URL("/assets/4.7c3d8b9d.jpg",self.location).href,new URL("/assets/5.85509394.jpg",self.location).href,new URL("/assets/6.b3344b62.jpg",self.location).href,new URL("/assets/7.20e2b245.jpg",self.location).href,new URL("/assets/8.40b349fc.jpg",self.location).href,new URL("/assets/9.e8ee5478.jpg",self.location).href,new URL("/assets/10.f1c6c0a6.jpg",self.location).href,new URL("/assets/11.1aee9bb7.jpg",self.location).href,new URL("/assets/12.35d760e5.jpg",self.location).href,new URL("/assets/13.8f04afa6.jpg",self.location).href,new URL("/assets/14.4f985a94.jpg",self.location).href,new URL("/assets/15.c380f02e.jpg",self.location).href,new URL("/assets/16.8c73a18e.jpg",self.location).href,new URL("/assets/17.ac303ad2.jpg",self.location).href,new URL("/assets/18.40797f80.jpg",self.location).href,new URL("/assets/19.db6fe0cd.jpg",self.location).href,new URL("/assets/20.f4cdb97b.jpg",self.location).href,new URL("/assets/21.06dc563a.jpg",self.location).href,new URL("/assets/22.28f5defb.jpg",self.location).href,new URL("/assets/23.b5f0bac1.jpg",self.location).href,new URL("/assets/24.e391f00b.jpg",self.location).href,new URL("/assets/25.f7a704ad.jpg",self.location).href,new URL("/assets/26.a719cf29.jpg",self.location).href,new URL("/assets/27.3d6f2435.jpg",self.location).href]),r=u([new URL("/assets/Agrotop-logo.aeb3353c.png",self.location).href,new URL("/assets/aiep.08dbf5e6.png",self.location).href,new URL("/assets/bsc.0831e964.png",self.location).href,new URL("/assets/carabinerosdechile.6b13c843.png",self.location).href,new URL("/assets/cato.72aec0d7.png",self.location).href,new URL("/assets/cchc.3ba7bb23.png",self.location).href,new URL("/assets/clbun.3746653d.png",self.location).href,new URL("/assets/clinica_alemana.691cf3d5.png",self.location).href,new URL("/assets/colegios_pumahue.e401c329.png",self.location).href,new URL("/assets/delbosque.f1116fab.png",self.location).href,new URL("/assets/desco.6eb0868e.png",self.location).href,new URL("/assets/digua.5c4d3d20.png",self.location).href,new URL("/assets/dreams.83a41d94.png",self.location).href,new URL("/assets/dubois.fa613e00.png",self.location).href,new URL("/assets/elaustral.10836511.png",self.location).href,new URL("/assets/gobchile.ab5e68a3.png",self.location).href,new URL("/assets/goldwind.92d061b7.png",self.location).href,new URL("/assets/iss.5f21eb8e.png",self.location).href,new URL("/assets/mainstream.d437a8ea.png",self.location).href,new URL("/assets/matfor.e6d51206.png",self.location).href,new URL("/assets/mayor.32719c00.png",self.location).href,new URL("data:image/png;base64,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",self.location).href,new URL("/assets/plaenge.21946c45.png",self.location).href,new URL("/assets/providencia.9e2f0bbf.png",self.location).href,new URL("/assets/radisson.042f5cff.png",self.location).href,new URL("/assets/sanignacio.10ae7865.png",self.location).href,new URL("/assets/sename.15035e73.png",self.location).href,new URL("/assets/sernac.38377f86.png",self.location).href,new URL("/assets/teleton.c3826d03.png",self.location).href,new URL("/assets/williams.111d0cb6.png",self.location).href]),v=S=>{t.value||i("image-pop",S)},m=()=>{o.value!=d.value.length-1&&(o.value+=1)},g=()=>{o.value!=0&&(o.value-=1)},x=()=>{s.value!=r.value.length-1&&(s.value+=1)},X=()=>{s.value!=0&&(s.value-=1)};return(S,Vt)=>{const R=P("font-awesome-icon");return l(),c("div",gt,[ht,wt,e("div",bt,[At,t.value?_("",!0):(l(),c("div",yt,[(l(!0),c(C,null,z(d.value,(L,O)=>(l(),c("div",{onClick:Gt=>v(L),key:O,class:"work-img cursor-pointer",style:{"text-align":"center"}},[e("img",{src:L},null,8,Rt),e("div",It,[f(R,{icon:"fa-solid fa-expand"})])],8,xt))),128))])),t.value?(l(),c("div",Lt,[e("div",Ct,[o.value!=0?(l(),c("div",{key:0,onClick:g,class:"button-page"},[f(R,{icon:"fa-solid fa-angle-left"})])):_("",!0)]),e("div",Et,[e("div",jt,[e("img",{src:d.value[o.value]},null,8,kt)])]),e("div",Ut,[o.value!=d.value.length-1?(l(),c("div",{key:0,onClick:m,class:"button-page"},[f(R,{icon:"fa-solid fa-angle-right"})])):_("",!0)])])):_("",!0),Ot,t.value?_("",!0):(l(),c("div",Bt,[(l(!0),c(C,null,z(r.value,(L,O)=>(l(),c("div",{key:O,class:"logos flex align-items-center justify-content-center"},[e("img",{src:L},null,8,Ht)]))),128))])),t.value?(l(),c("div",Pt,[e("div",$t,[s.value!=0?(l(),c("div",{key:0,onClick:X,class:"button-page"},[f(R,{icon:"fa-solid fa-angle-left"})])):_("",!0)]),e("div",St,[e("div",zt,[e("img",{src:r.value[s.value]},null,8,Qt)])]),e("div",Tt,[s.value!=r.value.length-1?(l(),c("div",{key:0,onClick:x,class:"button-page"},[f(R,{icon:"fa-solid fa-angle-right"})])):_("",!0)])])):_("",!0)])])}}},Dt=h(Nt,[["__scopeId","data-v-39de8f5c"]]);const U=n=>(E("data-v-90fd686b"),n=n(),j(),n),qt={id:"contact"},Ft=U(()=>e("div",{class:"bg-contact"},null,-1)),Jt=U(()=>e("div",{class:"bg-color"},null,-1)),Wt=U(()=>e("div",{class:"bg-texture"},null,-1)),Mt={class:"flex justify-content-end",style:{padding:"4% 8%"}},Xt=U(()=>e("div",{class:"info"},[w(" Direcci\xF3n: "),e("span",null,"Barros Arana 492 of 78, Concepci\xF3n, Chile"),w(),e("br"),w(" Tel\xE9fono: "),e("span",null,"+56 9 4002 5717"),w(" Email: "),e("span",null,"colipe.gustavo@gmail.com")],-1)),Zt={__name:"Contact",props:["position","contact_pos"],emits:["form-pop"],setup(n,{emit:i}){return(a,t)=>(l(),c("div",qt,[Ft,Jt,Wt,e("div",Mt,[e("div",null,[Xt,e("div",{onClick:t[0]||(t[0]=o=>a.$emit("form-pop")),class:"contact-button cursor-pointer"},"Haz tu cotizaci\xF3n aqu\xED")])])]))}},Yt=h(Zt,[["__scopeId","data-v-90fd686b"]]),es={__name:"Home",setup(n){const i=u(0),a=u(!1),t=u(!1),o=u();$(()=>{window.addEventListener("scroll",d)});const s=m=>{let x=document.getElementById(m).offsetTop;window.scrollTo(0,x)},d=m=>{let x=m.srcElement.scrollingElement.scrollTop;i.value=x},r=()=>{a.value=!a.value},v=m=>{m&&(o.value=m),t.value=!t.value};return(m,g)=>(l(),c(C,null,[f(ee,{onNavigation:s}),f(ae,{onNavigation:s,position:i.value},null,8,["position"]),a.value?(l(),Q(Ie,{key:0,onEmail:r})):_("",!0),t.value?(l(),Q(je,{key:1,image:o.value,onClose:v},null,8,["image"])):_("",!0),f(Pe),f(mt),f(Dt,{onImagePop:v}),f(Yt,{onFormPop:r})],64))}};export{es as default};
