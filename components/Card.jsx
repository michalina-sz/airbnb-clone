import React from 'react';

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)
../images/katie-zaferes.png
*/

export default function Card(props) {
	return (
		<div className='card'>
			<img className='card--img' src={`../images/${props.img}`} alt='' />
			<div className='card--stats'>
				<img className='card--star' src='../images/star.png' alt='' />
				<span>{props.rating}</span>
				<span className='gray'>({props.reviewCount}) • </span>
				<span className='gray'>{props.country}</span>
			</div>
			<p className='card--title'>{props.title}</p>
			<p className='card--cost'>
				<span className='bold'>From ${props.price}</span> / person
			</p>
		</div>
	);
}
