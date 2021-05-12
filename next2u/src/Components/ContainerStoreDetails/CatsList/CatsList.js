import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types';

import { getNames } from "../../../logic";
import { updateCategoriesActivation } from "../../../redux/actions/hocsActions";

import "./CatsList.scss";

const CatsList = ({ list }) => {
  const dispatch = useDispatch();

  const [listToPrint, setListToPrint] = useState([]);
  const { productsToPrint } = useSelector((store) => store.storesReducer);
  const { categoriesActivation } = useSelector((store) => store.hocsReducer);


  useEffect(() => {
    getList();
  }, [productsToPrint]);

  const handleClick = (e, category, ref) => {
    dispatch(updateCategoriesActivation(false));
    e.preventDefault();

    if(ref) {
      ref.current.scrollIntoView({behaviour: 'smooth', block:"center"});
    }
  };

  const getList = () => {
    // setListToPrint([]);
    const catsArr = productsToPrint.map((group) => {
      const catName = Object.keys(group).join();
      return (
        <div 
          key={Math.random()*Date.now()} 
          onClick={(e) => handleClick(e, catName, group[catName].ref)}
        >
          {catName}
        </div>
      )
    });
    setListToPrint(catsArr);
  };

  if (listToPrint !== []) {
    return <div 
    className={categoriesActivation ? 
      "categories-to-print visible" 
      : "categories-to-print hidden"}
    >
      {listToPrint}
    </div>;
  }

  return <div className="categories-to-print">Loading...</div>;
};

// CatsList.propTypes = {

// };

export default CatsList;
