import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';

import { getNames } from "../../../logic";

import "./CatsList.scss";

const CatsList = ({ list }) => {
  const [listToPrint, setListToPrint] = useState([]);
  const { productsToPrint } = useSelector((store) => store.storesReducer);


  useEffect(() => {
    getList();
  }, [productsToPrint]);

  const handleClick = (e, category, ref) => {
    // e.preventDefault();
    // debugger;
    // if(ref) {
    //   ref.scrollIntoView({behaviour: 'smooth'});
    // }
  };

  const getList = () => {
    // setListToPrint([]);
    const catsArr = productsToPrint.map((group) => {
      const catName = Object.keys(group).join();
      debugger;
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
    return <div className="categories-to-print">{listToPrint}</div>;
  }

  return <div className="categories-to-print">Loading...</div>;
};

// CatsList.propTypes = {

// };

export default CatsList;
