import{T as d,o as u,f,a as e,u as a,w as m,F as _,Z as p,b as t,e as g,n as x,d as b}from"./app-dE5SG0_t.js";import{_ as w}from"./AuthenticatedLayout-1WwytjsS.js";import{P as h}from"./PrimaryButton-vy5cgc5h.js";import{_ as i,a as n,b as r}from"./TextInput-AyG0kJEI.js";import"./ApplicationLogo-LewHeEef.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const v=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," New Skill ",-1),k={class:"py-12"},y={class:"max-w-md mx-auto sm:px-6 lg:px-8 bg-white"},N={class:"mt-2"},V={class:"flex items-center justify-end mt-4"},j={__name:"Create",setup(B){const s=d({name:"",image:null}),c=()=>{s.post(route("skills.store"))};return(S,l)=>(u(),f(_,null,[e(a(p),{title:"New Skill"}),e(w,null,{header:m(()=>[v]),default:m(()=>[t("div",k,[t("div",y,[t("form",{class:"p-4",onSubmit:g(c,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=o=>a(s).name=o),autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(r,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",N,[e(i,{for:"image",value:"Image"}),e(n,{id:"image",type:"file",class:"mt-1 block w-full",onInput:l[1]||(l[1]=o=>a(s).image=o.target.files[0])}),e(r,{class:"mt-2",message:a(s).errors.image},null,8,["message"])]),t("div",V,[e(h,{class:x(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:m(()=>[b(" Store ")]),_:1},8,["class","disabled"])])],32)])])]),_:1})],64))}};export{j as default};