import React from 'react';
import './../pages/index.css';


import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';



function App() {

  function handleAvatarClick() {
    const editProfilePic = document.querySelector(".popup__add-image");
    //console.log(document.querySelector(".popup__add-image"));
    editProfilePic.classList.add("popup_visible");
  }

  function handleProfileClick() {
    const editProfile = document.querySelector(".popup__edit-profile");
    editProfile.classList.add("popup_visible");
  }

  function handleAddPlaceClick() {
    const addPlace = document.querySelector(".popup__add-card");
    addPlace.classList.add("popup_visible");

  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />




      </div>
    </div>
  );
}

export default App;
