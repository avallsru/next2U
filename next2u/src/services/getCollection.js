import firebase from 'firebase/app';
import 'firebase/firestore';

function getCollection(collection) {
  return firebase.firestore().collection(collection); // todos | profiles
}

export default getCollection;