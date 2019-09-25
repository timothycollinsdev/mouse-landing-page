import React, { Component } from "react";
import { Button, UncontrolledCarousel } from "reactstrap";
import image from "../images/img.png";
const imageData = {};
export class Main extends Component {
  render() {
    return (
      <main className="Main">
        <div className="text-content flex flex-column">
          <h1 className="colorText">zinatic MOUSE</h1>
          <h3>World First AI Powered Mouse</h3>
          <Button className="btn-grad">Buy Now</Button>
        </div>
        <div className="images flex">
          <div className="image flex">
            <img src={image} alt="" width="auto" height="500" />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
