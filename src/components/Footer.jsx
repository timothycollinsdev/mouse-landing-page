import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faEnvelope,
	faHeart,
	faCopyright,
} from '@fortawesome/free-solid-svg-icons';
export class Footer extends Component {
	render() {
		return (
			<Container fluid className='footerMain'>
				<Nav navbar>
					<Row>
						<Col md='4' className='flex flex-column'>
							<p className='text-white text-uppercase'>Pages</p>
							<NavItem>
								<NavLink>Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>About our Company</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Faq</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>How To Use</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Catogery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Mouse</NavLink>
							</NavItem>
						</Col>
						<Col md='4'>
							<p className='text-white text-uppercase'>
								Tell Your Friend About Us
							</p>
						</Col>
						<Col md='4'>
							<p className='text-white text-uppercase'>Contact US</p>

							<div className='footerElement pt-5 pr-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi quidem adipisci aliquam odio. Laborum optio iusto
								distinctio similique ullam porro dolore harum, labore aliquam,
								suscipit architecto maxime magnam hic odio?
							</div>
						</Col>
					</Row>
					<Row className='flex font-weight-light text-secondary'>
						<span className='footerElement'> Made with </span>
						<FontAwesomeIcon
							icon={faHeart}
							color='red'
							className='ml-2 mr-2'
							size='2x'
						/>

						<span className='footerElement'>in India</span>
					</Row>
					<Row className='mt-2'>
						<Col md='4' className='flex'>
							<FontAwesomeIcon
								icon={faCopyright}
								// color="red"
								className='ml-2 mr-2'
							/>
							<span className='footerElement'>2020 Aamish and Zaid</span>
						</Col>
						<Col md='4' className='flex'>
							<NavItem>
								<NavLink>Terms and Condition</NavLink>
							</NavItem>
						</Col>
						<Col md='4' className='flex'>
							<NavItem>
								<NavLink>Privacy Policy</NavLink>
							</NavItem>
						</Col>
					</Row>
				</Nav>
			</Container>
		);
	}
}

export default Footer;
