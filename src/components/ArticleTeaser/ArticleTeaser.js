import React from 'react';
import { ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom'

const ArticleTeaser = (props) => {

  const { id, title, created_date: createdDate } = props

  const toUrl = `/articles/${id}`

  return (
    <div>
      <ListGroupItemHeading>
        <Link to={toUrl}>{title}</Link>
      </ListGroupItemHeading>
      <ListGroupItemText>{ createdDate }</ListGroupItemText>
    </div>
  );
};

export default ArticleTeaser;
