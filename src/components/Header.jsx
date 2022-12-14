import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Slide from "react-reveal/Slide";
export class Header extends Component {
  render() {
    return (
      <Slide left>
        <div className="Header flexheader flex-coloum ">
          <Link
            activeClass="active"
            to="Main"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="whatAI"
            spy={true}
            smooth={true}
            duration={500}
          >
            AI powered Mouse
          </Link>
          <Link
            activeClass="active"
            to="product"
            spy={true}
            smooth={true}
            duration={500}
          >
            Our Products
          </Link>
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            duration={1000}
          >
            testimonial
          </Link>
        </div>
      </Slide>
    );
  }
}

export default Header;
