import React from 'react';
import "./CardListStyle.css";
import Card from './card/Card';



function CardList (props) {
    console.log(props.monster);

    
  return (
    <div className='card-list'>
        {props.monster.map(monster => <Card key={monster.id} monster={monster} />)}
    </div>
  )
}

export default CardList