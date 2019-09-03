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

class BookingsPage extends React.Component {
  state = {
    bookings: [
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
    ]
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar />
            <div className="content">
              <h2>Upcoming Trips</h2>
              <div className="grid two"></div>
              <h2>Past Trips</h2>
              <div className="grid two">
                {this.state.bookings.map(p => {
                  return <Thumbnail p={p} />;
                })}
              </div>
              <table>
                {this.state.bookings.map(b => {
                  return (
                    <tr>
                      <td>{b.title}</td>
                      <td>{b.priceXN}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookingsPage;
