/*! For license information please see 5365-milStG2oZS4.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5365],{8485:(e,t,r)=>{r.d(t,{a:()=>u});var i=r(87480),n=r(72774),o={ROOT:"mdc-form-field"},a={LABEL_SELECTOR:".mdc-form-field > label"};const s=function(e){function t(r){var n=e.call(this,(0,i.__assign)((0,i.__assign)({},t.defaultAdapter),r))||this;return n.click=function(){n.handleClick()},n}return(0,i.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(n.K);var c=r(78220),l=r(18601),d=r(14114),h=r(68144),f=r(14243),p=r(83448);class u extends c.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=s}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof l.Wg){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof l.Wg){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return h.dy` <div class="mdc-form-field ${(0,p.$)(e)}"> <slot></slot> <label class="mdc-label" @click="${this._labelClick}">${this.label}</label> </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,i.__decorate)([(0,f.Cb)({type:Boolean})],u.prototype,"alignEnd",void 0),(0,i.__decorate)([(0,f.Cb)({type:Boolean})],u.prototype,"spaceBetween",void 0),(0,i.__decorate)([(0,f.Cb)({type:Boolean})],u.prototype,"nowrap",void 0),(0,i.__decorate)([(0,f.Cb)({type:String}),(0,d.P)((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],u.prototype,"label",void 0),(0,i.__decorate)([(0,f.IO)(".mdc-form-field")],u.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,f.vZ)("",!0,"*")],u.prototype,"slottedInputs",void 0),(0,i.__decorate)([(0,f.IO)("label")],u.prototype,"labelEl",void 0)},92038:(e,t,r)=>{r.d(t,{W:()=>i});const i=r(68144).iv`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size,.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height,1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing,.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}`},63335:(e,t,r)=>{r.d(t,{F:()=>h});var i=r(87480),n=r(14243),o=r(58417),a=r(39274);let s=class extends o.A{};s.styles=[a.W],s=(0,i.__decorate)([(0,n.Mo)("mwc-checkbox")],s);var c=r(68144),l=r(83448),d=r(61092);class h extends d.K{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},t=this.renderText(),r=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():c.dy``,i=this.hasMeta&&this.left?this.renderMeta():c.dy``,n=this.renderRipple();return c.dy` ${n} ${r} ${this.left?"":t} <span class="${(0,l.$)(e)}"> <mwc-checkbox reducedTouchTarget tabindex="${this.tabindex}" .checked="${this.selected}" ?disabled="${this.disabled}" @change="${this.onChange}"> </mwc-checkbox> </span> ${this.left?t:""} ${i}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}(0,i.__decorate)([(0,n.IO)("slot")],h.prototype,"slotElement",void 0),(0,i.__decorate)([(0,n.IO)("mwc-checkbox")],h.prototype,"checkboxElement",void 0),(0,i.__decorate)([(0,n.Cb)({type:Boolean})],h.prototype,"left",void 0),(0,i.__decorate)([(0,n.Cb)({type:String,reflect:!0})],h.prototype,"graphic",void 0)},21270:(e,t,r)=>{r.d(t,{W:()=>i});const i=r(68144).iv`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`},89833:(e,t,r)=>{r.d(t,{O:()=>h});var i=r(87480),n=r(42977),o=r(68144),a=r(14243),s=r(83448),c=r(30153),l=r(67004);const d={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class h extends n.P{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,r=e&&!t,i=!!this.helper||!!this.validationMessage||r,n={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return o.dy` <label class="mdc-text-field mdc-text-field--textarea ${(0,s.$)(n)}"> ${this.renderRipple()} ${this.outlined?this.renderOutline():this.renderLabel()} ${this.renderInput()} ${this.renderCharCounter(t)} ${this.renderLineRipple()} </label> ${this.renderHelperText(i,r)} `}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,r=-1===this.maxLength?void 0:this.maxLength,i=this.autocapitalize?this.autocapitalize:void 0;return o.dy` <textarea aria-labelledby="${(0,c.o)(e)}" class="mdc-text-field__input" .value="${(0,l.a)(this.value)}" rows="${this.rows}" cols="${this.cols}" ?disabled="${this.disabled}" placeholder="${this.placeholder}" ?required="${this.required}" ?readonly="${this.readOnly}" minlength="${(0,c.o)(t)}" maxlength="${(0,c.o)(r)}" name="${(0,c.o)(""===this.name?void 0:this.name)}" inputmode="${(0,c.o)(this.inputMode)}" autocapitalize="${(0,c.o)(i)}" @input="${this.handleInputChange}" @blur="${this.onInputBlur}">
      </textarea>`}}(0,i.__decorate)([(0,a.IO)("textarea")],h.prototype,"formElement",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],h.prototype,"rows",void 0),(0,i.__decorate)([(0,a.Cb)({type:Number})],h.prototype,"cols",void 0),(0,i.__decorate)([(0,a.Cb)({converter:d})],h.prototype,"charCounter",void 0)},96791:(e,t,r)=>{r.d(t,{W:()=>i});const i=r(68144).iv`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`},3239:(e,t,r)=>{function i(e){if(!e||"object"!=typeof e)return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(i);var t={};return Object.keys(e).forEach((function(r){t[r]=i(e[r])})),t}r.d(t,{Z:()=>i})},22075:(e,t,r)=>{r.d(t,{L:()=>o});const i={en:"US",hi:"IN",deva:"IN",te:"IN",mr:"IN",ta:"IN",gu:"IN",kn:"IN",or:"IN",ml:"IN",pa:"IN",bho:"IN",awa:"IN",as:"IN",mwr:"IN",mai:"IN",mag:"IN",bgc:"IN",hne:"IN",dcc:"IN",bn:"BD",beng:"BD",rkt:"BD",dz:"BT",tibt:"BT",tn:"BW",am:"ET",ethi:"ET",om:"ET",quc:"GT",id:"ID",jv:"ID",su:"ID",mad:"ID",ms_arab:"ID",he:"IL",hebr:"IL",jam:"JM",ja:"JP",jpan:"JP",km:"KH",khmr:"KH",ko:"KR",kore:"KR",lo:"LA",laoo:"LA",mh:"MH",my:"MM",mymr:"MM",mt:"MT",ne:"NP",fil:"PH",ceb:"PH",ilo:"PH",ur:"PK",pa_arab:"PK",lah:"PK",ps:"PK",sd:"PK",skr:"PK",gn:"PY",th:"TH",thai:"TH",tts:"TH",zh_hant:"TW",hant:"TW",sm:"WS",zu:"ZA",sn:"ZW",arq:"DZ",ar:"EG",arab:"EG",arz:"EG",fa:"IR",az_arab:"IR",dv:"MV",thaa:"MV"};const n={AG:0,ATG:0,28:0,AS:0,ASM:0,16:0,BD:0,BGD:0,50:0,BR:0,BRA:0,76:0,BS:0,BHS:0,44:0,BT:0,BTN:0,64:0,BW:0,BWA:0,72:0,BZ:0,BLZ:0,84:0,CA:0,CAN:0,124:0,CO:0,COL:0,170:0,DM:0,DMA:0,212:0,DO:0,DOM:0,214:0,ET:0,ETH:0,231:0,GT:0,GTM:0,320:0,GU:0,GUM:0,316:0,HK:0,HKG:0,344:0,HN:0,HND:0,340:0,ID:0,IDN:0,360:0,IL:0,ISR:0,376:0,IN:0,IND:0,356:0,JM:0,JAM:0,388:0,JP:0,JPN:0,392:0,KE:0,KEN:0,404:0,KH:0,KHM:0,116:0,KR:0,KOR:0,410:0,LA:0,LA0:0,418:0,MH:0,MHL:0,584:0,MM:0,MMR:0,104:0,MO:0,MAC:0,446:0,MT:0,MLT:0,470:0,MX:0,MEX:0,484:0,MZ:0,MOZ:0,508:0,NI:0,NIC:0,558:0,NP:0,NPL:0,524:0,PA:0,PAN:0,591:0,PE:0,PER:0,604:0,PH:0,PHL:0,608:0,PK:0,PAK:0,586:0,PR:0,PRI:0,630:0,PT:0,PRT:0,620:0,PY:0,PRY:0,600:0,SA:0,SAU:0,682:0,SG:0,SGP:0,702:0,SV:0,SLV:0,222:0,TH:0,THA:0,764:0,TT:0,TTO:0,780:0,TW:0,TWN:0,158:0,UM:0,UMI:0,581:0,US:0,USA:0,840:0,VE:0,VEN:0,862:0,VI:0,VIR:0,850:0,WS:0,WSM:0,882:0,YE:0,YEM:0,887:0,ZA:0,ZAF:0,710:0,ZW:0,ZWE:0,716:0,AE:6,ARE:6,784:6,AF:6,AFG:6,4:6,BH:6,BHR:6,48:6,DJ:6,DJI:6,262:6,DZ:6,DZA:6,12:6,EG:6,EGY:6,818:6,IQ:6,IRQ:6,368:6,IR:6,IRN:6,364:6,JO:6,JOR:6,400:6,KW:6,KWT:6,414:6,LY:6,LBY:6,434:6,OM:6,OMN:6,512:6,QA:6,QAT:6,634:6,SD:6,SDN:6,729:6,SY:6,SYR:6,760:6,MV:5,MDV:5,462:5};function o(e){return function(e,t,r){if(e){var i,n=e.toLowerCase().split(/[-_]/),o=n[0],a=o;if(n[1]&&4===n[1].length?(a+="_"+n[1],i=n[2]):i=n[1],i||(i=t[a]||t[o]),i)return function(e,t){var r=t["string"==typeof e?e.toUpperCase():e];return"number"==typeof r?r:1}(i.match(/^\d+$/)?Number(i):i,r)}return 1}(e,i,n)}},34990:(e,t,r)=>{r.d(t,{l:()=>a});var i=r(15304),n=r(38941);const o={},a=(0,n.XM)(class extends n.Xe{constructor(){super(...arguments),this.st=o}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.st)&&this.st.length===t.length&&t.every(((e,t)=>e===this.st[t])))return i.Jb}else if(this.st===t)return i.Jb;return this.st=Array.isArray(t)?Array.from(t):t,this.render(t,r)}})},18848:(e,t,r)=>{r.d(t,{r:()=>s});var i=r(15304),n=r(38941),o=r(81563);const a=(e,t,r)=>{const i=new Map;for(let n=t;n<=r;n++)i.set(e[n],n);return i},s=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let i;void 0===r?r=t:void 0!==t&&(i=t);const n=[],o=[];let a=0;for(const t of e)n[a]=i?i(t,a):a,o[a]=r(t,a),a++;return{values:o,keys:n}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var s;const c=(0,o.i9)(e),{values:l,keys:d}=this.dt(t,r,n);if(!Array.isArray(c))return this.ht=d,l;const h=null!==(s=this.ht)&&void 0!==s?s:this.ht=[],f=[];let p,u,m=0,y=c.length-1,g=0,b=l.length-1;for(;m<=y&&g<=b;)if(null===c[m])m++;else if(null===c[y])y--;else if(h[m]===d[g])f[g]=(0,o.fk)(c[m],l[g]),m++,g++;else if(h[y]===d[b])f[b]=(0,o.fk)(c[y],l[b]),y--,b--;else if(h[m]===d[b])f[b]=(0,o.fk)(c[m],l[b]),(0,o._Y)(e,f[b+1],c[m]),m++,b--;else if(h[y]===d[g])f[g]=(0,o.fk)(c[y],l[g]),(0,o._Y)(e,c[m],c[y]),y--,g++;else if(void 0===p&&(p=a(d,g,b),u=a(h,m,y)),p.has(h[m]))if(p.has(h[y])){const t=u.get(d[g]),r=void 0!==t?c[t]:null;if(null===r){const t=(0,o._Y)(e,c[m]);(0,o.fk)(t,l[g]),f[g]=t}else f[g]=(0,o.fk)(r,l[g]),(0,o._Y)(e,c[m],r),c[t]=null;g++}else(0,o.ws)(c[y]),y--;else(0,o.ws)(c[m]),m++;for(;g<=b;){const t=(0,o._Y)(e,f[b+1]);(0,o.fk)(t,l[g]),f[g++]=t}for(;m<=y;){const e=c[m++];null!==e&&(0,o.ws)(e)}return this.ht=d,(0,o.hl)(e,f),i.Jb}})},62601:(e,t,r)=>{r.d(t,{C:()=>f});var i=r(15304),n=r(81563),o=r(19596);class a{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}var c=r(38941);const l=e=>!(0,n.pt)(e)&&"function"==typeof e.then,d=1073741823;class h extends o.sR{constructor(){super(...arguments),this._$C_t=d,this._$Cwt=[],this._$Cq=new a(this),this._$CK=new s}render(...e){var t;return null!==(t=e.find((e=>!l(e))))&&void 0!==t?t:i.Jb}update(e,t){const r=this._$Cwt;let n=r.length;this._$Cwt=t;const o=this._$Cq,a=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const i=t[e];if(!l(i))return this._$C_t=e,i;e<n&&i===r[e]||(this._$C_t=d,n=0,Promise.resolve(i).then((async e=>{for(;a.get();)await a.get();const t=o.deref();if(void 0!==t){const r=t._$Cwt.indexOf(i);r>-1&&r<t._$C_t&&(t._$C_t=r,t.setValue(e))}})))}return i.Jb}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const f=(0,c.XM)(h)},38768:(e,t,r)=>{r.d(t,{DD:()=>i,G0:()=>I,IX:()=>m,O7:()=>y,Rx:()=>v,Ry:()=>_,Z_:()=>w,f0:()=>p,hu:()=>d,i0:()=>g,is:()=>h,jt:()=>x});class i extends TypeError{constructor(e,t){let r;const{message:i,explanation:n,...o}=e,{path:a}=e,s=0===a.length?i:`At path: ${a.join(".")} -- ${i}`;super(null!=n?n:s),null!=n&&(this.cause=s),Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>{var i;return null!==(i=r)&&void 0!==i?i:r=[e,...t()]}}}function n(e){return"object"==typeof e&&null!=e}function o(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function a(e,t,r,i){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:n,branch:a}=t,{type:s}=r,{refinement:c,message:l=`Expected a value of type \`${s}\`${c?` with refinement \`${c}\``:""}, but received: \`${o(i)}\``}=e;return{value:i,type:s,refinement:c,key:n[n.length-1],path:n,branch:a,...e,message:l}}function*s(e,t,r,i){var o;n(o=e)&&"function"==typeof o[Symbol.iterator]||(e=[e]);for(const n of e){const e=a(n,t,r,i);e&&(yield e)}}function*c(e,t,r={}){const{path:i=[],branch:o=[e],coerce:a=!1,mask:s=!1}=r,l={path:i,branch:o};if(a&&(e=t.coercer(e,l),s&&"type"!==t.type&&n(t.schema)&&n(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let d="valid";for(const i of t.validator(e,l))i.explanation=r.message,d="not_valid",yield[i,void 0];for(let[h,f,p]of t.entries(e,l)){const t=c(f,p,{path:void 0===h?i:[...i,h],branch:void 0===h?o:[...o,f],coerce:a,mask:s,message:r.message});for(const r of t)r[0]?(d=null!=r[0].refinement?"not_refined":"not_valid",yield[r[0],void 0]):a&&(f=r[1],void 0===h?e=f:e instanceof Map?e.set(h,f):e instanceof Set?e.add(f):n(e)&&(void 0!==f||h in e)&&(e[h]=f))}if("not_valid"!==d)for(const i of t.refiner(e,l))i.explanation=r.message,d="not_refined",yield[i,void 0];"valid"===d&&(yield[void 0,e])}class l{constructor(e){const{type:t,schema:r,validator:i,refiner:n,coercer:o=(e=>e),entries:a=function*(){}}=e;this.type=t,this.schema=r,this.entries=a,this.coercer=o,this.validator=i?(e,t)=>s(i(e,t),t,this,e):()=>[],this.refiner=n?(e,t)=>s(n(e,t),t,this,e):()=>[]}assert(e,t){return d(e,this,t)}create(e,t){return function(e,t,r){const i=f(e,t,{coerce:!0,message:r});if(i[0])throw i[0];return i[1]}(e,this,t)}is(e){return h(e,this)}mask(e,t){return function(e,t,r){const i=f(e,t,{coerce:!0,mask:!0,message:r});if(i[0])throw i[0];return i[1]}(e,this,t)}validate(e,t={}){return f(e,this,t)}}function d(e,t,r){const i=f(e,t,{message:r});if(i[0])throw i[0]}function h(e,t){return!f(e,t)[0]}function f(e,t,r={}){const n=c(e,t,r),o=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(n);if(o[0]){return[new i(o[0],(function*(){for(const e of n)e[0]&&(yield e[0])})),void 0]}return[void 0,o[1]]}function p(...e){const t="type"===e[0].type,r=e.map((e=>e.schema)),i=Object.assign({},...r);return t?$(i):_(i)}function u(e,t){return new l({type:e,schema:null,validator:t})}function m(e){return new l({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[r,i]of t.entries())yield[r,i,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${o(e)}`})}function y(){return u("boolean",(e=>"boolean"==typeof e))}function g(e){const t=o(e),r=typeof e;return new l({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||`Expected the literal \`${t}\`, but received: ${o(r)}`})}function b(){return u("never",(()=>!1))}function v(){return u("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${o(e)}`))}function _(e){const t=e?Object.keys(e):[],r=b();return new l({type:"object",schema:e||null,*entries(i){if(e&&n(i)){const n=new Set(Object.keys(i));for(const r of t)n.delete(r),yield[r,i[r],e[r]];for(const e of n)yield[e,i[e],r]}},validator:e=>n(e)||`Expected an object, but received: ${o(e)}`,coercer:e=>n(e)?{...e}:e})}function x(e){return new l({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function w(){return u("string",(e=>"string"==typeof e||`Expected a string, but received: ${o(e)}`))}function $(e){const t=Object.keys(e);return new l({type:"type",schema:e,*entries(r){if(n(r))for(const i of t)yield[i,r[i],e[i]]},validator:e=>n(e)||`Expected an object, but received: ${o(e)}`,coercer:e=>n(e)?{...e}:e})}function I(e){const t=e.map((e=>e.type)).join(" | ");return new l({type:"union",schema:null,coercer(t){for(const r of e){const[e,i]=r.validate(t,{coerce:!0});if(!e)return i}return t},validator(r,i){const n=[];for(const t of e){const[...e]=c(r,t,i),[o]=e;if(!o[0])return[];for(const[t]of e)t&&n.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${o(r)}`,...n]}})}}}]);
//# sourceMappingURL=5365-milStG2oZS4.js.map