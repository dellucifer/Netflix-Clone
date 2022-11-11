import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdgIJ4hcEODs9xBhAqSJ00j5av2zkrsIc",
    authDomain: "netflix-clone-dd636.firebaseapp.com",
    projectId: "netflix-clone-dd636",
    storageBucket: "netflix-clone-dd636.appspot.com",
    messagingSenderId: "811172503772",
    appId: "1:811172503772:web:3f33ab15280f5ebf285419"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;