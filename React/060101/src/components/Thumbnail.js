import React from 'react';
import '../Styles/thumbnails.css'


class Thumbnail extends React.Component {
		// changeTitle= () => {
		// 	let place = this.state.place
		// 	place.title = 'Col cazzo SEI POVERO!!!';
		// 	place.price = 'e ti puzzano i piedi di negro'
		// 	this.setState({
		// 		place:place
		// 	})
		// }
		
		changeLiked = () => {
			this.props.changeLiked(this.props.place)
		}

		addClassLiked = () => this.props.place.liked ? 'liked thumbnail':'thumbnail'

		render() {
			return (
				<div className ={this.addClassLiked()}>
					<span>{this.props.a}</span>
					<h1>{this.props.place.title}</h1>
					<h3>price: {this.props.place.price} € / per month</h3>
					<p>Location: {this.props.place.location}</p>
					<button onClick= {this.changeLiked}>Like</button>
					{console.log(this.propsliked)}
				</div>
			)
		}
}


export default Thumbnail;
