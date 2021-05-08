const API_KEY=process.env.REACT_APP_API_KEY;

const API_BASE_SEARCH_NEAR_STORES=`https://location-google.herokuapp.com/`;
//To add: location=41.359620,2.076710&radius=140&type=store&pagetoken=${pageTokenFromResponseWhenNeeded}&key=${API_KEY}
//fields:name,opening_hours,rating,user_ratings_total,vicinity

const API_BASE_CONVERT_ADDRESS_TO_COORD=`https://maps.googleapis.com/maps/api/geocode/json?`;
//To add: address=Avinguda+del+Parc+57+Cornellà+de+llobregat&key=${API_KEY};
//fields=results>formated_adress,geometry>location

const STORAGE_BUCKET = process.env.STORAGE_BUCKET;

export {
  API_KEY,
  API_BASE_SEARCH_NEAR_STORES,
  API_BASE_CONVERT_ADDRESS_TO_COORD,
  STORAGE_BUCKET
}