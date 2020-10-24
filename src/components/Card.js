import React from 'react'

function Card(props) {



  return (

    <li className="card__group">
      <img className="card__image" src={props.src} alt={props.alt} onClick={props.onCardClick}/>
      <button className="card__remove-button" onClick={props.onDeleteClick}></button>
      <h2 className="card__title">{props.title}</h2>
      <button className="card__like-button"></button>
      <h5 className="card__like-count">{props.likes.length}</h5>
    </li>

  )

}

export default Card;
