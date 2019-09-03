import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/buttons.css";
import "../styles/cards.css";
import "../styles/filters.css";
import "../styles/forms.css";
import "../styles/gallery.css";
import "../styles/global.css";
import "../styles/grid.css";
import "../styles/icons.css";
import "../styles/nav.css";
import "../styles/reviews.css";
import "../styles/sidebar.css";
import "../styles/users.css";

class Gallery extends React.Component {
  state = {
    pic: this.props.p
  };

  render() {
    return (
      <div className="gallery">
        <div
          className="image-main"
          style={{
            backgroundImage:
              'url("https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg")'
          }}
        >
          <button className="icon">
            <i className="far fa-heart" />
          </button>
        </div>
        <div className="thumbnails">
          <div
            className="thumbnail selected"
            style={{ backgroundImage: this.state.pic }}
          />
          <div
            className="thumbnail"
            style={{ backgroundImage: this.state.pic }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg")'
            }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg")'
            }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg")'
            }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg")'
            }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg")'
            }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg")'
            }}
          />
          <div
            className="thumbnail"
            style={{
              backgroundImage:
                'url("https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg")'
            }}
          />
        </div>
      </div>
    );
  }
}
export default Gallery;
