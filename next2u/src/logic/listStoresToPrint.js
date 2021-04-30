export default function listStoresToPrint(storesArr, toSearch, kind) {
  const regexToFind = new RegExp(`/(?:${toSearch})/gi`);
  console.log(regexToFind);
  const storesToPrint = storesArr.filter(store => {
    if (kind === 'byName') {
      console.log(store.name.match(regexToFind));
      return store.name.match(regexToFind);
    }
    return store.store_categories_id.includes(toSearch);
  });
  
  return storesToPrint;
}