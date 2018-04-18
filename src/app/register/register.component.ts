import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {User} from '../_models';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    modele: User ;
    confirmation = '';

    model = {
        Username : '',
        password: '',
        confirmPassword: ''
    };


    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register(model) {
        this.loading = true;
        this.userService.create(model.Username, model.password,  model.confirmPassword)
            .subscribe(
                data => {
                    console.log('je suis connecté');
                    console.log(data);
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
