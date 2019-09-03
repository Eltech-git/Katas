import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
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

class Index extends React.Component {
  state = {
    bookings: [
      {
        picUrl:
          'url("http://www.modellismostatico.it/wp-content/uploads/2017/05/tamiya-35346-carro-armato-modellismo-statico.jpg.thumb_250x200.jpg")',
        type: "Cingolato",
        roomNum: "5",
        title: "Sherman 2",
        priceXN: 3500
      },
      {
        picUrl:
          "url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Is-3_lesany.jpg/310px-Is-3_lesany.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Leopard 4",
        priceXN: 3450
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      },
      {
        picUrl:
          "url(https://www.oltrelalinea.news/wp-content/uploads/2018/04/cba39184f7a073c6339f85b65ed2eb4f.jpg)",
        type: "Cingolato",
        roomNum: "5",
        title: "Ariete 2",
        priceXN: 5000
      }
    ]
  };
  render() {
    return (
      <div>
        <nav>
          <a
            href="index.html"
            className="logo"
            style={{ backgroundImage: 'url("/logo-airbnb.png")' }}
          />
          <div className="profile">
            <a href="profile.html" className="button">
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    'url("https://randomuser.me/api/portraits/men/9.jpg")'
                }}
              />
              <span>Tony</span>
            </a>
          </div>
        </nav>
        <div className="filters">
          <select>
            <option value={1}>Rooms: 1</option>
            <option value={1}>Rooms: 2</option>
            <option value={1}>Rooms: 3</option>
            <option value={1}>Rooms: 4</option>
            <option value={1}>Rooms: 5</option>
            <option value={1}>Rooms: 6</option>
            <option value={1}>Rooms: 7</option>
            <option value={1}>Rooms: 8</option>
            <option value={1}>Rooms: 9</option>
            <option value={1}>Rooms: 10</option>
          </select>
          <select>
            <option value={1}>All Types</option>
            <option value={1}>Entire Villa</option>
            <option value={1}>Shared Villa</option>
            <option value={1}>Entire House</option>
            <option value={1}>Shared House</option>
            <option value={1}>Private Room</option>
          </select>
          <input type="number" placeholder="max price" />
          <select>
            <option value="date">Latest</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <input type="text" className="search" placeholder="Search..." />
        </div>
        <div className="grid five large">
          {this.state.bookings.map(p => {
            return <Thumbnail p={p} />;
          })}
        </div>
      </div>
    );
  }
}
export default Index;
