import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { getCoords } from './../../services';
import {setCoordinates} from '../../redux/actions/adressActions';

// import './InputAdress.scss';

const InputAdress = props => {
  const dispatch = useDispatch();

  const [coords, setCoords] = useState({lat: 0, lon: 0});
  const [adress, setAdress] = useState('');

  useEffect(() => {
    dispatch(setCoordinates(coords))
  }, [coords, dispatch]);

  const handleChange = ({ target }) => {
    setAdress(target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {lat, lon} = await getCoords(adress);
     
    setCoords({lat, lon})
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={adress}></input>
      <button type="submit" onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

// InputAdress.propTypes = {
  
// };

export default InputAdress;