// import PropTypes from 'prop-types';


import { API_KEY, API_BASE_CONVERT_ADDRESS_TO_COORD} from '../const/constants';


const getAddressDetails = async (address) => {
  const addressToSearch= address.replaceAll(' ', '%20');
  const coords = await fetch(`${API_BASE_CONVERT_ADDRESS_TO_COORD}address=${addressToSearch}&key=${API_KEY}`);
  const fetchedcoords = await coords.json(); 
  const coordsToReturn = fetchedcoords.results[0].geometry.location;
  const lat = coordsToReturn.lat;
  const lon = coordsToReturn.lng;

  const formatedAddress = fetchedcoords.results[0].formatted_address;
  

  return { lat, lon, formatedAddress };
};

// getAddressDetails.propTypes = {
  
// };

export default getAddressDetails;