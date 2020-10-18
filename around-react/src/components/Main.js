import React from 'react';



function Main() {

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
    <main>

          <section className="profile">

            <div className="profile__avatar">
              <img src="../src/images/black.jpg" alt="profile" className="profile__img" />
              <button className="profile__avatar-overlay" onClick={handleAvatarClick}></button>
            </div>

            <div className="profile__info">
              <h1 className="profile__name">Cousteau</h1>
              <p className="profile__about">Explorer</p>
              <button type="button" className="profile__edit-button" onClick={handleProfileClick}></button>
            </div>
            <button className="profile__add-button" onClick={handleAddPlaceClick}></button>
          </section>

          <section className="elements">
            <ul className="card">
            </ul>
          </section>

          <div className="popup popup__edit-profile">
          <div className="popup__content popup__content_profile">
            <button type="button" className="popup__close-button"></button>
            <form action="#" className="popup__form popup__form_profile" noValidate>
              <h3 className="popup__title">Edit Profile</h3>
              <input id="profile-name" type="text" name="name" className="popup__input popup__input_profile-name"
                value="Jacques Cousteau" required maxLength="40" minLength="2" />
              <span id="profile-name-error" className="popup__error"></span>

              <input id="profile-text" type="text" name="about" className="popup__input popup__input_profile-about"
                value="Explorer" required maxLength="200" minLength="2" />
              <span id="profile-text-error" className="popup__error"></span>

              <button type="submit" className="popup__button popup__submit-button popup__profile-save">Save</button>
            </form>
          </div>
        </div>

        <div className="popup popup__add-card">
          <div className="popup__content popup__content_card">
            <button className="popup__close-button"></button>
            <form action="#" className="popup__form popup__form_card" noValidate>
              <h3 className="popup__title">New Place</h3>
              <input id="popup-title" type="text" name="name" className="popup__input popup__input_card-name"
                placeholder="Title" required maxLength="30" minLength="1" />
              <span id="popup-title-error" className="popup__error"></span>

              <input id="popup-url" type="url" name="link" className="popup__input popup__input_card-url"
                placeholder="Image link" required />
              <span id="popup-url-error" className="popup__error"></span>

              <button type="submit" className="popup__button popup__submit-button popup__card-save">Create</button>
            </form>
          </div>
        </div>

        <div className="popup popup__add-image">
          <div className="popup__content">
            <button className="popup__close-button"></button>
            <h3 className="popup__title">Change Profile Picture</h3>
            <form action="" className="popup__form">
              <input id="popup-url" type="url" className="popup__input popup__input_card-url" placeholder="Image link"
                name="Imagelink" required />
              <span id="popup-url-error" className="popup__error"></span>
              <button type="submit" className="popup__button popup__submit-button">Save</button>
            </form>
          </div>
        </div>


        <div className="popup popup__delete-confirm">
          <div className="popup__content">
            <button className="popup__close-button"></button>
            <form className="popup__form">
              <h3 className="popup__title popup__title-confirm">Are you sure?</h3>
              <button className="popup__button popup__submit-button" type="submit" value="save">Yes</button>
            </form>
          </div>
        </div>
        </main>
  )
}

export default Main;
