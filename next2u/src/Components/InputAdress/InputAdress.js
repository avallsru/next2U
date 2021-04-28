import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { getCoords } from './../../services';

// import './InputAdress.scss';

const InputAdress = props => {
  const [adress, setAdress] = useState('');

  const handleChange = ({ target }) => {
    setAdress(target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getCoords(adress);

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