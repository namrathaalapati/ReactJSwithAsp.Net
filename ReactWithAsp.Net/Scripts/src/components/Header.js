import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
      <div className=" top_bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 contact_info text-center">
            Alapati Namratha
            </div>
            <div className="col-sm-9 contact_info text-right">
              <span className="glyphicon glyphicon-envelope"></span> namrathaalapati1@gmail.com &nbsp;
              <span className="glyphicon glyphicon-earphone"></span> +49 15163637444
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
