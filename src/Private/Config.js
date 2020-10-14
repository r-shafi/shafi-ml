import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDu-LWOaRleNlq74rPvO35T73eL5Oh-g2Y',
  authDomain: 'shafi-ml-5a8db.firebaseapp.com',
  databaseURL: 'https://shafi-ml-5a8db.firebaseio.com',
  projectId: 'shafi-ml-5a8db',
  storageBucket: 'shafi-ml-5a8db.appspot.com',
  messagingSenderId: '211836768789',
  appId: '1:211836768789:web:daa81c2fe3678962c6741c',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
