import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class Details extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {

  }

  render() {

    var details = _.map(this.state.details, (product) => {      
      return (
        <li key={product.id}>
          <ul>
            <li>
              title {product.title}
            </li>
          </ul>
        </li>
      )
    })

    return (
      <div>
        <input ref="query" onChange={ (e) => { this.updateSearch(); }} />
        <div class="row">
          <ul>{details}</ul>          
        </div>
      </div>
    );

  }
}