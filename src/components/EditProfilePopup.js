import React from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);
    
    return (
        <PopupWithForm name="edit-profile" title="Edit Profile" isOpen={props.isOpen} onClose={props.onClose}>
            <Input id="profile-name" type="text" className="profile-name" name="Name" placeholder="Jaques Cousteau" handleChange={() => { }} defaultValue="" />
            <Input id="profile-text" type="text" className="profile-about" name="Profession" placeholder="Explorer" handleChange={() => { }} defaultValue="" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;