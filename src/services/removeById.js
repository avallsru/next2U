import 'firebase/firestore';
import firebase from 'firebase/app';

export async function removeObjectById(collection, id) {
  function getCollection(collection) {
    return firebase.firestore().collection(collection); // todos | profiles
  }

  try {
    const db = getCollection(collection);
    const obj = db.doc(id);
    await obj.delete();
    return true;
  } catch(error) {
    console.log("removeObjectById -> error", error)
    return false;
  }
}