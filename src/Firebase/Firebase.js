// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { passFire } from "../Resource/pass";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const AapiKey = passFire.apikey
const AauthDomain = passFire.authdomain
const AprojectId = passFire.projectid
const AstorageBucket = passFire.storagebucket
const AmessagingSenderId = passFire.messagingsenderid
const AappId = passFire.appid
const AmeasurementId = passFire.measurementid



const firebaseConfig = {
    apiKey: AapiKey,
    authDomain: AauthDomain,
    projectId: AprojectId,
    storageBucket: AstorageBucket,
    messagingSenderId: AmessagingSenderId,
    appId: AappId,
    measurementId: AmeasurementId
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export const Database = getFirestore(FirebaseApp);

export const auth = getAuth(FirebaseApp);
