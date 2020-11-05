import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  //console.log(props)
  //console.log("cu", currentUser)

  // Checking to see if I own the current card
  const isOwn = props.owner._id === currentUser._id;

  // Check if the card was liked by the current user
  const isLiked = props.likes.some(i => i._id === currentUser._id);

  // Creating a variable for the delete button
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__remove-button_visible' : 'card__remove-button'}`
  );

  // Creating a variable for the like button
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_clicked' : 'card__like-button'}`
  )

  return (

    <li className="card__group">
      <img className="card__image" src={props.src} alt={props.alt} onClick={props.onCardClick}/>
      <button className={cardDeleteButtonClassName} onClick={props.onDeleteClick}></button>
      <h2 className="card__title">{props.title}</h2>
      <button className={cardLikeButtonClassName} onClick={props.onCardLike}></button>
      <h5 className="card__like-count">{props.likes.length}</h5>
    </li>

  )

}

export default Card;
