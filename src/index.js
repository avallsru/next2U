import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';

import reducers from './redux/reducers';
import { firebaseConfig } from './config';

import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp(firebaseConfig);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//FIREBASE IMPORT BBDD
// const admin = require('firebase-admin');
// const serviceAccount = require("./serviceAccountKey.json");
// const data = require("./data.json");
// const collectionKey = "stores"; //name of the collection
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://next2u-31408-default-rtdb.europe-west1.firebasedatabase.app/"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
// if (data && (typeof data === "object")) {
// Object.keys(data).forEach(docKey => {
//  firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
//     console.log("Document " + docKey + " successfully written!");
// }).catch((error) => {
//    console.error("Error writing document: ", error);
// });
// });
// }
