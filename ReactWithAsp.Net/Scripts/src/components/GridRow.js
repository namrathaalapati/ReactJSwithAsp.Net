import React, {Component} from 'react';
import {render} from 'react-dom';

export default class GridRow extends Component {
    render() {
      debugger;
      const{cssClass,name,imgurl} = this.props;
    return (
      <div className={cssClass == "list" ? 'list-group-item' : 'grid-group-item'}>
        <img className="image" src={imgurl} alt=""/>
        <div className="list-group-item-heading">
          <h4>{name}</h4>
        </div>
      </div>
    );
  }
}
