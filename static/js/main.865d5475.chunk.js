(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(206)},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n);a(126),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(0),l=a.n(c),o=a(11),s=a(26),m=(a(127),a(128),a(5)),u=a(43),i=a.n(u),d=a(74),E=a.n(d),p=a(44),g=a.n(p),h=a(8),b=a.n(h),f=a(71),y=a.n(f),v=a(10),j=a.n(v),O=a(32),w=a.n(O),N=a(42),S=a.n(N),R=a(24),k=a.n(R),I=a(12),C=a.n(I),_={URL:"https://toyshoppingsite.herokuapp.com"};var x=Object(s.e)(function(e){var t=Object(c.useState)(""),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(c.useState)(""),E=Object(m.a)(d,2),p=E[0],g=E[1],h=Object(c.useState)(""),f=Object(m.a)(h,2),y=f[0],v=f[1],O=Object(c.useState)([]),w=Object(m.a)(O,2),N=w[0],S=w[1],R=Object(c.useState)(""),k=Object(m.a)(R,2),I=(k[0],k[1]),x=function(e){e.target.value.length>0&&S([])},L=function(){var t="".concat(_.URL,"/user_token"),a={auth:{email:u,password:p}};C.a.post(t,a).then(function(t){console.log("response from server:",t,e),I(t.data.jwt),window.localStorage.setItem("jwt",t.data.jwt),e.onHide(),e.history.push("/account")}).catch(function(e){console.warn("LOGIN TOKEN ERROR:",e),S(["Error connecting to server"])})},B=l.a.createElement("div",null,N.map(function(e){return l.a.createElement(b.a.Text,{key:e,className:"errorMessage"},e)}));return l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault();var t="".concat(_.URL,"/signup"),a={user:{name:n,email:u,password:p,password_confirmation:y}};C.a.post(t,a).then(function(e){console.log("created user!",e),L()}).catch(function(e){console.warn("SignUp ERROR!!!",e.response.data.errors),S(e.response.data.errors)})}},B,l.a.createElement(b.a.Group,{controlId:"signUpFormBasicName"},l.a.createElement(b.a.Label,null,"Name"),l.a.createElement(b.a.Control,{type:"name",placeholder:"enter your name",onChange:function(e){x(e),r(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"signUpFormBasicEmail"},l.a.createElement(b.a.Label,null,"Email address"),l.a.createElement(b.a.Control,{type:"email",placeholder:"enter email",onChange:function(e){x(e),i(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"signUpFormBasicPassword"},l.a.createElement(b.a.Label,null,"Password"),l.a.createElement(b.a.Control,{type:"password",placeholder:"enter password",onChange:function(e){x(e),g(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"signUpFormPasswordConfirmation"},l.a.createElement(b.a.Label,null,"Password Confirmation"),l.a.createElement(b.a.Control,{type:"password",placeholder:"enter password again",onChange:function(e){x(e),v(e.target.value)}})),l.a.createElement(j.a,{variant:"primary",type:"submit"},"Sign Up"))});function L(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return l.a.createElement(w.a,null,l.a.createElement(j.a,{className:"btn-space",variant:"warning",onClick:function(){return r(!0)}},"SignUp"),l.a.createElement(B,{show:n,onHide:function(){return r(!1)}}))}function B(e){return l.a.createElement(k.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,{id:"contained-modal-title-vcenter"},"Sign Up")),l.a.createElement(k.a.Body,null,l.a.createElement(x,{onHide:e.onHide})))}var T=Object(s.e)(function(e){var t=Object(c.useState)(""),a=Object(m.a)(t,2),n=a[0],r=a[1],o=Object(c.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(c.useState)(""),E=Object(m.a)(d,2),p=E[0],g=E[1],h=Object(c.useState)(""),f=Object(m.a)(h,2),y=(f[0],f[1]),v=function(){var t="".concat(_.URL,"/user_token"),a={auth:{email:n,password:u}};C.a.post(t,a).then(function(t){console.log("response from server:",t,e),y(t.data.jwt),window.localStorage.setItem("jwt",t.data.jwt),O(),e.onHide(),e.history.push("/category/1")}).catch(function(e){console.warn("!!!ERROR:",e),g("Invalid email or password")})},O=function(){console.log("send another axios request!")};return l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),0===n.length||0===u.length?g("Please enter an email and password"):v()}},l.a.createElement(b.a.Text,{className:"errorMessage"},p),l.a.createElement(b.a.Group,{controlId:"loginFormBasicEmail"},l.a.createElement(b.a.Label,null,"Email address"),l.a.createElement(b.a.Control,{type:"email",placeholder:"enter email",onChange:function(e){e.target.value.length>0&&g(""),r(e.target.value)}})),l.a.createElement(b.a.Group,{controlId:"loginFormBasicPassword"},l.a.createElement(b.a.Label,null,"Password"),l.a.createElement(b.a.Control,{type:"password",placeholder:"enter password",onChange:function(e){e.target.value.length>0&&g(""),i(e.target.value)}})),l.a.createElement(j.a,{variant:"primary",type:"submit"},"Log In"))});function U(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return l.a.createElement(w.a,null,l.a.createElement(j.a,{className:"btn-space",variant:"info",onClick:function(){return r(!0)}},"LogIn"),l.a.createElement(q,{show:n,onHide:function(){return r(!1)}}))}function q(e){return l.a.createElement(k.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,{id:"contained-modal-title-vcenter"},"Log In")),l.a.createElement(k.a.Body,null,l.a.createElement(T,{onHide:e.onHide})))}var P=a(23),A=a.n(P);var z=a(40),H=a.n(z),$=a(29),F=a.n($),M=a(41),Q=a.n(M),G=a(27),V=a.n(G);var D=a(28),J=a.n(D);var K=a(33),W=a.n(K);var Y=a(49),Z=a(50),X=a(53),ee=a(52),te=a(54),ae=a(35),ne=a(76),re=a.n(ne),ce=a(120),le=a(51),oe=function(e){function t(e){var a;return Object(Y.a)(this,t),(a=Object(X.a)(this,Object(ee.a)(t).call(this,e))).state={message:""},a.submit=a.submit.bind(Object(le.a)(a)),a}return Object(te.a)(t,e),Object(Z.a)(t,[{key:"submit",value:function(){var e=Object(ce.a)(re.a.mark(function e(t){var a,n,r,c,l,o,s,m=this;return re.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.stripe.createToken({name:"Name"});case 2:a=e.sent,n=a.token,console.log("****** This is Stripe Token: *****",n.id),r="".concat(_.URL,"/charge"),c=localStorage.getItem("jwt"),l={headers:{Authorization:"Bearer "+c}},o={charge:{stripeToken:n.id}},C.a.post(r,o,l).then(function(e){console.log("stripe response",e),console.log("stripe response",e.statusText),"OK"==e.statusText&&(localStorage.setItem("cart",0),s())}).catch(function(e){console.warn("stripe error",e.response),m.setState({message:"Transaction unsuccessful. Please contact your card issuer for more details."})}),s=function(){var e="".concat(_.URL,"/order"),t={headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}};C.a.get(e,t).then(function(e){console.log("response of success order id:",e.data.id);var t=e.data.id;m.props.history.push("/order/".concat(t))}).catch(function(e){console.warn("ERROR!",e)})};case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"payment-form"},l.a.createElement("p",null,"Would you like to complete the purchase?"),l.a.createElement("div",{style:{borderRadius:"0.5em",height:"100px",padding:"50px",border:"3px solid orange",marginTop:"10px",marginBottom:"30px",backgroundColor:"aliceblue",width:"500px"}},l.a.createElement(ae.CardElement,null)),l.a.createElement("button",{onClick:this.submit},"Send"))}}]),t}(c.Component),se=Object(ae.injectStripe)(Object(s.e)(oe)),me=function(e){function t(){return Object(Y.a)(this,t),Object(X.a)(this,Object(ee.a)(t).apply(this,arguments))}return Object(te.a)(t,e),Object(Z.a)(t,[{key:"render",value:function(){return l.a.createElement(ae.StripeProvider,{apiKey:"pk_test_dBB7Zc6zujggRBFHQUdShiJg00Ee8VeuNR"},l.a.createElement("div",{className:"payment-form"},l.a.createElement("h1",null,"Payment Form"),l.a.createElement("div",{className:"payment-form"},l.a.createElement(ae.Elements,null,l.a.createElement(se,null)))))}}]),t}(c.Component);var ue=l.a.createElement(o.a,null,l.a.createElement("div",{className:"entireBody"},l.a.createElement(s.a,{path:"/",component:function(e){var t,a,n=Object(c.useState)(localStorage.getItem("jwt")),r=Object(m.a)(n,2),s=(r[0],r[1]);return t=localStorage.getItem("jwt")?l.a.createElement(o.b,{to:"/account"},l.a.createElement(j.a,{className:"btn-space",variant:"warning"},"MyAccount")):l.a.createElement(L,null),a=localStorage.getItem("jwt")?l.a.createElement("div",null,l.a.createElement(j.a,{className:"btn-space",variant:"info",onClick:function(){localStorage.removeItem("jwt"),s(""),e.history.push("/")}},"LogOut"),l.a.createElement(o.b,{to:"/cart"},l.a.createElement("img",{className:"cart-icon",src:"/proj3_react_frontend/images/cart-icon.png"}))):l.a.createElement(U,null),l.a.createElement(i.a,{sticky:"top",expand:"md",className:"bg-light justify-content-between"},l.a.createElement(i.a.Brand,{href:"#/"},l.a.createElement("div",null,"V's Toy"),l.a.createElement("img",{className:"happy-kids",src:"/proj3_react_frontend/images/happy-kids.png"})),l.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(w.a,null,l.a.createElement(j.a,{className:"btn-space",href:"#/",variant:"danger"},"Home"),l.a.createElement(j.a,{id:"test",className:"btn-space",href:"#about",variant:"primary"},"About")),l.a.createElement(S.a,null,l.a.createElement(S.a.Toggle,{className:"btn-space",variant:"success",id:"dropdown-basic"},"Category"),l.a.createElement(S.a.Menu,null,l.a.createElement(g.a.Item,{id:"category-1",href:"#category/1"},"Age 0-2"),l.a.createElement(g.a.Item,{id:"category-2",href:"#category/2"},"Age 2-5"),l.a.createElement(g.a.Item,{id:"category-3",href:"#category/3"},"Age 5-8"),l.a.createElement(g.a.Item,{id:"category-4",href:"#category/4"},"Age over 8")))),l.a.createElement(b.a,{inline:!0},l.a.createElement(y.a,{type:"text",placeholder:"e.g. hellokitty",className:"mr-sm-2"}),l.a.createElement(j.a,{variant:"secondary",className:"btn-space",size:"sm"},"Search")),l.a.createElement(E.a,{className:"mr-auto"},t,a)))}}),l.a.createElement(s.a,{exact:!0,path:"/",component:function(e){var t=Object(c.useState)([]),a=Object(m.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)(function(){var e="".concat(_.URL,"/products");C.a.get(e).then(function(e){console.log("reponse.data:",e.data),r(e.data)}).catch(function(e){console.warn(e)})},[]),console.log("products",n),l.a.createElement(A.a,{className:"home-image",src:"/proj3_react_frontend/images/playingkids.jpg",fluid:!0})}}),l.a.createElement(s.a,{exact:!0,path:"/account",component:function(){return l.a.createElement("div",null,"My Account")}}),l.a.createElement(s.a,{exact:!0,path:"/category/:id",component:function(e){console.log("url is",_.URL);var t=e.match.params.id,a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)(function(){u()},[t]);var u=function(){var e="".concat(_.URL,"/categories/").concat(t);C.a.get(e).then(function(e){console.log("get all the products response:",e.data),s(e.data)}).catch(function(e){console.warn("ERRORS!!!:",e)})};return l.a.createElement(H.a,null,l.a.createElement(Q.a,null,r.map(function(e){return l.a.createElement(F.a,{xs:12,md:4,key:e.name},l.a.createElement(o.b,{to:"/product/".concat(e.id)},l.a.createElement(V.a,null,l.a.createElement(V.a.Image,{width:200,height:200,fluid:!1,alt:"200x200",src:"/proj3_react_frontend"+"/images/".concat(e.image)}),l.a.createElement(V.a.Caption,null,l.a.createElement("p",null,l.a.createElement("strong",null,e.name)),l.a.createElement("p",null,"Price: ","$".concat(e.price)),l.a.createElement("p",null,"In Stock: ",e.stock),l.a.createElement("p",null,e.description)))))})))}}),l.a.createElement(s.a,{exact:!0,path:"/product/:id",component:function(e){var t=e.match.params.id,a=localStorage.getItem("jwt"),n=Object(c.useState)({}),r=Object(m.a)(n,2),s=r[0],u=r[1],i=Object(c.useState)({}),d=Object(m.a)(i,2),E=d[0],p=d[1],g=Object(c.useState)(1),h=Object(m.a)(g,2),f=h[0],y=h[1],v=Object(c.useState)(""),O=Object(m.a)(v,2),w=O[0],N=O[1],S=Object(c.useState)(!1),R=Object(m.a)(S,2),k=R[0],I=R[1],x=Object(c.useState)("Add to Cart"),L=Object(m.a)(x,2),B=L[0],T=L[1],U=Object(c.useState)(""),q=Object(m.a)(U,2),P=q[0],A=q[1];Object(c.useEffect)(function(){z(t),a||(I(!0),T("Login to use cart"))},[]);var z=function(t){var a="".concat(_.URL,"/products/").concat(t);C.a.get(a).then(function(e){console.log("response:",e.data),console.log("categoryName:",e.data.category.name),u(e.data),p(e.data.category)}).catch(function(t){console.warn("ERRORS!!!:",t),e.history.push("/")})};console.log("stateQuantity:",f),console.log("button disabled?:",k);var $="";return P&&($=l.a.createElement(o.b,{to:"/cart",className:"view-your-cart"},l.a.createElement("strong",null,l.a.createElement("p",{className:"show-success-mesage"},P," "," ","View your cart")))),l.a.createElement(H.a,null,l.a.createElement(Q.a,null,l.a.createElement(F.a,{sm:!0,md:7},l.a.createElement(V.a,null,l.a.createElement(V.a.Image,{fluid:!0,alt:"500x500",src:"/proj3_react_frontend"+"/images/".concat(s.image)}),l.a.createElement(V.a.Caption,null,s.description))),l.a.createElement(F.a,{sm:!0,md:5},l.a.createElement(J.a,{variant:"flush"},l.a.createElement(J.a.Item,null,l.a.createElement("strong",null,s.name)),l.a.createElement(J.a.Item,null,"Category: ",E.name),l.a.createElement(J.a.Item,null,"Price: ","$".concat(s.price)),l.a.createElement(J.a.Item,null,l.a.createElement(b.a.Text,{className:"errorMessage"},w),"Select Quantity:"," ",l.a.createElement("input",{type:"number",min:"1",max:s.stock,defaultValue:"1",onChange:function(e){if(console.log("event.target.value:",e.target.value),a){A("");var t=parseInt(e.target.value);t>s.stock?(N("Sorry, not enough stock."),y(1),I(!0)):(N(""),y(t),I(!1)),console.log("wantedQuantity:",t)}}}),l.a.createElement(b.a.Text,null,"(In stock: ",s.stock,")")),l.a.createElement(J.a.Item,null,l.a.createElement(j.a,{id:"add-to-cart",disabled:k,onClick:function(e){if(console.log("clicked cart"),console.log("when click cart, stateQuantity",f),console.log("when click cart, typeof stateQuantity",typeof f),!f)return console.log("when quantity === 0, it ran!"),N("Please select a quantity."),void I(!0);var t="".concat(_.URL,"/line_items"),n={line_item:{product_id:s.id,quantity:f}},r={headers:{Authorization:"Bearer "+a}};C.a.post(t,n,r).then(function(e){console.log("added to cart",e),A("Successfully added to cart!")}).catch(function(e){console.warn("ERROR of adding to cart",e),N("Sorry, not enough stock.")})}},B)),l.a.createElement(J.a.Item,null,$)))))}}),l.a.createElement(s.a,{exact:!0,path:"/cart",component:function(e){var t=localStorage.getItem("jwt"),a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(""),i=Object(m.a)(u,2),d=i[0],E=i[1];Object(c.useEffect)(function(){var a="".concat(_.URL,"/cart"),n={headers:{Authorization:"Bearer "+t}};C.a.get(a,n).then(function(e){console.log("response:",e.data),s(e.data)}).catch(function(t){console.warn("SERVER ERROR:",t),e.history.push("/")})},[]);var p=l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"There's no item in your cart."),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "))),g=0;r.forEach(function(e){g+=e.quantity*e.product.price});var h=function(e){e.preventDefault(),e.persist(),console.log(e);var a=parseInt(e.target[0].value),n=parseInt(e.target[0].name);if(console.log("updated quantity",a),console.log("lineItemId",n),isNaN(a))return console.log("its NaN"),void E("Please select a quantity.");console.log("should not run if its NaN"),E("");var r="".concat(_.URL,"/line_items/").concat(n),c={line_item:{quantity:a}},l={headers:{Authorization:"Bearer "+t}};C.a.put(r,c,l).then(function(e){console.log("response from server:",e.data),s(e.data)}).catch(function(e){console.warn("ERROR of updating quantity",e),E("Sorry, not enough stock.")})},b=function(e){e.persist(),console.log("click image",e),console.log("lineItemId",e.target.name);var a=parseInt(e.target.name),n="".concat(_.URL,"/line_items/").concat(a),r={headers:{Authorization:"Bearer "+t}};C.a.delete(n,r).then(function(e){console.log("DELETE response:",e.data),s(e.data)}).catch(function(e){console.warn("ERRORS!!!:",e)})};return l.a.createElement(W.a,{striped:!0,hover:!0,responsive:"md"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"My Cart")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Item")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Quantity")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Price")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Total")))),r.length?l.a.createElement("tbody",null,r.map(function(e){return l.a.createElement("tr",{key:e.product.name},l.a.createElement("td",null,l.a.createElement(o.b,{to:"/product/".concat(e.product_id)},l.a.createElement(A.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),l.a.createElement("td",{className:"product-name"},l.a.createElement("br",null),l.a.createElement("strong",null,e.product.name)),l.a.createElement("td",null,l.a.createElement("form",{className:"quantity-update change-quantity",onSubmit:h},l.a.createElement("input",{type:"number",min:"1",max:e.product.stock,name:e.id,defaultValue:e.quantity})," "," ",l.a.createElement("input",{type:"submit",className:"update-quantity",value:"Update",disabled:!1})," "," "),l.a.createElement(A.a,{name:e.id,className:"trash change-quantity",src:"/proj3_react_frontend/images/small-trash.png",title:"Remove",onClick:b,fluid:!0})),l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("strong",null,"$",e.product.price)),l.a.createElement("td",null,l.a.createElement("br",null),l.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement("p",{className:"errorMessage"},d)),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"$",g))),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/checkout"},l.a.createElement(j.a,{id:"checkout"},"Check Out"))))):p)}}),l.a.createElement(s.a,{exact:!0,path:"/checkout",component:function(e){var t=localStorage.getItem("jwt"),a=Object(c.useState)([]),n=Object(m.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(""),i=Object(m.a)(u,2);i[0],i[1],Object(c.useEffect)(function(){var a="".concat(_.URL,"/cart"),n={headers:{Authorization:"Bearer "+t}};C.a.get(a,n).then(function(e){console.log("response:",e.data),s(e.data)}).catch(function(t){console.warn("SERVER ERROR:",t),e.history.push("/")})},[]);var d=0;return r.forEach(function(e){d+=e.quantity*e.product.price}),l.a.createElement(W.a,{responsive:"md"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Confirm order")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Item")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Quantity")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Price")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Total")))),l.a.createElement("tbody",null,r.map(function(e){return l.a.createElement("tr",{key:e.product.name},l.a.createElement("td",null,l.a.createElement(o.b,{to:"/product/".concat(e.product_id)},l.a.createElement(A.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),l.a.createElement("td",null,l.a.createElement("strong",null,e.product.name)),l.a.createElement("td",null,l.a.createElement("strong",null,e.quantity)),l.a.createElement("td",null,l.a.createElement("strong",null,"$",e.product.price)),l.a.createElement("td",null,l.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/cart",id:"back-to-cart"},l.a.createElement("strong",null,"Back to cart"))),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"$",d))),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/payment"},l.a.createElement(j.a,{id:"pay-by-card"},"Pay by Card"))))))}}),l.a.createElement(s.a,{exact:!0,path:"/payment",component:me}),l.a.createElement(s.a,{exact:!0,path:"/order/:id",component:function(e){var t=e.match.params.id;console.log("orderId",t);var a=localStorage.getItem("jwt"),n=Object(c.useState)([]),r=Object(m.a)(n,2),s=r[0],u=r[1],i=Object(c.useState)(!0),d=Object(m.a)(i,2);d[0],d[1],Object(c.useEffect)(function(){var e="".concat(_.URL,"/order/").concat(t),n={headers:{Authorization:"Bearer "+a}};C.a.get(e,n).then(function(e){console.log(e.data),u(e.data)}).catch(function(e){console.warn("ERROR",e)})},[]);var E=0;return s.forEach(function(e){E+=e.quantity*e.product.price}),l.a.createElement("div",null,l.a.createElement("div",{className:"success-purchase"},l.a.createElement("strong",null,"Thanks for Purchase!")," "," ",l.a.createElement(o.b,{className:"success-purchase-link",to:"/category/4"},l.a.createElement("strong",null,"Find More Toys?!"))),l.a.createElement(W.a,{responsive:"md"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Your Order")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Item")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Quantity")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Price")),l.a.createElement("th",{className:"cart-label"},l.a.createElement("strong",null,"Total")))),l.a.createElement("tbody",null,s.map(function(e){return l.a.createElement("tr",{key:e.product.name},l.a.createElement("td",null,l.a.createElement(o.b,{to:"/product/".concat(e.product_id)},l.a.createElement(A.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),l.a.createElement("td",null,l.a.createElement("strong",null,e.product.name)),l.a.createElement("td",null,l.a.createElement("strong",null,e.quantity)),l.a.createElement("td",null,l.a.createElement("strong",null,"$",e.product.price)),l.a.createElement("td",null,l.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),l.a.createElement("td",null,l.a.createElement("strong",{className:"cart-label"},"$",E))),l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null," "),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/category/4"},l.a.createElement(j.a,{className:"back-to-home"},"Find More Toys")))))))}}),l.a.createElement("footer",{className:"body-footer"})));r.a.render(ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.865d5475.chunk.js.map