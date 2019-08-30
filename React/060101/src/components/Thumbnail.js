import React from 'react';
import '../Styles/thumbnails.css'


class Thumbnail extends React.Component {
		state = {
			place: this.props.place,
			a:this.props.a,
			liked:false
		}
		changeTitle= () => {
			let place = this.state.place
			place.title = 'Col cazzo SEI POVERO!!!';
			place.price = 'e ti puzzano i piedi di negro'
			this.setState({
				place:place
			})
		}
		changeLiked= () => {
			let liked = this.state.liked
			liked == false ? liked=true : liked=false
			this.setState({
				liked:liked
			})
		}
		addClassLiked= () => this.state.liked? 'liked thumbnail':'thumbnail'
		render() {
			return (
				<div className ={this.addClassLiked()}>
					<span>{this.state.a}</span>
					<h1>{this.state.place.title}</h1>
					<h3>price: {this.state.place.price} € / per month</h3>
					<p>Location: {this.state.place.location}</p>
					<button onClick= {this.changeLiked}>Like</button>
					{console.log(this.state.liked)};
					<label>Like
					<input type = 'checkbox' cheked = 'uncheked'></input>
					</label>
				</div>
			)
		}
}


export default Thumbnail;
