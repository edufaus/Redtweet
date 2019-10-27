var firebaseConfig = {
  apiKey: "AIzaSyDZkiV_5fbCfBK5hUUXRfPW8NtEILPS6wo",
  authDomain: "redtweet-2.firebaseapp.com",
  databaseURL: "https://redtweet-2.firebaseio.com",
  projectId: "redtweet-2",
  storageBucket: "redtweet-2.appspot.com",
  messagingSenderId: "1081793695696",
  appId: "1:1081793695696:web:84576b2c983dae4788f3d5",
  measurementId: "G-4J9TW7309K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
