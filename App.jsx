import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
	const cards = data.map(dataElement => {
		return <Card 
					coverImg={dataElement.coverImg}
					rating={dataElement.stats.rating}
					reviewCount={dataElement.stats.reviewCount}
					location={dataElement.location}
					title={dataElement.title}
					price={dataElement.price}
					openSpots={dataElement.openSpots}
				/>
	})
	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards-list">
            {cards}
			</section>
		</div>
	);
}
