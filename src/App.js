import React from "react";
import Home from "./components/Home";
import Music from "./components/Music";
import Videos from "./components/Videos";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Danielle Tatarian"
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" id="home-link">
                  Danielle Tatarian
                </NavLink>
              </li>

              <li>
                <NavLink to="/music">Music</NavLink>
              </li>

              <li>
                <NavLink to="/videos">Videos</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/videos" component={Videos} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
