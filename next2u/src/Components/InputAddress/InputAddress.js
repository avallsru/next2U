import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { listFromDb, getAddressDetails, getStores } from "../../services";

import { getNames } from "../../logic";

import { setCoordinates, saveAddress } from "../../redux/actions/addressActions";
import { listSelectedStores, listToPrint } from "../../redux/actions/storesActions";

import "./InputAddress.scss";

const InputAdress = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addressSearchedBefore = localStorage.getItem('address');
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [address, setAddress] = useState(addressSearchedBefore);
  const [storesList, setStoresList] = useState([]);

  

  useEffect(() => {
    dispatch(setCoordinates(coords));
    dispatch(saveAddress(address));
    dispatch(listSelectedStores(storesList));
    dispatch(listToPrint(storesList));

    
  }, [coords, dispatch, address, storesList]);

  const addCatNames =  (selectedStores) => {
    const listWithCatNames = selectedStores.map(async(store) => {
      
      const catNames = await getNames(store['store_categories_id'], 'stores');
      
      
      store['store_categories_names'] = catNames;
      const storeToSave = storesList.push(listWithCatNames);

      setStoresList(storeToSave);
    });

    
  }


  const handleChange = ({ target }) => {
    setAddress(target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('address', address, JSON.stringify(address));

    //GET THE COORDS
    debugger;
    const {lat, lon, formatedAddress} = await getAddressDetails(address);
    const result = await getStores(lat, lon);
    // console.log(result);

    // //GET THE STORES THAT COINCIDE
    // const storesToPrint = await listFromDb("stores");

    // setCoords({lat, lon});
    // setAddress(formatedAddress);
    // addCatNames(storesToPrint);
    // setStoresList(storesToPrint);
    // dispatch(listToPrint(storesList));
    
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
