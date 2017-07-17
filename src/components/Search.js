import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import { Link } from "react-router-dom";

import Seller from "./Search/Seller";

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.search(this.refs.query);
  }

  search(query = "star") {
    let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;
    Request.get(url).query({limit: 4}).then((response) => {
      this.setState({
        products: response.body.results
      })
    })
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {

    var products = _.map(this.state.products, (product) => {
      return (
        <li key={product.id}>
          <ul>
            <li>
              {product.title}
            </li>
            <Seller seller={product.seller.id}/>
          </ul>
        </li>
      )
    })

    return (
      <div>
        <input ref="query" onChange={ (e) => { this.updateSearch(); }} />
        <div class="row">
          <ul>{products}</ul>          
        </div>
      </div>
    );

  }
}