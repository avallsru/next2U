import React from 'react';
import { useSelector } from "react-redux";

import EditContactInfo from '../Components/Updatings/EditContactInfo';
import UpdatedContactInfo from '../Components/Updatings/UpdatedContactInfo';

const withContactInfoEdition = () => {
  return () => {
    const { editContactInfo } = useSelector(store => store.lastConfirmationReducer);
    
    return editContactInfo ? <EditContactInfo /> : <UpdatedContactInfo /> 
  };
};

export default withContactInfoEdition;