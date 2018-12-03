
import {map,  tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        // let basepath='https://radschulwegplan.hamburg.adfc.de/backend/master/';
        // let basepath='http://localhost:8000';
        const basepath = 'https://radschulwegplan.hamburg.adfc.de/backend/feature_json_login';

        return this.http.post<any>(basepath + '/api/v1/login', { 'username': username, 'password': password }).pipe(
            map(usernameParm => {
                // login successful if there's a jwt token in the response
                if (usernameParm) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', usernameParm);
                }

                return usernameParm;
            }));

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
