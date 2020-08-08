import React from 'react';

const Card = ({id, name, email}) => {
  return(
    //<h1><h2> will give us an error, because each component only returns one thing
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`}/> {/*use backticks when u want to add $(val), this is js, not jsx*/}
      <div>
        <h2>{name}</h2> {/*react uses jsx*/}
        <p>{email}</p>  {/*use brackets for js expression*/}
      </div>
    </div>
  );
}

export default Card;
