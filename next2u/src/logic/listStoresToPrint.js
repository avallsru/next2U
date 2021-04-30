export default function listStoresToPrint(storesArr, toSearch, kind) {
  const regexToFind = new RegExp(`(?:${toSearch})`, 'gi');
  console.log(regexToFind);
  const storesToPrint = storesArr.filter(store => {
    if (kind === 'byName') {
      return  regexToFind.test(store.name);
    }
    return store.store_categories_id.includes(toSearch);
  });
  
  return storesToPrint;
}