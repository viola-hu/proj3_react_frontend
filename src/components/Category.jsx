import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";



export default function Category(props){

  const {id} = props.match.params;
  // LEARNING: same as below
  // const categoryId = props.match.params.id;
  // console.log('categoryId:',categoryId);

  const [products, setProducts] = useState([]);
  // const [jwt, setJwt] = useState(localStorage.getItem('jwt'))

  // LEARNING:
  // whenever the props id changes, useEffect will catch that change and render the whole page
  // even for the first time the component renders
  useEffect(()=>{
    getProductsOfCategory(id);
  },[id]);


  const getProductsOfCategory = ()=>{
    // console.log('make axios request!');

    const URL = `https://toyshoppingsite.herokuapp.com/categories/${id}`;

    // LEARNING:
    // category page doesn't need user authentication, thus no need to include jwt inside Header
    // const configHeader = {
    //   header: {
    //     Authorization: 'Bearer ' + jwt
    //   }
    // };

    axios.get(URL) //, configHeader
    .then(res => {
      console.log('response:', res.data.products);// an array of products items
      setProducts(res.data.products);
    })
    .catch(err => {
      console.warn('ERRORS!!!:', err);
    });
  }

  // console.log('updated products:', products);


  return(
    <Container>
      <Row>
        {
          products.map( product => (
            <Col xs={12} md={4} key={product.name}>
              <Link to={`/product/${product.id}`}>
                <Figure>
                  <Figure.Image
                    width={200}
                    height={200}
                    fluid={false}
                    alt="200x200"
                    src={`/images/${product.image}`}
                  />
                  <Figure.Caption>
                    <p><strong>{product.name}</strong></p>
                    <p>Price: {`$${product.price}`}</p>
                    <p>In Stock: {product.stock}</p>
                    <p>{product.description}</p>
                  </Figure.Caption>
                </Figure>
              </Link>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}
