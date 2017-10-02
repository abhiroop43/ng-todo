import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTG7Hh0pqkfTbJ2_kYb-ZAecTg0hKjJ5Y',
      authDomain: 'ng-todoapp-9c449.firebaseapp.com'
    });
  }
}
