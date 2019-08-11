import React from 'react';
import MapContainer from './GoogleMaps';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";



export default function About(props){



  return(
    <Container className="about-container">
      <Row className="about-welcome">
        <Col style={{textAlign:"center"}}>
          <h1 className="about-title">Welcome to V's Toy!</h1>
        </Col>
      </Row>
      <Row className="about-welcome">
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nostrum necessitatibus odio, eaque illum accusamus blanditiis. Cupiditate, autem libero nam rerum laudantium delectus. Suscipit minus tempora vitae et voluptate dolore.
          </p>
        </Col>
      </Row>

      <Row>
        <Col sm md={5} style={{textAlign:'center'}}>
          <Row>
            <Image
              src={process.env.PUBLIC_URL +`/images/welcome.gif`}
              style={{width:'50%', margin:'auto'}}
            />
          </Row>
          <h5 className="shop-title">
            <Image style={{width:"2.5rem"}} src={process.env.PUBLIC_URL +`/images/icon-shop.png`} /> {' '}
            V's Toy - The QVB
          </h5>
          <p>
            455 George St, Sydney NSW 2000
          </p>
          <p>
            <Image style={{width:"1rem"}} src={process.env.PUBLIC_URL +`/images/icon-phone.png`} />  +61 02 3456 7890
          </p>
          <p>
            <Image style={{width:"1rem"}} src={process.env.PUBLIC_URL +`/images/icon-email.png`} /> <a href="mailto:viola.zj.hu@gmail.com">contact@vtoy.com</a>
          </p>
          <h5 className="shop-title">
            <Image style={{width:"2.5rem"}} src={process.env.PUBLIC_URL +`/images/icon-shop.png`} /> {' '}
            V's Toy - The Rocks
          </h5>
          <p>
            80 George St, The Rocks NSW 2000
          </p>
          <p>
            <Image style={{width:"1rem"}} src={process.env.PUBLIC_URL +`/images/icon-phone.png`} />  +61 02 0987 6543
          </p>
          <p>
            <Image style={{width:"1rem"}} src={process.env.PUBLIC_URL +`/images/icon-email.png`} /> <a href="mailto:viola.zj.hu@gmail.com">contact@vtoy.com</a>
          </p>
        </Col>

        <Col sm md={7}>
            <MapContainer/>
        </Col>
      </Row>
    </Container>
  );
}

// <Image className="about-image" src={process.env.PUBLIC_URL +`/images/happykidsplaying05.png`} />
