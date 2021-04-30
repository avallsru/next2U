export default function listStoresToPrint(storesArr, idSelected) {
  debugger;
  const storesToPrint = storesArr.filter(store => {
    return store.store_categories_id.includes(idSelected)
  });
  
  return storesToPrint;
}