import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types';

import { listStoresToPrint } from "../../logic";

import "./StoreCatCard.scss";

const StoreCatCard = ({ cat }) => {
  const dispatch = useDispatch();

  const [storesList, setStoresList] = useState([]);

  const { name, img, id } = cat;
  const imgRoute = `assets/img/${img}`;
  const { storesReducer } = useSelector((store) => store);

  const handleClick = (e) => {
    const storesNearAddress = storesReducer.storesNearAddress;
    console.log(storesNearAddress);
    const listToPrint = listStoresToPrint(storesNearAddress, id);
    setStoresList(listToPrint);
    dispatch(listToPrint(storesList));
  };

  const handleHover = (e) => {
    e.target.style = "cursor: pointer";
  };

  const altText = `${name} icon`;
  return (
    <div
      className="container card-store-cat"
      name={name}
      onClick={handleClick}
      onMouseOver={handleHover}
    >
      <img src={imgRoute} alt={altText} className="img card-store-cat" />
      <div className="name card-store-cat">{name}</div>
    </div>
  );
};

// StoreCatCard.propTypes = {

// };

export default StoreCatCard;
