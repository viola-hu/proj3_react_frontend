(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(228)},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(20),l=a.n(n);a(136),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(0),c=a.n(r),o=a(13),s=a(34),m=(a(137),a(138),a(4)),u=a(50),i=a.n(u),d=a(62),E=a.n(d),p=a(51),g=a.n(p),h=a(9),b=a.n(h),f=a(79),y=a.n(f),v=a(12),j=a.n(v),w=a(28),N=a.n(w),O=a(49),S=a.n(O),k=a(21),R=a.n(k),I=a(10),_=a.n(I),C={URL:"https://toyshoppingsite.herokuapp.com"};var T=Object(s.e)(function(e){var t=Object(r.useState)(""),a=Object(m.a)(t,2),n=a[0],l=a[1],o=Object(r.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(r.useState)(""),E=Object(m.a)(d,2),p=E[0],g=E[1],h=Object(r.useState)(""),f=Object(m.a)(h,2),y=f[0],v=f[1],w=Object(r.useState)([]),N=Object(m.a)(w,2),O=N[0],S=N[1],k=Object(r.useState)(""),R=Object(m.a)(k,2),I=(R[0],R[1]),T=function(e){e.target.value.length>0&&S([])},x=function(){var t="".concat(C.URL,"/user_token"),a={auth:{email:u,password:p}};_.a.post(t,a).then(function(t){console.log("response from server:",t,e),I(t.data.jwt),window.localStorage.setItem("jwt",t.data.jwt),window.localStorage.setItem("totalProductsNumberInCart",0),window.localStorage.setItem("userName",n),window.localStorage.setItem("userEmail",u),e.onHide(),e.history.push("/account")}).catch(function(e){console.warn("LOGIN TOKEN ERROR:",e),S(["Error connecting to server"])})},L=c.a.createElement("div",null,O.map(function(e){return c.a.createElement(b.a.Text,{key:e,className:"errorMessage"},e)}));return c.a.createElement(b.a,{onSubmit:function(e){e.preventDefault();var t="".concat(C.URL,"/signup"),a={user:{name:n,email:u,password:p,password_confirmation:y}};_.a.post(t,a).then(function(e){console.log("created user!",e),x()}).catch(function(e){console.warn("SignUp ERROR!!!",e.response.data.errors),S(e.response.data.errors)})}},L,c.a.createElement(b.a.Group,{controlId:"signUpFormBasicName"},c.a.createElement(b.a.Label,null,"Name"),c.a.createElement(b.a.Control,{type:"name",placeholder:"enter your name",onChange:function(e){T(e),l(e.target.value)}})),c.a.createElement(b.a.Group,{controlId:"signUpFormBasicEmail"},c.a.createElement(b.a.Label,null,"Email address"),c.a.createElement(b.a.Control,{type:"email",placeholder:"enter email",onChange:function(e){T(e),i(e.target.value)}})),c.a.createElement(b.a.Group,{controlId:"signUpFormBasicPassword"},c.a.createElement(b.a.Label,null,"Password"),c.a.createElement(b.a.Control,{type:"password",placeholder:"enter password",onChange:function(e){T(e),g(e.target.value)}})),c.a.createElement(b.a.Group,{controlId:"signUpFormPasswordConfirmation"},c.a.createElement(b.a.Label,null,"Password Confirmation"),c.a.createElement(b.a.Control,{type:"password",placeholder:"enter password again",onChange:function(e){T(e),v(e.target.value)}})),c.a.createElement(j.a,{variant:"primary",type:"submit"},"Sign Up"))});function x(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),n=a[0],l=a[1];return c.a.createElement(N.a,null,c.a.createElement(j.a,{className:"btn-space",variant:"warning",onClick:function(){return l(!0)}},"SignUp"),c.a.createElement(L,{show:n,onHide:function(){return l(!1)}}))}function L(e){return c.a.createElement(R.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(R.a.Header,{closeButton:!0},c.a.createElement(R.a.Title,{id:"contained-modal-title-vcenter"},"Sign Up")),c.a.createElement(R.a.Body,null,c.a.createElement(T,{onHide:e.onHide})))}var U=Object(s.e)(function(e){var t=Object(r.useState)(""),a=Object(m.a)(t,2),n=a[0],l=a[1],o=Object(r.useState)(""),s=Object(m.a)(o,2),u=s[0],i=s[1],d=Object(r.useState)(""),E=Object(m.a)(d,2),p=E[0],g=E[1],h=Object(r.useState)(""),f=Object(m.a)(h,2),y=(f[0],f[1]),v=function(){var t="".concat(C.URL,"/user_token"),a={auth:{email:n,password:u}};_.a.post(t,a).then(function(t){console.log("response from server:",t,e),y(t.data.jwt),window.localStorage.setItem("jwt",t.data.jwt),w(),e.onHide(),e.history.push("/category/1")}).catch(function(e){console.warn("!!!ERROR:",e),g("Invalid email or password")})},w=function(){console.log("send another axios request!");var e="".concat(C.URL,"/user"),t={headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}};_.a.get(e,t).then(function(e){console.log("second axios response:",e),window.localStorage.setItem("totalProductsNumberInCart",e.data.products_number),window.localStorage.setItem("userName",e.data.current_user_name),window.localStorage.setItem("userEmail",e.data.current_user_email)}).catch(function(e){console.warn("SERVER ERROR:",e)})};return c.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),0===n.length||0===u.length?g("Please enter an email and password"):v()}},c.a.createElement(b.a.Text,{className:"errorMessage"},p),c.a.createElement(b.a.Group,{controlId:"loginFormBasicEmail"},c.a.createElement(b.a.Label,null,"Email address"),c.a.createElement(b.a.Control,{type:"email",placeholder:"enter email",onChange:function(e){e.target.value.length>0&&g(""),l(e.target.value)}})),c.a.createElement(b.a.Group,{controlId:"loginFormBasicPassword"},c.a.createElement(b.a.Label,null,"Password"),c.a.createElement(b.a.Control,{type:"password",placeholder:"enter password",onChange:function(e){e.target.value.length>0&&g(""),i(e.target.value)}})),c.a.createElement(j.a,{variant:"primary",type:"submit"},"Log In"))});function B(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),n=a[0],l=a[1];return c.a.createElement(N.a,null,c.a.createElement(j.a,{className:"btn-space",variant:"info",onClick:function(){return l(!0)}},"LogIn"),c.a.createElement(P,{show:n,onHide:function(){return l(!1)}}))}function P(e){return c.a.createElement(R.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(R.a.Header,{closeButton:!0},c.a.createElement(R.a.Title,{id:"contained-modal-title-vcenter"},"Log In")),c.a.createElement(R.a.Body,null,c.a.createElement(U,{onHide:e.onHide})))}var A=a(16),q=a.n(A);var z=a(37),M=a(38),V=a(41),H=a(39),W=a(40),$=a(52),G=function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(V.a)(this,Object(H.a)(t).call(this,e))).handleClick=function(e,t,n){console.log("props:",e),console.log("marker:",t),console.log("event:",n),a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.state={stores:[{coords:{lat:-33.8717,lng:151.2067},name:"V's Toy - QVB",location:"455 George St, Sydney NSW 2000",directionURL:"https://www.google.com/maps/place/455+George+St,+Sydney+NSW+2000/@-33.8721094,151.2045493,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae3e8d0f5583:0xd8cb208eb31f2b0d!8m2!3d-33.8721139!4d151.206738"},{coords:{lat:-33.8597,lng:151.2082},name:"V's Toy - The Rocks",location:"80 George St, The Rocks NSW 2000",directionURL:"https://www.google.com/maps/place/80+George+St,+The+Rocks+NSW+2000/@-33.857201,151.2066144,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae5d3ff9500b:0xaeebeb77916477b2!8m2!3d-33.8572055!4d151.2088031"}],selectedPlace:{},activeMarker:{},showingInfoWindow:!1},a}return Object(W.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement($.Map,{google:this.props.google,zoom:13,style:{width:"22em",height:"20em",border:"orange dashed"},initialCenter:{lat:-33.866,lng:151.2056}},this.state.stores.map(function(t,a){return c.a.createElement($.Marker,{key:a,id:a,position:t.coords,onClick:e.handleClick,name:t.name,directionURL:t.directionURL,location:t.location})}),c.a.createElement($.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},c.a.createElement("div",null,c.a.createElement("h5",{className:"info-window"},c.a.createElement("i",null,this.state.selectedPlace.name)),c.a.createElement("p",null,this.state.selectedPlace.location),c.a.createElement("a",{href:this.state.selectedPlace.directionURL,target:"_blank"},"How to get here?"))))}}]),t}(r.Component),F=Object($.GoogleApiWrapper)({apiKey:"AIzaSyBXG0-gC8Yje8zYu6RJlMYVT6oX5TeEjLA"})(G),Q=a(23),D=a.n(Q),K=a(14),J=a.n(K),Y=a(8),X=a.n(Y);var Z=a(63),ee=a.n(Z),te=a(29),ae=a.n(te),ne=a(33),le=a.n(ne);var re=a(129),ce=a(35),oe=a.n(ce);var se=a(31),me=a.n(se);var ue=a(43),ie=a(83),de=a.n(ie),Ee=a(130),pe=a(61);function ge(e){var t=Object(r.useState)(!1),a=Object(m.a)(t,2),n=a[0],l=a[1];return c.a.createElement(N.a,null,c.a.createElement("button",{className:"hint-button",onClick:function(){return l(!0)}},c.a.createElement("h5",null,"Hint")),c.a.createElement(he,{show:n,onHide:function(){return l(!1)}}))}function he(e){return c.a.createElement(R.a,Object.assign({},e,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(R.a.Header,{closeButton:!0},c.a.createElement(R.a.Title,{id:"contained-modal-title-vcenter"},"About Payment")),c.a.createElement(R.a.Body,{className:"note"},c.a.createElement("p",null,c.a.createElement("small",null,"Hi there, ",c.a.createElement("br",null),"We are using Stripe test environment.",c.a.createElement("br",null),"Please select from the below cards to proceed.")),c.a.createElement("p",null,c.a.createElement("small",null,c.a.createElement("strong",null,"Visa: 4242 4242 4242 4242"))),c.a.createElement("p",null,c.a.createElement("small",null,c.a.createElement("strong",null,"Mastercard: 5555 5555 5555 4444"))),c.a.createElement("p",null,c.a.createElement("small",null,c.a.createElement("strong",null,"American Express: 3782 822463 10005"))),c.a.createElement("p",null,c.a.createElement("small",null,c.a.createElement("strong",null,"* a valid expiration date in the future ",c.a.createElement("br",null),"* any random CVC number")))))}var be=function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(V.a)(this,Object(H.a)(t).call(this,e))).state={message:""},a.submit=a.submit.bind(Object(pe.a)(a)),a}return Object(W.a)(t,e),Object(M.a)(t,[{key:"submit",value:function(){var e=Object(Ee.a)(de.a.mark(function e(t){var a,n,l,r,c,o,s,m=this;return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.stripe.createToken({name:"Name"});case 2:if(a=e.sent,n=a.token,console.log("****** token *****",n),n){e.next=8;break}return this.setState({message:"Invalid card information. Please contact your card issuer for more details."}),e.abrupt("return");case 8:console.log("****** This is Stripe Token: *****",n.id),l="".concat(C.URL,"/charge"),r=localStorage.getItem("jwt"),c={headers:{Authorization:"Bearer "+r}},o={charge:{stripeToken:n.id}},_.a.post(l,o,c).then(function(e){console.log("stripe response",e),console.log("stripe response",e.statusText),"OK"==e.statusText&&(localStorage.setItem("cart",0),s())}).catch(function(e){console.warn("stripe error",e.response),m.setState({message:"Transaction unsuccessful. Please contact your card issuer for more details."})}),s=function(){var e="".concat(C.URL,"/order"),t={headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}};_.a.get(e,t).then(function(e){console.log("response of success order id:",e.data.id);var t=e.data.id;m.props.history.push("/order/".concat(t))}).catch(function(e){console.warn("ERROR!",e)})};case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=c.a.createElement("p",{className:"errorMessage"},c.a.createElement("small",null,this.state.message));return c.a.createElement("div",{className:"payment-form"},c.a.createElement(D.a,null,c.a.createElement(X.a,null,c.a.createElement(J.a,null,c.a.createElement("p",{className:"enter-details"},"Enter Card Details"))),c.a.createElement(X.a,null,c.a.createElement(J.a,null,e)),c.a.createElement(X.a,null,c.a.createElement(J.a,{className:"stripe-form"},c.a.createElement(ue.CardElement,null))),c.a.createElement(X.a,null,c.a.createElement(J.a,{md:6,className:"submit-button-container"},c.a.createElement("button",{className:"submit-button",onClick:this.submit},c.a.createElement("h5",null,"Submit"))),c.a.createElement(J.a,{md:6,className:"hint-button-container"},c.a.createElement(ge,null)))))}}]),t}(r.Component),fe=Object(ue.injectStripe)(Object(s.e)(be)),ye=function(e){function t(){return Object(z.a)(this,t),Object(V.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return c.a.createElement(ue.StripeProvider,{apiKey:"pk_test_dBB7Zc6zujggRBFHQUdShiJg00Ee8VeuNR"},c.a.createElement("div",{className:"payment-form"},c.a.createElement("h1",{className:"payment-form-title"},"Payment Form"),c.a.createElement("div",{className:"payment-form"},c.a.createElement(ue.Elements,null,c.a.createElement(fe,null)))))}}]),t}(r.Component);var ve=c.a.createElement(o.a,null,c.a.createElement("div",{className:"entireBody"},c.a.createElement(s.a,{path:"/",component:function(e){var t,a,n=Object(r.useState)(localStorage.getItem("jwt")),l=Object(m.a)(n,2),s=(l[0],l[1]),u=Object(r.useState)(""),d=Object(m.a)(u,2),p=d[0],h=d[1];return t=localStorage.getItem("jwt")?c.a.createElement(o.b,{to:"/account"},c.a.createElement(j.a,{className:"btn-space",variant:"warning"},"Account")):c.a.createElement(x,null),a=localStorage.getItem("jwt")?c.a.createElement("div",null,c.a.createElement(j.a,{className:"btn-space",variant:"info",onClick:function(){localStorage.removeItem("jwt"),localStorage.removeItem("userEmail"),localStorage.removeItem("userName"),localStorage.removeItem("totalProductsNumberInCart"),s(""),e.history.push("/")}},"LogOut"),c.a.createElement(o.b,{to:"/cart"},c.a.createElement("img",{className:"cart-icon",src:"/proj3_react_frontend/images/cart-icon.png"}))):c.a.createElement(B,null),c.a.createElement(i.a,{sticky:"top",expand:"md",className:"entireBody justify-content-between"},c.a.createElement(i.a.Brand,{href:"#/"},c.a.createElement("div",null,"V's Toy"),c.a.createElement("img",{className:"happy-kids",src:"/proj3_react_frontend/images/happy-kids.png"})),c.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(E.a,{className:"mr-auto"},c.a.createElement(N.a,null,c.a.createElement(j.a,{className:"btn-space",href:"#/",variant:"danger"},"Home"),c.a.createElement(j.a,{className:"btn-space",href:"#about",variant:"primary"},"About")),c.a.createElement(S.a,null,c.a.createElement(S.a.Toggle,{className:"btn-space",variant:"success",id:"dropdown-basic"},"Category"),c.a.createElement(S.a.Menu,null,c.a.createElement(g.a.Item,{id:"category-1",href:"#category/1"},"Age 0-2"),c.a.createElement(g.a.Item,{id:"category-2",href:"#category/2"},"Age 2-5"),c.a.createElement(g.a.Item,{id:"category-3",href:"#category/3"},"Age 5-8"),c.a.createElement(g.a.Item,{id:"category-4",href:"#category/4"},"Age over 8")))),c.a.createElement(E.a,null,c.a.createElement(b.a,{inline:!0,onSubmit:function(t){t.preventDefault(),p&&e.history.push("/search/".concat(p))}},c.a.createElement(y.a,{type:"text",placeholder:"e.g. hellokitty",className:"mr-sm-2",onChange:function(e){console.log("search keyword:",e.target.value),h(e.target.value)}}),c.a.createElement(j.a,{type:"submit",variant:"secondary",className:"btn-space",size:"sm"},"Search"))),c.a.createElement(E.a,{className:"mr-auto"},t,a)))}}),c.a.createElement(s.a,{exact:!0,path:"/",component:function(e){var t=Object(r.useState)([]),a=Object(m.a)(t,2),n=a[0],l=a[1];return Object(r.useEffect)(function(){var e="".concat(C.URL,"/products");_.a.get(e).then(function(e){console.log("reponse.data:",e.data),l(e.data)}).catch(function(e){console.warn(e)})},[]),console.log("products",n),c.a.createElement(q.a,{className:"home-image",src:"/proj3_react_frontend/images/playingkids.jpg",fluid:!0})}}),c.a.createElement(s.a,{exact:!0,path:"/about",component:function(e){return c.a.createElement("div",{className:"about-container"},c.a.createElement(D.a,null,c.a.createElement(X.a,{className:"about-welcome"},c.a.createElement(J.a,{style:{textAlign:"center"}},c.a.createElement("h1",{className:"about-title"},"Welcome to V's Toy!"))),c.a.createElement(X.a,{className:"about-welcome"},c.a.createElement(J.a,null,c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nostrum necessitatibus odio, eaque illum accusamus blanditiis. Cupiditate, autem libero nam rerum laudantium delectus. Suscipit minus tempora vitae et voluptate dolore."))),c.a.createElement(X.a,null,c.a.createElement(J.a,{sm:12,md:6},c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("h5",{className:"shop-title"},c.a.createElement(q.a,{style:{width:"2.5rem"},src:"/proj3_react_frontend/images/icon-shop.png"})," "," ","V's Toy - QVB")),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("p",null,"455 George St, Sydney NSW 2000")),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("p",null,c.a.createElement(q.a,{style:{width:"1rem"},src:"/proj3_react_frontend/images/icon-phone.png"}),"  +61 02 3456 7890")),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("p",null,c.a.createElement(q.a,{style:{width:"1rem"},src:"/proj3_react_frontend/images/icon-email.png"})," ",c.a.createElement("a",{href:"mailto:viola.zj.hu@gmail.com"},"contact@vtoy.com"))),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("h5",{className:"shop-title"},c.a.createElement(q.a,{style:{width:"2.5rem"},src:"/proj3_react_frontend/images/icon-shop.png"})," "," ","V's Toy - The Rocks")),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("p",null,"80 George St, The Rocks NSW 2000")),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("p",null,c.a.createElement(q.a,{style:{width:"1rem"},src:"/proj3_react_frontend/images/icon-phone.png"}),"  +61 02 0987 6543")),c.a.createElement(X.a,{className:"shop-contact"},c.a.createElement("p",null,c.a.createElement(q.a,{style:{width:"1rem"},src:"/proj3_react_frontend/images/icon-email.png"})," ",c.a.createElement("a",{href:"mailto:viola.zj.hu@gmail.com"},"contact@vtoy.com")))),c.a.createElement(J.a,{sm:12,md:6},c.a.createElement(F,null)))))}}),c.a.createElement(s.a,{exact:!0,path:"/account",component:function(e){var t=Object(r.useState)([]),a=Object(m.a)(t,2),n=a[0],l=a[1],s=localStorage.getItem("userName"),u=localStorage.getItem("userEmail");return Object(r.useEffect)(function(){var e=localStorage.getItem("jwt"),t="".concat(C.URL,"/orders"),a={headers:{Authorization:"Bearer "+e}};_.a.get(t,a).then(function(e){console.log("Request orders response:",e.data),l(e.data)}).catch(function(e){console.warn("SERVER ERROR:",e)})},[]),c.a.createElement("div",null,c.a.createElement(D.a,{className:"account-container"},c.a.createElement(X.a,null,c.a.createElement(J.a,{sm:12,md:4},c.a.createElement("h3",{className:"account-title"},"My Account"),c.a.createElement(le.a,{striped:!0,hover:!0,size:"sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"account-table-header"},"User Name"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,s))),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"account-table-header"},"Email Address"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,u)))),c.a.createElement(N.a,null,c.a.createElement(j.a,{className:"update-account",variant:"outline-warning"},"Update Account"),c.a.createElement("br",null),c.a.createElement(j.a,{className:"delete-account",variant:"outline-info"},"Delete Account"))),c.a.createElement(J.a,{sm:12,md:8},c.a.createElement("h3",{className:"account-title"},"My Orders"),0===n.length?c.a.createElement("div",null,c.a.createElement("h5",{className:"no-purchase"},"No purchase yet. Go get them! "),c.a.createElement(q.a,{src:"/proj3_react_frontend/images/nopurchaseyet02.gif",fluid:!0})):c.a.createElement(ee.a,{defaultActiveKey:"0"},c.a.createElement(ae.a,null,n.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(ee.a.Toggle,{as:ae.a.Header,eventKey:"".concat(t+1),className:"order-card-header"},c.a.createElement(X.a,null,c.a.createElement(J.a,null,c.a.createElement("small",null,"#")," ","Order"," ",e.id," "," ",c.a.createElement("small",null,c.a.createElement("i",null,e.order_created_at_date_formatted))),c.a.createElement(J.a,{style:{textAlign:"right"}},c.a.createElement("span",null,"Total: $",e.order_total_amount)))),c.a.createElement(ee.a.Collapse,{eventKey:"".concat(t+1),key:e.id},c.a.createElement(ae.a.Body,{className:"order-card-body"},e.line_items.map(function(e){return c.a.createElement(X.a,{className:"order-card-row",key:e.id},c.a.createElement(J.a,{sm:12,md:4},c.a.createElement(o.b,{to:"/product/".concat(e.product_id)},c.a.createElement("img",{name:e.product.name,src:"/proj3_react_frontend"+"/images/".concat(e.product.image),className:"order-list-image"}))),c.a.createElement(J.a,{sm:12,md:8},c.a.createElement("h5",{className:"order-list-product"},e.product.name),c.a.createElement("p",null,"Price: $",e.product.price),c.a.createElement("p",null,"Purchased Number: ",e.quantity),c.a.createElement("p",null,"Subtotal: $",e.quantity*e.product.price)))}))))})))))),c.a.createElement("footer",null,c.a.createElement(q.a,{style:{maxWidth:"50vw"},src:"/proj3_react_frontend/images/happykidsplaying01.jpg",fluid:!0}),c.a.createElement(q.a,{style:{maxWidth:"50vw"},src:"/proj3_react_frontend/images/happykidsplaying01.jpg",fluid:!0})))}}),c.a.createElement(s.a,{exact:!0,path:"/category/:id",component:function(e){console.log("url is",C.URL);var t=e.match.params.id,a=Object(r.useState)([]),n=Object(m.a)(a,2),l=n[0],s=n[1];Object(r.useEffect)(function(){u()},[t]);var u=function(){var e="".concat(C.URL,"/categories/").concat(t);_.a.get(e).then(function(e){console.log("get all the products response:",e.data),s(e.data)}).catch(function(e){console.warn("ERRORS!!!:",e)})},i=["lightpink","gold","yellowgreen","turquoise"];return c.a.createElement(D.a,null,c.a.createElement(X.a,null,l.map(function(e){return c.a.createElement(J.a,{xs:12,md:4,key:e.name,style:{textAlign:"center"}},c.a.createElement(o.b,{to:"/product/".concat(e.id)},c.a.createElement(oe.a,null,c.a.createElement(oe.a.Image,{width:300,height:300,fluid:!1,alt:"300x300",style:Object(re.a)({padding:"1rem",border:"dashed ".concat(i[t-1])},"padding","1rem"),src:"/proj3_react_frontend"+"/images/".concat(e.image)}),c.a.createElement(oe.a.Caption,null,c.a.createElement("p",null,c.a.createElement("strong",null,e.name)),c.a.createElement("p",null,"Price: ","$".concat(e.price)),c.a.createElement("p",null,"In Stock: ",e.stock),c.a.createElement("p",null,e.description)))))})))}}),c.a.createElement(s.a,{exact:!0,path:"/product/:id",component:function(e){var t=e.match.params.id,a=localStorage.getItem("jwt"),n=Object(r.useState)({}),l=Object(m.a)(n,2),s=l[0],u=l[1],i=Object(r.useState)({}),d=Object(m.a)(i,2),E=d[0],p=d[1],g=Object(r.useState)(1),h=Object(m.a)(g,2),f=h[0],y=h[1],v=Object(r.useState)(""),w=Object(m.a)(v,2),N=w[0],O=w[1],S=Object(r.useState)(!1),k=Object(m.a)(S,2),R=k[0],I=k[1],T=Object(r.useState)("Add to Cart"),x=Object(m.a)(T,2),L=x[0],U=x[1],B=Object(r.useState)(""),P=Object(m.a)(B,2),A=P[0],q=P[1];Object(r.useEffect)(function(){z(t),a||(I(!0),U("Login to use cart"))},[]);var z=function(t){var a="".concat(C.URL,"/products/").concat(t);_.a.get(a).then(function(e){console.log("response:",e.data),console.log("categoryName:",e.data.category.name),u(e.data),p(e.data.category)}).catch(function(t){console.warn("ERRORS!!!:",t),e.history.push("/")})};console.log("stateQuantity:",f),console.log("button disabled?:",R);var M="";return A&&(M=c.a.createElement(o.b,{to:"/cart",className:"view-your-cart"},c.a.createElement("strong",null,c.a.createElement("p",{className:"show-success-mesage"},A," "," ","View your cart")))),c.a.createElement(D.a,null,c.a.createElement(X.a,null,c.a.createElement(J.a,{sm:!0,md:7},c.a.createElement(oe.a,null,c.a.createElement(oe.a.Image,{fluid:!0,alt:"500x500",src:"/proj3_react_frontend"+"/images/".concat(s.image)}),c.a.createElement(oe.a.Caption,null,s.description))),c.a.createElement(J.a,{sm:!0,md:5},c.a.createElement(me.a,{variant:"flush"},c.a.createElement(me.a.Item,null,c.a.createElement("strong",null,s.name)),c.a.createElement(me.a.Item,null,"Category: ",E.name),c.a.createElement(me.a.Item,null,"Price: ","$".concat(s.price)),c.a.createElement(me.a.Item,null,c.a.createElement(b.a.Text,{className:"errorMessage"},N),"Select Quantity:"," ",c.a.createElement("input",{type:"number",min:"1",max:s.stock,defaultValue:"1",onChange:function(e){if(console.log("event.target.value:",e.target.value),a){q("");var t=parseInt(e.target.value);t>s.stock?(O("Sorry, not enough stock."),y(1),I(!0)):(O(""),y(t),I(!1)),console.log("wantedQuantity:",t)}}}),c.a.createElement(b.a.Text,null,"(In stock: ",s.stock,")")),c.a.createElement(me.a.Item,null,c.a.createElement(j.a,{id:"add-to-cart",disabled:R,onClick:function(e){if(console.log("clicked cart"),console.log("when click cart, stateQuantity",f),console.log("when click cart, typeof stateQuantity",typeof f),!f)return console.log("when quantity === 0, it ran!"),O("Please select a quantity."),void I(!0);var t="".concat(C.URL,"/line_items"),n={line_item:{product_id:s.id,quantity:f}},l={headers:{Authorization:"Bearer "+a}};_.a.post(t,n,l).then(function(e){console.log("added to cart",e),window.localStorage.setItem("totalProductsNumberInCart",e.data.total_products_number_in_cart),q("Successfully added to cart!")}).catch(function(e){console.warn("ERROR of adding to cart",e),O("Sorry, not enough stock.")})}},L)),c.a.createElement(me.a.Item,null,M)))))}}),c.a.createElement(s.a,{exact:!0,path:"/cart",component:function(e){var t=localStorage.getItem("jwt"),a=Object(r.useState)([]),n=Object(m.a)(a,2),l=n[0],s=n[1],u=Object(r.useState)(""),i=Object(m.a)(u,2),d=i[0],E=i[1];Object(r.useEffect)(function(){var a="".concat(C.URL,"/cart"),n={headers:{Authorization:"Bearer "+t}};_.a.get(a,n).then(function(e){console.log("response:",e.data),s(e.data)}).catch(function(t){console.warn("SERVER ERROR:",t),e.history.push("/")})},[]);var p=c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"There's no item in your cart."),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "))),g=0;l.forEach(function(e){g+=e.quantity*e.product.price});var h=function(e){e.preventDefault(),e.persist(),console.log(e);var a=parseInt(e.target[0].value),n=parseInt(e.target[0].name);if(console.log("updated quantity",a),console.log("lineItemId",n),isNaN(a))return console.log("its NaN"),void E("Please select a quantity.");console.log("should not run if its NaN"),E("");var l="".concat(C.URL,"/line_items/").concat(n),r={line_item:{quantity:a}},c={headers:{Authorization:"Bearer "+t}};_.a.put(l,r,c).then(function(e){console.log("response from server:",e.data),s(e.data)}).catch(function(e){console.warn("ERROR of updating quantity",e),E("Sorry, not enough stock.")})},b=function(e){e.persist(),console.log("click image",e),console.log("lineItemId",e.target.name);var a=parseInt(e.target.name),n="".concat(C.URL,"/line_items/").concat(a),l={headers:{Authorization:"Bearer "+t}};_.a.delete(n,l).then(function(e){console.log("DELETE response:",e.data),s(e.data)}).catch(function(e){console.warn("ERRORS!!!:",e)})};return c.a.createElement(le.a,{striped:!0,hover:!0,responsive:"md"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"My Cart")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Item")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Quantity")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Price")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Total")))),l.length?c.a.createElement("tbody",null,l.map(function(e){return c.a.createElement("tr",{key:e.product.name},c.a.createElement("td",null,c.a.createElement(o.b,{to:"/product/".concat(e.product_id)},c.a.createElement(q.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),c.a.createElement("td",{className:"product-name"},c.a.createElement("br",null),c.a.createElement("strong",null,e.product.name)),c.a.createElement("td",null,c.a.createElement("form",{className:"quantity-update change-quantity",onSubmit:h},c.a.createElement("input",{type:"number",min:"1",max:e.product.stock,name:e.id,defaultValue:e.quantity})," "," ",c.a.createElement("input",{type:"submit",className:"update-quantity",value:"Update",disabled:!1})," "," "),c.a.createElement(q.a,{name:e.id,className:"trash change-quantity",src:"/proj3_react_frontend/images/small-trash.png",title:"Remove",onClick:b,fluid:!0})),c.a.createElement("td",null,c.a.createElement("br",null),c.a.createElement("strong",null,"$",e.product.price)),c.a.createElement("td",null,c.a.createElement("br",null),c.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),c.a.createElement("tr",null,c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null,c.a.createElement("p",{className:"errorMessage"},d)),c.a.createElement("td",null,c.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),c.a.createElement("td",null,c.a.createElement("strong",{className:"cart-label"},"$",g))),c.a.createElement("tr",null,c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null,c.a.createElement(o.b,{to:"/checkout"},c.a.createElement(j.a,{id:"checkout"},"Check Out"))))):p)}}),c.a.createElement(s.a,{exact:!0,path:"/checkout",component:function(e){var t=localStorage.getItem("jwt"),a=Object(r.useState)([]),n=Object(m.a)(a,2),l=n[0],s=n[1],u=Object(r.useState)(""),i=Object(m.a)(u,2);i[0],i[1],Object(r.useEffect)(function(){var a="".concat(C.URL,"/cart"),n={headers:{Authorization:"Bearer "+t}};_.a.get(a,n).then(function(e){console.log("response:",e.data),s(e.data)}).catch(function(t){console.warn("SERVER ERROR:",t),e.history.push("/")})},[]);var d=0;return l.forEach(function(e){d+=e.quantity*e.product.price}),c.a.createElement(le.a,{responsive:"md"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Confirm order")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Item")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Quantity")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Price")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Total")))),c.a.createElement("tbody",null,l.map(function(e){return c.a.createElement("tr",{key:e.product.name},c.a.createElement("td",null,c.a.createElement(o.b,{to:"/product/".concat(e.product_id)},c.a.createElement(q.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),c.a.createElement("td",null,c.a.createElement("strong",null,e.product.name)),c.a.createElement("td",null,c.a.createElement("strong",null,e.quantity)),c.a.createElement("td",null,c.a.createElement("strong",null,"$",e.product.price)),c.a.createElement("td",null,c.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),c.a.createElement("tr",null,c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null,c.a.createElement(o.b,{to:"/cart",id:"back-to-cart"},c.a.createElement("strong",null,"Back to cart"))),c.a.createElement("td",null,c.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),c.a.createElement("td",null,c.a.createElement("strong",{className:"cart-label"},"$",d))),c.a.createElement("tr",null,c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null,c.a.createElement(o.b,{to:"/payment"},c.a.createElement(j.a,{id:"pay-by-card"},"Pay by Card"))))))}}),c.a.createElement(s.a,{exact:!0,path:"/payment",component:ye}),c.a.createElement(s.a,{exact:!0,path:"/order/:id",component:function(e){var t=e.match.params.id;console.log("orderId",t);var a=localStorage.getItem("jwt"),n=Object(r.useState)([]),l=Object(m.a)(n,2),s=l[0],u=l[1],i=Object(r.useState)(!0),d=Object(m.a)(i,2);d[0],d[1],Object(r.useEffect)(function(){var e="".concat(C.URL,"/order/").concat(t),n={headers:{Authorization:"Bearer "+a}};_.a.get(e,n).then(function(e){console.log(e.data),u(e.data)}).catch(function(e){console.warn("ERROR",e)})},[]);var E=0;return s.forEach(function(e){E+=e.quantity*e.product.price}),c.a.createElement("div",null,c.a.createElement("div",{className:"success-purchase"},c.a.createElement("strong",null,"Thanks for Purchase!")," "," ",c.a.createElement(o.b,{className:"success-purchase-link",to:"/category/4"},c.a.createElement("strong",null,"Find More Toys?!"))),c.a.createElement(le.a,{responsive:"md"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Your Order")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Item")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Quantity")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Price")),c.a.createElement("th",{className:"cart-label"},c.a.createElement("strong",null,"Total")))),c.a.createElement("tbody",null,s.map(function(e){return c.a.createElement("tr",{key:e.product.name},c.a.createElement("td",null,c.a.createElement(o.b,{to:"/product/".concat(e.product_id)},c.a.createElement(q.a,{className:"cart-thumbnail",src:"/proj3_react_frontend"+"/images/".concat(e.product.image),thumbnail:!0}))),c.a.createElement("td",null,c.a.createElement("strong",null,e.product.name)),c.a.createElement("td",null,c.a.createElement("strong",null,e.quantity)),c.a.createElement("td",null,c.a.createElement("strong",null,"$",e.product.price)),c.a.createElement("td",null,c.a.createElement("strong",null,"$",e.quantity*e.product.price)))}),c.a.createElement("tr",null,c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null,c.a.createElement("strong",{className:"cart-label"},"Subtotal: ")),c.a.createElement("td",null,c.a.createElement("strong",{className:"cart-label"},"$",E))),c.a.createElement("tr",null,c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null," "),c.a.createElement("td",null,c.a.createElement(o.b,{to:"/category/4"},c.a.createElement(j.a,{className:"back-to-home"},"Find More Toys")))))))}}),c.a.createElement(s.a,{exact:!0,path:"/search/:q",component:function(e){var t=e.match.params.q,a=Object(r.useState)([]),n=Object(m.a)(a,2),l=n[0],s=n[1],u=Object(r.useState)(""),i=Object(m.a)(u,2),d=i[0],E=i[1];console.log("keyword:",t),Object(r.useEffect)(function(){g()},[t]);var p,g=function(){var e="".concat(C.URL,"/search/").concat(t);_.a.get(e).then(function(e){if(console.log("Matching products:",e.data),0===e.data.length)console.log("Sorry, No Results Found."),E("Sorry, No Results Found."),s([]);else{s(e.data);var t=e.data.length;E("Found (".concat(e.data.length,1===t?") toy!":") toys!"))}}).catch(function(e){console.warn("Search failed:",e)})};return p=0===l.length?c.a.createElement(X.a,{className:"found-no-toys-row"},c.a.createElement("h5",{className:"found-result"},d)):c.a.createElement(X.a,{className:"found-toys-row"},c.a.createElement("h5",{className:"found-result"},d)),c.a.createElement(D.a,null,p,c.a.createElement(X.a,null,l.map(function(e){return c.a.createElement(J.a,{sm:12,md:4,style:{margin:"1rem 0"},key:e.name},c.a.createElement(ae.a,{className:"card-background"},c.a.createElement(o.b,{to:"/product/".concat(e.id)},c.a.createElement(ae.a.Img,{variant:"top",src:"/proj3_react_frontend"+"/images/".concat(e.image),height:300})),c.a.createElement(ae.a.Body,null,c.a.createElement(ae.a.Title,{style:{color:"grey",fontWeight:600}},e.name),c.a.createElement(ae.a.Text,{style:{color:"grey"}},"Price: $",e.price," ",c.a.createElement("br",null),"In Stock: $",e.stock," ",c.a.createElement("br",null),e.description))))})))}}),c.a.createElement("footer",{className:"body-footer"})));l.a.render(ve,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,1,2]]]);
//# sourceMappingURL=main.d7ad8728.chunk.js.map