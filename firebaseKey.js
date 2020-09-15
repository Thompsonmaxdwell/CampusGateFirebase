var firebaseConfig = {
    apiKey: "AIzaSyDinPeoJiPEaNPD61yHDqLEFmftO38ZoCU",
    authDomain: "campus-gate.firebaseapp.com",
    databaseURL: "https://campus-gate.firebaseio.com",
    projectId: "campus-gate",
    storageBucket: "campus-gate.appspot.com",
    messagingSenderId: "989593178144",
    appId: "1:989593178144:web:26bb3423b4e6568b9a6c45",
    measurementId: "G-T434PJYZZZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   let database = firebase.firestore();
   let auth = firebase.auth();
   export  {database, auth};
