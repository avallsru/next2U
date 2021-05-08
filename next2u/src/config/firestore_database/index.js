const root = require("path").resolve(__dirname, "../../../"); // node => get directory path;
const { v4: uuidv4 } = require("uuid");

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./products_complete.json");
const collectionKey = "products"; //name of the collection

const STORAGE_BUCKET = 'next2u-31408.appspot.com'; // storage bucket from firebase project settings
const FIREBASE_STORE_API_BASE = "https://firebasestorage.googleapis.com/v0/b";
const STORAGE_URI = `${FIREBASE_STORE_API_BASE}/${STORAGE_BUCKET}/o/`;

// sdk initializeApp
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: STORAGE_BUCKET, 
});
// =================

const firestore = admin.firestore(); // db
const storage = admin.storage(); // storage service

// =============

function uploadToFireBase() {
  const documents = Object.values(data);

  const uploadsArr = documents.map((doc) => {
    // Returns an array of Promise
    if (doc.photo) {
      return uploadFile(doc.photo); // async => <Promise>
    }

    return null;
  });

  Promise.all(uploadsArr).then((bucketResponse) => {
    documents.forEach((doc, index) => {
      const url = getDocumentUrl(bucketResponse[index]);

      const docWithImg = {
        ...doc,
        url,
      };

      firestore
        .collection(collectionKey)
        .doc(String(index))
        .set(docWithImg)
        .then((res) => {
          console.log("Document " + index + " successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    });
  });
}

function getDocumentUrl(bucketData) {
  if (!bucketData) return "";

  const [, storageObjc] = bucketData;

  const {
    name,
    metadata: { firebaseStorageDownloadTokens },
  } = storageObjc;

  return `${STORAGE_URI}${name}?alt=media&token=${firebaseStorageDownloadTokens}`;
}

async function uploadFile(fileName) {
  const imgPath = `${root}/public/assets/img/${fileName}`;

  const uploadResponse = await storage.bucket().upload(imgPath, {
    gzip: true,
    destination: `products/${fileName}`,
    metadata: {
      cacheControl: "public, max-age=31536000",
      metadata: {
        firebaseStorageDownloadTokens: uuidv4(),
      },
    },
  });

  console.log("result", Object.entries(uploadResponse));
  return uploadResponse; // [{File}, {StorageData}]
}

uploadToFireBase();


// https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores_v2%2F1.jpg?alt=media&token=5280340e-16da-410f-9249-bf926fae2c75
// https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores_v2/1.jpg?alt=media&token=5280340e-16da-410f-9249-bf926fae2c75

// 'https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores%2F1.jpg?alt=media&token=f23a3f3a-79e9-4c76-bf2d-d7d6b5d228fe'
// 'https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores%2F1.jpg?alt=media&token=7d62c60b-c98e-4d0e-ad48-06bbc442a6ce'

// 'https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores%2F2.jpg?alt=media&token=9d5e8d24-57cc-4808-bdb8-a88eab6687ec'
// 'https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores%2F2.jpg?alt=media&token=8005f293-e2cf-44f2-b759-debf84fc51d5'

// 'https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/storesstores/2.jpg?alt=media&token=5cf893b2-712e-4e63-b3f5-0588735e48c6'
// 'https://firebasestorage.googleapis.com/v0/b/next2u-31408.appspot.com/o/stores%2F2.jpg?alt=media&token=5cf893b2-712e-4e63-b3f5-0588735e48c6'


