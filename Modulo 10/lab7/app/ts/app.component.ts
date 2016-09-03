
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/user.html'
})

export class AppComponent {
    id: any = '';
    firstname: any = '';
    lastname: any = '';
    phone: any = '';
    password: any = '';
    email: any = '';
}