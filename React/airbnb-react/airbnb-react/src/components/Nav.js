import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/sidebar.css";
import "../styles/grid.css";
import "../styles/nav.css";
import "../styles/buttons.css";

class Nav extends React.Component {
  state = {
    navData: {
      name: "Emiliano",
      picture: 'url("https://randomuser.me/api/portraits/men/9.jpg")',
      logo: "url('/logo-airbnb.png')"
    }
  };

  render() {
    return (
      <nav>
        <a
          Link
          to="index.html"
          className="logo"
          style={{ backgroundImage: this.state.navData.logo }}
        />
        <div className="profile">
          <a href="profile.html" className="button">
            <div
              className="avatar"
              style={{ backgroundImage: this.state.navData.picture }}
            />
            <span>{this.state.navData.name}</span>
          </a>
        </div>
      </nav>
    );
  }
}
export default Nav;
