import React from "react";
import { Carousel } from "react-bootstrap";
import './Carouseldown.css'
const Carouseldown = () => {
  return (
    <Carousel className="carousel-awards" indicators={false} interval={2000}>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <img
            className="carousel-image"
            src="./award1.svg"
            alt=""
          />
          <img
            className="carousel-image"
            src="./award2.svg"
            alt=""
          />
          <img
            className="carousel-image"
            src="./award3.svg"
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <img
            className="carousel-image"
            src="./award2.svg"
            alt=""
          />
          <img
            className="carousel-image"
            src="./award3.svg"
            alt=""
          />
          <img
            className="carousel-image"
            src="./award1.svg"
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <img
            className="carousel-image"
            src="./award3.svg"
            alt=""
          />
          <img
            className="carousel-image"
            src="./award1.svg"
            alt=""
          />
          <img
            className="carousel-image"
            src="./award2.svg"
            alt=""
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carouseldown;