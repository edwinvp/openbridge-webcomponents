import{defineComponent as u,reactive as d,useSlots as f,withDirectives as m,openBlock as v,createBlock as _,h}from"vue";import{assignSlotNodes as g}from"@lit-labs/vue-utils/wrapper-utils.js";import"@oicl/openbridge-webcomponents/dist/icons/icon-07-target-ias-selected.js";const S=u({__name:"Obi07TargetIasSelected",props:{useCssColor:{type:Boolean}},setup(a){const o=a,r=d({}),l={created(s){for(const e in o)r[e]=s[e]}};let c=!1;const i=f(),p=()=>{const e={};for(const n in o){const t=o[n];(t!==void 0||c)&&(e[n]=t!=null?t:r[n])}return c=!0,h("obi-07-target-ias-selected",e,g(i))};return(s,e)=>m((v(),_(p,null,null,512)),[[l]])}});export{S as default};
//# sourceMappingURL=Obi07TargetIasSelected.vue_vue_type_script_setup_true_lang.js.map