import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import PropTypes from 'prop-types';

import { listStoresToPrint } from "../../logic";

import { listToPrint } from "../../redux/actions/storesActions";
import StoreList from "../StoreList";

import "./InputRestName.scss";

const InputRestName = (props) => {
  const dispatch = useDispatch();
  const { storesReducer } = useSelector((store) => store);
  const storesNearAddress = storesReducer.storesNearAddress;

  const [name, setName] = useState();

  const handleChange = ({ target }) => {
    setName(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const storesSelected = listStoresToPrint(storesNearAddress, name, "byName");
    dispatch(listToPrint(storesSelected));
    setName('');
    return(
      <StoreList />
    )
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
