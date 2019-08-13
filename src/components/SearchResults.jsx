import React, {useState, useEffect} from 'react';
import axios from 'axios';
import url from '../lib/url';
import {Link} from 'react-router-dom';

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";


export default function SearchResults(props){

  // BootNav has ensured this keyWord is not empty before redirect to this route
  const keyWord = props.match.params.q

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  console.log('keyword:', keyWord);

  // first time the component renders
  useEffect(() => {
    // call pre-determined function to get search results
    getSearchResults();
  },[keyWord]);


  const getSearchResults = () => {
    // send axios request to server for search
    const URL = `${url.URL}/search/${keyWord}`;
    // no need of user login, so no jwt is needed in the request
    axios.get(URL)
    .then(res => {
      // console.log('Search Result:', res);
      console.log('Matching products:', res.data); // an array of matching products

      if(res.data.length === 0){
        console.log('Sorry, No Results Found.');
        setMessage('Sorry, No Results Found.');
        setProducts([])
      } else {
        setProducts(res.data);

        const toyNumber = res.data.length;

        toyNumber === 1
        ?
        setMessage(`Found (${res.data.length}) toy!`)
        :
        setMessage(`Found (${res.data.length}) toys!`)
      }
    })
    .catch(res => {
      console.warn('Search failed:', res);
    });
  };


  let whatToShow;
  if(products.length === 0){
    whatToShow = (
      <div className="found-no-toys-row">
        <div>{message}</div>
        <Image
          src={process.env.PUBLIC_URL + `/images/thanks.gif`}
          style={{maxWidth: '60%'}}
        />
    </div>
    );
  } else {
    whatToShow = (
      <Row className="found-toys-row">
        <h5 className="found-result">{message}</h5>
      </Row>
    );
  }

  return(
    <Container>
      {whatToShow}

      <Row>
        {
          products.map(product => (
            <Col  md={6} lg={4} style={{margin: '1rem 0'}} key={product.name}>
              <Card className="card-background">
                <Link to={`/product/${product.id}`}>
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + `/images/${product.image}`}
                    height={300}
                  />
                </Link>
                <Card.Body>
                  <Card.Title style={{color: 'grey', fontWeight: 600}}>{product.name}</Card.Title>
                  <Card.Text style={{color: 'grey'}}>
                    Price: ${product.price} <br/>
                    In Stock: ${product.stock} <br/>
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}
