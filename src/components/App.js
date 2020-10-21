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

  function handleAvatarClick() {
    setIsEditAvatarOpen(true);
  }
  function handleProfileClick() {
    console.log("this link was clicked");
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
        />

        <PopupWithForm 
        
        />

      </div>
    </div>
  );
}

export default App;
