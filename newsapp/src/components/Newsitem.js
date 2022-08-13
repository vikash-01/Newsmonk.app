//import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://images.hindustantimes.com/tech/img/2022/06/04/1600x900/ytfg_1654335300221_1654335321936.PNG":imageurl} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{description}...</p>
           <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem