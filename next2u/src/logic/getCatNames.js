

import getNames from './getNames';

const getCatNames = async (storeToPrint) => {
  //GET THE COMPLETE CATEGORIES LIST
  
  
  //FUNCTION THAT FILTER THE CATEGORIES OF A STORE AND GETS THE NAME
  

  // debugger;
  const catNames = getNames(storeToPrint['store_categories_id']);

  return catNames;
};

export default getCatNames;