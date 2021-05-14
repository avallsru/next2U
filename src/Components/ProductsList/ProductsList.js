import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from 'prop-types';

import { listFromDb } from "../../services";

import { getNames } from "../../logic";
import {
  defineProductsToPrint,
  resetProductsToPrint,
} from "../../redux/actions/storesActions";

import { ProductCards }from "../DetailCards";

import './ProductsList.scss';

const ProductsList = (props) => {
  const storeToDetail = useSelector(
    (store) => store.storesReducer.storeToDetail
  );
  const { product_list } = storeToDetail;
  const dispatch = useDispatch();

  const [productArr, setProductArr] = useState([]);

  useEffect(() => {
    getListToPrint();
    dispatch(resetProductsToPrint());
  }, []);

  useEffect(() => {
    dispatch(defineProductsToPrint(productArr));
  }, [productArr]);

  const getListToPrint = () => {
    const temporalListToPrint = product_list.map(async (product) => {
      //GET THE KEY NAME
      const temporalKey = await getNames(
        Object.keys(product),
        "products_categories"
      );
      let key = temporalKey[0];

      //GET THE VALUES ARR OBJECTS
      const temporalValuesArr = Object.values(product);

      const temporalValues = temporalValuesArr[0].map(async (productId) => {
        const filter = { field: "ID", condition: "==", value: productId };
        const productToPrint = await listFromDb("products", filter);
        return productToPrint[0];
      });
      Promise.all(temporalValues).then((results) => {
        const group = {
          products: results,
          ref: React.createRef()
        }
        
        setProductArr(...productArr, {[key]: group});
      });
    });
  };
  return (
    <div className="section-container">
      <div className="category-container"></div>
      <div className="products-container">
        <div>
          <ProductCards />
        </div>
      </div>
    </div>
  );
};

// ProductsList.propTypes = {

// };

export default ProductsList;
