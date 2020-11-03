import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import '../pages/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import Input from './Input';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';



function App() {

  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
  const [selectedCard, setSelectedImageOpen] = useState(false);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [selectedCardLink, setSelectedCardLink] = useState("");
  const [isDeleteOpen, setDeletePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  //console.log("cU", currentUser);
  function handleAvatarClick() {
    setIsEditAvatarOpen(true);
  }
  function handleProfileClick() {
    setIsEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }
  function handleCardClick(link, title) {
    setSelectedCardLink(link);
    setSelectedCardTitle(title);
    setSelectedImageOpen(true);
  }
  function handleDeleteClick() {
    setDeletePopupOpen(true);
  }

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res)
        //console.log(res);
      })
      .catch(err => console.log(err));
  }, [])

  function closeAllPopups(evt) {
    if (evt.target !== evt.currentTarget) return
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setSelectedImageOpen(false);
    setDeletePopupOpen(false);
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main
            onEditAvatar={handleAvatarClick}
            onEditProfile={handleProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={(data) => { handleCardClick(data) }}
            onDeleteClick={(data) => { handleDeleteClick(data) }}
            onClose={closeAllPopups}
            handleCardClick={handleCardClick}
            handleDeleteClick={handleDeleteClick}
          />
          <Footer />

          {/*Add avatar img popup*/}
          <PopupWithForm name="add-image" title="Change profile picture" isOpen={isEditAvatarOpen} onClose={closeAllPopups}>
            <Input id="popup-url" type="url" className="card-url" placeholder="Image link"
              name="Imagelink" defaultValue="" />
          </PopupWithForm>

          {/*Edit profile name and about popup*/}
          <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={isEditProfileOpen} onClose={closeAllPopups}>
            <Input id="profile-name" type="text" className="profile-name" name="name" placeholder="Jaques Cousteau" handleChange={() => { }} defaultValue="" />
            <Input id="profile-text" type="text" className="profile-about" name="link" placeholder="Explorer" handleChange={() => { }} defaultValue="" />
          </PopupWithForm>

          {/*Add-card popup with card name and url */}
          <PopupWithForm name="add-card" title="New Place" buttonText="Create" isOpen={isAddPlaceOpen} onClose={closeAllPopups}>
            <Input id="popup-title" type="text" className="card-name" name="name" placeholder="Title" handleChange={() => { }} defaultValue="" />
            <Input id="popup-url" type="url" className="card-url" name="link" placeholder="Image link" handleChange={() => { }} defaultValue="" />
          </PopupWithForm>

          {/*Delete popup*/}
          <PopupWithForm name="delete-confirm" title="Are you sure?" buttonText="Yes" isOpen={isDeleteOpen} onClose={closeAllPopups} />

          {/*Image popup*/}
          <ImagePopup isOpen={selectedCard} onClose={closeAllPopups} title={selectedCardTitle} link={selectedCardLink} />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
