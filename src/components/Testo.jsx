import React, { Component } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Card, CardBody } from 'reactstrap';
const testimonials = [
	{
		userName: 'sajid',
		appName: 'lorem lorem',
		review:
			'     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima magnam expedita impedit dolore perspiciatis consequuntur voluptas eos repellat labore accusamus? Officiis, nisi. Pariatur quo, magni ipsam illum repellendus ut ratione  ',
	},
	{
		userName: 'sajid',
		appName: 'lorem lorem',
		review:
			'     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima magnam expedita impedit dolore perspiciatis consequuntur voluptas eos repellat labore accusamus? Officiis, nisi. Pariatur quo, magni ipsam illum repellendus ut ratione  ',
	},
	{
		userName: 'ashad',
		appName: 'lorem lorem',
		review:
			'     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima magnam expedita impedit dolore perspiciatis consequuntur voluptas eos repellat labore accusamus? Officiis, nisi. Pariatur quo, magni ipsam illum repellendus ut ratione  ',
	},
];
export class Testo extends Component {
	render() {
		return (
			<Container fluid className='flex flex-column testimonials'>
				<LightSpeed right delay={1300}>
					<h3 className='colorText text-capitalize text-center text-monospace'>
						What People Say About Us
					</h3>
				</LightSpeed>
				{testimonials.map((single) => (
					<Card
						className='mt-4'
						style={{
							width: '70%',
						}}
					>
						<CardBody>
							<FontAwesomeIcon icon={faQuoteLeft} size='3x' className='Icon' />
							<div
								className=' pr-5'
								style={{
									marginTop: '-35px',
									marginBottom: '-35px',
									paddingLeft: '75px',
								}}
							>
								<blockquote className='blockquote '>
									<p>{single.review}</p>
									<footer>
										<cite title='Source title'>{single.appName}</cite>
									</footer>
								</blockquote>
							</div>

							<FontAwesomeIcon
								icon={faQuoteRight}
								className='float-right Icon'
								size='3x'
							/>
						</CardBody>
					</Card>
				))}
				<p className='colouredText mt-5 text-capitalize text-center text-monospace'>
					We Would love To hear from our customers
				</p>
			</Container>
		);
	}
}

export default Testo;
