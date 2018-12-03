import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';


// COMPONENTS
import Hero from "./hero/hero";
import Mission from "./mission/mission";
import Info from './info/info';
import TeamCard from './team/team';
import Footer from './footer/footer';

// import "./App.css";

class Landing extends Component {
  state = {
    response: "",
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    // Renders what is at the route /api/hello
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App react-transition drop-in">
        <Hero />
        <div className={'mission-component'}>
          <Mission/>
        </div>
        <div className={'info-component'}>
          <Info />
        </div>
      </div>
    );
  }
}

export default Landing;
