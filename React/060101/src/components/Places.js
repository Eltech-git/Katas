import React from 'react';
import Favorites from './Favorites'
import '../Styles/places.css'
import Thumbnail from './Thumbnail'


class Places extends React.Component {
	state = {
		places: [
			{title:'Villa May',price:500,location:'Samarcanda', liked: false},
			{title:'Residence Pula',price:450,location:'Beirut', liked: false},
			{title:'Condomino Rollo',price:1000,location:'Miami', liked: false},
			{title:'Villa June',price:350,location:'San Francisco', liked: false},
		]
	}

	changeLiked = (place) => {
		let newPlaces = this.state.places.map(p => {
			// <if this is is the place we wnt to change, then change interval
			if (p === place) {
				let newPlace = Object.assign({}, p)
				newPlace.liked = !newPlace.liked
				return newPlace
			}
			return p
		})
		this.setState({
			places: newPlaces
		})
	}

	render() {
		return (
			<div className = 'page'>
				<h1>We present {this.state.places.length} wonderfull places</h1>
				<div className = 'thumbnails'>
						{ this.state.places.map( (p,i)=>
							<Thumbnail place={p} key={i} a='This is the place you will Love' changeLiked={this.changeLiked} />)
						}
				</div>
				<Favorites places={this.state.places} changeLiked={this.changeLiked}/>
			</div>

		)
	}
}
export default Places;
