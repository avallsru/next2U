

const updateProdsById = (productToFind, productsInRedux) => {
  const keyProductToFind = Object.keys(productToFind)[0];
  for (let key in productsInRedux) {
    if(key === keyProductToFind) {
      productToFind[key].totalPrice = productToFind[key].priceUnit * productToFind[key].unitsSelected
      productsInRedux[key] = productToFind[key];
    }
  }
  const productsUpdated = {...productsInRedux, ...productToFind};
  return productsUpdated;
};

export default updateProdsById;