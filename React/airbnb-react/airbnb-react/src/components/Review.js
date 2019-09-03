import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Review extends React.Component {
  state = {
    review: this.props.p
  };

  render() {
    return (
      <div className="card review">
        <div className="content">
          <div className="user">
            <div
              className="avatar"
              style={{
                backgroundImage: this.state.review.userPic
              }}
            />
            <div className="name">
              <small>{this.state.review.dateOfRev}</small>
              <span>{this.state.review.host}</span>
            </div>
          </div>
          <div className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>{this.state.review.text}</p>
        </div>
      </div>
    );
  }
}
export default Review;
