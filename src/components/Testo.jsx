import React, { Component } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Card, CardBody } from "reactstrap";
const testimonials = [
  {
    userName: "ashad",
    appName: "Video Status Splitter",
    review:
      " This is the my place when I need to get mockup for my new app or to publish my new major update which has UI change. If this site has not been exists , Then i have to spend either days to create mockup or money . Thanks Again :)"
  },
  {
    userName: "ashad",
    appName: "WhatsApp video splitter",
    review:
      " Super Easy Tool .Without this tool , i spend days to create my mockup but also they do not look that much good and not able to get app install but after that it change my app install."
  },
  {
    userName: "ashad",
    appName: "All News App",
    review: "This is the BEST mockup generator tool available in the market"
  }
];
export class Testo extends Component {
  render() {
    return (
      <Container fluid className="flex flex-column testimonials">
        <LightSpeed right delay={1300}>
          <h3 className="colorText text-capitalize text-center text-monospace">
            What People Say About Us
          </h3>
        </LightSpeed>
        {testimonials.map(single => (
          <Card
            className="mt-4"
            style={{
              width: "70%"
            }}
          >
            <CardBody>
              <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="Icon" />
              <div
                className=" pr-5"
                style={{
                  marginTop: "-35px",
                  marginBottom: "-35px",
                  paddingLeft: "75px"
                }}
              >
                <blockquote className="blockquote ">
                  <p>{single.review}</p>
                  <footer>
                    <cite title="Source title">{single.appName}</cite>
                  </footer>
                </blockquote>
              </div>

              <FontAwesomeIcon
                icon={faQuoteRight}
                className="float-right Icon"
                size="3x"
              />
            </CardBody>
          </Card>
        ))}
        <p className="colouredText mt-5 text-capitalize text-center text-monospace">
          We Would love To hear from our customers
        </p>
      </Container>
    );
  }
}

export default Testo;
