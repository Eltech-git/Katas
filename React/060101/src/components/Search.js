import React from 'react';
import '../Styles/search.css';
import Thumbnail from './Thumbnail'
import Places from './Places'


class Search extends React.Component {







	render() {
		return (
			<div className = 'Search'>

				<label>Search</label>
				<input className = 'searchText' type= 'text' onKeyUp = {this.searchBar}></input>
				<div className = 'display'>

				</div>
			</div>
		)
	}
}
export default Search;
