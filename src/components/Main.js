import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getCardList()
      .then(res => {
        //console.log("res", res)
        setCards(res.map((card) => ({
          link: card.link,
          title: card.name,
          likes: card.likes,
          owner: card.owner,
          id: card._id
        })))

      })
      .catch(err => console.log(err));
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    //console.log("cid", card.id)
    api.changeLikeCardStatus(card.id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c.id === card.id ? newCard : c);
      console.log("here", newCards);
      setCards(newCards);
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(deletedCard) {
    api.removeCard(deletedCard._id)
    .then(cards.filter(card => card !== deletedCard))
    .catch(err => console.log(err));
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <img src={currentUser.avatar} alt={currentUser.name} className="profile__img" />
          <button className="profile__avatar-overlay" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about">{currentUser.about}</p>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      {/* Card */}
      <section className="elements">
        <ul className="card">
          {
            cards.map((card, index) =>
              <Card
                key={index}
                src={card.link}
                title={card.title}
                onCardClick={() => props.handleCardClick(card.link, card.title)}
                likes={card.likes}
                id={card.id}
                owner={card.owner}
                onCardDelete={() => props.handleCardDelete(card)}
                onDeleteClick={() => props.handleDeleteClick(card)}
                onCardLike={() => handleCardLike(card)}
              />

            )
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;
