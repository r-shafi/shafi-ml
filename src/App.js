import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Create from './Pages/Create';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <header>
            <h1>
              <Link to="/create">S</Link>hafi
            </h1>
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
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
