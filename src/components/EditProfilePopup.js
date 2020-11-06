import React, { useEffect, useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    console.log("hs", props.onUpdateUser)
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

    return (
        <PopupWithForm name="edit-profile" title="Edit Profile" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <Input id="profile-name" type="text" className="profile-name" name="Name" placeholder="Jaques Cousteau" onChange={handleNameChange} defaultValue={currentUser.name} />
            <Input id="profile-text" type="text" className="profile-about" name="Profession" placeholder="Explorer" onChange={handleDescriptionChange} defaultValue={currentUser.about} />
        </PopupWithForm>
    )
}

export default EditProfilePopup;
