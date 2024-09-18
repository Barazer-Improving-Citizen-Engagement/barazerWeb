import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { } from 'firebase/analytics';
// Authentication for Web
// import { } from 'firebase/auth';
// Cloud Firestore for Web
// import { } from 'firebase/firestore';
// Cloud Functions for Web
// import { } from 'firebase/functions';
// Cloud Messaging for Web
// import { } from 'firebase/messaging';
// Cloud Storage for Web
// import { } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password);

export const login = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();
