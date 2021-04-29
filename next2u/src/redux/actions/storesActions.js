import { STORES_TO_PRINT, STORES_SELECTED } from '../types';


function listToPrint(storesArr) {
  return {type: STORES_TO_PRINT, payload: storesArr}
}

function listSelectedStores(storesArr) {
  return {type: STORES_SELECTED, payload: storesArr}
}

export {
  listToPrint,
}