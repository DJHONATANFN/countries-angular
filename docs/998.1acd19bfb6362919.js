"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[998],{3998:(ne,v,a)=>{a.r(v),a.d(v,{CountriesModule:()=>ee});var c=a(6814),p=a(3760),e=a(4946),C=a(6306),Z=a(2096),T=a(7398),A=a(9862);let h=(()=>{var n;class s{constructor(t){this.http=t,this.apiURL="https://restcountries.com/v3.1"}getCountriesRequest(t){return this.http.get(t).pipe((0,C.K)(()=>(0,Z.of)([])))}searchCountryByCode(t){return this.http.get(`${this.apiURL}/alpha/${t}`).pipe((0,T.U)(r=>r.length>0?r[0]:null),(0,C.K)(()=>(0,Z.of)(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiURL}/capital/${t}`)}searchCountry(t){return this.getCountriesRequest(`${this.apiURL}/name/${t}`)}searchRegion(t){return this.getCountriesRequest(`${this.apiURL}/region/${t}`)}}return(n=s).\u0275fac=function(t){return new(t||n)(e.LFG(A.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();var q=a(8645),U=a(7394);class w extends U.w0{constructor(s,o){super()}schedule(s,o=0){return this}}const g={setInterval(n,s,...o){const{delegate:t}=g;return t?.setInterval?t.setInterval(n,s,...o):setInterval(n,s,...o)},clearInterval(n){const{delegate:s}=g;return(s?.clearInterval||clearInterval)(n)},delegate:void 0};var B=a(9039);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class d{constructor(s,o=d.now){this.schedulerActionCtor=s,this.now=o}schedule(s,o=0,t){return new this.schedulerActionCtor(this,s).schedule(t,o)}}d.now=b.now;const O=new class I extends d{constructor(s,o=d.now){super(s,o),this.actions=[],this._active=!1}flush(s){const{actions:o}=this;if(this._active)return void o.push(s);let t;this._active=!0;do{if(t=s.execute(s.state,s.delay))break}while(s=o.shift());if(this._active=!1,t){for(;s=o.shift();)s.unsubscribe();throw t}}}(class P extends w{constructor(s,o){super(s,o),this.scheduler=s,this.work=o,this.pending=!1}schedule(s,o=0){var t;if(this.closed)return this;this.state=s;const r=this.id,i=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(i,r,o)),this.pending=!0,this.delay=o,this.id=null!==(t=this.id)&&void 0!==t?t:this.requestAsyncId(i,this.id,o),this}requestAsyncId(s,o,t=0){return g.setInterval(s.flush.bind(s,this),t)}recycleAsyncId(s,o,t=0){if(null!=t&&this.delay===t&&!1===this.pending)return o;null!=o&&g.clearInterval(o)}execute(s,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(s,o);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,o){let r,t=!1;try{this.work(s)}catch(i){t=!0,r=i||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:s,scheduler:o}=this,{actions:t}=o;this.work=this.state=this.scheduler=null,this.pending=!1,(0,B.P)(t,this),null!=s&&(this.id=this.recycleAsyncId(o,s,null)),this.delay=null,super.unsubscribe()}}});var S=a(9360),R=a(8251);let _=(()=>{var n;class s{constructor(){this.debounce=new q.x,this.placeholder="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debounceSuscription=this.debounce.pipe(function L(n,s=O){return(0,S.e)((o,t)=>{let r=null,i=null,u=null;const m=()=>{if(r){r.unsubscribe(),r=null;const l=i;i=null,t.next(l)}};function te(){const l=u+n,x=s.now();if(x<l)return r=this.schedule(void 0,l-x),void t.add(r);m()}o.subscribe((0,R.x)(t,l=>{i=l,u=s.now(),r||(r=s.schedule(te,n),t.add(r))},()=>{m(),t.complete()},void 0,()=>{i=r=null}))})}(1e3)).subscribe({next:t=>{this.onDebounce.emit(t)}})}ngOnDestroy(){this.debounceSuscription?.unsubscribe()}emitValue(t){this.onValue.emit(t)}onKeyPress(t){this.debounce.next(t)}}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:1,consts:[["type","text",1,"form-control",3,"placeholder","keyup"],["txtInput",""]],template:function(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(i);const m=e.MAs(1);return e.KtG(r.onKeyPress(m.value))}),e.qZA()}2&t&&e.s9C("placeholder",r.placeholder)},encapsulation:2}),s})(),f=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando..."),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;background-color:#000;color:#fff;padding:5px 10px;border-radius:20px;display:flex;align-items:center;box-shadow:0 0 5px #000}span[_ngcontent-%COMP%]{margin-left:5px}"]}),s})();function J(n,s){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay resultados.\n"),e.qZA())}const M=function(n){return["/countries/by",n]};function N(n,s){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",6),e._uU(16,"Info"),e.qZA()()()),2&n){const o=s.$implicit,t=s.index;e.xp6(2),e.Oqu(t+1),e.xp6(2),e.hij(" ",o.flag," "),e.xp6(2),e.Q6J("src",o.flags.svg,e.LSH)("alt",o.name.common),e.xp6(2),e.Oqu(o.name.common),e.xp6(2),e.Oqu(o.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,o.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,M,o.cca3))}}function F(n,s){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Icono"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Poblacion"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,N,17,12,"tr",4),e.qZA()()),2&n){const o=e.oxw();e.xp6(17),e.Q6J("ngForOf",o.countries)}}let y=(()=>{var n;class s{constructor(){this.countries=[]}}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning"],[1,"table","table-hover","table-bordered"],[4,"ngFor","ngForOf"],[1,"bandera",3,"src","alt"],[3,"routerLink"]],template:function(t,r){if(1&t&&(e.YNc(0,J,2,0,"div",0),e.YNc(1,F,18,1,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",0===r.countries.length)("ngIfElse",i)}},dependencies:[c.sg,c.O5,p.rH,c.JJ],styles:[".bandera[_ngcontent-%COMP%]{width:100px}"]}),s})();function Q(n,s){1&n&&e._UZ(0,"shared-loading-spinner")}let Y=(()=>{var n;class s{constructor(t){this.countriesService=t,this.busqueda="Buscar por Capital",this.countries=[],this.isLoading=!1}searchByCapital(t){this.isLoading=!0,this.countriesService.searchCapital(t).subscribe({next:r=>{this.countries=r,this.isLoading=!1}})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],[3,"placeholder","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(u){return r.searchByCapital(u)}),e.qZA()()(),e._UZ(6,"hr"),e.TgZ(7,"div",0)(8,"div",1),e.YNc(9,Q,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-country-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("placeholder",r.busqueda),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.O5,_,f,y],encapsulation:2}),s})();function k(n,s){1&n&&e._UZ(0,"shared-loading-spinner")}let D=(()=>{var n;class s{constructor(t){this.countryService=t,this.busqueda="Buscar por Pais",this.countries=[],this.isLoading=!1}searchByPais(t){this.isLoading=!0,this.countryService.searchCountry(t).subscribe({next:r=>{this.countries=r,this.isLoading=!1}})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],[3,"placeholder","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pais"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(u){return r.searchByPais(u)}),e.qZA()()(),e._UZ(6,"hr"),e.TgZ(7,"div",0)(8,"div",1),e.YNc(9,k,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-country-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("placeholder",r.busqueda),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.O5,_,f,y],encapsulation:2}),s})();const $=function(n){return{"btn-outline-primary":n}};function E(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const i=e.CHM(o).$implicit,u=e.oxw();return e.KtG(u.searchByRegion(i))}),e._uU(1),e.qZA()}if(2&n){const o=s.$implicit,t=e.oxw();e.Q6J("ngClass",e.VKq(2,$,t.selectedRegion===o)),e.xp6(1),e.hij(" ",o," ")}}function V(n,s){1&n&&e._UZ(0,"shared-loading-spinner")}let K=(()=>{var n;class s{constructor(t){this.countryService=t,this.busqueda="Buscar por Region",this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}searchByRegion(t){this.selectedRegion=t,this.isLoading=!0,this.countryService.searchRegion(t).subscribe({next:r=>{this.countries=r,this.isLoading=!1}})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Region"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,E,2,4,"button",2),e.qZA()(),e._UZ(6,"hr"),e.TgZ(7,"div",0)(8,"div",3),e.YNc(9,V,1,0,"shared-loading-spinner",4),e._UZ(10,"countries-country-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",r.regions),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.mk,c.sg,c.O5,f,y],encapsulation:2}),s})();var j=a(4664);function X(n,s){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espera por favor "),e.qZA())}function z(n,s){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pais: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()(),e._UZ(7,"hr"),e.qZA()(),e.TgZ(8,"div",3)(9,"div",5)(10,"h3"),e._uU(11,"Bandera"),e.qZA(),e._UZ(12,"img",6),e.qZA(),e.TgZ(13,"div",7)(14,"h3"),e._uU(15,"Informaci\xf3n"),e.qZA(),e.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),e._uU(19,"Poblaci\xf3n: "),e.qZA(),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"li",9)(23,"strong"),e._uU(24,"Codigo: "),e.qZA(),e._uU(25),e.qZA()()()(),e.TgZ(26,"div",10)(27,"div",7)(28,"h3"),e._uU(29,"Traduciones:"),e.qZA(),e.TgZ(30,"div",11)(31,"span",12),e._uU(32),e.qZA(),e.TgZ(33,"span",12),e._uU(34),e.qZA(),e.TgZ(35,"span",12),e._uU(36),e.qZA(),e.TgZ(37,"span",12),e._uU(38),e.qZA(),e.TgZ(39,"span",12),e._uU(40),e.qZA(),e.TgZ(41,"span",12),e._uU(42),e.qZA(),e.TgZ(43,"span",12),e._uU(44),e.qZA(),e.TgZ(45,"span",12),e._uU(46),e.qZA(),e.TgZ(47,"span",12),e._uU(48),e.qZA()()()()()),2&n){const o=e.oxw();e.xp6(6),e.Oqu(o.country.name.common),e.xp6(6),e.Q6J("src",o.country.flags.svg,e.LSH)("alt",o.country.name.common),e.xp6(8),e.hij("",e.lcZ(21,14,o.country.population)," "),e.xp6(5),e.hij("",o.country.cca3," "),e.xp6(7),e.Oqu(o.country.translations.ara.common),e.xp6(2),e.Oqu(o.country.translations.bre.common),e.xp6(2),e.Oqu(o.country.translations.ces.common),e.xp6(2),e.Oqu(o.country.translations.cym.common),e.xp6(2),e.Oqu(o.country.translations.deu.common),e.xp6(2),e.Oqu(o.country.translations.fin.common),e.xp6(2),e.Oqu(o.country.translations.ita.common),e.xp6(2),e.Oqu(o.country.translations.kor.common),e.xp6(2),e.Oqu(o.country.translations.per.common)}}const H=[{path:"by-capital",component:Y},{path:"by-country",component:D},{path:"by-region",component:K},{path:"by/:id",component:(()=>{var n;class s{constructor(t,r,i){this.activatedRoute=t,this.countriesService=r,this.router=i}ngOnDestroy(){this.countrySuscription?.unsubscribe()}ngOnInit(){this.countrySuscription=this.activatedRoute.params.pipe((0,j.w)(({id:t})=>this.countriesService.searchCountryByCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(p.gz),e.Y36(h),e.Y36(p.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,r){if(1&t&&(e.YNc(0,X,2,0,"ng-template",null,0,e.W1O),e.YNc(2,z,49,16,"div",1)),2&t){const i=e.MAs(1);e.xp6(2),e.Q6J("ngIf",r.country)("ngIfElse",i)}},dependencies:[c.O5,c.JJ],encapsulation:2}),s})()},{path:"**",redirectTo:"by-capital"}];let G=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(H)]}),s})();var W=a(6208);let ee=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,p.Bz,G,W.m]}),s})()}}]);