"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[157],{9157:(F,y,s)=>{s.r(y),s.d(y,{CountriesModule:()=>R});var u=s(6814),p=s(3760),t=s(4946),Z=s(7398),l=s(6306),m=s(2096),C=s(9862);let h=(()=>{var e;class r{constructor(n){this.http=n,this.apiURL="https://restcountries.com/v3.1"}searchCountryByCode(n){return this.http.get(`${this.apiURL}/alpha/${n}`).pipe((0,Z.U)(a=>a.length>0?a[0]:null),(0,l.K)(()=>(0,m.of)(null)))}searchCapital(n){return this.http.get(`${this.apiURL}/capital/${n}`).pipe((0,l.K)(()=>(0,m.of)([])))}searchCountry(n){return this.http.get(`${this.apiURL}/name/${n}`).pipe((0,l.K)(()=>(0,m.of)([])))}searchRegion(n){return this.http.get(`${this.apiURL}/region/${n}`).pipe((0,l.K)(()=>(0,m.of)([])))}}return(e=r).\u0275fac=function(n){return new(n||e)(t.LFG(C.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),r})(),g=(()=>{var e;class r{constructor(){this.placeholder="",this.onValue=new t.vpe}emitValue(n){this.onValue.emit(n)}}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{onValue:"onValue"},decls:2,vars:1,consts:[["type","text",1,"form-control",3,"placeholder","keyup.enter"],["txtInput",""]],template:function(n,a){if(1&n){const c=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup.enter",function(){t.CHM(c);const S=t.MAs(1);return t.KtG(a.emitValue(S.value))}),t.qZA()}2&n&&t.s9C("placeholder",a.placeholder)},encapsulation:2}),r})();function _(e,r){1&e&&(t.TgZ(0,"div",2),t._uU(1," No hay resultados.\n"),t.qZA())}const f=function(e){return["/countries/by",e]};function v(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Info"),t.qZA()()()),2&e){const o=r.$implicit,n=r.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.hij(" ",o.flag," "),t.xp6(2),t.Q6J("src",o.flags.svg,t.LSH)("alt",o.name.common),t.xp6(2),t.Oqu(o.name.common),t.xp6(2),t.Oqu(o.capital),t.xp6(2),t.Oqu(t.lcZ(13,8,o.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(10,f,o.cca3))}}function T(e,r){if(1&e&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icono"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblacion"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,v,17,12,"tr",4),t.qZA()()),2&e){const o=t.oxw();t.xp6(17),t.Q6J("ngForOf",o.countries)}}let d=(()=>{var e;class r{constructor(){this.countries=[]}}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning"],[1,"table","table-hover","table-bordered"],[4,"ngFor","ngForOf"],[1,"bandera",3,"src","alt"],[3,"routerLink"]],template:function(n,a){if(1&n&&(t.YNc(0,_,2,0,"div",0),t.YNc(1,T,18,1,"ng-template",null,1,t.W1O)),2&n){const c=t.MAs(2);t.Q6J("ngIf",0===a.countries.length)("ngIfElse",c)}},dependencies:[u.sg,u.O5,p.rH,u.JJ],styles:[".bandera[_ngcontent-%COMP%]{width:100px}"]}),r})(),q=(()=>{var e;class r{constructor(n){this.countriesService=n,this.busqueda="Buscar por Capital",this.countries=[]}searchByCapital(n){this.countriesService.searchCapital(n).subscribe({next:a=>{this.countries=a}})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],[3,"placeholder","onValue"],[3,"countries"]],template:function(n,a){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(i){return a.searchByCapital(i)}),t.qZA()()(),t._UZ(6,"hr"),t.TgZ(7,"div",0)(8,"div",1),t._UZ(9,"countries-country-table",3),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("placeholder",a.busqueda),t.xp6(4),t.Q6J("countries",a.countries))},dependencies:[g,d],encapsulation:2}),r})(),A=(()=>{var e;class r{constructor(n){this.countryService=n,this.busqueda="Buscar por Pais",this.countries=[]}searchByPais(n){this.countryService.searchCountry(n).subscribe({next:a=>{this.countries=a}})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],[3,"placeholder","onValue"],[3,"countries"]],template:function(n,a){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Pais"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(i){return a.searchByPais(i)}),t.qZA()()(),t._UZ(6,"hr"),t.TgZ(7,"div",0)(8,"div",1),t._UZ(9,"countries-country-table",3),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("placeholder",a.busqueda),t.xp6(4),t.Q6J("countries",a.countries))},dependencies:[g,d],encapsulation:2}),r})(),U=(()=>{var e;class r{constructor(n){this.countryService=n,this.busqueda="Buscar por Region",this.countries=[]}searchByRegion(n){this.countryService.searchRegion(n).subscribe({next:a=>{this.countries=a}})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],[3,"placeholder","onValue"],[3,"countries"]],template:function(n,a){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onValue",function(i){return a.searchByRegion(i)}),t.qZA()()(),t._UZ(6,"hr"),t.TgZ(7,"div",0)(8,"div",1),t._UZ(9,"countries-country-table",3),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("placeholder",a.busqueda),t.xp6(4),t.Q6J("countries",a.countries))},dependencies:[g,d],encapsulation:2}),r})();var b=s(4664);function x(e,r){1&e&&(t.TgZ(0,"div",2),t._uU(1," Espera por favor "),t.qZA())}function B(e,r){if(1&e&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",3)(9,"div",5)(10,"h3"),t._uU(11,"Bandera"),t.qZA(),t._UZ(12,"img",6),t.qZA(),t.TgZ(13,"div",7)(14,"h3"),t._uU(15,"Informaci\xf3n"),t.qZA(),t.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),t._uU(19,"Poblaci\xf3n: "),t.qZA(),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"li",9)(23,"strong"),t._uU(24,"Codigo: "),t.qZA(),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",10)(27,"div",7)(28,"h3"),t._uU(29,"Traduciones:"),t.qZA(),t.TgZ(30,"div",11)(31,"span",12),t._uU(32),t.qZA(),t.TgZ(33,"span",12),t._uU(34),t.qZA(),t.TgZ(35,"span",12),t._uU(36),t.qZA(),t.TgZ(37,"span",12),t._uU(38),t.qZA(),t.TgZ(39,"span",12),t._uU(40),t.qZA(),t.TgZ(41,"span",12),t._uU(42),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA(),t.TgZ(45,"span",12),t._uU(46),t.qZA(),t.TgZ(47,"span",12),t._uU(48),t.qZA()()()()()),2&e){const o=t.oxw();t.xp6(6),t.Oqu(o.country.name.common),t.xp6(6),t.Q6J("src",o.country.flags.svg,t.LSH)("alt",o.country.name.common),t.xp6(8),t.hij("",t.lcZ(21,14,o.country.population)," "),t.xp6(5),t.hij("",o.country.cca3," "),t.xp6(7),t.Oqu(o.country.translations.ara.common),t.xp6(2),t.Oqu(o.country.translations.bre.common),t.xp6(2),t.Oqu(o.country.translations.ces.common),t.xp6(2),t.Oqu(o.country.translations.cym.common),t.xp6(2),t.Oqu(o.country.translations.deu.common),t.xp6(2),t.Oqu(o.country.translations.fin.common),t.xp6(2),t.Oqu(o.country.translations.ita.common),t.xp6(2),t.Oqu(o.country.translations.kor.common),t.xp6(2),t.Oqu(o.country.translations.per.common)}}const P=[{path:"by-capital",component:q},{path:"by-country",component:A},{path:"by-region",component:U},{path:"by/:id",component:(()=>{var e;class r{constructor(n,a,c){this.activatedRoute=n,this.countriesService=a,this.router=c}ngOnInit(){this.activatedRoute.params.pipe((0,b.w)(({id:n})=>this.countriesService.searchCountryByCode(n))).subscribe(n=>n?this.country=n:this.router.navigateByUrl(""))}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(p.gz),t.Y36(h),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,a){if(1&n&&(t.YNc(0,x,2,0,"ng-template",null,0,t.W1O),t.YNc(2,B,49,16,"div",1)),2&n){const c=t.MAs(1);t.xp6(2),t.Q6J("ngIf",a.country)("ngIfElse",c)}},dependencies:[u.O5,u.JJ],encapsulation:2}),r})()},{path:"**",redirectTo:"by-capital"}];let J=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(P)]}),r})();var O=s(6208);let R=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,p.Bz,J,O.m]}),r})()}}]);