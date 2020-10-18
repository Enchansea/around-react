import React from 'react';


function ImagePopup() {
  return (
    <div className="popup popup__picture-section">
      <div className="popup__content popup__content_theme_transparent">
        <button className="popup__close-button"></button>
        <figure>
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
