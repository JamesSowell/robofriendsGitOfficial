import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
  const cardArray = robots.map((user,i) => {
    return (<Card key={i}
      name={robots[i].name}
      id={robots[i].id}
      email={robots[i].email} />);
  })

  return(
    <div>
      {cardArray} {/*only really need to use brackets when returning js expression*/}
    </div>
  );
}

export default CardList;
