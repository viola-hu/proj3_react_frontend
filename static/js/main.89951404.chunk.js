(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(202)},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n);a(123),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(0),l=a.n(c),o=a(14),s=a(26),m=(a(124),a(125),a(6)),u=a(42),i=a.n(u),d=a(68),p=a.n(d),E=a(43),g=a.n(E),h=a(8),b=a.n(h),f=a(65),y=a.n(f),v=a(10),j=a.n(v),O=a(32),w=a.n(O),k=a(40),N=a.n(k),S=a(23),I=a.n(S),R=a(12),C=a.n(R);var x=Object(s.e)(function(e){var t=Object(c.useState)(""),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(c.useState)(""),p=Object(m.a)(d,2),E=p[0],g=p[1],h=Object(c.useState)(""),f=Object(m.a)(h,2),y=f[0],v=f[1],O=Object(c.useState)([]),w=Object(m.a)(O,2),k=w[0],N=w[1],S=Object(c.useState)(""),I=Object(m.a)(S,2),R=(I[0],I[1]),x=function(e){e.target.value.length>0&&N([])},_=function(){var t={auth:{email:u,password:E}};C.a.post("https://toyshoppingsite.herokuapp.com/user_token",t).then(function(t){console.log("response from server:",t,e),R(t.data.jwt),window.localStorage.setItem("jwt",t.data.jwt),e.onHide(),e.history.push("/account")}).catch(function(e){console.warn("LOGIN TOKEN ERROR:",e),N(["Error connecting to server"])})},B=l.a.createElement("div",null,k.map(function(e){return l.a.createElement(b.a.Text,{key:e,className:"errorMessage"},e)}));return l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault();var t={user:{name:n,email:u,password:E,password_confirmation:y}};C.a.post("https://toyshoppingsite.herokuapp.com/signup",t).then(function(e){console.log("created user!",e),_()}).catch(function(e){console.warn("SignUp ERROR!!!",e.response.data.errors),N(e.response.data.errors)})}},B,l.a.createElement(b.a.Group,{controlId:"signUpFormBasicName"},l.a.createElement(b.a.Label,null,"Name"),l.a.createElement(b.a.Control,{type:"name",placeholder:"enter your name",onChange:function(e){x(e),r(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"signUpFormBasicEmail"},l.a.createElement(b.a.Label,null,"Email address"),l.a.createElement(b.a.Control,{type:"email",placeholder:"enter email",onChange:function(e){x(e),i(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"signUpFormBasicPassword"},l.a.createElement(b.a.Label,null,"Password"),l.a.createElement(b.a.Control,{type:"password",placeholder:"enter password",onChange:function(e){x(e),g(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"signUpFormPasswordConfirmation"},l.a.createElement(b.a.Label,null,"Password Confirmation"),l.a.createElement(b.a.Control,{type:"password",placeholder:"enter password again",onChange:function(e){x(e),v(e.target.value)}})),l.a.createElement(j.a,{variant:"primary",type:"submit"},"Sign Up"))});function _(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return l.a.createElement(w.a,null,l.a.createElement(j.a,{className:"btn-space",variant:"warning",onClick:function(){return r(!0)}},"SignUp"),l.a.createElement(B,{show:n,onHide:function(){return r(!1)}}))}function B(e){return l.a.createElement(I.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,{id:"contained-modal-title-vcenter"},"Sign Up")),l.a.createElement(I.a.Body,null,l.a.createElement(x,{onHide:e.onHide})))}var q=Object(s.e)(function(e){var t=Object(c.useState)(""),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(c.useState)(""),p=Object(m.a)(d,2),E=p[0],g=p[1],h=Object(c.useState)(""),f=Object(m.a)(h,2),y=(f[0],f[1]),v=function(){var t={auth:{email:n,password:u}};C.a.post("https://toyshoppingsite.herokuapp.com/user_token",t).then(function(t){console.log("response from server:",t,e),y(t.data.jwt),window.localStorage.setItem("jwt",t.data.jwt),O(),e.onHide(),e.history.push("/account")}).catch(function(e){console.warn("!!!ERROR:",e),g("Invalid email or password")})},O=function(){console.log("send another axios request!"),C.a.get("https://toyshoppingsite.herokuapp.com/cart")};return l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),0===n.length||0===u.length?g("Please enter an email and password"):v()}},l.a.createElement(b.a.Text,{className:"errorMessage"},E),l.a.createElement(b.a.Group,{controlId:"loginFormBasicEmail"},l.a.createElement(b.a.Label,null,"Email address"),l.a.createElement(b.a.Control,{type:"email",placeholder:"enter email",onChange:function(e){e.target.value.length>0&&g(""),r(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"loginFormBasicPassword"},l.a.createElement(b.a.Label,null,"Password"),l.a.createElement(b.a.Control,{type:"password",placeholder:"enter password",onChange:function(e){e.target.value.length>0&&g(""),i(e.target.value)}})),l.a.createElement(j.a,{variant:"primary",type:"submit"},"Log In"))});function T(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return l.a.createElement(w.a,null,l.a.createElement(j.a,{className:"btn-space",variant:"info",onClick:function(){return r(!0)}},"LogIn"),l.a.createElement(P,{show:n,onHide:function(){return r(!1)}}))}function P(e){return l.a.createElement(I.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,{id:"contained-modal-title-vcenter"},"Log In")),l.a.createElement(I.a.Body,null,l.a.createElement(q,{onHide:e.onHide})))}var A=a(25),L=a.n(A);var H=a(38),z=a.n(H),M=a(29),U=a.n(M),$=a(39),Q=a.n($),F=a(27),G=a.n(F);var V=a(28),D=a.n(V);var W=a(48),J=a.n(W);var K=a(113),Y=a(114),X=a(116),Z=a(115),ee=a(117),te=a(41);var ae=Object(s.e)(function(e){var t=function(){var e={headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}};C.a.get("https://toyshoppingsite.herokuapp.com/order",e).then(function(e){console.log("response:",e)}).catch(function(e){})};return l.a.createElement("div",{className:"payment-form"},l.a.createElement("p",null,"Would you like to complete the purchase?"),l.a.createElement("div",{style:{borderRadius:"0.5em",height:"100px",padding:"50px",border:"3px solid orange",marginTop:"10px",marginBottom:"30px",backgroundColor:"aliceblue",width:"500px"}},l.a.createElement(te.CardElement,null)),l.a.createElement(j.a,{id:"pay-by-card",onClick:function(){t(),e.history.push("/order")}},"Send"))}),ne=function(e){function t(){return Object(K.a)(this,t),Object(X.a)(this,Object(Z.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return l.a.createElement(te.StripeProvider,{apiKey:"pk_test_TYooMQauvdEDq54NiTphI7jx"},l.a.createElement("div",{className:"payment-form"},l.a.createElement("h1",null,"Payment Form"),l.a.createElement("div",{className:"payment-form"},l.a.createElement(te.Elements,null,l.a.createElement(ae,null)))))}}]),t}(c.Component),re=l.a.createElement(o.a,null,l.a.createElement("div",{className:"entireBody"},l.a.createElement(s.a,{path:"/",component:function(e){var t,a,n=Object(c.useState)(localStorage.getItem("jwt")),r=Object(m.a)(n,2),s=(r[0],r[1]);return t=localStorage.getItem("jwt")?l.a.createElement(o.b,{to:"/account"},l.a.createElement(j.a,{className:"btn-space",variant:"warning"},"MyAccount")):l.a.createElement(_,null),a=localStorage.getItem("jwt")?l.a.createElement("div",null,l.a.createElement(j.a,{className:"btn-space",variant:"info",onClick:function(){localStorage.removeItem("jwt"),s(""),e.history.push("/")}},"LogOut"),l.a.createElement(o.b,{to:"/cart"},l.a.createElement("img",{className:"cart-icon",src:"/proj3_react_frontend/images/cart-icon.png"}))):l.a.createElement(T,null),l.a.createElement(i.a,{sticky:"top",expand:"md",className:"bg-light justify-content-between"},l.a.createElement(i.a.Brand,{href:"#/"},l.a.createElement("div",null,"V's Toy"),l.a.createElement("img",{className:"happy-kids",src:"/proj3_react_frontend/images/happy-kids.png"})),l.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"mr-auto"},l.a.createElement(w.a,null,l.a.createElement(j.a,{className:"btn-space",href:"#/",variant:"danger"},"Home"),l.a.createElement(j.a,{id:"test",className:"btn-space",href:"#about",variant:"primary"},"About")),l.a.createElement(N.a,null,l.a.createElement(N.a.Toggle,{className:"btn-space",variant:"success",id:"dropdown-basic"},"Category"),l.a.createElement(N.a.Menu,null,l.a.createElement(g.a.Item,{id:"category-1",href:"#category/1"},"Age 0-2"),l.a.createElement(g.a.Item,{id:"category-2",href:"#category/2"},"Age 2-5"),l.a.createElement(g.a.Item,{id:"category-3",href:"#category/3"},"Age 5-8"),l.a.createElement(g.a.Item,{id:"category-4",href:"#category/4"},"Age over 8")))),l.a.createElement(b.a,{inline:!0},l.a.createElement(y.a,{type:"text",placeholder:"e.g. hellokitty",className:"mr-sm-2"}),l.a.createElement(j.a,{variant:"secondary",className:"btn-space",size:"sm"},"Search")),l.a.createElement(p.a,{className:"mr-auto"},t,a)))}}),l.a.createElement(s.a,{exact:!0,path:"/",component:function(e){var t=Object(c.useState)([]),a=Object(m.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)(function(){C.a.get("https://toyshoppingsite.herokuapp.com/products").then(function(e){console.log("reponse.data:",e.data),r(e.data)}).catch(function(e){console.warn(e)})},[]),console.log("products",n),l.a.createElement("div",null,l.a.createElement(L.a,{className:"home-image",src:"/proj3_react_frontend/images/playingkids.jpg",fluid:!0}))}}),l.a.createElement(s.a,{exact:!0,path:"/account",component:function(){return l.a.createElement("div",null,"My Account")}}),l.a.createElement(s.a,{exact:!0,path:"/category/:id",component:function(e){var t=e.match.params.id,a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)(function(){u(t)},[t]);var u=function(){var e="https://toyshoppingsite.herokuapp.com/categories/".concat(t);C.a.get(e).then(function(e){console.log("response:",e.data.products),s(e.data.products)}).catch(function(e){console.warn("ERRORS!!!:",e)})};return l.a.createElement(z.a,null,l.a.createElement(Q.a,null,r.map(function(e){return l.a.createElement(U.a,{xs:12,md:4,key:e.name},l.a.createElement(o.b,{to:"/product/".concat(e.id)},l.a.createElement(G.a,null,l.a.createElement(G.a.Image,{width:200,height:200,fluid:!1,alt:"200x200",src:"/proj3_react_frontend"+"/images/".concat(e.image)}),l.a.createElement(G.a.Caption,null,l.a.createElement("p",null,l.a.createElement("strong",null,e.name)),l.a.createElement("p",null,"Price: ","$".concat(e.price)),l.a.createElement("p",null,"In Stock: ",e.stock),l.a.createElement("p",null,e.description)))))})))}}),l.a.createElement(s.a,{exact:!0,path:"/product/:id",component:function(e){var t=e.match.params.id,a=localStorage.getItem("jwt"),n=Object(c.useState)({}),r=Object(m.a)(n,2),s=r[0],u=r[1],i=Object(c.useState)({}),d=Object(m.a)(i,2),p=d[0],E=d[1],g=Object(c.useState)(1),h=Object(m.a)(g,2),f=h[0],y=h[1],v=Object(c.useState)(""),O=Object(m.a)(v,2),w=O[0],k=O[1],N=Object(c.useState)(!1),S=Object(m.a)(N,2),I=S[0],R=S[1],x=Object(c.useState)("Add to Cart"),_=Object(m.a)(x,2),B=_[0],q=_[1],T=Object(c.useState)(""),P=Object(m.a)(T,2),A=P[0],L=P[1];Object(c.useEffect)(function(){H(t),a||(R(!0),q("Login to use cart"))},[]);var H=function(t){var a="https://toyshoppingsite.herokuapp.com/products/".concat(t);C.a.get(a).then(function(e){console.log("response:",e.data),console.log("categoryName:",e.data.category.name),u(e.data),E(e.data.category)}).catch(function(t){console.warn("ERRORS!!!:",t),e.history.push("/")})};console.log("stateQuantity:",f),console.log("button disabled?:",I);var M="";return A&&(M=l.a.createElement(o.b,{to:"/cart",className:"view-your-cart"},l.a.createElement("strong",null,l.a.createElement("p",{className:"show-success-mesage"},A," "," ","View your cart")))),l.a.createElement(z.a,null,l.a.createElement(Q.a,null,l.a.createElement(U.a,{sm:!0,md:7},l.a.createElement(G.a,null,l.a.createElement(G.a.Image,{fluid:!0,alt:"500x500",src:"/proj3_react_frontend"+"/images/".concat(s.image)}),l.a.createElement(G.a.Caption,null,s.description))),l.a.createElement(U.a,{sm:!0,md:5},l.a.createElement(D.a,{variant:"flush"},l.a.createElement(D.a.Item,null,l.a.createElement("strong",null,s.name)),l.a.createElement(D.a.Item,null,"Category: ",p.name),l.a.createElement(D.a.Item,null,"Price: ","$".concat(s.price)),l.a.createElement(D.a.Item,null,l.a.createElement(b.a.Text,{className:"errorMessage"},w),"Select Quantity:"," ",l.a.createElement("input",{type:"number",min:"1",max:s.stock,defaultValue:"1",onChange:function(e){if(console.log("event.target.value:",e.target.value),a){L("");var t=parseInt(e.target.value);t>s.stock?(k("Sorry, not enough stock."),y(1),R(!0)):(k(""),y(t),R(!1)),console.log("wantedQuantity:",t)}}}),l.a.createElement(b.a.Text,null,"(In stock: ",s.stock,")")),l.a.createElement(D.a.Item,null,l.a.createElement(j.a,{id:"add-to-cart",disabled:I,onClick:function(e){if(console.log("clicked cart"),console.log("when click cart, stateQuantity",f),console.log("when click cart, typeof stateQuantity",typeof f),!f)return console.log("when quantity === 0, it ran!"),k("Please select a quantity."),void R(!0);var t={line_item:{product_id:s.id,quantity:f}},n={headers:{Authorization:"Bearer "+a}};C.a.post("https://toyshoppingsite.herokuapp.com/line_items",t,n).then(function(e){console.log("added to cart",e),L("Successfully added to cart!")}).catch(function(e){console.warn("ERROR of adding to cart",e),k("Sorry, not enough stock.")})}},B)),l.a.createElement(D.a.Item,null,M)))))}}),l.a.createElement(s.a,{exact:!0,path:"/cart",component:function(e){var t=localStorage.getItem("jwt"),a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(""),i=Object(m.a)(u,2),d=i[0],p=i[1];Object(c.useEffect)(function(){var a={headers:{Authorization:"Bearer "+t}};C.a.get("https://toyshoppingsite.herokuapp.com/cart",a).then(function(e){console.log("response:",e.data),s(e.data)}).catch(function(t){console.warn("SERVER ERROR:",t),e.history.push("/")})},[]);var E=l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"There's no item in your cart."),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "))),g=0;r.forEach(function(e){g+=e.quantity*e.product.price});var h=function(e){e.preventDefault(),e.persist(),console.log(e);var a=parseInt(e.target[0].value),n=parseInt(e.target[0].name);if(console.log("updated quantity",a),console.log("lineItemId",n),isNaN(a))return console.log("its NaN"),void p("Please select a quantity.");console.log("should not run if its NaN"),p("");var r="https://toyshoppingsite.herokuapp.com/line_items/".concat(n),c={line_item:{quantity:a}},l={headers:{Authorization:"Bearer "+t}};C.a.put(r,c,l).then(function(e){console.log("response from server:",e.data),s(e.data)}).catch(function(e){console.warn("ERROR of updating quantity",e),p("Sorry, not enough stock.")})},b=function(e){e.persist(),console.log("click image",e),console.log("lineItemId",e.target.name);var a=parseInt(e.target.name),n="https://toyshoppingsite.herokuapp.com/line_items/".concat(a),r={headers:{Authorization:"Bearer "+t}};C.a.delete(n,r).then(function(e){console.log("DELETE response:",e.data),s(e.data)}).catch(function(e){console.warn("ERRORS!!!:",e)})};return l.a.createElement(J.a,{striped:!0,hover:!0,responsive:"md"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"My Cart")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Item")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Quantity")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Price")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Total")))),r.length?l.a.createElement("tbody",null,r.map(function(e){return l.a.createElement("tr",{key:e.product.name},l.a.createElement("td",null,l.a.createElement(o.b,{to:"/product/".concat(e.product_id)},l.a.createElement(L.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),l.a.createElement("td",{className:"product-name"},l.a.createElement("br",null),l.a.createElement("strong",null,e.product.name)),l.a.createElement("td",null,l.a.createElement("form",{className:"quantity-update change-quantity",onSubmit:h},l.a.createElement("input",{type:"number",min:"1",max:e.product.stock,name:e.id,defaultValue:e.quantity})," "," ",l.a.createElement("input",{type:"submit",className:"update-quantity",value:"Update",disabled:!1})," "," "),l.a.createElement(L.a,{name:e.id,className:"trash change-quantity",src:"/proj3_react_frontend/images/small-trash.png",title:"Remove",onClick:b,fluid:!0})),l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("strong",null,"$",e.product.price)),l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement("p",{className:"errorMessage"},d)),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"$",g))),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/checkout"},l.a.createElement(j.a,{id:"checkout"},"Check Out"))))):E)}}),l.a.createElement(s.a,{exact:!0,path:"/checkout",component:function(e){var t=localStorage.getItem("jwt"),a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(""),i=Object(m.a)(u,2);i[0],i[1],Object(c.useEffect)(function(){var a={headers:{Authorization:"Bearer "+t}};C.a.get("https://toyshoppingsite.herokuapp.com/cart",a).then(function(e){console.log("response:",e.data),s(e.data)}).catch(function(t){console.warn("SERVER ERROR:",t),e.history.push("/")})},[]);var d=0;return r.forEach(function(e){d+=e.quantity*e.product.price}),l.a.createElement(J.a,{responsive:"md"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Confirm order")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Item")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Quantity")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Price")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Total")))),l.a.createElement("tbody",null,r.map(function(e){return l.a.createElement("tr",{key:e.product.name},l.a.createElement("td",null,l.a.createElement(o.b,{to:"/product/".concat(e.product_id)},l.a.createElement(L.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),l.a.createElement("td",null,l.a.createElement("strong",null,e.product.name)),l.a.createElement("td",null,l.a.createElement("strong",null,e.quantity)),l.a.createElement("td",null,l.a.createElement("strong",null,"$",e.product.price)),l.a.createElement("td",null,l.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/cart",id:"back-to-cart"},l.a.createElement("strong",null,"Back to cart"))),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"$",d))),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/payment"},l.a.createElement(j.a,{id:"pay-by-card"},"Pay by Card"))))))}}),l.a.createElement(s.a,{exact:!0,path:"/removeLineItem",component:function(e){return console.log("clicked trash icon!"),l.a.createElement("div",null,"???")}}),l.a.createElement(s.a,{exact:!0,path:"/payment",component:ne}),l.a.createElement(s.a,{exact:!0,path:"/order",component:function(e){return l.a.createElement("div",{className:"test"},"test")}}),l.a.createElement("footer",{className:"body-footer"})));r.a.render(re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.89951404.chunk.js.map