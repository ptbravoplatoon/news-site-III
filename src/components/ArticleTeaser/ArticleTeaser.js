import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

// Functional solution:
function ArticleTeaser({ id, title, created_date: createdDate }) {
  return (
    <div>
      <ListGroupItemHeading>
        <Link to={`/articles/${id}`}>{title}</Link>
      </ListGroupItemHeading>
      <ListGroupItemText>{createdDate}</ListGroupItemText>
    </div>
  );
}

export default ArticleTeaser;

// Class solution:
// class ArticleTeaser extends Component {
//   render() {
//     /* Note: the { created_date: createdDate } syntax in this destructure is
//         taking the value of created_date from this.props and setting it to
//         a new variable called createdDate
//     */
//     const { id, title, created_date: createdDate, handleTitleClick } = this.props;
//     return (
//       <div>
//         <ListGroupItemHeading>
//          <Link to={`/articles/${id}`}>{title}</Link>
//         </ListGroupItemHeading>
//         <ListGroupItemText>{ createdDate }</ListGroupItemText>
//       </div>
//     )
//   }
// }
