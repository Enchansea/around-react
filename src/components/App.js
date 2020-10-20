import React, {useState} from 'react';
import './../pages/index.css';


import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';



function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  //isOpen={isEditProfilePopupOpen, isEditAvatarPopupOpen, isAddPlacePopupOpen}


  function handleAvatarClick() {
    setIsEditAvatarOpen(true);
  }

  function handleProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
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
          name="avatar"
          title="Change profile picture"
          children={
            <>
            <input id="popup-url" type="url" className="popup__input popup__input_card-url" placeholder="Image link"
                name="Imagelink" required />
              <span id="popup-url-error" className="popup__error"></span>
            </>
          }
          isOpen={isEditAvatarPopupOpen}
        />

      </div>
    </div>
  );
}

export default App;
