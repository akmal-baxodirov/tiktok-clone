import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAT9ftUmOvUzqxtWP2vRIbs_yaj6DsVQfc",
  authDomain: "tiktok-clone-baxodirov09.firebaseapp.com",
  databaseURL: "https://tiktok-clone-baxodirov09.firebaseio.com",
  projectId: "tiktok-clone-baxodirov09",
  storageBucket: "tiktok-clone-baxodirov09.appspot.com",
  messagingSenderId: "899465033537",
  appId: "1:899465033537:web:ac749c2d028bbbc9f993c0",
  measurementId: "G-KB4G23RX8E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;