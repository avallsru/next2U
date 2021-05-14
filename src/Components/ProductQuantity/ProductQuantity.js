import React from "react";
import { useDispatch } from "react-redux";

import { updateProductsToPrint } from "../../redux/actions/storesActions";

import "./ProductQuantity.scss";

const ProductQuantity = ({ unitsAvailable, unitsSelected, idValue }) => {
  const dispatch = useDispatch();
  const updateQuantity = (
    { target },
    unitsAvailable,
    unitsSelected,
    idValue
  ) => {
    if (
      target.value === "+" &&
      unitsSelected < unitsAvailable &&
      unitsSelected >= 0
    ) {
      const updatedQuantity = unitsSelected + 1;
      dispatch(updateProductsToPrint(idValue, updatedQuantity));
    } else if (target.value === "-" && unitsSelected > 0) {
      const updatedQuantity = unitsSelected - 1;
      dispatch(updateProductsToPrint(idValue, updatedQuantity));
    }
  };

  return (
    <div className="quantity-container">
      <div className="quantity">{unitsSelected}</div>
      <div className="quantity-buttons container" id="first-buttons-with-border">
      <button
        className="update-quantity button"
        onClick={(e) =>
          updateQuantity(e, unitsAvailable, unitsSelected, idValue)
        }
        value="+"
      >
        +
      </button>
      <button
        className="update-quantity button"
        onClick={(e) =>
          updateQuantity(e, unitsAvailable, unitsSelected, idValue)
        }
        value="-"
      >
        -
      </button>      
      
      </div>
      
        
    </div>
  );
};

export default ProductQuantity;
