import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import ic_Search from '../Assets/ic_Search.png';
import { Link } from "react-router-dom";

import Seller from "./Result/Seller";

export default class Result extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.search(this.refs.query);
  }

  search(query = "animals") {

    let apiKey = '6e2bf259ed98e629a13a24965b8f6cac';
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${query}`;
    //let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;
    Request.get(url).query({limit: 4}).then((response) => {
      this.setState({
        photos: response.body.photos.photo
      })
      
    })
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {

    console.log(this.state.photos);

    var photos = _.map(this.state.photos, (photo) => {

      var id = photo.id;
      var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
      var title = photo.title;

      return (
        <div key={photo.id}>
          
              <h3>{photo.title}</h3>
              <a href={url} key={id} target="_blank">
                <img src={url} alt={title}/>
              </a>
            
        </div>
      )
    })

    return (
    <div>

      <nav className="navbar navbar-light bg-ml mb-4">
          <div className="container">
            <div className="d-flex flex-nowrap">
              

              <div className="input-group col">
                <input ref="query" onChange={ (e) => { this.updateSearch(); }} type="text" className="form-control heavy-grey" placeholder="Busque photos..." />
                <span className="input-group-btn">
                  <button className="btn btn-light-grey" type="button">
                    <img src={ic_Search} alt="logo" />
                  </button>
                </span>
              </div>

            </div>
          </div>
          
        </nav>

        <div className="container">
          {photos}
        </div>
      </div>
    );

  }
}