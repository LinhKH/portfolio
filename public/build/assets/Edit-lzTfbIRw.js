import{T as _,o as g,f as x,a as s,u as a,w as o,F as k,Z as b,b as t,e as h,n as v,d as w,O as y}from"./app-W8e8EDRa.js";import{_ as V}from"./AuthenticatedLayout-BSmjCqUH.js";import{P as $}from"./PrimaryButton-zU2R2Dmd.js";import{_ as c,a as u,b as f}from"./TextInput-dQneu2qc.js";import"./ApplicationLogo-IQeFRJ9Q.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const B=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Edit Skill ",-1),E={class:"py-12"},N={class:"max-w-md mx-auto sm:px-6 lg:px-8 bg-white"},S={class:"mt-2"},O=["src"],j={class:"flex items-center justify-end mt-4"},U={__name:"Edit",props:{skill:Object},setup(n){var r,d;const i=n,e=_({name:(r=i.skill)==null?void 0:r.name,image:(d=i.skill)==null?void 0:d.image}),p=()=>{y.post(`/skills/${i.skill.id}`,{_method:"put",name:e.name,image:e.image})};return(C,l)=>(g(),x(k,null,[s(a(b),{title:"Edit Skill"}),s(V,null,{header:o(()=>[B]),default:o(()=>[t("div",E,[t("div",N,[t("form",{class:"p-4",onSubmit:h(p,["prevent"])},[t("div",null,[s(c,{for:"name",value:"Name"}),s(u,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(e).name,"onUpdate:modelValue":l[0]||(l[0]=m=>a(e).name=m),autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(f,{class:"mt-2",message:a(e).errors.name},null,8,["message"])]),t("div",S,[s(c,{for:"image",value:"Image"}),s(u,{id:"image",type:"file",class:"mt-1 block w-full",onInput:l[1]||(l[1]=m=>a(e).image=m.target.files[0])}),t("img",{src:n.skill.image,class:"w-12 h-12 rounded-full"},null,8,O),s(f,{class:"mt-2",message:a(e).errors.image},null,8,["message"])]),t("div",j,[s($,{class:v(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:o(()=>[w(" Store ")]),_:1},8,["class","disabled"])])],32)])])]),_:1})],64))}};export{U as default};
