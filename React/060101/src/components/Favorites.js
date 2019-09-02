import React from 'react';
import '../Styles/favorites.css';
import Thumbnail from './Thumbnail';
import Places from './Places';

class Favorites extends React.Component {
	render() {
		return (
			<div className = 'favorites'>
			{ this.props.places.filter(p => p.liked).map(p =>
			<Thumbnail changeLiked={this.props.changeLiked} place={p}/>)
			}
			</div>
		)
	}
}
export default Favorites;
