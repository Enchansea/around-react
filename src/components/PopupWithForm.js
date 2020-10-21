import React from 'react';

function PopupWithForm(props) {

  return (

    <div className={`popup popup__${props.name} ${props.isOpen ? "popup_visible" : ""}`}>
      <div className={`popup__content`} onClick={props.onClose}>
        <button type="button" className={`popup__close-button`} onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form action="#" className={`popup__form`} noValidate name={props.name}>
          {props.children}
          <button type="submit" className={`popup__button popup__${props.name}-button`}>Save</button>
        </form>
      </div>
    </div>

  )
}

export default PopupWithForm;
