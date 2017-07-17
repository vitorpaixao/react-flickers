import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Search from "./Search";
import Details from "./Details";
import Footer from "./Footer";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Flicker",
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Route path="/" component={Search}></Route>
        <Route path="/items?search=" component={Result}></Route>
        <Route path="/items/:id" component={Details}></Route>
        <Footer />
      </div>
    );
  }

}