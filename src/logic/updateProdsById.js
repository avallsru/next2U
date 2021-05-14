
const updateProdsById = (productToFind, productsInRedux) => {
  const keyProductToFind = Object.keys(productToFind)[0];
  
  for (let key in productsInRedux) {
    if(key === keyProductToFind) {
      const priceWithMultipleDecimals = productToFind[key].priceUnit * productToFind[key].unitsSelected
      productToFind[key].totalPrice = priceWithMultipleDecimals.toFixed(2);
      productsInRedux[key] = productToFind[key];
    }
  }
  const productsUpdated = {...productsInRedux, ...productToFind};
  return productsUpdated;
};

export default updateProdsById;