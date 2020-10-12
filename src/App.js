import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './component/Footer';
import Home from './component/pages/Home';
import Blog from './component/pages/Blog';
import Create from './component/pages/Create';
import Contact from './component/pages/Contact';

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Router>
          <header>
            <h1>Shafi</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </header>

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
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
