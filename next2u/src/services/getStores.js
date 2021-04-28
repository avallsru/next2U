import React from 'react';
// import PropTypes from 'prop-types';

import { API_KEY, API_BASE_SEARCH_NEAR_STORES } from '../const/constants';

// location=41.359620,2.076710&radius=140&type=store&pagetoken=${pageTokenFromResponseWhenNeeded}&key=${API_KEY}
const getStores = async ({lat, lon}, page = '') => {
  let pageToken = page;

  const baseUrl = API_BASE_SEARCH_NEAR_STORES;
  const apiToCall = pageToken === '' 
    ? `${baseUrl}location=${lat},${lon}&radius=140&type=store&key=${API_KEY}`
    : `${baseUrl}location=${lat},${lon}&radius=140&type=store&pagetoken=${pageToken}&key=${API_KEY}`;
  debugger;
  
  const results = await fetch(apiToCall);
  const fetchedResults = await results.json();
  console.log(fetchedResults);
  
  pageToken = fetchedResults['next_page_token'];
  console.log(pageToken);  
  return (
    <div>
      
    </div>
  );
};

// getStores.propTypes = {
  
// };

export default getStores;