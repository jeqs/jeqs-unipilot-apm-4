import { Component } from 'angular2/core';

// Decorador
@Component({ // Como funcionaba Routes en Angular 1
    selector: 'tag-index',
    templateUrl: 'src/templates/home.html'
})

export class Hello { //Controlador de Angular 1
    my_name = '';
}