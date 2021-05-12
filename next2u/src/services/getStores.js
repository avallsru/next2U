import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { API_KEY, API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

import { addStoresToCompare } from '../redux/actions/storesActions';
import getStoresNextPage from './getStoresNextPage';


const getStores = async (lat, lon) => {
  const baseUrl = API_BASE_SEARCH_NEAR_STORES;
  const apiToCall = `${baseUrl}nearest-stores?location=${lat},${lon}`;

  const results =  await fetch(apiToCall);
  const fetchedResults = await results.json();
  const pageToken = await fetchedResults['next_page_token'];

  const storesToCompare = [];

  for(let store of fetchedResults.results) {
    storesToCompare.push(store);
  }

  const returnedStores = await getStoresNextPage(pageToken);
  
  const finalList = storesToCompare.concat(returnedStores);
  console.log(finalList);
  

  
  return finalList;
};

// getStores.propTypes = {
  
// };

export default getStores;