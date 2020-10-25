import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userAvatar, setUserAvatar] = useState();
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch(err => console.log(err));

    api.getCardList()
      .then(res => {
        setCards(res.map((card) => ({
          link: card.link,
          title: card.name,
          likes: card.likes
        })))

      })
      .catch(err => console.log(err));
  }, [])




  return (


    <main>
      <section className="profile">
        <div className="profile__avatar">
          <img src={userAvatar} alt={userName} className="profile__img" />
          <button className="profile__avatar-overlay" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
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
                id={card._id}
                owner={card.owner}
                onDeleteClick={() => props.handleDeleteClick(card)}
              />

            )
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;
