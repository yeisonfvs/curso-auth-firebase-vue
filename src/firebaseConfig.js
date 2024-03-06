import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBSEYEhyEKCYQSJER3no7ilqwFxQAs75Dk',
  authDomain: 'my-first-project-vue-3.firebaseapp.com',
  projectId: 'my-first-project-vue-3',
  storageBucket: 'my-first-project-vue-3.appspot.com',
  messagingSenderId: '550830151101',
  appId: '1:550830151101:web:fb8c91cf1559c3c8b2eed4',
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };