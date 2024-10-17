import{a as de}from"./chunk-3SAN4RQ4.js";import{a as S}from"./chunk-HIHKXWVL.js";import{a as Q,b as W,c as X,d as Y,e as Z,g as ee,h as te,i as ie,j as oe,k as re,l as ne,m as le,n as ae}from"./chunk-I7A4Q7BR.js";import{a as ce}from"./chunk-P2QTSFM2.js";import{$ as D,Ba as I,D as a,Da as me,E as u,I as m,J as c,M as o,N as t,O as s,P as O,Q as v,R as d,V as P,W as r,X as R,Y as p,Z as y,aa as j,ca as B,d as T,ea as G,fa as z,ma as C,na as _,o as b,oa as U,qa as $,r as L,s as f,t as x,w as M,wa as H,x as q,xa as J,ya as V,za as K}from"./chunk-Z2VWX25V.js";var k=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=f({type:i,selectors:[["vehiculo-layout-vehiculo"]],decls:1,vars:0,template:function(e,l){e&1&&s(0,"router-outlet")},dependencies:[J]})};var N=T(ce());var ge=()=>["/dashboard/vehiculo/add-vehiculos"],be=i=>["/dashboard/vehiculo/editar-vehiculos",i];function xe(i,n){i&1&&(o(0,"div",2),r(1,` NO hay Vehiculos que mostrar
`),t())}function ye(i,n){if(i&1){let e=O();o(0,"tbody")(1,"tr",15)(2,"td",16),r(3),t(),o(4,"td",16),r(5),t(),o(6,"td",16),r(7),t(),o(8,"td",16),r(9),B(10,"date"),t(),o(11,"td",16),r(12),t(),o(13,"td",16),r(14),t(),o(15,"td",16),r(16),t(),o(17,"th")(18,"button",17),r(19,"Actualizar"),t()(),o(20,"th")(21,"button",18),v("click",function(){let h=M(e).$implicit,he=d(2);return q(he.onDeleteVehiculo(h.id))}),r(22,"Eliminar"),t()()()()}if(i&2){let e=n.$implicit,l=n.index;a(3),p(" ",l+1,""),a(2),p(" ",e.placa,""),a(2),p(" ",e.marca,""),a(2),p(" ",G(10,10,e.modeloAnio,"dd-MM-yyyy"),""),a(3),p(" ",e.modeloCarroceria,""),a(2),p(" ",e.tipoCombustible,""),a(2),y(" ",e.propietario.primerNombre,""," "," ",e.propietario.primerApellido,""),a(2),c("routerLink",j(13,be,e.id))}}function Ce(i,n){if(i&1&&(o(0,"div",3)(1,"span",4),r(2,"Listado de Vehiculos"),t(),o(3,"div",5)(4,"div",6)(5,"button",7),r(6,"Nuevo Vehiculo"),t(),o(7,"div",8)(8,"table",9)(9,"thead",10)(10,"tr")(11,"th",11),r(12,"#"),t(),o(13,"th",12),r(14,"Placa "),t(),o(15,"th",11),r(16,"Marca"),t(),o(17,"th",11),r(18,"A\xF1o Modelo"),t(),o(19,"th",11),r(20,"Modelo Carroceria"),t(),o(21,"th",11),r(22,"Tipo de Combustible"),t(),o(23,"th",12),r(24,"Nombre Propietario"),t(),o(25,"th",13),r(26,"Acciones"),t()()(),m(27,ye,23,15,"tbody",14),t()()()()()),i&2){let e=d();a(5),c("routerLink",D(2,ge)),a(22),c("ngForOf",e.vehiculos)}}var F=class i{constructor(n,e){this.vehiculoService=n;this.router=e}vehiculos=[];ngOnInit(){this.vehiculoService.getPVehiculo().subscribe(n=>this.vehiculos=n),console.log(this.vehiculos)}onDeleteVehiculo(n){N.default.fire({title:"Seguro que quiere eliminar?",text:"Cuidado el vehiculo sera eliminado del sistema!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si"}).then(e=>{e.isConfirmed&&(this.vehiculoService.deleteVehiculoById(n).subscribe(()=>{this.vehiculos=this.vehiculos.filter(l=>l.id!==n),this.router.navigate(["/dashboard/vehiculo/list-vehiculos"],{skipLocationChange:!0}).then(()=>{this.router.navigate(["/dashboard/vehiculo/list-vehiculos"],{state:{}})})}),N.default.fire({title:"Eliminado!",text:"Vehiculo eliminado con exito.",icon:"success"}))})}static \u0275fac=function(e){return new(e||i)(u(S),u(V))};static \u0275cmp=f({type:i,selectors:[["vehiculo-list-vehiculo"]],decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"flex","flex-col"],[1,"text-4xl","text-cyan-800","text-center","font-medium","leading-tight"],[1,"overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","min-w-full","py-2","sm:px-6","lg:px-8"],[1,"btn","btn-lm","btn-outline-primary","m-2",3,"routerLink"],[1,"overflow-hidden"],["data-twe-spy","scroll","data-twe-target","#scrollspy-collapsible","data-twe-offset","0",1,"min-w-full","text-center","text-sm","font-light","text-surface","dark:text-white"],[1,"border-b","border-neutral-200","bg-[#68829b]","font-medium","text-white","dark:border-white/10"],["scope","col",1,"px-6","py-4","text-left"],["scope","col",1,"px-6","py-4"],["colspan","2",2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"border-b","border-neutral-200","dark:border-white/10","text-dark"],[1,"whitespace-nowrap","px-6","py-4","text-left"],[1,"btn","btn-sm","btn-outline-success","m-1",3,"routerLink"],["type","submit",1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(e,l){if(e&1&&m(0,xe,2,0,"div",1)(1,Ce,28,3,"ng-template",null,0,z),e&2){let h=P(2);c("ngIf",l.vehiculos.length===0)("ngIfElse",h)}},dependencies:[C,_,K,U]})};var w=T(ce());function _e(i,n){i&1&&(o(0,"p",26)(1,"span",27),r(2,"Oops!"),t(),r(3," la placa es requerida! "),t())}function Ve(i,n){if(i&1&&(o(0,"div"),m(1,_e,4,0,"p",25),t()),i&2){let e=d();a(),c("ngIf",e.vehiculoForm.controls.placa.errors==null?null:e.vehiculoForm.controls.placa.errors.required)}}function Se(i,n){i&1&&(o(0,"p",26)(1,"span",27),r(2,"Oops!"),t(),r(3," la marca es requerida! "),t())}function ke(i,n){if(i&1&&(o(0,"div"),m(1,Se,4,0,"p",25),t()),i&2){let e=d();a(),c("ngIf",e.vehiculoForm.controls.marca.errors==null?null:e.vehiculoForm.controls.marca.errors.required)}}function Ee(i,n){i&1&&(o(0,"p",26)(1,"span",27),r(2,"Oops!"),t(),r(3," El tipo de carroceria es requerido! "),t())}function Fe(i,n){if(i&1&&(o(0,"div"),m(1,Ee,4,0,"p",25),t()),i&2){let e=d();a(),c("ngIf",e.vehiculoForm.controls.modeloCarroceria.errors==null?null:e.vehiculoForm.controls.modeloCarroceria.errors.required)}}function we(i,n){i&1&&(o(0,"p",26)(1,"span",27),r(2,"Oops!"),t(),r(3," El tipo de combustible es requerido! "),t())}function Ae(i,n){if(i&1&&(o(0,"div"),m(1,we,4,0,"p",25),t()),i&2){let e=d();a(),c("ngIf",e.vehiculoForm.controls.tipoCombustible.errors==null?null:e.vehiculoForm.controls.tipoCombustible.errors.required)}}function Ie(i,n){if(i&1&&(o(0,"option",28),r(1),t()),i&2){let e=n.$implicit;c("ngValue",e.id),a(),y(" ",e.primerNombre,""," ","",e.primerApellido,"")}}function Ne(i,n){i&1&&(o(0,"p",26)(1,"span",27),r(2,"Oops!"),t(),r(3," El propietario es requerido! "),t())}function Te(i,n){if(i&1&&(o(0,"div"),m(1,Ne,4,0,"p",25),t()),i&2){let e=d();a(),c("ngIf",e.vehiculoForm.controls.propietario.errors==null?null:e.vehiculoForm.controls.propietario.errors.required)}}function Le(i,n){i&1&&(o(0,"p",26)(1,"span",27),r(2,"Oops!"),t(),r(3," La fecha de ingreso es requerida! "),t())}function Me(i,n){if(i&1&&(o(0,"div"),m(1,Le,4,0,"p",25),t()),i&2){let e=d();a(),c("ngIf",e.vehiculoForm.controls.modeloAnio.errors==null?null:e.vehiculoForm.controls.modeloAnio.errors.required)}}var g=class i{constructor(n,e,l,h){this.vehiculoService=n;this.propietarioService=e;this.router=l;this.route=h}title="Agregar Vehiculo";fb=L(le);vl=W;propietarios=[];vehiculos=[];ngOnInit(){this.dataPropietario(),this.dataVehiculos(),this.onUpdate()}vehiculoForm=this.fb.group({id:[0],placa:["",[this.vl.required,this.vl.minLength(6)]],marca:["",[this.vl.required]],modeloAnio:["",[this.vl.required]],modeloCarroceria:["",[this.vl.required]],tipoCombustible:["",[this.vl.required]],propietario:this.fb.group({id:[0,[this.vl.required]]})});get currentVehiculo(){return this.vehiculoForm.value}dataPropietario(){this.propietarioService.getPropietario().subscribe(n=>this.propietarios=n)}dataVehiculos(){this.vehiculoService.getPVehiculo().subscribe(n=>this.vehiculos=n)}onSubmit(){if(this.vehiculoForm.invalid){w.default.fire({icon:"error",title:"Oops...",text:"Debes diligenciar todos los campos!"});return}this.currentVehiculo.id&&this.vehiculoService.updateVehiculo(this.currentVehiculo).subscribe({next:()=>{this.router.navigateByUrl("/dashboard/vehiculo/list-vehiculos"),w.default.fire({title:"Actualizado vehiculo!",text:"Vehiculo actualizado con exito!",icon:"success"})}}),this.vehiculoService.addVehiculo(this.currentVehiculo).subscribe({next:n=>{console.log(n),this.router.navigateByUrl("/dashboard/vehiculo/list-vehiculos"),w.default.fire({title:"Creado nuevo vehiculo!",text:"Vehiculo creado con exito!",icon:"success"})}})}onReset(){this.vehiculoForm.reset()}onUpdate(){this.route.paramMap.subscribe(n=>{let e=+(n.get("id")||"0");e>0&&(this.title="Actualizar Vehiculo",this.vehiculoService.findById(e).subscribe(l=>{this.vehiculoForm.patchValue({id:l.id,placa:l.placa,marca:l.marca,modeloAnio:l.modeloAnio,modeloCarroceria:l.modeloCarroceria,tipoCombustible:l.tipoCombustible,propietario:this.fb.group({id:l.propietario.id})})}))})}static \u0275fac=function(e){return new(e||i)(u(S),u(de),u(V),u(H))};static \u0275cmp=f({type:i,selectors:[["vehiculo-add-vehiculo"]],decls:44,vars:11,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"py-8","px-4","mx-auto","max-w-2xl","lg:py-16"],[1,"mb-4","text-xl","font-bold","text-gray-900","dark:text-white"],["autocomplete","on",3,"ngSubmit","formGroup"],[1,"grid","gap-4","sm:grid-cols-2","sm:gap-6"],[1,"w-full"],["for","placa",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","placa","type","text","name","placa","id","placa",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[4,"ngIf"],["for","marca",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","marca","type","text","name","marca","id","marca",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","modeloCarroceria",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","modeloCarroceria","type","text","name","modeloCarroceria","id","modeloCarroceria",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","tipoCombustible",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","tipoCombustible","type","text","name","tipoCombustible","id","tipoCombustible",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["formGroupName","propietario",1,"sm:col-span-2"],["for","id",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","id","name","id","id","id",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[3,"selected","ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["for","modeloAnio",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["formControlName","modeloAnio","name","modeloAnio","type","date","id","modeloAnio",1,"shadow-sm","bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-500","focus:border-primary-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500","dark:shadow-sm-light"],[1,"d-flex","justify-content-between"],["type","submit",1,"inline-flex","items-center","px-5","py-2.5","mt-4","sm:mt-6","text-sm","font-medium","text-center","text-white","bg-primary-700","rounded-lg","focus:ring-4","focus:ring-primary-200","dark:focus:ring-primary-900","hover:bg-primary-800"],["type","reset",1,"inline-flex","items-center","px-5","py-2.5","mt-4","sm:mt-6","text-sm","font-medium","text-center","text-white","bg-primary-700","rounded-lg","focus:ring-4","focus:ring-primary-200","dark:focus:ring-primary-900","hover:bg-primary-800",3,"click"],["class","mt-2 text-sm text-red-600 dark:text-red-500",4,"ngIf"],[1,"mt-2","text-sm","text-red-600","dark:text-red-500"],[1,"font-medium"],[3,"ngValue"]],template:function(e,l){e&1&&(o(0,"section",0)(1,"div",1)(2,"h2",2),r(3),t(),o(4,"form",3),v("ngSubmit",function(){return l.onSubmit()}),o(5,"div",4)(6,"div",5)(7,"label",6),r(8,"Placa"),t(),s(9,"input",7),m(10,Ve,2,1,"div",8),t(),o(11,"div",5)(12,"label",9),r(13,"Marca"),t(),s(14,"input",10),m(15,ke,2,1,"div",8),t(),o(16,"div",5)(17,"label",11),r(18,"Tipo Carroceria"),t(),s(19,"input",12),m(20,Fe,2,1,"div",8),t(),o(21,"div",5)(22,"label",13),r(23,"Tipo de Combustible"),t(),s(24,"input",14),m(25,Ae,2,1,"div",8),t(),o(26,"div",15)(27,"label",16),r(28,"Propietario Vehiculo"),t(),o(29,"select",17)(30,"option",18),r(31,"Seleccione el Propietario"),t(),m(32,Ie,2,4,"option",19),t(),m(33,Te,2,1,"div",8),t(),o(34,"div",5)(35,"label",20),r(36,"Fecha de Ingreso"),t(),s(37,"input",21),m(38,Me,2,1,"div",8),t()(),o(39,"div",22)(40,"button",23),r(41),t(),o(42,"button",24),v("click",function(){return l.onReset()}),r(43," Limpiar Campos "),t()()()()()),e&2&&(a(3),R(l.title),a(),c("formGroup",l.vehiculoForm),a(6),c("ngIf",l.vehiculoForm.controls.placa.invalid&&(l.vehiculoForm.controls.placa.dirty||l.vehiculoForm.controls.placa.touched)),a(5),c("ngIf",l.vehiculoForm.controls.marca.invalid&&(l.vehiculoForm.controls.marca.dirty||l.vehiculoForm.controls.marca.touched)),a(5),c("ngIf",l.vehiculoForm.controls.modeloCarroceria.invalid&&(l.vehiculoForm.controls.modeloCarroceria.dirty||l.vehiculoForm.controls.modeloCarroceria.touched)),a(5),c("ngIf",l.vehiculoForm.controls.tipoCombustible.invalid&&(l.vehiculoForm.controls.tipoCombustible.dirty||l.vehiculoForm.controls.tipoCombustible.touched)),a(5),c("ngValue",0),a(2),c("ngForOf",l.propietarios),a(),c("ngIf",l.vehiculoForm.controls.propietario.invalid&&(l.vehiculoForm.controls.propietario.dirty||l.vehiculoForm.controls.propietario.touched)),a(5),c("ngIf",l.vehiculoForm.controls.modeloAnio.invalid&&(l.vehiculoForm.controls.modeloAnio.dirty||l.vehiculoForm.controls.modeloAnio.touched)),a(3),p("",l.currentVehiculo.id>0?"Actualizar":"Agregar"," "))},dependencies:[C,_,Z,re,ne,Q,oe,X,Y,ee,ie,te]})};var qe=[{path:"",component:k},{path:"list-vehiculos",component:F},{path:"add-vehiculos",component:g},{path:"editar-vehiculos/:id",component:g},{path:"**",redirectTo:"home"}],A=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=x({type:i});static \u0275inj=b({imports:[I.forChild(qe),I]})};var se=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=x({type:i});static \u0275inj=b({imports:[$,A,ae,me]})};export{se as VehiculoModule};
