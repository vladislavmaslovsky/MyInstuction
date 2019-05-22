import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/sample/create.component';
import Edit from './components/sample/edit.component';
import Index from './components/sample/index.component';

class App extends Component {
  render() {
    var style = {
      display:'none',
       opacity: 1
    };
    return (
      <Router>
        <nav className="navbar navbar-default navbar-fixed white no-background bootsnav">

          <div className="top-search">
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input type="text" className="form-control" placeholder="Search" />
                <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
              </div>
            </div>
          </div>

          <div className="container">
          <div className="attr-nav">
            <ul>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-shopping-bag"></i>
                  <span className="badge">3</span>
                </a>
                <ul className="dropdown-menu cart-list animated fadeOutUp" style={style}>
                  <li>
                    <a href="#" className="photo"><img src="assets/images/thumb01.jpg" className="cart-thumb" alt="" /></a>
                    <h6><a href="#">Delica omtantur </a></h6>
                    <p className="m-top-10">2x - <span className="price">$99.99</span></p>
                  </li>
                  <li>
                    <a href="#" className="photo"><img src="assets/images/thumb01.jpg" className="cart-thumb" alt="" /></a>
                    <h6><a href="#">Delica omtantur </a></h6>
                    <p className="m-top-10">2x - <span className="price">$99.99</span></p>
                  </li>
                  <li>
                    <a href="#" className="photo"><img src="assets/images/thumb01.jpg" className="cart-thumb" alt="" /></a>
                    <h6><a href="#">Delica omtantur </a></h6>
                    <p className="m-top-10">2x - <span className="price">$99.99</span></p>
                  </li>

                  <li className="total">
                    <span className="pull-right"><strong>Total</strong>: $0.00</span>
                    <a href="#" className="btn btn-cart">Cart</a>
                  </li>
                </ul>
              </li>
              <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#brand">

              <img src="assets/images/logo.png" className="logo logo-display m-top-10" alt="" />
              <img src="assets/images/logo.jpg" className="logo logo-scrolled" alt="" />

            </a>
          </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link to={'#hello'}>Hello</Link></li>
                <li><Link to={'#about'}>About</Link></li>
                <li><Link to={'#service'}>Services</Link></li>
                <li><Link to={'#portfolio'}>Portfolio</Link></li>
              </ul>
            </div>

            <Switch>
              <Route exact path='/create' component={Create} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/index' component={Index} />
            </Switch>
          </div>

        </nav>

      </Router>
    );
  }
}

export default App;