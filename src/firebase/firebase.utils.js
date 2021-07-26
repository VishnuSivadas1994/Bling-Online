import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBMIL0PbXITJOkuq17iWRAqw0xt8tmwDHs",
    authDomain: "bling-db-15df0.firebaseapp.com",
    projectId: "bling-db-15df0",
    storageBucket: "bling-db-15df0.appspot.com",
    messagingSenderId: "675393395021",
    appId: "1:675393395021:web:beb8407bc97d6ff2d0ff04",
    measurementId: "G-G0PGTT7LFC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error);
        }
    }

    return userRef;


};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;