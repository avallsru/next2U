import React, { useEffect } from 'react';


import { listFromDb } from "../services";

const filterNearStores = async(storesArr) => {
  let bbddStores = await listFromDb('stores');
  let storesToPrint = bbddStores.filter(storeBbdd => {
    const bbddStoreRegEx = new RegExp(`(${storeBbdd.name})`, 'gi'); 
    debugger;
    return storesArr.some(store => store.name.match(bbddStoreRegEx))
    
  })
  return storesToPrint;
  
  
};

export default filterNearStores;