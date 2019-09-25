import React, { Component } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";

import {
  Row,
  Col,
  Card,
  Container,
  CardBody,
  Button,
  CardText,
  CardFooter
} from "reactstrap";
export class Product extends Component {
  render() {
    return (
      <Container fluid className="p-5 featuresCard product">
        <Row className="flex">
          <h3 className="colorText text-uppercase featureText">Our Products</h3>
        </Row>
        <div className="grid-3">
          <Card className="cardsFeature">
            <CardBody>
              <Row className="iconContainer flex">
                <img src={image1} alt="" width="auto" height="380px" />
              </Row>
              <CardText
                className="text-center pl-4 pr-4 text"
                style={{
                  height: 250
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus id quibusdam commodi temporibus
              </CardText>
            </CardBody>
            <CardFooter className="flex bg-white border-0 ">
              <Button className="btn-grad font-weight-bolder">Buy Now</Button>
            </CardFooter>
          </Card>

          <Card className="cardsFeature">
            <CardBody>
              <Row className="iconContainer flex">
                <img src={image2} alt="" width="auto" height="380px" />
              </Row>
              <CardText
                className="text-center  pl-4 pr-4  text"
                style={{
                  height: 250
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus id quibusdam commodi temporibus
              </CardText>
            </CardBody>
            <CardFooter className="flex bg-white border-0 ">
              <Button className="btn-grad font-weight-bolder">Buy Now</Button>
            </CardFooter>
          </Card>

          <Card className="cardsFeature">
            <CardBody>
              <Row className="iconContainer flex">
                <img src={image3} alt="" width="auto" height="380px" />
              </Row>
              <CardText
                className="text-center  pl-4 pr-4  text"
                style={{
                  height: 250
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus id quibusdam commodi temporibus
              </CardText>
            </CardBody>
            <CardFooter className="flex bg-white border-0 ">
              <Button className="btn-grad font-weight-bolder">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="cardsFeature">
            <CardBody>
              <Row className="iconContainer flex">
                <img src={image6} alt="" width="auto" height="380px" />
              </Row>
              <CardText
                className="text-center  pl-4 pr-4  text"
                style={{
                  height: 250,
                  width: "auto"
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus id quibusdam commodi temporibus
              </CardText>
            </CardBody>
            <CardFooter className="flex bg-white border-0 ">
              <Button className="btn-grad font-weight-bolder">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="cardsFeature">
            <CardBody>
              <Row className="iconContainer flex">
                <img src={image4} alt="" width="auto" height="380px" />
              </Row>
              <CardText
                className="text-center  pl-4 pr-4 text"
                style={{
                  height: 250
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus id quibusdam commodi temporibus
              </CardText>
            </CardBody>
            <CardFooter className="flex bg-white border-0 ">
              <Button className="btn-grad font-weight-bolder">Buy Now</Button>
            </CardFooter>
          </Card>
          <Card className="cardsFeature">
            <CardBody>
              <Row className="iconContainer flex">
                <img src={image5} alt="" width="auto" height="380px" />
              </Row>
              <CardText
                className="text-center  pl-4 pr-4 text"
                style={{
                  height: 250
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus id quibusdam commodi temporibus
              </CardText>
            </CardBody>
            <CardFooter className="flex bg-white border-0 ">
              <Button className="btn-grad font-weight-bolder">Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Product;
