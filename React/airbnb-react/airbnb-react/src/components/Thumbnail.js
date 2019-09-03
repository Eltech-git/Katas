import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/sidebar.css";
import "../styles/grid.css";

class Thumbnail extends React.Component {
  state = {
    card: this.props.p
  };

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <a className="card link" href="place.html">
        <div
          className="image"
          style={{ backgroundImage: this.state.card.picUrl }}
        >
          <button className="icon">
            <i className="far fa-heart" />
          </button>
        </div>
        <div className="content">
          <small className="meta">
            {this.state.card.type} • {this.state.card.roomNum} Rooms
          </small>
          <h2>{this.state.card.title}</h2>
          <span className="price">${this.state.card.priceXN}/night</span>
          <span className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
            <span>37 Reviews</span>
          </span>
        </div>
      </a>
    );
  }
}
export default Thumbnail;
