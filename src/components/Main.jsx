import React, { Component } from "react";
import { Button, UncontrolledCarousel } from "reactstrap";
import image from "../images/img.png";
import Roll from "react-reveal/Roll";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
const imageData = {};
export class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Roll left>
          <div className="text-content flex flex-column">
            <h1 className="colorText">zinatic MOUSE</h1>
            <h3>World First AI Powered Mouse</h3>
            <RubberBand delay="1500" forever={true} duration={2500}>
              <Button className="btn-grad">Buy Now</Button>
            </RubberBand>
          </div>
        </Roll>
        <div className="images flex">
          <div className="image flex">
            <Fade right delay={1000}>
              <img src={image} alt="" width="auto" height="500" />
            </Fade>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
