import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyDg_day2xdVPnZeTMBAZZgGTd_BQ9refIA",
  authDomain: "findsaleapp.firebaseapp.com",
  databaseURL: "https://findsaleapp.firebaseio.com",
  projectId: "findsaleapp",
  storageBucket: "findsaleapp.appspot.com",
  messagingSenderId: "689909021928",
  appId: "1:689909021928:web:3ac9ac8b090ff5795d1d5d",
  measurementId: "G-XD33S0T9G4"
};

export const app = Firebase.initializeApp(config);
export const db = app.database();
export const databasestorage = app.storage();
export const userRef = db.ref("Users");
export const codeRef = db.ref("Code");
export const PlaceOrderPostsPRef = db.ref("PlaceOrderPostsP");
export const PostsPRef = db.ref("PostsP");
export const SuccessProcessTruckRef = db.ref("SuccessProcessTruck");
export const TrashInfoTruckRef = db.ref("TrashInfoTruck");
