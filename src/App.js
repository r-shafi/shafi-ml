import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
