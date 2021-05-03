export default function listStoresToPrint(storesArr, toSearch, kind) {
  const regexToFind = new RegExp(`(?:${toSearch})`, 'gi');
  const storesToPrint = storesArr.filter(store => {
    if (kind === 'byName') {
      return  regexToFind.test(store.name);
    }
    const idToSearch = parseInt(toSearch) + 1;
    return store.store_categories_id.includes(idToSearch);
  });
  
  return storesToPrint;
}