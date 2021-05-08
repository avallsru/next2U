

const updateOrderPrice = (products) => {
  debugger;
  let priceToReturn = 0;
  for(let key in products) {
    priceToReturn = products[key].totalPrice + priceToReturn;
  }
  return priceToReturn;
};

export default updateOrderPrice;