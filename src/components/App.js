import React, { useState } from 'react';
import './../pages/index.css';


import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import Input from './Input';



function App() {

  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);

  function handleAvatarClick() {
    setIsEditAvatarOpen(true);
  }
  function handleProfileClick() {
    console.log("this link was clicked");
    setIsEditProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlaceOpen(true);
  }

  function closeAllPopups(evt) {
    if (evt.target !== evt.currentTarget) return
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
  }



  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleAvatarClick}
          onEditProfile={handleProfileClick}
          onAddPlace={handleAddPlaceClick}
          onClose={closeAllPopups}
        />
        <Footer />

        {/*Add avatar img popup*/}
        <PopupWithForm name="add-image" title="Change profile picture" isOpen={isEditAvatarOpen} onClose={closeAllPopups}>
          <Input id="popup-url" type="url" className="card-url" placeholder="Image link"
                name="Imagelink" defaultValue=""/>
        </PopupWithForm>

        {/*Edit profile name and about popup*/}
        <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={isEditProfileOpen} onClose={closeAllPopups}>
          <Input id="profile-name" type="text" className="profile-name" name="name" placeholder="Jaques Cousteau" handleChange={() => {console.log("type!!!")}} defaultValue="" />
          <Input id="profile-text" type="text" className="profile-about" name="link" placeholder="Explorer" handleChange={() => {console.log("type!!!")}} defaultValue="" />
        </PopupWithForm>

          {/*Add-card popup with card name and url */}
        <PopupWithForm name="add-card" title="New Place" buttonText ="Create" isOpen={isAddPlaceOpen} onClose={closeAllPopups}>
          <Input id="popup-title" type="text" className="card-name" name="name" placeholder="Title" handleChange={() => {console.log("type!!!")}} defaultValue="" />
          <Input id="popup-url" type="url" className="card-url" name="link" placeholder="Image link" handleChange={() => {console.log("type!!!")}} defaultValue="" />
        </PopupWithForm>

      </div>
    </div>
  );
}

export default App;
