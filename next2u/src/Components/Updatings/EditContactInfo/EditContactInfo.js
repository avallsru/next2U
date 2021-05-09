import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeEditContactInfo, saveContactInfo } from '../../../redux/actions/lastConfirmationActions';

import './EditContactInfo.scss';
import '../generalLastConfirmation.scss';

const EditContactInfo = () => {
  const dispatch = useDispatch();
  const { name, phone, email } = useSelector(store => store.lastConfirmationReducer.contactInfo);

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const handleChange = (e, kind) => {
    e.preventDefault();
    if (kind === 'name') {
      setUpdatedName(e.target.value);
    } else if (kind === 'phone') {
      setUpdatedPhone(e.target.value);
    } else {
      setUpdatedEmail(e.target.value);
    }
    
  }

  const handleClick = (e => {
    e.preventDefault();

    dispatch(changeEditContactInfo(false));
    dispatch(saveContactInfo({
      name: updatedName, 
      phone: updatedPhone,
      email: updatedEmail
    }
    ));
  })
  return (
    <div className="last-confirmation contact-info container">
      <div className="last-confirmation contact-info title">Datos de contacto</div>
      <input 
        className="input-contact-name" 
        value={updatedName} 
        placeholder={updatedName}
        label="Nombre: " 
        onChange={e => handleChange(e, 'name')}
      />
      <input 
        className="input-contact-phone" 
        value={updatedPhone} 
        placeholder={updatedPhone} 
        label="Teléfono: "
        onChange={e => handleChange(e, 'phone')}
      />
      <input 
        className="input-contact-email" 
        value={updatedEmail} 
        placeholder={updatedEmail}
        label="e-mail" 
        onChange={e => handleChange(e, 'email')}
      />
      <div className="button-container">
      <button 
        onClick={handleClick}
        className="last-confirmation editing-button"
      >
        Guardar cambios
      </button>
      </div>
      
    </div>
  );
};

export default EditContactInfo;