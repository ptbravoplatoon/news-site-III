import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    /* Note: the { created_date: createdDate } syntax in this destructure is
        taking the value of created_date from this.props and setting it to
        a new variable called createdDate
    */
    const { id, title, created_date: createdDate, handleTitleClick } = this.props;
    return (
      <>
      {/* printing an article with title, date, id */}
       <h1><a href="/" onClick={ (e) =>{ e.preventDefault();  handleTitleClick(id); } }>{ title }</a></h1>
        <p><strong>Created Date : </strong>{ createdDate } </p>
        <div>
          {/* creating onclick button prevents default button action from rendering */}
            <div class="more label"><a href="/" class="btn btn-primary" onClick={ (e) =>{ e.preventDefault();  handleTitleClick(id); } } >Read more</a></div> 
              
        </div> 
        <div class="clear"></div>
        <hr></hr>
      </>
    )
  }
}

export default ArticleTeaser;


// Functional solution:
// function ArticleTeaser({ id, title, created_date: createdDate, handleTitleClick }) {
//   return (
//     <div>
//       <a onClick={ () => handleTitleClick(id) }>{ title }</a>
//       <p>{ createdDate }</p>
//     </div>
//   );
// }
