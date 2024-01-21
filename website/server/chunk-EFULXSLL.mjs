import './polyfills.server.mjs';
import{C as D,G as T,I as g,J as L,a as m,b as y,c as u,d as x,e as w,f as E,g as t,h as n,i as s,j as f,k as v,l as i,m as b,n as l,u as C,w as k,x as d,y as F,z as M}from"./chunk-4M6TIJMS.mjs";var A=(()=>{let e=class e{constructor(a){this.router=a}loginpage(){this.router.navigate(["login"])}homepage(){this.router.navigate([""])}};e.\u0275fac=function(r){return new(r||e)(x(g))},e.\u0275cmp=m({type:e,selectors:[["app-header"]],standalone:!0,features:[l],decls:7,vars:0,consts:[[1,"bg-custom-dark-blue","text-white"],[1,"flex","justify-between","items-center","p-4"],[1,"cursor-pointer",3,"click"],["src","../../../assets/images/logo.png","alt","Logo",1,"h-12"],[3,"click"],[1,"border","border-white","text-white","px-4","py-2","rounded","hover:border-blue-700"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"div",1)(2,"a",2),f("click",function(){return p.homepage()}),s(3,"img",3),n(),t(4,"a",4),f("click",function(){return p.loginpage()}),t(5,"button",5),i(6,"Login"),n()()()())},encapsulation:2});let o=e;return o})();var I=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[l],decls:29,vars:0,consts:[[1,"bg-custom-dark-blue","p-8","text-white"],[1,"grid","grid-cols-3","gap-4"],[1,"mx-auto","text-center","m-4"],[1,"text-2xl","font-semibold","mb-4"],[1,"mb-4"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),i(4,"Contact:"),n(),t(5,"p",4),i(6,"111-128-128"),n(),t(7,"h2",3),i(8,"Location:"),n(),t(9,"p",4),i(10,"FAST University, 3 A.K. Brohi Road, H-11/4, Islamabad"),n()(),t(11,"div",2)(12,"h2",3),i(13,"Contact:"),n(),t(14,"p",4),i(15,"111-128-128"),n(),t(16,"h2",3),i(17,"Location:"),n(),t(18,"p",4),i(19,"852-B Milaad St, Block B Faisal Town, Lahore"),n()(),t(20,"div",2)(21,"h2",3),i(22,"Contact:"),n(),t(23,"p",4),i(24,"111-128-128"),n(),t(25,"h2",3),i(26,"Location:"),n(),t(27,"p",4),i(28,"St-4, Sector 17-D, NH 5, Karachi"),n()()()())},dependencies:[d],encapsulation:2});let o=e;return o})();var j=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-hero"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"bg-landing","text-white","flex","items-center","justify-center","h-40","text-center"],[1,"text-5xl","font-montserrat","font-bold","mb-20"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"h1",1),i(2,"Student Directory"),n()())},dependencies:[d]});let o=e;return o})();var P=(()=>{let e=class e{constructor(){this.title="website"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:8,vars:0,consts:[[1,"flex","flex-col","min-h-screen","bg-stone-200"],[1,"flex-shrink-0"],[1,"flex-grow"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"div",1),s(2,"app-header"),n(),t(3,"div",2),s(4,"app-hero")(5,"router-outlet"),n(),t(6,"div",1),s(7,"app-footer"),n()())},dependencies:[d,T,A,I,j],encapsulation:2});let o=e;return o})();var R=(()=>{let e=class e{constructor(a){this.router=a}searchresultpage(){this.router.navigate(["results"])}};e.\u0275fac=function(r){return new(r||e)(x(g))},e.\u0275cmp=m({type:e,selectors:[["app-searchbar"]],standalone:!0,features:[l],decls:45,vars:0,consts:[[1,"flex","justify-center","items-center","mt-[-2.5rem]"],[1,"pl-10","relative","z-10","bg-custom-dark-blue","border-4","border-stone-200","p-1","inline-flex","space-x-12","min-w-[800px]"],[1,"w-1/2","pb-4","border-white"],[1,"text-white","block","font-montserrat"],["type","text","placeholder","Search...",1,"bg-custom-dark-blue","text-white","outline-none","w-3/4","h-8"],[1,"flex","space-x-4"],[1,"pb-4","border-l-2","pl-4","border-white"],[1,"bg-custom-dark-blue","text-white","outline-none","w-32","h-8","px-2"],["value","option1"],["value","option2"],[1,"pb-4","pl-4","border-white"],[1,"bg-custom-dark-blue","text-white","outline-none","w-32","h-8","px-2","font-montserrat"],["value","optionA"],["value","optionB"],["value","optionC"],["value","optionD"],["value","optionE"],["value","optionF"],[1,"flex","justify-center","items-center","mb-5"],[3,"click"],[1,"bg-custom-dark-blue","text-white","outline-none","h-16","px-6","border-2","border-white","rounded-full","hover:border-blue-700","font-montserrat"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),i(4,"Student Name"),n(),s(5,"input",4),n(),t(6,"div",5)(7,"div",6)(8,"label",3),i(9,"Class Of"),n(),t(10,"select",7)(11,"option",8),i(12,"All Classes"),n(),t(13,"option",9),i(14,"23"),n(),t(15,"option",9),i(16,"22"),n(),t(17,"option",9),i(18,"21"),n(),t(19,"option",9),i(20,"20"),n(),t(21,"option",9),i(22,"19"),n(),t(23,"option",9),i(24,"18"),n()()(),t(25,"div",10)(26,"label",3),i(27,"Programs"),n(),t(28,"select",11)(29,"option",12),i(30,"All Programs"),n(),t(31,"option",13),i(32,"Computer Science"),n(),t(33,"option",14),i(34,"Data Science"),n(),t(35,"option",15),i(36,"Artificial Intelligence"),n(),t(37,"option",16),i(38,"Cyber Security"),n(),t(39,"option",17),i(40,"Software Engineering"),n()()()()()(),t(41,"div",18)(42,"a",19),f("click",function(){return p.searchresultpage()}),t(43,"button",20),i(44,"Search"),n()()())},dependencies:[d]});let o=e;return o})();var H=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-landing"]],standalone:!0,features:[l],decls:6,vars:0,consts:[[1,"mx-auto","px-2","text-center"],[1,"mb-4"]],template:function(r,p){r&1&&(s(0,"app-searchbar"),t(1,"div",0)(2,"p",1),i(3," Founded as a Federally Chartered University in July 2000, the National University of Computer and Emerging Sciences is a premier University of Pakistan, renowned for quality and impact of its students in the development of local software and other industries. The university has five modern campuses at Karachi, Lahore, Islamabad, Peshawar and Chiniot-Faisalabad. These campuses provide world class educational environment and recreational facilities to about over 11,000 students, around one quarter are female and over 500 skilled faculty members. "),n(),t(4,"p"),i(5," Research wings of the university are well recognized, nationally and internationally. They are embarked upon cutting edge research having direct impact on the social, economic and technological needs of Pakistan. Our vision is to become a globally recognized research university of Pakistan within the next decade. "),n()())},dependencies:[d,R],encapsulation:2});let o=e;return o})();var z=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-login"]],standalone:!0,features:[l],decls:18,vars:0,consts:[[1,"bg-stone-200","flex","items-start","justify-center","pb-4","mb-6"],[1,"bg-white","p-8","rounded","shadow-md","w-96","mt-16"],[1,"text-2xl","font-semibold","mb-6"],[1,"mb-4","pb-1","border-b-2","border-gray-800"],["for","email",1,"block","text-sm","font-medium","text-gray-600"],["type","email","id","email","name","email","required","",1,"mt-1","p-2","w-full","border","rounded-md"],["for","password",1,"block","text-sm","font-medium","text-gray-600"],["type","password","id","password","name","password","required","",1,"mt-1","p-2","w-full","border","rounded-md"],[1,"bg-custom-dark-blue","text-white","py-2","px-4","rounded-md","hover:bg-gray-800","focus:outline-none","focus:ring","focus:border-blue-300"],[1,"mt-4","text-sm","text-gray-600"],["href","/"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"div",1)(2,"h2",2),i(3,"Login"),n(),t(4,"form")(5,"div",3)(6,"label",4),i(7,"Email:"),n(),s(8,"input",5),n(),t(9,"div",3)(10,"label",6),i(11,"Password:"),n(),s(12,"input",7),n(),t(13,"button",8),i(14," Login "),n(),t(15,"div",9)(16,"a",10),i(17,"Forgot Password?"),n()()()()())},dependencies:[d]});let o=e;return o})();function K(o,e){if(o&1&&(t(0,"div",5),s(1,"img",6),t(2,"div",7)(3,"h2",8),i(4),n(),t(5,"p",9),i(6),n()()()),o&2){let h=e.$implicit;u(1),v("src",h.image,y),v("alt",h.name),u(3),b(h.name),u(2),b(h.description)}}var B=(()=>{let e=class e{constructor(){this.result=[{id:1,name:"Ali Azhar",description:"7th Semester | C++ | DataInsight Intern",image:"../../../assets/images/pfp.jpg"},{id:2,name:"Waleed Khan",description:"Graduate (Batch 19) | Python | SWE @ Motive",image:"../../../assets/images/pfp.jpg"},{id:3,name:"Hamza Rashid",description:"6th Semester | .NET | SWE @ Folio3 (Part-time)",image:"../../../assets/images/pfp.jpg"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-search-result"]],standalone:!0,features:[l],decls:6,vars:1,consts:[[1,"border-t-2","border-b-2","border-custom-dark-blue","text-custom-dark-blue","text-4xl","font-bold","mt-10","pb-2","px-14"],[1,"text-2xl"],[1,"container","mx-auto","mt-8"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-3","gap-8"],["class","bg-white rounded shadow-md overflow-hidden p-8 h-1/2",4,"ngFor","ngForOf"],[1,"bg-white","rounded","shadow-md","overflow-hidden","p-8","h-1/2"],[1,"h-3/4","w-3/4s",3,"src","alt"],[1,"p-4"],[1,"text-xl","font-semibold","mb-2"],[1,"text-sm"]],template:function(r,p){r&1&&(t(0,"div",0)(1,"h1",1),i(2,"List of Students"),n()(),t(3,"div",2)(4,"div",3),E(5,K,7,4,"div",4),n()()),r&2&&(u(5),w("ngForOf",p.result))},dependencies:[d,k]});let o=e;return o})();var O=[{path:"",component:H},{path:"login",component:z},{path:"results",component:B}];var N={providers:[L(O),M()]};var W={providers:[D()]},U=C(N,W);var _=()=>F(P,U),Le=_;export{Le as a};
