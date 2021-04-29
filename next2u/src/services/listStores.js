import firebase from 'firebase/app';
import 'firebase/firestore';

function getCollection(collection) {
  return firebase.firestore().collection(collection); // todos | profiles
}

function parseDocument(doc) {
  return {
    id: doc.id,
    ...doc.data()
  }
}

export async function listStores(collection, id) {
  try {
    let db = getCollection(collection);
    if (id) {
      db = db.where("store_categories_id", "array-contains", id);
    }
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })

    console.log(data);
    return data;
    
  } catch (error) {
    console.log("listStore -> error", error)
    return [];
  }
}