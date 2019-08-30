import React from 'react';



class Thumbnail extends React.Component {
		state = {
			place: this.props.place,
			a:this.props.a
		}
		changeTitle= () => {
			let place = this.state.place
			place.title = 'Col cazzo SEI POVERO!!!';
			place.price = 'e ti puzzano i piedi di negro'
			this.setState({
				place:place
			})
		}
		render() {
			return (
				<div className = 'thumbnail'>
					<span>{this.state.a}</span>
					<h1>Title : {this.state.place.title}</h1>
					<h3>price: {this.state.place.price} € / per month</h3>
					<p>Location: {this.state.place.location}</p>
					<button onClick= {this.changeTitle}>Compra</button>
				</div>
			)
		}
}


export default Thumbnail;
