import React from 'react';
import Favorites from './Favorites'
import '../Styles/places.css'

class Places extends React.Component {
	state = {
		places : [
			{title:'Romania',price:0,location:'Samarcanda'},
			{title:'Pizda',price:0,location:'Beirut'},
			{title:'Pula',price:0,location:'Rutto'},
			{title:'Cur',price:0,location:'Collina'},
		]

	}
	render() {
		return (
			<div className = 'page'>
				<h1>{this.state.places.length} places</h1>
				<div className = 'thumbnails'>
						{ this.state.places.map( p =>
							<div className = 'thumbnail'>
								<h1>Title: {p.title}</h1>
								<h3>price: {p.price}</h3>
								<p>Location: {p.location}</p>
							</div>)
						}
				</div>
				<Favorites />
			</div>

		)
	}
}


export default Places;
