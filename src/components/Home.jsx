import React from 'react';
import {Link} from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";


export default function Home(props){


  return(
    <Container>
      <Row>
        <Col lg={8} style={{padding:0}}>
          <Carousel>
            <Carousel.Item>
              <Container className="carousel-container">
                <Row className="carousel-row-top">
                  <Col className="carousel-col-left">
                    <Link to={'/category/1'}>
                      <div className="home-category-container home-category-01">
                        <div className="home-category">
                          Age <br/>0 - 2
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/product/1'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c101.jpg`} fluid />
                    </Link>
                  </Col>
                </Row>
                <Row className="carousel-row-bottom">
                  <Col className="carousel-col-left">
                    <Link to={'/product/8'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c108.jpg`} fluid />
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/product/5'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c105.jpg`} fluid />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container className="carousel-container">
                <Row className="carousel-row-top">
                  <Col className="carousel-col-left">
                    <Link to={'/product/14'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c205.jpg`} fluid />
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/category/2'}>
                      <div className="home-category-container home-category-02">
                        <div className="home-category">
                          Age <br/>2 - 5
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
                <Row className="carousel-row-bottom">
                  <Col className="carousel-col-left">
                    <Link to={'/product/18'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c209.jpg`} fluid />
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/product/16'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c207.jpg`} fluid />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container className="carousel-container">
                <Row className="carousel-row-top">
                  <Col className="carousel-col-left">
                    <Link to={'/product/23'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c305.jpg`} fluid />
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/product/22'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c304.jpeg`} fluid />
                    </Link>
                  </Col>
                </Row>
                <Row className="carousel-row-bottom">
                  <Col className="carousel-col-left">
                    <Link to={'/product/19'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c301.jpg`} fluid />
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/category/3'}>
                      <div className="home-category-container home-category-03">
                        <div className="home-category">
                          Age <br/>5 - 8
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container className="carousel-container">
                <Row className="carousel-row-top">
                  <Col className="carousel-col-left">
                    <Link to={'/product/31'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c404.jpg`} fluid />
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/product/33'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c406.jpg`} fluid />
                    </Link>
                  </Col>
                </Row>
                <Row className="carousel-row-bottom">
                  <Col className="carousel-col-left">
                    <Link to={'/category/4'}>
                      <div className="home-category-container home-category-04">
                        <div className="home-category">
                          Age <br/>over 8
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col className="carousel-col-right">
                    <Link to={'/product/32'}>
                      <Image className="home-image" src={process.env.PUBLIC_URL +`/images/c405.jpg`} fluid />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col className="home-right-col" lg={4}>
          <h1 className="home-category-title">
            V's Toy
          </h1>
          <Link to={'/about'}>
            <Button className="btn-our-story" variant="outline-secondary">Our Story</Button>
          </Link>
          <Link to={'/category/1'}>
            <h5 className="home-category-list home-category-01">
              Age 0-2
            </h5>
          </Link>
          <Link to={'/category/2'}>
            <h5 className="home-category-list home-category-02">
              Age 2-5
            </h5>
          </Link>
          <Link to={'category/3'}>
            <h5 className="home-category-list home-category-03">
              Age 5-8
            </h5>
          </Link>
          <Link to={'category/4'}>
            <h5 className="home-category-list home-category-04">
              Age over 8
            </h5>
          </Link>

        </Col>
      </Row>
    </Container>

  );
}
