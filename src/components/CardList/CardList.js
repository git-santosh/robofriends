import React, { Fragment } from "react";
import Card from '../Card/Card';
const CardList = ({robots}) => {
  const cardComponent = robots.map((user,i)=>{
    return <Card
    key = {i}
    name={robots[i].name}
    email={robots[i].email}
    img={`https://robohash.org/${robots[i].id}?size=200x200`}
  />
  })
  return (
    <Fragment>
      {cardComponent}
    </Fragment>
  );
};

export default CardList
