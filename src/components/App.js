import React, { useState } from 'react';
import './../pages/index.css';


import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';



function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleAvatarClick() {
    setIsEditAvatarOpen(true);
  }
  function handleProfileClick() {
    console.log("this link was clicked");
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(e) {
    if (e.target !== e.currentTarget) return
    setIsEditAvatarPopupOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
  }



  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleAvatarClick}
          onEditProfile={handleProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />

        <PopupWithForm
          name="add-image"
          title="Change profile picture"
          children={
            <>
              <input id="popup-url" type="url" className="popup__input popup__input_card-url" placeholder="Image link"
                name="Imagelink" required
              />
              <span id="popup-url-error" className="popup__error"></span>
            </>
          }
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="edit-profile"
          title="Edit Profile"
          children={
            <>
              <input id="profile-name" type="text" name="name" className="popup__input popup__input_profile-name"
                value="Jacques Cousteau" required maxLength="40" minLength="2" />
              <span id="profile-name-error" className="popup__error"></span>

              <input id="profile-text" type="text" name="about" className="popup__input popup__input_profile-about"
                value="Explorer" required maxLength="200" minLength="2" />
              <span id="profile-text-error" className="popup__error"></span>
            </>
          }
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="add-card"
          title="New Place"
          children={
            <>
              <input id="popup-title" type="text" name="name" class="popup__input popup__input_card-name"
                placeholder="Title" required maxlength="30" minlength="1" />
              <span id="popup-title-error" class="popup__error"></span>

              <input id="popup-url" type="url" name="link" class="popup__input popup__input_card-url"
                placeholder="Image link" required />
              <span id="popup-url-error" class="popup__error"></span>
            </>
          }
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

      </div>
    </div>
  );
}

export default App;
