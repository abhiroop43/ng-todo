import {EventEmitter, Injectable, Output} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  @Output()
  userSignedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  isAuthenticated() {
    return this.token != null;
  }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          console.log('Successfully registered user', response);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.userSignedIn.emit(true);
                this.router.navigate(['/login']);
              }
            );
        }
      )
      .catch(
        (error) => {
          console.warn('Error occurred during signup', error);
        }
      );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          console.log('Successfully logged in user', response);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.userSignedIn.emit(true);
                this.router.navigate(['/list']);
              }
            );
        }
      )
      .catch(
        (error) => {
          console.warn('Error occurred during login', error);
        }
      );
  }

  logOut() {
    this.token = null;
    firebase.auth().signOut()
      .then(
        (response) => {
          this.userSignedIn.emit(false);
          console.log('User logged out successfully', response);
          this.router.navigate(['/']);
        }
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

}
