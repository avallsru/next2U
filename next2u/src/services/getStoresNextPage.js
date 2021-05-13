import React from 'react';

import { API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

let storesToReturn = [];


const getStoresNextPage = async (pageToken) => {
  const baseUrl = API_BASE_SEARCH_NEAR_STORES;
  const apiToCall = `${baseUrl}nearest-stores/next?token=${pageToken}`;

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await sleep(1500);
  const results =  await fetch(apiToCall);
  const fetchedResults = await results.json();
  const newToken = fetchedResults['next_page_token'];

  for (let store of fetchedResults.results) {
    storesToReturn.push(store);
  }
  if(newToken) {
    await getStoresNextPage(newToken);

  }
  
  return storesToReturn;
  
};

export default getStoresNextPage;