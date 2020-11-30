import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0D6lfDLJRakLlw8bcCcMOdomvi-u4eJw",
    authDomain: "student-controller.firebaseapp.com",
    databaseURL: "https://student-controller.firebaseio.com",
    projectId: "student-controller",
    storageBucket: "student-controller.appspot.com",
    messagingSenderId: "154325389400",
    appId: "1:154325389400:web:f8c6221f689f2a1eb1fa2d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
