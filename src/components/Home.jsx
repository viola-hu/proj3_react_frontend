import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";


export default function Home(props){

  const[products, setProducts] = useState([]);

  useEffect(() => {
    const URL = `https://toyshoppingsite.herokuapp.com/products`;

    axios.get(URL)
    .then(res => {
      console.log('reponse.data:', res.data); // an array of all product objects
      setProducts(res.data);
    })
    .catch(err => {
      console.warn(err);
    });
  },[]);

  console.log('products', products);





  return(
    <div>
      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/playingkids.jpg`} fluid />


  </div>

  );
}


// <Container>
//   <Row>
//     <Col>
//     </Col>
//   </Row>
//   <Row>
//     <Col>1 of 2</Col>
//     <Col>2 of 2</Col>
//     <Col>1 of 3</Col>
//     <Col>2 of 3</Col>
//     <Col>3 of 3</Col>
//   </Row>
//   <Row>
//     <Col>1 of 3</Col>
//     <Col>2 of 3</Col>
//     <Col>3 of 3</Col>
//   </Row>
// </Container>
