export const firebaseConfig = {
  data: {
    apiKey: 'AIzaSyA-FKUgTuOhGiZ86WIN-wZ4a6_RK24nsUQ',
    authDomain: 'labul-b362c.firebaseapp.com',
    projectId: 'labul-b362c',
    storageBucket: 'labul-b362c.appspot.com',
    messagingSenderId: '555389901225',
    appId: '1:555389901225:web:b59820563fe5a3dd710cb8',
    measurementId: 'G-Z21P0XG9FY',
  },
};
import fb from 'firebase/app';
export const firebase = !fb.apps.length
  ? fb.initializeApp({
      apiKey: 'AIzaSyA-FKUgTuOhGiZ86WIN-wZ4a6_RK24nsUQ',
      authDomain: 'labul-b362c.firebaseapp.com',
      projectId: 'labul-b362c',
      storageBucket: 'labul-b362c.appspot.com',
      messagingSenderId: '555389901225',
      appId: '1:555389901225:web:b59820563fe5a3dd710cb8',
      measurementId: 'G-Z21P0XG9FY',
    })
  : fb.app();

// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyA-FKUgTuOhGiZ86WIN-wZ4a6_RK24nsUQ",
//     authDomain: "labul-b362c.firebaseapp.com",
//     projectId: "labul-b362c",
//     storageBucket: "labul-b362c.appspot.com",
//     messagingSenderId: "555389901225",
//     appId: "1:555389901225:web:b59820563fe5a3dd710cb8",
//     measurementId: "G-Z21P0XG9FY"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script
