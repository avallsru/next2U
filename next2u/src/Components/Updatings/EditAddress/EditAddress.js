import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeEditAddressStatus } from '../../../redux/actions/lastConfirmationActions';
import { saveAddress } from '../../../redux/actions/addressActions';

import { changeEditingStatus } from '../../../logic';

import '../generalLastConfirmation.scss';
import './EditAddres.scss';


const EditAddress = () => {
  const dispatch = useDispatch();
  const addressFromRedux = useSelector(store => store.addressReducer);
  
  const [address, setAddress] = useState('');

  useEffect(() => {
    setAddress(addressFromRedux);
  }, [addressFromRedux])

  const handleChange = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }


  const handleClick = () => {
    dispatch(changeEditAddressStatus(false));
    dispatch(saveAddress(address));
  }

  return (
    <div className="last-confirmation delivery-address container">
      <div className="last-confirmation delivery-address title">Dirección de entrega</div>
      <textarea 
      value={address} 
      onChange={handleChange}
      className="last-confirmation editor"
      autoFocus
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

export default EditAddress;