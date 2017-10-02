import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  // isAuthenticated() {
  // }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          console.log('Successfully registered user', response);
          this.router.navigate(['/login']);
        }
      )
      .catch(
        (error) => {
          console.warn('Error occurred during signup', error);
        }
      );
  }

}
