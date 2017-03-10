import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

//Firebase configuration
const config = {
  apiKey: 'AIzaSyA0ZIRezq489UA7E-7qrzClHGXROVGmEZY',
  authDomain: "reactapp-1fb24.firebaseapp.com",
  databaseURL: "https://reactapp-1fb24.firebaseio.com",
  storageBucket: "reactapp-1fb24.appspot.com",
  messagingSenderId: "383896438759"
}

export default class SettingsStore extends MobxFirebaseStore {

  constructor(){
    firebase.initializeApp(config);
    super(firebase.database().ref())
    this.splashTime = 5000;
    this.splashImage = require('../../images/splash.jpg');
  }

  get SplashTime(){
    return this.splashTime;
  }

  get SplashImage(){
    return this.splashImage;
  }
}
