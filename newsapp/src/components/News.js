import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  constructor(){
    super();
    console.log("Hello I am a constructor from a news component")
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  } 
   async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=d6db3324d8e2466cab17eaf08d09b132&page=1pageSize=20";
    let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults})
  }

   handlePrevClick = async ()=>{
    console.log("previous")
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=d6db3324d8e2466cab17eaf08d09b132&page=${this.state.page-1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page - 1,
      articles:parsedData.articles
    })
  }
  handleNextClick = async ()=>{
    console.log("Next"); 
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{

    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=d6db3324d8e2466cab17eaf08d09b132&page=${this.state.page+1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page + 1,
      articles:parsedData.articles
    })
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonk - Top Headlines</h1> 
        < div className="row">
        {this.state.articles.map((element)=>{  
         return < div className="col-md-4"  key={element.url}>  
          <Newsitem  title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} />
       </div>
        })}
                    
        </div>
        <div className="conatiner d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News