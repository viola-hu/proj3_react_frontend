import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import url from '../lib/url';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";



export default function Category(props){

  console.log('url is', url.URL);

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
    getProductsOfCategory();
  },[id]);


  const getProductsOfCategory = ()=>{
    // console.log('make axios request!');

    // const URL = `https://toyshoppingsite.herokuapp.com/categories/${id}`;
    // const URL = `http://localhost:3000/categories/${id}`;
    const URL = `${url.URL}/categories/${id}`;

    // LEARNING:
    // category page doesn't need user authentication, thus no need to include jwt inside Header
    // const configHeader = {
    //   header: {
    //     Authorization: 'Bearer ' + jwt
    //   }
    // };

    axios.get(URL) //, configHeader
    .then(res => {
      // console.log('!!!res is :', res);
      console.log('get all the products response:', res.data);// an array of products items
      setProducts(res.data);
    })
    .catch(err => {
      console.warn('ERRORS!!!:', err);
    });
  }

  // console.log('updated products:', products);

  // different border color based on category id
  const color = ['lightpink', 'gold', 'yellowgreen', 'turquoise'];


  return(
    <Container>
      <Row>
        {
          products.map( product => (
            <Col lg={4} key={product.name} style={{textAlign:'center'}}>
              <Link to={`/product/${product.id}`}>
                <Figure>
                  <Figure.Image
                    width={300}
                    height={300}
                    fluid={false}
                    alt="300x300"
                    style={{
                      padding: '1rem',
                      border: `dashed ${color[id-1]}`,
                    }}
                    src={process.env.PUBLIC_URL + `/images/${product.image}`}
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
