import{a as lt}from"./chunk-E37PVJRX.js";import{a as et,b as rt,c as ot,d as it,e as nt,f as dt,g as ct,k as at,l as pt}from"./chunk-ENSCK24I.js";import{a as mt}from"./chunk-7A4U7ZJ5.js";import{Aa as tt,B as s,Ba as ut,D as c,E as u,I as p,J as a,M as n,N as o,O as m,P as $,Q as x,R as l,V as G,W as i,X as A,Y as _,ba as V,ca as H,d as O,da as z,g as T,i as R,k as j,ka as J,la as k,n as h,na as K,o as P,oa as Q,q,qa as W,r as M,s as g,t as E,ua as X,va as Y,w as B,wa as C,x as U,xa as Z,za as D}from"./chunk-4EQGBAJ3.js";var S=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["product-layout-product"]],decls:1,vars:0,template:function(t,d){t&1&&m(0,"router-outlet")},dependencies:[Y]})};var y=O(mt());var b=class e{constructor(r){this.http=r}baseUrl=tt.baseUrl;getProduct(){return this.http.get(`${this.baseUrl}/api/products`)}getPageable(r){return this.http.get(`${this.baseUrl}/api/products/page/${r}`)}addProduct(r){return this.http.post(`${this.baseUrl}/api/products/create`,r)}updateProduct(r){if(!r.id)throw Error("Producto requerido");return this.http.post(`${this.baseUrl}/api/products`,r)}deleteProductById(r){return this.http.delete(`${this.baseUrl}/api/products/${r}`).pipe(j(t=>T(!1)),R(t=>!0))}static \u0275fac=function(t){return new(t||e)(q(W))};static \u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})};function yt(e,r){e&1&&(n(0,"p",20)(1,"span",21),i(2,"Oops!"),o(),i(3," El nombre del producto es requerido! "),o())}function ht(e,r){if(e&1&&(n(0,"div"),p(1,yt,4,0,"p",19),o()),e&2){let t=l();c(),a("ngIf",t.productForm.controls.name.errors==null?null:t.productForm.controls.name.errors.required)}}function Pt(e,r){e&1&&(n(0,"p",20)(1,"span",21),i(2,"Oops!"),o(),i(3,"La referencia del producto es requerida! "),o())}function Et(e,r){if(e&1&&(n(0,"div"),p(1,Pt,4,0,"p",19),o()),e&2){let t=l();c(),a("ngIf",t.productForm.controls.sku.errors==null?null:t.productForm.controls.sku.errors.required)}}function _t(e,r){e&1&&(n(0,"p",20)(1,"span",21),i(2,"Oops!"),o(),i(3," El precio es requerido! "),o())}function kt(e,r){e&1&&(n(0,"p",20)(1,"span",21),i(2,"Oops!"),o(),i(3," El precio minimo es 500! "),o())}function Ct(e,r){e&1&&(n(0,"p",20)(1,"span",21),i(2,"Oops!"),o(),i(3," Debes ingresar solo n\xFAmeros! "),o())}function St(e,r){if(e&1&&(n(0,"div"),p(1,_t,4,0,"p",19)(2,kt,4,0,"p",19)(3,Ct,4,0,"p",19),o()),e&2){let t=l();c(),a("ngIf",t.productForm.controls.price.errors==null?null:t.productForm.controls.price.errors.required),c(),a("ngIf",t.productForm.controls.price.errors==null?null:t.productForm.controls.price.errors.minLength),c(),a("ngIf",t.productForm.controls.price.errors==null?null:t.productForm.controls.price.errors.pattern)}}function wt(e,r){e&1&&(n(0,"p",20)(1,"span",21),i(2,"Oops!"),o(),i(3,"La descripci\xF3n del producto es requerida! "),o())}function Ft(e,r){if(e&1&&(n(0,"div"),p(1,wt,4,0,"p",19),o()),e&2){let t=l();c(),a("ngIf",t.productForm.controls.description.errors==null?null:t.productForm.controls.description.errors.required)}}var w=class e{constructor(r,t){this.productService=r;this.router=t}fb=M(at);vl=rt;productForm=this.fb.group({id:[0],sku:["",[this.vl.required]],name:["",[this.vl.required]],price:[0,[this.vl.required,this.vl.minLength(4),this.vl.pattern(/^[0-9]*$/)]],description:["",[this.vl.required]]});get currentProduct(){return this.productForm.value}onSubmit(){if(this.productForm.invalid){y.default.fire({icon:"error",title:"Oops...",text:"Debes diligenciar todos los campos!"});return}this.currentProduct.id&&this.productService.updateProduct(this.currentProduct).subscribe({next:()=>{this.router.navigateByUrl("/dashboard/product/list-product"),y.default.fire({title:"Actualizado producto!",text:"Producto actualizado con exito!",icon:"success"})}}),this.productService.addProduct(this.currentProduct).subscribe({next:()=>{this.router.navigateByUrl("/dashboard/product/list-product"),y.default.fire({title:"Nuevo producto!",text:"Creado con exito!",icon:"success"})}})}onReset(){this.productForm.reset()}static \u0275fac=function(t){return new(t||e)(u(b),u(C))};static \u0275cmp=g({type:e,selectors:[["product-add-product"]],decls:31,vars:5,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"py-8","px-4","mx-auto","max-w-2xl","lg:py-16"],[1,"mb-4","text-xl","font-bold","text-gray-900","dark:text-white"],[3,"ngSubmit","formGroup"],[1,"grid","gap-4","sm:grid-cols-2","sm:gap-6"],[1,"sm:col-span-2"],["for","name",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","name","type","text","name","name","id","name",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[4,"ngIf"],[1,"w-full"],["for","sku",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","sku","type","text","name","sku","id","sku",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","price",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","price","type","text","name","price","id","price","placeholder","0",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],["for","description",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["formControlName","description","name","description","id","description","rows","5","placeholder","Descripci\xF3n del producto",1,"block","p-2.5","w-full","text-sm","text-gray-900","bg-gray-50","rounded-lg","border","border-gray-300","focus:ring-primary-500","focus:border-primary-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-primary-500","dark:focus:border-primary-500"],[1,"d-flex","justify-content-between"],["type","submit",1,"inline-flex","items-center","px-5","py-2.5","mt-4","sm:mt-6","text-sm","font-medium","text-center","text-white","bg-primary-700","rounded-lg","focus:ring-4","focus:ring-primary-200","dark:focus:ring-primary-900","hover:bg-primary-800"],["type","reset",1,"inline-flex","items-center","px-5","py-2.5","mt-4","sm:mt-6","text-sm","font-medium","text-center","text-white","bg-primary-700","rounded-lg","focus:ring-4","focus:ring-primary-200","dark:focus:ring-primary-900","hover:bg-primary-800",3,"click"],["class","mt-2 text-sm text-red-600 dark:text-red-500",4,"ngIf"],[1,"mt-2","text-sm","text-red-600","dark:text-red-500"],[1,"font-medium"]],template:function(t,d){t&1&&(n(0,"section",0)(1,"div",1)(2,"h2",2),i(3,"Agregar Nuevo Producto"),o(),n(4,"form",3),x("ngSubmit",function(){return d.onSubmit()}),n(5,"div",4)(6,"div",5)(7,"label",6),i(8,"Nombre Producto"),o(),m(9,"input",7),p(10,ht,2,1,"div",8),o(),n(11,"div",9)(12,"label",10),i(13,"Referencia Producto"),o(),m(14,"input",11),p(15,Et,2,1,"div",8),o(),n(16,"div",9)(17,"label",12),i(18,"Precio"),o(),m(19,"input",13),p(20,St,4,3,"div",8),o(),n(21,"div",5)(22,"label",14),i(23,"Descripci\xF3n"),o(),m(24,"textarea",15),p(25,Ft,2,1,"div",8),o()(),n(26,"div",16)(27,"button",17),i(28," Agregar Producto "),o(),n(29,"button",18),x("click",function(){return d.onReset()}),i(30," Limpiar Campos "),o()()()()()),t&2&&(c(4),a("formGroup",d.productForm),c(6),a("ngIf",d.productForm.controls.name.invalid&&(d.productForm.controls.name.dirty||d.productForm.controls.name.touched)),c(5),a("ngIf",d.productForm.controls.sku.invalid&&(d.productForm.controls.sku.dirty||d.productForm.controls.sku.touched)),c(5),a("ngIf",d.productForm.controls.price.invalid&&(d.productForm.controls.price.dirty||d.productForm.controls.price.touched)),c(5),a("ngIf",d.productForm.controls.description.invalid&&(d.productForm.controls.description.dirty||d.productForm.controls.description.touched)))},dependencies:[k,nt,et,ot,it,dt,ct]})};var L=O(mt());var F=class e{_newProductEventEmitter=new s;_idProductEventEmitter=new s;_findProductByIdEventEmitter=new s;_selectProductEventEmitter=new s;_errorsProductFormEventEmitter=new s;_pageProductEventEmitter=new s;constructor(){}get pageProductEventEmitter(){return this._pageProductEventEmitter}get errorsProductFormEventEmitter(){return this._errorsProductFormEventEmitter}get selectProductEventEmitter(){return this._selectProductEventEmitter}get findProductByIdEventEmitter(){return this._findProductByIdEventEmitter}get newProductEventEmitter(){return this._newProductEventEmitter}get idProductEventEmitter(){return this._idProductEventEmitter}static \u0275fac=function(t){return new(t||e)};static \u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})};function Nt(e,r){e&1&&(n(0,"div",2),i(1,` NO hay productos que mostrar
`),o())}function At(e,r){if(e&1){let t=$();n(0,"tbody")(1,"tr",16)(2,"td",17),i(3),o(),n(4,"td",17),i(5),o(),n(6,"td",17),i(7),o(),n(8,"td",18),i(9),V(10,"number"),o(),n(11,"td",17),i(12),o(),n(13,"th")(14,"button",19),i(15,"Update"),o()(),n(16,"th")(17,"button",20),x("click",function(){let f=B(t).$implicit,bt=l(2);return U(bt.onDeleteProduct(f.id))}),i(18,"Delete"),o()()()()}if(e&2){let t=r.$implicit,d=r.index;c(3),_(" ",d+1,""),c(2),_(" ",t.name,""),c(2),_(" ",t.sku,""),c(2),A(H(10,5,t.price)),c(3),A(t.description)}}function Dt(e,r){if(e&1&&(n(0,"button",3),i(1,"Ingresar Producto "),o(),n(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"span",8),i(7,"Listado de Productos"),o(),n(8,"table",9)(9,"thead",10)(10,"tr")(11,"th",11),i(12,"#"),o(),n(13,"th",11),i(14,"Nombre "),o(),n(15,"th",11),i(16,"sku"),o(),n(17,"th",11),i(18,"Precio"),o(),n(19,"th",12),i(20,"Descripcion"),o(),n(21,"th",13),i(22,"Acciones"),o()()(),p(23,At,19,7,"tbody",14),o()()()()(),m(24,"shared-paginator",15)),e&2){let t=l();c(23),a("ngForOf",t.products),c(),a("paginator",t.paginator)("url","/dashboard/product/list-product/page")}}var I=class e{constructor(r,t,d,f){this.productService=r;this.router=t;this.sharingData=d;this.route=f}products=[];paginator={};ngOnInit(){this.pageProductEvent(),this.productService.getProduct().subscribe(r=>this.products=r)}pageProductEvent(){this.route.paramMap.subscribe(r=>{let t=+(r.get("page")||"0");console.log(t),this.productService.getPageable(t).subscribe(d=>{this.paginator=d})})}onDeleteProduct(r){L.default.fire({title:"Seguro que quiere eliminar?",text:"Cuidado el producto sera eliminado del sistema!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si"}).then(t=>{t.isConfirmed&&(this.productService.deleteProductById(r).subscribe(()=>{this.router.navigate(["/dashboard/product/list-product"],{skipLocationChange:!0}).then(()=>{this.router.navigate(["/dashboard/product/list-product"],{state:{products:this.products,paginator:this.paginator}})})}),L.default.fire({title:"Eliminado!",text:"Producto eliminado con exito.",icon:"success"}))})}static \u0275fac=function(t){return new(t||e)(u(b),u(C),u(F),u(X))};static \u0275cmp=g({type:e,selectors:[["product-list-product"]],decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],["type","submit","routerLink","product/add-product",1,"btn","btn-sl","btn-outline-primary"],[1,"flex","flex-col"],[1,"overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","min-w-full","py-2","sm:px-6","lg:px-8"],[1,"overflow-hidden"],[1,"text-4xl","text-cyan-800","text-center","font-medium","leading-tight"],["data-twe-spy","scroll","data-twe-target","#scrollspy-collapsible","data-twe-offset","0",1,"min-w-full","text-center","text-sm","font-light","text-surface","dark:text-white"],[1,"border-b","border-neutral-200","bg-[#68829b]","font-medium","text-white","dark:border-white/10"],["scope","col",1,"px-6","py-4","text-left"],["scope","col",1,"px-6","py-4"],["colspan","3",2,"text-align","center"],[4,"ngFor","ngForOf"],[3,"paginator","url"],[1,"border-b","border-neutral-200","dark:border-white/10"],[1,"whitespace-nowrap","px-6","py-4","text-left"],[1,"whitespace-nowrap","px-6","py-4","text-center"],[1,"btn","btn-sm","btn-outline-success"],["type","submit",1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(t,d){if(t&1&&p(0,Nt,2,0,"div",1)(1,Dt,25,3,"ng-template",null,0,z),t&2){let f=G(2);a("ngIf",d.products.length===0)("ngIfElse",f)}},dependencies:[J,k,Z,lt,K]})};var Lt=[{path:"",component:S},{path:"list-product",component:I},{path:"add-product",component:w},{path:"**",redirectTo:"home"}],N=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=E({type:e});static \u0275inj=P({imports:[D.forChild(Lt),D]})};var vt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=E({type:e});static \u0275inj=P({imports:[Q,N,pt,ut]})};export{vt as ProductModule};
