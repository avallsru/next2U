import { STORES_TO_PRINT, STORES_SELECTED, STORE_TO_DETAIL, PRODUCTS_TO_PRINT } from '../types';


function listToPrint(storesArr) {
  return {type: STORES_TO_PRINT, payload: storesArr}
}

function listSelectedStores(storesArr) {
  return {type: STORES_SELECTED, payload: storesArr}
}

function saveStoreToDetail(store) {
  return {type: STORE_TO_DETAIL, payload: store}
}

function defineProductsToPrint(productsArr) {
  return{type: PRODUCTS_TO_PRINT, payload: productsArr}
}
export {
  listToPrint,
  listSelectedStores,
  saveStoreToDetail,
  defineProductsToPrint
}