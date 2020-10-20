import React from 'react';

function PopupWithForm(props) {

  return (

    <div className={`popup popup__${props.name}`}>
      <div className={`popup__content popup__content_${props.name} ${props.isOpen ? "popup__visible" : ""}`} onClick={props.onClose}>
        <button type="button" className={`popup__close-button popup__close_type_${props.name}`} onClick={props.onClose}></button>
        <form action="#" className={`popup__form popup__${props.name}`} noValidate name={props.name}>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button type="submit" className={`popup__button popup__${props.name}-button`}>Save</button>
        </form>
      </div>
    </div>

  )
}

export default PopupWithForm;
