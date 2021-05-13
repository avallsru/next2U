import { listFromDb } from '../services';

const getNames = async(categoriesArr, kind) => {
  let categories = '';
  switch(kind) {
    case 'stores':
      categories = await listFromDb('stores_categories');
      break;
    case 'products_categories':
      categories = await listFromDb('product_categories');
      break;
    case 'products':
      categories = await listFromDb('products');
      break;
    default:
      break;
  }
  const categoriesName = [];
  
  categoriesArr.forEach((idToFind) => {
    const numId = typeof idToFind === 'string' ? parseInt(idToFind) : idToFind;
   
    const filteredByCat = categories.filter(
      (category) => {
        return (parseInt(category.id) === numId)    
      }  
    );
    // console.log(filteredByCat);
    filteredByCat.forEach((categoryObj) => {
      categoriesName.push(categoryObj.name);
    });
  });
  return kind === 'stores' ?  categoriesName.join(" ") : categoriesName;
}

export default getNames;