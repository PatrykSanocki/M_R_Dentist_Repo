import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import "./App.css";
import AboutUs from "./AboutUs";
import Prices from "./Prices";
import Contact from "./Contact";

const safeDocument = typeof document !== "undefined" ? document : {};

function App() {
  const [modal1Opened, setModal1Opened] = React.useState(false);
  const [modal2Opened, setModal2Opened] = React.useState(false);
  const [modal3Opened, setModal3Opened] = React.useState(false);

  const scrollBlocked = React.useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue("padding-right")
      ) || 0;

    html.style.position = "relative"; /* [1] */
    html.style.overflow = "hidden"; /* [2] */
    body.style.position = "relative"; /* [1] */
    body.style.overflow = "hidden"; /* [2] */
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = "";
    html.style.overflow = "";
    body.style.position = "";
    body.style.overflow = "";
    body.style.paddingRight = "";

    scrollBlocked.current = false;
  };

  return (
    <HashRouter basename="/">
      <div>
        <div
          hidden={!(modal1Opened || modal2Opened || modal3Opened)}
          id="hide-content-box"
          class="hide-content"
        ></div>
        <header class="headerbar">
          <div class="site-name">
            <Link to="/">Dentist</Link>
          </div>
        </header>
        <div class="nav-menu">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                News
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/about-us">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/prices">
                Prices
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div class="wrap">
          <Switch>
            <Route exact path="/">
              <Home
                modal1Opened={modal1Opened}
                setModal1Opened={setModal1Opened}
                modal2Opened={modal2Opened}
                setModal2Opened={setModal2Opened}
                modal3Opened={modal3Opened}
                setModal3Opened={setModal3Opened}
                disableBodyScroll={blockScroll}
                enableBodyScroll={allowScroll}
              />
            </Route>
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/prices">
              <Prices />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <div class="footer">
          <Link to="/">Lorem.</Link>
          <Link to="/">Lorem, ipsum.</Link>
          <Link to="/">Lorem, ipsum.</Link>
          <Link to="/">Lorem.</Link>
          <Link to="/">Lorem.</Link>
          <Link to="/">Lorem.</Link>
          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
