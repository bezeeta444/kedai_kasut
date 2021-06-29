import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB0rgwgYjQbmpsHafIdRVd2ORDtFKebw30",
        authDomain: "coffe-shop-itt.firebaseapp.com",
        databaseURL: "https://coffe-shop-itt-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "coffe-shop-itt",
        storageBucket: "coffe-shop-itt.appspot.com",
        messagingSenderId: "658755076220",
        appId: "1:658755076220:web:dcc4ae220aa2d8278c89f9",
        measurementId: "G-SG27WS77QN"
});

const auth = firebase.auth();

export { auth };
