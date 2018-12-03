import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    title = 'Bei Radschulwegplan anmelden!';
    username: string;
    password: string;
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        // private alertService: AlertService
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login () {
        this.loading = true;
/*        if (this.authenticationService.login(this.username, this.password)) {
            this.router.navigate([this.returnUrl]);
        }*/
        this.authenticationService.login(this.username, this.password).subscribe(
            data => {
                this.router.navigate([this.returnUrl]);

            },
            error => {
                /* this.alertService.error(error);*/
                console.log(error);
                this.loading = false;
            });
    }

}
