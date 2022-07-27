import { initializeApp } from "firebase/app";
import { collection, addDoc,} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBNUbhvNCyA6CubdzYpKouVlQzA5syRIX4",
    authDomain: "talent-innovation.firebaseapp.com",
    projectId: "talent-innovation",
    storageBucket: "talent-innovation.appspot.com",
    messagingSenderId: "264899276924",
    appId: "1:264899276924:web:d584a5450d3b8ec1f759f9"
  };

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export const addChat = (chat) => {
    return addDoc(collection(dataBase, 'chat'), chat);
};