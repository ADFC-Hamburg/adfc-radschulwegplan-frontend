import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        //let basepath='https://radschulwegplan.hamburg.adfc.de/backend/master/';
        //let basepath='http://localhost:8000';
        let basepath='https://radschulwegplan.hamburg.adfc.de/backend/feature_json_login';
        
        return this.http.post<any>(basepath+'/api/v1/login', { 'username': username, 'password': password })
            .map(username => {
                // login successful if there's a jwt token in the response
                if (username) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', username);
                }

                return username;
            });
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
