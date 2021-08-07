import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline, image } = this.props;
    return (
      <>
      <div class="row">
      <div class="col-md-2">
        {/* if image is null then image will not render */}
            { image && <img src={ image } alt=""/> }
      </div>
  		<div class="col-md-10">
    		<h4 class="media-heading">{title}</h4>
        {/* if byline is null then byline will not render */}
          {byline && <p class="text-right">By {byline}</p> }
          <p>{abstract}</p>
          <ul class="list-inline list-unstyled">
  			<li><span>Created Date :  {createdDate} </span></li>
            
            </ul>
       
    </div>
  </div>
      
      </>
    )
  }
}

export default Article;


// Functional solution:
// function Article({ title, created_date: createdDate, abstract, byline, image }) {
//   return (
//     <div>
//       <h1>{ title }</h1>
//       <p>{ createdDate }</p>
//       { byline && <h2>{byline}</h2> }
//       { image && <img src={image} /> }
//       <p>{ abstract }</p>
//     </div>
//   );
// }
