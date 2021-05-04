import { listFromDb } from '../services';

const getCatNames = async (storeToPrint) => {
  //GET THE COMPLETE CATEGORIES LIST
  const categories = await listFromDb('stores_categories');
  
  //FUNCTION THAT FILTER THE CATEGORIES OF A STORE AND GETS THE NAME
  const getNames = (categoriesArr) => {
    const categoriesName = [];
    categoriesArr.forEach((idToFind) => {
      const filteredByCat = categories.filter(
        (category) => (parseInt(category.id) + 1) === idToFind
      );
      filteredByCat.forEach((categoryObj) => {
        categoriesName.push(categoryObj.name);
      });
    });
    return categoriesName.join(" ");
  }

  // debugger;
  const catNames = getNames(storeToPrint['store_categories_id']);

  return catNames;
};

export default getCatNames;