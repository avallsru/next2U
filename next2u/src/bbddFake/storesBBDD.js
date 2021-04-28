export const storesBBDD = [
  {
    id: 1,
    name: 'GRA NOA',
    location: 'Carrer de Mossèn Andreu, 7, 08940 Cornellà de Llobregat, Barcelona',
    phone_contact: 607015701,
    deliver_option: 1,
    deliver_price: 1,
    score: 0,
    opening_hours: ['9-14 17-20:30'],
    minimum_price_order: 3,
    store_categories_id: [1],
    products: {
      10:[1,2,3,4,5,6],
      11:[7,8,9,10,11],
      12:[12,13,14],
      13:[15,16,17],
      14:[18,19,20,21],
      15:[22,23,24,25,26,27,28,29],
      16:[30,31,32,33,34,35],
      17:[36,37,38,39,40]}
  },
  {
    id: 2,
    name: 'La mongeta boja',
    location: 'Av. del Parc, 51, 08940 Cornellà de Llobregat, Barcelona',
    phone_contact: 615991809,
    deliver_option: 1,
    deliver_price: 0,
    score: 0,
    opening_hours: ['9-21'],
    minimum_price_order: 1.5,
    store_categories_id: [1],
    products: {}
  }
]