import{k as se,bs as de,bt as ce,q as H,a5 as t,bu as L,p as P,aB as l,x as U,g as ue,z as he,m as I,aC as be,A as W,B as fe,C as ve,c as z,a7 as w,b7 as K,bn as s,H as ge,bv as M,h as n,at as m,bw as we,bx as me,P as O}from"./index-65c853c8.js";function pe(e){const{primaryColor:d,opacityDisabled:f,borderRadius:o,textColor3:r}=e,p="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},de),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:f,railColor:p,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${ce(d,{alpha:.2})}`})}const xe={name:"Switch",common:se,self:pe},ye=xe,ke=H("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),H("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[L({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),P("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[P("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[P("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[L()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ce=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Be=ue({name:"Switch",props:Ce,slots:Object,setup(e){B===void 0&&(typeof CSS!="undefined"?typeof CSS.supports!="undefined"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:f}=he(e),o=I("Switch","-switch",ke,ye,e,d),r=be(e),{mergedSizeRef:p,mergedDisabledRef:v}=r,k=W(e.defaultValue),R=fe(e,"value"),g=ve(R,k),C=z(()=>g.value===e.checkedValue),x=W(!1),i=W(!1),c=z(()=>{const{railStyle:a}=e;if(a)return a({focused:i.value,checked:C.value})});function u(a){const{"onUpdate:value":$,onChange:V,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=r;$&&O($,a),_&&O(_,a),V&&O(V,a),k.value=a,F(),T()}function E(){const{nTriggerFormFocus:a}=r;a()}function X(){const{nTriggerFormBlur:a}=r;a()}function Y(){e.loading||v.value||(g.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function q(){i.value=!0,E()}function G(){i.value=!1,X(),x.value=!1}function J(a){e.loading||v.value||a.key===" "&&(g.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),x.value=!1)}function Q(a){e.loading||v.value||a.key===" "&&(a.preventDefault(),x.value=!0)}const A=z(()=>{const{value:a}=p,{self:{opacityDisabled:$,railColor:V,railColorActive:_,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ae,[w("buttonHeight",a)]:h,[w("buttonWidth",a)]:ie,[w("buttonWidthPressed",a)]:ne,[w("railHeight",a)]:b,[w("railWidth",a)]:S,[w("railBorderRadius",a)]:oe,[w("buttonBorderRadius",a)]:re},common:{cubicBezierEaseInOut:le}}=o.value;let N,j,D;return B?(N=`calc((${b} - ${h}) / 2)`,j=`max(${b}, ${h})`,D=`max(${S}, calc(${S} + ${h} - ${b}))`):(N=K((s(b)-s(h))/2),j=K(Math.max(s(b),s(h))),D=s(b)>s(h)?S:K(s(S)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ie,"--n-button-width-pressed":ne,"--n-button-height":h,"--n-height":j,"--n-offset":N,"--n-opacity-disabled":$,"--n-rail-border-radius":oe,"--n-rail-color":V,"--n-rail-color-active":_,"--n-rail-height":b,"--n-rail-width":S,"--n-width":D,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ae}}),y=f?ge("switch",z(()=>p.value[0]),A,e):void 0;return{handleClick:Y,handleBlur:G,handleFocus:q,handleKeyup:J,handleKeydown:Q,mergedRailStyle:c,pressed:x,mergedClsPrefix:d,mergedValue:g,checked:C,mergedDisabled:v,cssVars:f?void 0:A,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:f,mergedRailStyle:o,onRender:r,$slots:p}=this;r==null||r();const{checked:v,unchecked:k,icon:R,"checked-icon":g,"unchecked-icon":C}=p,x=!(M(R)&&M(g)&&M(C));return n("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,x&&`${e}-switch--icon`,f&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},m(v,i=>m(k,c=>i||c?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),i),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),c)):null)),n("div",{class:`${e}-switch__button`},m(R,i=>m(g,c=>m(C,u=>n(we,null,{default:()=>this.loading?n(me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?n("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(u||i)?n("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||i):null})))),m(v,i=>i&&n("div",{key:"checked",class:`${e}-switch__checked`},i)),m(k,i=>i&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{Be as N};
