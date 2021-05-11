import React, { useState } from 'react';
import { useSelector } from "react-redux";

import EditAddress from '../Components/Updatings/EditAddress';
import UpdatedAddress from '../Components/Updatings/UpdatedAddress';

const withAddressEdition = (Component) => {
  return () => {
    const { editAddress } = useSelector(store => store.lastConfirmationReducer);
    
    return editAddress ? <EditAddress /> : <UpdatedAddress /> 
  };
};

export default withAddressEdition;