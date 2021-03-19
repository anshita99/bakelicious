import React from "react";
import { Container } from "react-bootstrap";
import { Animated } from "react-animated-css";
import BackHomeBtn from "./button/BackHomeBtn";

const About = () => {
  return (
    <Container>
      <Animated animationIn="pulse">
        <h1 className="p-4 text-center">About</h1>
        <div className="d-flex flex-column p-4">
          <span className="pb-4">
          “Birthdays are nature’s way of telling us to eat more cake”.
          In fact, every special occasion is a perfect time to treat your taste buds with a delicious cake. 
          A cake can not only satiate your soul with its deliciousness but also can illuminate you every special occasion with its sweetness. 
          Be it a birthday or an anniversary or a wedding or Valentine’s Day, every celebration seems incomplete without a delicious cake. 
          To provide you the best quality of cakes, FlowerAura brings to you its online cake delivery service at your doorstep. 
          With a huge variety of delectable freshly baked cakes, FlowerAura provides its online cake delivery in India over 400+ cities. 
          In all these cities, where we provide our online cake delivery, we are known for our best-rated delivery service. 
          In fact, we are one of the best cake shops near you that you can buy and order cakes for all your special occasions. 
          We have all types of cakes for every special occasion. 
          So, tell us what’s your occasion? Our skilled bakers will bake the best cake for you with utmost perfection. 
          Be it the magnificence of chocolate or the svelte of a pink strawberry, you can order a delectable cake just starting @549 from us which are sure to wow your loved ones in delight and awe.
          With our 100% Happiness Guarantee promise, these scrumptious cakes are delivered to your doorstep via our same day cake delivery with all your love and emotions intact.
          </span>
          <span className="pb-4">
          We at Bakelicious do not only offer you a huge variety of delectable cakes to make your celebrations special and grander but also provide you an impeccable delivery. 
          With the aid of our online cake delivery, now you can send cakes online to your loved ones in India from anywhere. 
          Our express delivery service ensures to deliver the cake to your doorstep just within 3 hours for your order placement. 
          So your friend’s birthday is right today and you forgot to order a cake online for her? She too like you is away from her home. 
          And you would hate to see her all sad. So, what you can do is to avail our midnight cake delivery service. 
          Well with our online delivery of cakes you can make her day. We have an array of options for you to choose from. 
          And if you are worried about the hygiene factor, let us assure you that Hygiene is our middle name. 
          So don’t wait, with our instant delivery option you can add to the exuberance of her birthday. 
          All you need to do is click on Floweraura.com and avail the many options of midnight and same day cake delivery.
          </span>
        </div>
      </Animated>
      <BackHomeBtn />
    </Container>
  );
};

export default About;
