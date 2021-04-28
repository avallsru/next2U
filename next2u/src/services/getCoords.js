import React from 'react';
// import PropTypes from 'prop-types';


import { API_KEY, API_BASE_CONVERT_ADRESS_TO_COORD, API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

const getCoords = async (address) => {
  const addressToSearch= address.replaceAll(' ', '%20');
  const coords = await fetch(`${API_BASE_CONVERT_ADRESS_TO_COORD}address=${addressToSearch}&key=${API_KEY}`);
  const fetchedcoords = await coords.json();
  console.log(fetchedcoords);
  return (
    <div>
      
    </div>
  );
};

// getCoords.propTypes = {
  
// };

export default getCoords;