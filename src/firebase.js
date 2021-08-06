import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoh86WObnRSMdRRGCp4gwtuPPJ_aq90iw",
    authDomain: "reactcoderhouse-7f091.firebaseapp.com",
    projectId: "reactcoderhouse-7f091",
    storageBucket: "reactcoderhouse-7f091.appspot.com",
    messagingSenderId: "220753727972",
    appId: "1:220753727972:web:5f43600a530ba6f5d477f1"
  };
  
 
  const app = firebase.initializeApp(firebaseConfig);

  export const getFirestore = () => {
      //Retorna el acceso al servicio firestore
      return firebase.firestore(app)
  }