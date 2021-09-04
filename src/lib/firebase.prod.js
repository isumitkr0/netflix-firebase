import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';
// firebase Config
const config = {

    apiKey: "AIzaSyAazjuaXhZ0-yq3GHdUwaneuobl47I8u3A",

    authDomain: "netfilx-sum8it.firebaseapp.com",

    projectId: "netfilx-sum8it",

    storageBucket: "netfilx-sum8it.appspot.com",

    messagingSenderId: "313683133974",

    appId: "1:313683133974:web:c30c09975f8437e0809737"

};


const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };