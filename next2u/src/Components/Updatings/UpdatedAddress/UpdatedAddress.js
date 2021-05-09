import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeEditingStatus } from '../../../logic';
import { changeEditAddressStatus } from '../../../redux/actions/lastConfirmationActions';

const UpdatedAddress = () => {
  const dispatch = useDispatch();

  const address = useSelector(store => store.addressReducer);

  const handleClick = () => {
    dispatch(changeEditAddressStatus(true));
  }

  return (
    <div className="last-confirmation delivery-address container">
      <div className="last-confirmation delivery-address title">Dirección de entrega</div>
      <div className="last-confirmation defined address">{address}</div> 
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

export default UpdatedAddress;