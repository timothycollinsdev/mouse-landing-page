import React, { Component } from "react";
import data from "./item";
import {
  Button,
  Jumbotron,
  Card,
  CardBody,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";
export class AI extends Component {
  render() {
    return (
      <Jumbotron fluid className=" flex bg-white whatAI">
        <div className="flex main flex-column">
          <h1 className="font-bg text-uppercase font-weight-bold  colorText">
            WHY AI powered mouse
          </h1>
          <Card className="">
            <CardBody className="p-4">
              <Row className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                quibusdam ipsum quia eos voluptatibus rerum a impedit est quam
                quas eius quos cum iste optio architecto repudiandae numquam.
                Deserunt, tenetur! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Ad excepturi ab nulla molestiae a sunt sint
                vero porro animi perferendis maiores suscipit, fuga modi placeat
                voluptas quaerat iusto enim voluptates!
              </Row>
            </CardBody>
          </Card>
          <Button className="button btn-grad m-4 tadeRepeat" to="/home">
            Get Free Now
          </Button>
        </div>
        <div className="flex Carousel">
          <UncontrolledCarousel className="Carousel" items={data} />
        </div>
      </Jumbotron>
    );
  }
}

export default AI;
