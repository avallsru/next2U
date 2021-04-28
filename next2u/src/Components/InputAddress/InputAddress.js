import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAddressDetails, getStores } from '../../services';

import {setCoordinates, saveAddress} from '../../redux/actions/addressActions';

import './InputAddress.scss';

const InputAdress = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [coords, setCoords] = useState({lat: 0, lon: 0});
  const [address, setAddress] = useState('');

  

  useEffect(() => {
    dispatch(setCoordinates(coords));
    dispatch(saveAddress(address))
  }, [coords, dispatch, address]);

  const handleChange = ({ target }) => {
    setAddress(target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {lat, lon, formatedAddress} = await getAddressDetails(address);
    // const result = await getStores({lat: 41.359620, lon: 2.076710});
    // console.log(result);

    setCoords({lat, lon});
    setAddress(formatedAddress);

    history.push('/stores_results');
  }

  return (
    <div className="inputAdress">
      <input type="text" onChange={handleChange} value={address}></input>
      <button type="submit" onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

// InputAdress.propTypes = {
  
// };

export default InputAdress;