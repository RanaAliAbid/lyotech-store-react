'use client';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import productMainImg from '../../../public/product-img.png';

export default function ProductImagesComponent({
	product,
}: {
	product: any;
}) {

	return (
		product && (
			<>
				<div className="productcarousel">
					<Carousel
						className="carousel"
						showArrows={true}
						showIndicators={false}
						showStatus={false}
						swipeable={true}
						useKeyboardArrows={true}
						infiniteLoop={true}
					>
						{product?.images?.map(
							(image: any, index: number) => (
								<div className="productImg" key={index}>
									<img
										src={image.link ?? productMainImg.src}
									/>
								</div>
							),
						)}
					</Carousel>
				</div>
			</>
		)
	);
}
