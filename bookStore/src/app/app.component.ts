import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookStore';
constructor() {
  const firebaseConfig = {
    apiKey: "AIzaSyDGrLHnJGQtDfHLwkxKp450CdurE8AYmQw",
    authDomain: "bookstrore-49cd6.firebaseapp.com",
    databaseURL: "https://bookstrore-49cd6.firebaseio.com",
    projectId: "bookstrore-49cd6",
    storageBucket: "bookstrore-49cd6.appspot.com",
    messagingSenderId: "837513602585",
    appId: "1:837513602585:web:d3f1e78da2f3017da56c88",
    measurementId: "G-XQHMYGHHNJ"
  };
  firebase.initializeApp(firebaseConfig);

}

}
