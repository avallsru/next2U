import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { API_KEY, API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

import { addStoresToCompare } from '../redux/actions/storesActions';

const storesToCompare = [];
const getStores = async (...args) => {
  const baseUrl = API_BASE_SEARCH_NEAR_STORES;
  debugger;
  let lat, lon = 0;
  let apiToCall = '';

  if (args.length === 2) {
    lat = args[0];
    lon = args[1];
    apiToCall = `${baseUrl}nearest-stores?location=${lat},${lon}`;
  } else {
    const page = args[0];
    apiToCall = `${baseUrl}nearest-stores/next?token=${page}`;;
  }

  debugger;
  
  const results = await fetch(apiToCall);
  const fetchedResults = await results.json();
  for(let store of fetchedResults.results) {
    storesToCompare.push(store);
  }
  console.log(storesToCompare);
  
  const pageToken = fetchedResults['next_page_token'];
  if(pageToken) {
    getStores(pageToken);
  }  
  return (
    <div>
      
    </div>
  );
};

// getStores.propTypes = {
  
// };

export default getStores;