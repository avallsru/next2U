import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeEditContactInfo } from '../../../redux/actions/lastConfirmationActions';

import './UpdatedContactInfo.scss';
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
      <div className="details contact container">
        <div className="details contact first-group">
          <div className="contact name container">
            <div className="contact-info detail name title">Nombre: </div>
            <div className="contact-info defined name value">{name}</div>
          </div>
          <div className="contact phone container">
            <div className="contact-info detail phone title">Teléfono: </div>
            <div className="contact-info defined phone value">{phone}</div>
          </div>
          <div className="contact email container">
            <div className="contact-info detail email title">e-mail: </div>
            <div className="contact-info defined email value">{email}</div>
          </div>
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
      
      
      
    </div>
  );
};

export default UpdatedContactInfo;