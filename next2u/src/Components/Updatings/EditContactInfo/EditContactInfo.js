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
      <div className="contact name container">
        <div className="contact-info name detail title">Nombre: </div>
        <input 
          className="last-confirmation editor input-contact" 
          value={updatedName} 
          placeholder={updatedName}
          onChange={e => handleChange(e, 'name')}
      />
      </div>
      <div className="contact phone container">
        <div className="contact-info phone detail title">Teléfono: </div>
        <input 
          className="last-confirmation editor input-contact" 
          value={updatedPhone} 
          placeholder={updatedPhone} 
          onChange={e => handleChange(e, 'phone')}
      />
      </div>
      <div className="contact email container">
        <div className="contact-info email detail title">e-mail: </div>
        <input 
          className="last-confirmation editor input-contact" 
          value={updatedEmail} 
          placeholder={updatedEmail}
          onChange={e => handleChange(e, 'email')}
      />
      </div>
      
      
      
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