import React from 'react';
import Favorites from './Favorites'
import '../Styles/places.css'
import Thumbnail from './Thumbnail'


class Places extends React.Component {
	state = {
		places : [
			{title:'Villa May',price:500,location:'Samarcanda'},
			{title:'Residence Pula',price:450,location:'Beirut'},
			{title:'Condomino Rollo',price:1000,location:'Miami'},
			{title:'Villa June',price:350,location:'San Francisco'},
		]
	}
	render() {
		return (
			<div className = 'page'>
				<h1>{this.state.places.length} places</h1>
				<div className = 'thumbnails'>
						{ this.state.places.map( (p,i)=>
							< Thumbnail place={p} key={i} a='This is the place you will Love' />)
						}
				</div>
				<Favorites />
			</div>

		)
	}
}
export default Places;
