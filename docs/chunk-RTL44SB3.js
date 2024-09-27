import{a as pt,c as lt,d as ut,e as st,f as b,g as ft,h as vt,i as gt,j as bt,l as ht}from"./chunk-A35XWKUM.js";import{a as Pt}from"./chunk-PNR3BLO6.js";import{$ as et,B as l,D as a,E as u,I as v,J as m,L as y,M as o,N as i,O as c,P as Y,Q as S,R as s,S as Z,T as n,U as T,V as g,X as tt,Y as _,Z as I,_ as L,d as q,fa as rt,g as H,ga as ot,ha as it,i as z,ia as nt,ja as at,k as J,la as ct,n as E,o as C,pa as dt,q as K,qa as N,ra as F,s as p,t as w,ta as O,ua as mt,va as xt,w as Q,x as W,y as P,z as X}from"./chunk-DRKUHF5Z.js";var M=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["product-layout-product"]],decls:1,vars:0,template:function(t,d){t&1&&c(0,"router-outlet")},dependencies:[dt]})};var V=q(Pt());var h=class e{constructor(r){this.http=r}baseUrl=mt.baseUrl;getProduct(){return this.http.get(`${this.baseUrl}/api/products`)}addProduct(r){return this.http.post(`${this.baseUrl}/api/products/create`,r)}updateProduct(r){if(!r.id)throw Error("Producto requerido");return this.http.post(`${this.baseUrl}/api/products`,r)}deleteProductById(r){return this.http.delete(`${this.baseUrl}/api/products/${r}`).pipe(J(t=>H(!1)),z(t=>!0))}static \u0275fac=function(t){return new(t||e)(K(ct))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})};var k=class e{constructor(r,t){this.productService=r;this.router=t}productForm=new st({id:new b(0),sku:new b(""),name:new b("",{nonNullable:!0}),price:new b(0),description:new b("")});get currentProduct(){return this.productForm.value}onSubmit(){if(!this.productForm.invalid){if(this.currentProduct.id){this.productService.updateProduct(this.currentProduct).subscribe({next:r=>{console.log(r),this.router.navigate(["product/list-product"])}}),V.default.fire({title:"Actualizado producto!",text:"Producto actualizado con exito!",icon:"success"});return}this.productService.addProduct(this.currentProduct).subscribe({next:r=>{console.log(r),this.router.navigate(["product/list-product"])}}),V.default.fire({title:"Creado nuevo producto!",text:"Producto creado con exito!",icon:"success"})}}static \u0275fac=function(t){return new(t||e)(u(h),u(N))};static \u0275cmp=p({type:e,selectors:[["product-add-product"]],decls:23,vars:4,consts:[[1,"container"],[1,"card","bg-light"],[1,"text-secondary"],[1,"card-body"],[3,"ngSubmit","formGroup"],["placeholder","id","name","id","formControlName","id",1,"form-control","my-2"],["placeholder","Name","name","name","formControlName","name",1,"form-control","my-2"],["placeholder","Description","name","description","formControlName","description",1,"form-control","my-2"],["placeholder","Sku","name","sku","formControlName","sku",1,"form-control","my-2"],["type","number","placeholder","Price","name","price","formControlName","price",1,"form-control","my-2"],["type","submit",1,"btn","btn-sm","btn-outline-primary","mx-3"],["type","button",1,"btn","btn-sm","btn-outline-success"]],template:function(t,d){t&1&&(o(0,"div",0)(1,"div",1),c(2,"h3",2),i(),o(3,"div",3)(4,"form",4),S("ngSubmit",function(){return d.onSubmit()}),o(5,"div"),c(6,"input",5),i(),o(7,"div"),c(8,"input",6),i(),o(9,"div"),c(10,"input",7),i(),o(11,"div"),c(12,"input",8),i(),o(13,"div"),c(14,"input",9),i(),o(15,"div")(16,"button",10),n(17,"Guardar"),i(),o(18,"button",11),n(19,"Limpiar"),i()()()()(),o(20,"pre"),n(21),I(22,"json"),i()),t&2&&(a(4),m("formGroup",d.productForm),a(17),g("  ",L(22,2,d.currentProduct),`
`))},dependencies:[ft,pt,vt,lt,ut,gt,bt,it]})};var $=q(Pt());var D=class e{_newProductEventEmitter=new l;_idProductEventEmitter=new l;_findProductByIdEventEmitter=new l;_selectProductEventEmitter=new l;_errorsProductFormEventEmitter=new l;_pageProductEventEmitter=new l;constructor(){}get pageProductEventEmitter(){return this._pageProductEventEmitter}get errorsProductFormEventEmitter(){return this._errorsProductFormEventEmitter}get selectProductEventEmitter(){return this._selectProductEventEmitter}get findProductByIdEventEmitter(){return this._findProductByIdEventEmitter}get newProductEventEmitter(){return this._newProductEventEmitter}get idProductEventEmitter(){return this._idProductEventEmitter}static \u0275fac=function(t){return new(t||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})};var _t=e=>[e,0],U=(e,r)=>[e,r];function It(e,r){if(e&1&&(o(0,"li",1)(1,"a",2),P(),o(2,"svg",7),c(3,"path",8)(4,"path",9),i()()()),e&2){let t=s(2);a(),m("routerLink",_(1,U,t.url,t.paginator.number-1))}}function Lt(e,r){if(e&1&&(o(0,"li",1)(1,"a",2),P(),o(2,"svg",10),c(3,"path",11)(4,"path",12),i()()()),e&2){let t=s(2);a(),m("routerLink",_(1,U,t.url,t.paginator.number+1))}}function Nt(e,r){if(e&1&&(o(0,"ul",0)(1,"li",1)(2,"a",2),P(),o(3,"svg",3),c(4,"path",4),i()()(),v(5,It,5,4,"li",1)(6,Lt,5,4,"li",1),X(),o(7,"li",1)(8,"a",2),P(),o(9,"svg",5),c(10,"path",6),i()()()()),e&2){let t=s();a(2),m("routerLink",tt(4,_t,t.url)),a(3),y(t.paginator.number>0?5:-1),a(),y(t.paginator.number<t.paginator.totalPages-1?6:-1),a(2),m("routerLink",_(6,U,t.url,t.paginator.totalPages-1))}}var j=class e{url="";paginator={};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["shared-paginator"]],inputs:{url:"url",paginator:"paginator"},decls:1,vars:1,consts:[[1,"pagination"],[1,"page-item"],[1,"page-link",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-bar-left"],["fill-rule","evenodd","d","M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-bar-right"],["fill-rule","evenodd","d","M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-double-left"],["fill-rule","evenodd","d","M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"],["fill-rule","evenodd","d","M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-double-right"],["fill-rule","evenodd","d","M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"],["fill-rule","evenodd","d","M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"]],template:function(t,d){t&1&&v(0,Nt,11,9,"ul",0),t&2&&y(d.paginator.totalPages>1?0:-1)},dependencies:[F]})};function Mt(e,r){e&1&&(o(0,"div",2),n(1,` NO hay productos que mostrar
`),i())}function kt(e,r){if(e&1){let t=Y();o(0,"tbody")(1,"tr",15)(2,"td",16),n(3),i(),o(4,"td",16),n(5),i(),o(6,"td",16),n(7),i(),o(8,"td",17),n(9),I(10,"number"),i(),o(11,"td",16),n(12),i(),o(13,"th")(14,"button",18),n(15,"Update"),i()(),o(16,"th")(17,"button",19),S("click",function(){let x=Q(t).$implicit,wt=s(2);return W(wt.onDeleteProduct(x.id))}),n(18,"Delete"),i()()()()}if(e&2){let t=r.$implicit,d=r.index;a(3),g(" ",d+1,""),a(2),g(" ",t.name,""),a(2),g(" ",t.sku,""),a(2),T(L(10,5,t.price)),a(3),T(t.description)}}function Dt(e,r){if(e&1&&(o(0,"button",3),n(1,"Ingresar Producto "),i(),o(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"table",8)(7,"thead",9)(8,"tr")(9,"th",10),n(10,"#"),i(),o(11,"th",10),n(12,"Nombre "),i(),o(13,"th",10),n(14,"sku"),i(),o(15,"th",10),n(16,"Precio"),i(),o(17,"th",11),n(18,"Descripcion"),i(),o(19,"th",12),n(20,"Acciones"),i()()(),v(21,kt,19,7,"tbody",13),i()()(),c(22,"shared-paginator",14),i()()),e&2){let t=s();a(21),m("ngForOf",t.products),a(),m("paginator",t.paginator)("url","/product/list-producto")}}var B=class e{constructor(r,t,d){this.productService=r;this.router=t;this.sharingData=d}products=[];paginator={};ngOnInit(){this.pageProductEvent(),this.productService.getProduct().subscribe(r=>this.products=r)}pageProductEvent(){this.sharingData.pageProductEventEmitter.subscribe(r=>{this.products=r.products,this.paginator=r.paginator})}onDeleteProduct(r){$.default.fire({title:"Seguro que quiere eliminar?",text:"Cuidado el producto sera eliminado del sistema!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si"}).then(t=>{t.isConfirmed&&(this.productService.deleteProductById(r).subscribe(()=>{this.router.navigate(["/product/list-user"],{skipLocationChange:!0})}),$.default.fire({title:"Eliminado!",text:"Producto eliminado con exito.",icon:"success"}))})}static \u0275fac=function(t){return new(t||e)(u(h),u(N),u(D))};static \u0275cmp=p({type:e,selectors:[["product-list-product"]],decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],["type","submit","routerLink","product/add-product",1,"btn","btn-sl","btn-outline-primary"],[1,"flex","flex-col"],[1,"overflow-x-auto","sm:-mx-6","lg:-mx-8"],[1,"inline-block","min-w-full","py-2","sm:px-6","lg:px-8"],[1,"overflow-hidden"],["data-twe-spy","scroll","data-twe-target","#scrollspy-collapsible","data-twe-offset","0",1,"min-w-full","text-center","text-sm","font-light","text-surface","dark:text-white"],[1,"border-b","border-neutral-200","bg-[#68829b]","font-medium","text-white","dark:border-white/10"],["scope","col",1,"px-6","py-4","text-left"],["scope","col",1,"px-6","py-4"],["colspan","3",2,"text-align","center"],[4,"ngFor","ngForOf"],[3,"paginator","url"],[1,"border-b","border-neutral-200","dark:border-white/10"],[1,"whitespace-nowrap","px-6","py-4","text-left"],[1,"whitespace-nowrap","px-6","py-4","text-center"],[1,"btn","btn-sm","btn-outline-success"],["type","submit",1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(t,d){if(t&1&&v(0,Mt,2,0,"div",1)(1,Dt,23,3,"ng-template",null,0,et),t&2){let x=Z(2);m("ngIf",d.products.length===0)("ngIfElse",x)}},dependencies:[rt,ot,F,j,nt]})};var jt=[{path:"",component:M},{path:"list-product",component:B},{path:"add-product",component:k},{path:"**",redirectTo:"list-product"}],R=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[O.forChild(jt),O]})};var Ct=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[at,R,ht,xt]})};export{Ct as ProductModule};
