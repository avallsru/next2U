import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { API_KEY, API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

import { addStoresToCompare } from '../redux/actions/storesActions';

const storesToCompare = [];
const getStores = async (...args) => {
  const baseUrl = API_BASE_SEARCH_NEAR_STORES;
<<<<<<< HEAD
  const apiToCall = pageToken === '' 
    ? `${baseUrl}location=${lat},${lon}&radius=140&type=store&key=${API_KEY}`
    : `${baseUrl}location=${lat},${lon}&radius=140&type=store&pagetoken=${pageToken}&key=${API_KEY}`;
=======
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
>>>>>>> 40ce91fdc02e6d15c02997f208367b384f70f2da
  
  const results = await fetch(apiToCall);
  const fetchedResults = await results.json();
  for(let store of fetchedResults.results) {
    storesToCompare.push(store);
  }
  console.log(storesToCompare);
  
  const pageToken = fetchedResults['next_page_token'];

  if(pageToken) {
    await getStores(pageToken);
  }  
  return storesToCompare;
};

// getStores.propTypes = {
  
// };

export default getStores;