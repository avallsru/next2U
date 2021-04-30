import React, { useState } from "react";
import { useSelector } from "react-redux";
import { listStoresToPrint } from "../../logic";
// import PropTypes from 'prop-types';

import "./InputRestName.scss";

const InputRestName = (props) => {
  const { storesReducer } = useSelector((store) => store);
  const storesNearAddress = storesReducer.storesNearAddress;

  const [name, setName] = useState();
  const [storesList, setStoresList] = useState([]);

  const handleChange = ({ target }) => {
    setName(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const listToPrint = listStoresToPrint(storesNearAddress, name, "byName");
    console.log(listToPrint);
  }

  return (
    <div className="inputName-container">
      
      <form className="inputName-form" onSubmit={handleSubmit}>
        <img 
          src="assets/img/searchicon.png" 
          alt="lupa" 
          className="inputName-img"
        />
        <input
          className="inputName-text"
          type="text"
          placeholder="Busca el nombre de la tienda que buscas"
          value={name}
          onChange={handleChange}
        >
        
        </input>
        
      </form>
    </div>
  );
};

// InputRestName.propTypes = {

// };

export default InputRestName;
