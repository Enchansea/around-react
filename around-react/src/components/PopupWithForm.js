import React from 'react';

function PopupWithForm(props) {

  return (

    <div className={`popup popup__type_${props.name}`}>
      <div className="popup__content popup__content_profile">
        <button type="button" className={`popup__close-button popup__close_type_${props.name}`} onClick={props.onClose}></button>
        <form action="#" className={`popup__form popup__form_type_${props.name}`} novalidate>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button type="submit" className={`popup__button popup__submit_${props.name}`}>Save</button>
        </form>
      </div>
    </div>

  )
}

export default PopupWithForm;
