

const updateProdsById = (productToFind, productsInRedux) => {
  const keyProductToFind = Object.keys(productToFind)[0];
  for (let key in productsInRedux) {
    if(key === keyProductToFind) {
      productsInRedux[key] = productToFind[key];
      debugger;
      return productsInRedux;
    }
  }
  const productsUpdated = {...productsInRedux, ...productToFind};
  return productsUpdated;
};

export default updateProdsById;