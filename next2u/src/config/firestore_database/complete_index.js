const root = require("path").resolve(__dirname, "../../../"); // node => get directory path;
const { v4: uuidv4 } = require("uuid");

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./products.json");
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
    destination: `${fileName}`,
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