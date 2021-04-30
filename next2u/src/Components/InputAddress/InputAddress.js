import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAddressDetails, getStores, listStores } from "../../services";

import {
  setCoordinates,
  saveAddress,
} from "../../redux/actions/addressActions";

import "./InputAddress.scss";
import {
  listSelectedStores,
  listToPrint,
} from "../../redux/actions/storesActions";

const InputAdress = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [address, setAddress] = useState("");
  const [storesList, setStoresList] = useState([]);

  useEffect(() => {
    dispatch(setCoordinates(coords));
    dispatch(saveAddress(address));
    dispatch(listSelectedStores(storesList));
    dispatch(listToPrint(storesList));
  }, [coords, dispatch, address, storesList]);

  const handleChange = ({ target }) => {
    setAddress(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //GET THE COORDS
    // const {lat, lon, formatedAddress} = await getAddressDetails(address);
    // const result = await getStores({lat: 41.359620, lon: 2.076710});
    // console.log(result);

    //GET THE STORES THAT COINCIDE
    const storesToPrint = await listStores("stores");

    // setCoords({lat, lon});
    // setAddress(formatedAddress);
    setStoresList(storesToPrint);

    history.push("/stores_results");
  };

  return (
    <div className="inputAdress">
      <input
        type="text"
        onChange={handleChange}
        value={address}
        placeholder="Busca tu dirección"
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
  );
};

// InputAdress.propTypes = {

// };

export default InputAdress;
