import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/sidebar.css'
import '../styles/grid.css'




class Sidebar extends React.Component {
	state = {
	}

	render() {
		return (
		<div class="grid sidebar-left">
			<div class="sidebar">
					<ul>
						<li class="">
							<a href="profile.html">Profile</a>
						</li>
						<li class="active">
							<a href="bookings.html">Bookings</a>
						</li>
						<li class="">
							<a href="favorites.html">Favorites</a>
						</li>
						<li class="">
							<a href="host.html">Host</a>
						</li>
					</ul>
				</div>
			</div>
				)
	}
}
export default Sidebar;
