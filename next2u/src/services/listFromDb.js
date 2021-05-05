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

export async function listFromDb(collection, filter) {
  try {
    let db = getCollection(collection);
    // console.log(db);
    if (filter) {
      db = db.where(filter.field, filter.condition, filter.value);
    } 
    const querySnapshot = await db.get();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    })
    return data;
    
  } catch (error) {
    console.log("listStore -> error", error)
    return [];
  }
}