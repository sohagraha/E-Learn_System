import React from "react";
import Carousel from "react-grid-carousel";
import Card from "../../../components/Cards/Card";

import { useStyle } from "./styles";
const CarouselCards = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Carousel cols={4} rows={1} gap={20} loop>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselCards;
