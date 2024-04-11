// import admin from "firebase-admin";
// import serviceAccount from "./mahjong-server-firebase-adminsdk.json" assert { "type": "json" };
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { getApp } from "firebase/app";
// const firebaseFunction = {};

// // const storage = getStorage(admin, "gs://mahjong-server.appspot.com");
// firebaseFunction.admin = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   storageBucket: "gs://mahjong-server.appspot.com",
// });

// firebaseFunction.getDownloadURL(code) = function getDownloadURL(code) {
//   // getDownloadURL(ref(storage, code + ".png"))
//   // .then((url) => {
//   //   // This can be downloaded directly:
//   //   const xhr = new XMLHttpRequest();
//   //   xhr.responseType = "blob";
//   //   xhr.onload = (event) => {
//   //     const blob = xhr.response;
//   //   };
//   //   xhr.open("GET", url);
//   //   xhr.send();
//   //   res.status(200).send(url);
//   // })
//   // .catch((error) => {
//   //   // Handle any errors
//   // });
//   console.log(code);
// };
// export default firebaseFunction;
