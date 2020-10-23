import React from 'react'

function Card(props) {
  return (

    <>
      <img className="card__image" src={props.src} alt={props.alt}/>
      <button className="card__remove-button"></button>
      <h2 className="card__title">{props.title}</h2>
    </>

  )

}

export default Card;
