import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <div>
              <h1>Shafi</h1>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </header>
        </Router>

        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
