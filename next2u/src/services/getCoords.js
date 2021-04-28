import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


import { API_KEY, API_BASE_CONVERT_ADRESS_TO_COORD, API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

import {setCoordinates} from '../redux/actions/adressActions';

const getCoords = async (address) => {

  const addressToSearch= address.replaceAll(' ', '%20');
  const coords = await fetch(`${API_BASE_CONVERT_ADRESS_TO_COORD}address=${addressToSearch}&key=${API_KEY}`);
  const fetchedcoords = await coords.json();
  
  const coordsToReturn = fetchedcoords.results[0].geometry.location;
  const lat = coordsToReturn.lat;
  const lon = coordsToReturn.lng;
  

  return { lat, lon };
};

// getCoords.propTypes = {
  
// };

export default getCoords;