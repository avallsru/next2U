import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeEditContactInfo } from '../../../redux/actions/lastConfirmationActions';

const UpdatedContactInfo = () => {
  const dispatch = useDispatch();

  const { name, phone, email } = useSelector(store => store.lastConfirmationReducer.contactInfo);

  const handleClick = (e => {
    e.preventDefault();

    dispatch(changeEditContactInfo(true));
  })
  return (
    <div className="last-confirmation contact-info container">
      <div className="last-confirmation contact-info title">Datos de contacto</div>
      <div className="contact-info name container">
        <div className="contact-info name title">Nombre: </div>
        <div className="contact-info name value">{name}</div>
      </div>
      <div className="contact-info phone container">
        <div className="contact-info phone title">Teléfono: </div>
        <div className="contact-info phone value">{phone}</div>
      </div>
      <div className="contact-info email container">
        <div className="contact-info email title">e-mail: </div>
        <div className="contact-info email value">{email}</div>
      </div>
      <div className="button-container">
      <button 
        onClick={handleClick}
        className="last-confirmation editing-button"
      >
        Editar
      </button>
      </div>
      
    </div>
  );
};

export default UpdatedContactInfo;