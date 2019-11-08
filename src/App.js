import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
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
                <NavLink
                  exact to="/"
                  id="home-link"
                >
                  Danielle Tatarian
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/music"
                >
                  Music
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/videos"
                >
                  Videos
                </NavLink>
              </li>

              <li>
                <NavLink

                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
