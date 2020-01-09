import React, {Component} from 'react';
import {render} from 'react-dom';
import GridRow from './GridRow';
import _ from 'Lodash';

export default class Grid extends Component {
      render() {
      debugger;
      const{cssClass,data} = this.props;
    return (
      <span>
        {
          (data!=null)?data.cities.map((data,index) =>(
          <GridRow cssClass={cssClass} key={data.id} name ={data.name} imgurl={data.imgurl} />
        )):<div className="mar-t-10px item_display">There are no items to display </div>
      }
      </span>
    );
  }
}
