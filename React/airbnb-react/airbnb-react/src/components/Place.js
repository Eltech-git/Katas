import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
import Gallery from "./Gallery";
import Review from "./Review";
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

class Place extends React.Component {
  state = {
    place: [
      {
        picUrl:
          'url("https://afar-production.imgix.net/uploads/images/afar_post_headers/images/s6P1cWj2kE/original_hawaii_202019.jpg")',
        type: "Squadra da paura",
        roomNum: "50",
        title: "A.S.",
        priceXN: 350
      },
      {
        picUrl:
          'url("https://www.viaggi-usa.it/wp-content/uploads/2017/07/copertina.jpg")',
        type: "Squadra da paura222",
        roomNum: "50222",
        title: "A.S.222",
        priceXN: 350
      },
      {
        picUrl:
          'url("https://cdn.marcopolo.tv/960x480/media/post/valqhg5/quando-andare-alle-hawaii.jpg")',
        type: "Squadra da paura222",
        roomNum: "50222",
        title: "A.S.222",
        priceXN: 350
      }
    ],
    gallery: [
      'url("https://cdn.marcopolo.tv/960x480/media/post/valqhg5/quando-andare-alle-hawaii.jpg")',
      'url("https://www.viaggi-usa.it/wp-content/uploads/2017/07/copertina.jpg")',
      'url("https://afar-production.imgix.net/uploads/images/afar_post_headers/images/s6P1cWj2kE/original_hawaii_202019.jpg")'
    ],
    rev: [
      {
        host: "maria",
        dateOfRev: "20 july 1990",
        userPic:
          "url(https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY1200_CR142,0,630,1200_AL_.jpg)",
        text:
          "It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place."
      },
      {
        host: "poldo",
        dateOfRev: "30 august 1993",
        userPic:
          "url(https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY1200_CR142,0,630,1200_AL_.jpg)",
        text: "me chiamo sandra marchiggiano e so contenta pèe fa sta sfilata"
      },
      {
        host: "poldino",
        dateOfRev: "02 settembre 1999",
        userPic:
          "url(https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY1200_CR142,0,630,1200_AL_.jpg)",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    Place: {}
  };

  render() {
    return (
      <div>
        <Nav />
        <Gallery />
        <div className="grid medium">
          <div className="grid sidebar-right">
            <div className="content">
              <h1>Luxury Villa Indu Siam</h1>
              <small>
                <i className="fas fa-map-marker-alt" />
                <span>Koh Samui, Thailand</span>
              </small>
              <div className="user">
                <div
                  className="avatar"
                  style={{
                    backgroundImage:
                      'url("https://randomuser.me/api/portraits/women/2.jpg")'
                  }}
                />
                <div className="name">
                  <small>Hosted by</small>
                  <span>Kitty</span>
                </div>
              </div>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-fw fa-home" />
                      Entire Villa
                    </li>
                    <li>
                      <i className="fas fa-fw fa-user-friends" />
                      10 guests
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bed" />7 bedrooms
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bath" />6 baths
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Stylish, tropical, luxurious, airy and absolute beach front,
                this villa combines form and function, enjoying magnificent
                views of Samui’s small islands and the sea beyond. With 520sqm
                of indoor/outdoor living space with 5 ensuite bedrooms, large
                living area, beachfront infinity pool, garden, air conditioned
                gym, professional pool table, bbq and Sala, this villa is
                perfect for up to 10 adults With 260sqm (2798sqfeet) of living
                space and 250sqm (2,700sqfeet) of outdoor space.
              </p>
              <h3>Amenities</h3>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-utensils" />
                      Kitchen
                    </li>
                    <li>
                      <i className="fas fa-dumbbell" />
                      Gym
                    </li>
                    <li>
                      <i className="fas fa-dumbbell" />
                      Wi-Fi
                    </li>
                    <li>
                      <i className="fas fa-tshirt" />
                      Iron
                    </li>
                    <li>
                      <i className="fas fa-swimmer" />
                      Swimming Pool
                    </li>
                    <li>
                      <i className="fas fa-wind" />
                      Air Conditioning
                    </li>
                    <li>
                      <i className="fas fa-tv" />
                      TV
                    </li>
                  </ul>
                </div>
              </div>
              <div className="reviews">
                <h2>4 Reviews</h2>
                <form>
                  <div className="group">
                    <label>Leave a review</label>
                    <textarea defaultValue={""} />
                    <div className="rating">
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <button className="primary small">Submit</button>
                  </div>
                </form>
                <div>
                  {this.state.rev.map(r => {
                    return <Review p={r} />;
                  })}
                </div>
              </div>
            </div>
            <div className="sidebar booking">
              <div className="card shadow">
                <div className="content large">
                  <h3>
                    $350<small>per night</small>
                  </h3>
                  <small>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span>4 Reviews</span>
                  </small>
                  <form className="small">
                    <div className="group">
                      <label>Dates</label>
                      <input type="text" placeholder="Check-in" />
                      <input type="text" placeholder="Check-out" />
                    </div>
                    <div className="group">
                      <label>Guests</label>
                      <select>
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>4 guests</option>
                        <option>5 guests</option>
                        <option>6 guests</option>
                        <option>7 guests</option>
                        <option>8 guests</option>
                        <option>9 guests</option>
                        <option>10 guests</option>
                      </select>
                    </div>
                    <div className="group">
                      <button className="secondary full">
                        Book this place
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Place;
