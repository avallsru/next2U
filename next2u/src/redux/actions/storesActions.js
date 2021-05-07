import { 
  STORES_TO_PRINT, 
  STORES_SELECTED, 
  STORE_TO_DETAIL, 
  PRODUCTS_TO_PRINT, 
  RESET_PRODUCTS_TO_PRINT,
  UPDATE_PRODUCTS_TO_PRINT 
} from '../types';


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

function resetProductsToPrint() {
  return{type: RESET_PRODUCTS_TO_PRINT}
}

function updateProductsToPrint(idToFind, unitsSelected) {
  return{type: UPDATE_PRODUCTS_TO_PRINT, payload: {idToFind, unitsSelected}}
}
export {
  listToPrint,
  listSelectedStores,
  saveStoreToDetail,
  defineProductsToPrint,
  resetProductsToPrint,
  updateProductsToPrint
}