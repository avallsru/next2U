

const updateOrderPrice = (products) => {
  let orderPrice = 0;
  let updatedList = {};
  for(const [key, value] of Object.entries(products)) {
    
    const unitPrice = value.priceUnit;
    const unitsSelected = value.unitsSelected;
    
    let productPrice =  unitPrice * unitsSelected;
    value.totalPrice = productPrice.toFixed(2);
    orderPrice = parseFloat(orderPrice) + productPrice;
    orderPrice = orderPrice.toFixed(2)

    Object.assign(updatedList, {[key]: value});
  }

  return {orderPrice, updatedList};
};

export default updateOrderPrice;