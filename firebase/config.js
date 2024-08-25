const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // optional
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { admin, db, storage };
