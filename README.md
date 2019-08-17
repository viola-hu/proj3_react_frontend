# V's Toy

### Live Demo

Skip the reading and go straight to a live version of the site here:
[https://viola-hu.github.io/proj3_react_frontend/#/](https://viola-hu.github.io/proj3_react_frontend/#/)

Check out the back-end code here:
[https://github.com/viola-hu/proj3_rails_backend](https://github.com/viola-hu/proj3_rails_backend)


### Features
1. A mobile-friendly responsive e-commerce site
2. Onsite search feature
3. Image zooming feature
4. Implements Google Map API
5. Implements Stripe Elements API
6. JWT for user authentication
7. Windows LocalStorage used in handling Session Data

<img alt="web-homepage" src="./src/images/101.png" width="500px">


### Technologies
This e-commerce web application uses mainly **React** Front-end and **Rails** Back-end with **PostgreSQL** as database and has been deployed on **Heroku**.

#### Front-end
* React for Front-end Components
* Bootstrap

#### Front-end Packages & APIs
* axios
* react-bootstrap
* google-maps-react
* react-image-magnify
* react-stripe-elements
* gh-pages (for deployment)

#### Back-end
* Rails API: JSON endpoint rendering in the Controllers
* PostgresQL

#### Back-end Gems
* bcrypt
* knock
* rack-cors (to enable API endpoint)
* stripe
* rails_12factor (for deployment)


### Known bugs
When users click submit payment form multiple times by accident, extra orders will be generated with $0.


### Wish List
* Admin Rights
* Introduce User Review
* Enable Price Filter in Search Bar
* Implement Discount or Sale options
* Simulate Delivery System


### How it Looks
1. This is a **responsive** e-commerce site selling cute kid toys.
<img alt="phone-homepage" src="./src/images/102new.png" width="500px">

2. In About page, users can use embedded **Google map** to find store locations.
<img alt="phone-homepage" src="./src/images/201.png" width="500px">

3. Via **search feature** users can search for related products. Alternatively, users can simply browse through the lovely products from the four age categories.  
<img alt="phone-homepage" src="./src/images/301.png" width="500px">
<img alt="phone-homepage" src="./src/images/302.png" width="500px">

4. With the **image zooming feature**, users can better inspect products with more details.
<img alt="phone-homepage" src="./src/images/401.png" width="500px">
<img alt="phone-homepage" src="./src/images/402.png" width="500px">

5. Once logging in, users can add products to shopping cart and confirm cart items.
<img alt="phone-homepage" src="./src/images/501.png" width="500px">
<img alt="phone-homepage" src="./src/images/502.png" width="500px">

6. Using **Stripe payment API**, users can then proceed to payment process.
<img alt="phone-homepage" src="./src/images/601.png" width="500px">
<img alt="phone-homepage" src="./src/images/602.png" width="500px">

7. After purchase, users can check their purchase history in the Account page.
<img alt="phone-homepage" src="./src/images/701.png" width="500px">
