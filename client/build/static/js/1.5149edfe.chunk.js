(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{463:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(5),o=a(6),c=a(8),s=a(7),l=a(9),i=a(0),m=a.n(i),u=a(12),d=a(39),p=a(467),h=a(3),g=a.n(h),f=a(2),y=a(15),E=a(42),v=a.n(E),b=a(64),C=a(97),w=a(65),P=a(66),k=(a(101),{background:"#505050",text:"#fff"}),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).onChangeTypeProduct=function(e){a.setState({typeProductCategory:e.target.value})},a.onChange=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){if(e.preventDefault(),""===a.state.name||""===a.state.price||0===a.state.images.length)return""===a.state.name&&(a.refs.nameValidate.innerHTML="Vui l\xf2ng nh\u1eadp t\xean s\u1ea3n ph\u1ea9m",a.refs.nameValidate1.classList.add("is-invalid")),""===a.state.price&&(a.refs.priceValidate.innerHTML="Vui l\xf2ng nh\u1eadp gi\xe1 s\u1ea3n ph\u1ea9m",a.refs.priceValidate1.classList.add("is-invalid")),0===a.state.images.length&&(a.refs.imageValidate.innerHTML="Vui l\xf2ng t\u1ea3i \u1ea3nh "),!1;""===a.state.typeProductCategory&&(a.refs.typeProductValidate.innerHTML="B\u1ea1n ch\u01b0a t\u1ea1o lo\u1ea1i s\u1ea3n ph\u1ea9m/d\u1ecbch v\u1ee5 n\xe0o h\xe3y t\u1ea1o ch\xfang");var t=a.state.images.map(function(e){return e.url}),n={name:a.state.name,ownerId:a.props.auth.user.user_id,typeId:a.state.typeProductCategory,description:a.state.description,price:a.state.price,images:t};a.props.createProduct(n,a.props.history)},a.onCancel=function(e){a.props.history.push("/product")},a.renderOptionItem=function(e,t){return m.a.createElement("option",{key:t,value:e._id},e.name)},a.toast=E.notify.createShowQueue(),a.onChangeU=function(e){var t=[],n=Array.from(e.target.files);if(n.length>3){return a.toast("Only 3 images can be uploaded at a time","custom",2e3,k)}var r=new FormData,o=["image/png","image/jpeg","image/gif"];if(n.forEach(function(e,a){o.every(function(t){return e.type!==t})&&t.push("'".concat(e.type,"' is not a supported format")),e.size>1e7&&(console.log(e.size),t.push("'".concat(e.name,"' is too large, please pick a smaller file"))),r.append(a,e)}),t.length)return t.forEach(function(e){return a.toast(e,"custom",2e3,k)});a.setState({uploading:!0}),fetch("/api/image-upload",{method:"POST",body:r}).then(function(e){if(!e.ok)throw e;return e.json()}).then(function(e){a.setState({uploading:!1,images:e})}).catch(function(e){e.json().then(function(e){a.toast(e.message,"custom",2e3,k),a.setState({uploading:!1})})})},a.filter=function(e){return a.state.images.filter(function(t){return t.public_id!==e})},a.removeImage=function(e){a.setState({images:a.filter(e)},function(){return console.log(a.state.images)})},a.onError=function(e){a.toast("Oops, something went wrong","custom",2e3,k),a.setState({images:a.filter(e)})},a.state={name:"",description:"",price:"",typeProductCategory:"",loadingU:!0,uploading:!1,images:[]},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getProductParentCategories(this.props.auth.user.user_id);var t=this.props.product.productParentCategories;t.length>0&&this.setState({typeProductCategory:t[0]._id}),fetch("/api/wake-up").then(function(t){if(t.ok)return e.setState({loadingU:!1});e.toast("Something is went wrong with server","custom",2e3,k)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingU,n=t.uploading,r=t.images,o=this.props.product,c=o.productParentCategories,s=o.loading;return m.a.createElement("div",{className:"addProduct"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-8"},m.a.createElement(f.h,{xs:"12",sm:"12"},m.a.createElement(f.e,null,m.a.createElement(f.g,null,m.a.createElement("strong",null,"Add Product")),m.a.createElement(f.f,null,m.a.createElement(f.n,{row:!0,className:"my-0 mt-2"},m.a.createElement(f.h,{xs:"7"},m.a.createElement(f.t,{htmlFor:"textarea-input"},"\u1ea2nh"),m.a.createElement("div",{className:"container"},m.a.createElement(v.a,null),m.a.createElement("div",{className:"buttons"},function(){switch(!0){case a:return m.a.createElement(P.a,null);case n:return m.a.createElement(b.a,null);case r.length>0:return m.a.createElement(C.a,{images:r,removeImage:e.removeImage,onError:e.onError});default:return m.a.createElement(w.a,{onChange:e.onChangeU})}}())),m.a.createElement("div",{style:{display:"block"},ref:"imageValidate",className:"invalid-feedback"}))),m.a.createElement(f.n,null,m.a.createElement(f.t,{htmlFor:"company"},"T\xean s\u1ea3n ph\u1ea9m"),m.a.createElement("input",{ref:"nameValidate1",type:"text",className:g()("form-control form-control-lg"),placeholder:"T\xean s\u1ea3n ph\u1ea9m",name:"name",value:this.state.name,onChange:this.onChange}),m.a.createElement("div",{style:{display:"block"},ref:"nameValidate",className:"invalid-feedback"})),m.a.createElement(f.n,{row:!0,className:"my-0"},m.a.createElement(f.h,{xs:"6"},m.a.createElement(f.t,{htmlFor:"vat"},"Gi\xe1"),m.a.createElement("div",{className:"controls"},m.a.createElement(f.q,{className:"input-prepend"},m.a.createElement("input",{ref:"priceValidate1",type:"number",className:g()("form-control form-control-lg"),placeholder:"Gi\xe1",name:"price",value:this.state.price,onChange:this.onChange}),m.a.createElement(f.r,{addonType:"append"},m.a.createElement(f.s,null,"vn\u0111"))),m.a.createElement("div",{ref:"priceValidate",style:{display:"block"},className:"invalid-feedback"})))),m.a.createElement(f.n,{row:!0,className:"my-0 mt-3"},m.a.createElement(f.h,{xs:"6"},m.a.createElement(f.t,{htmlFor:"ccyear"},"Lo\u1ea1i"),null===c||s?m.a.createElement(y.a,null):m.a.createElement(f.p,{className:"form-control form-control-lg",type:"select",name:"ccyear",id:"ccyear",value:this.state.typeProductCategory,onChange:this.onChangeTypeProduct},c.map(function(t,a){return e.renderOptionItem(t,a)})),m.a.createElement("div",{style:{display:"block"},ref:"typeProductValidate",className:"invalid-feedback"}))),m.a.createElement(f.n,{row:!0,className:"my-0 mt-3"},m.a.createElement(f.h,{xs:"7"},m.a.createElement(f.t,{htmlFor:"textarea-input"},"M\xf4 t\u1ea3"),m.a.createElement("textarea",{className:"form-control form-control-lg",name:"description",id:"textarea-input",rows:"7",placeholder:"N\u1ed9i dung m\xf4 t\u1ea3...",value:this.state.description,onChange:this.onChange}))),m.a.createElement("div",{style:{marginTop:20}},m.a.createElement(f.n,{row:!0,className:"my-0"},m.a.createElement(f.h,{col:"6",sm:"4",md:"3",className:"mb-3 mb-xl-0"},m.a.createElement(f.d,{block:!0,color:"primary",onClick:this.onSubmit},"Th\xeam s\u1ea3n ph\u1ea9m")),m.a.createElement(f.h,{col:"5",sm:"4",md:"2",className:"mb-xl-0"},m.a.createElement(f.d,{block:!0,color:"secondary",onClick:this.onCancel},"H\u1ee7y"))))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.errors?{errors:e.errors}:null}}]),t}(i.Component);t.default=Object(u.b)(function(e){return{auth:e.auth,errors:e.errors,product:e.product}},{createProduct:d.a,getProductParentCategories:d.f,getProductDetailById:d.e,updateProduct:d.g})(Object(p.a)(N))}}]);
//# sourceMappingURL=1.5149edfe.chunk.js.map