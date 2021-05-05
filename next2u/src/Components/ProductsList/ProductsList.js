import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import {getNames} from '../../logic';
import { listFromDb } from '../../services';
import { ProductCard } from '../DetailCards';

const ProductsList = props => {
  const {product_list} = useSelector(store => store.storesReducer.storeToDetail);
  const [valuesArr, setTemporalValuesArr] = useState([]);
  const [keyName, setKeyName] = useState([]);
  const [componentsList, setComponentsList] = useState('');
  const [productArr, setProductArr] = useState([]);



  useEffect(() => {
    getListToPrint();
    
  }, []);

  // useEffect(() => {
  //   console.log(valuesArr)
  // }, [valuesArr])
  
  const getListToPrint = () => {

    const temporalListToPrint = product_list.map(async(product) => {
      //GET THE KEY NAME
      const temporalKey = await getNames(Object.keys(product), 'products_categories');
      
      //GET THE VALUES ARR OBJECTS
      const temporalValuesArr = Object.values(product);
      
      const temporalValues = temporalValuesArr[0].map( async (productId) => {
        const filter = {field: 'ID', condition: '==', value: productId};
        const productToPrint = await listFromDb('products', filter);
        return productToPrint[0];
     })
    //  setTemporalValuesArr(...valuesArr, temporalValues);
     Promise.all(temporalValues).then((results) => {
      setProductArr(...productArr, {[temporalKey[0]]: results})
      
     })
     
     
  })
  }  
    return (
      <div className="section-container">
        <div className="category-container">
        </div>
        <div className="products-container">
        <div>  
            <ProductCard catList={productArr}/>
          </div>
          {/* <ProductCard /> */}
        </div>
      </div>
      
    )
  
};

// ProductsList.propTypes = {
  
// };

export default ProductsList;