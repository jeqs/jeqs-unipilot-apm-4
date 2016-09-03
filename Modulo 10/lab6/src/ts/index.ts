'use strict';

import { Component } from 'angular2/core';

// Decorador
@Component({ // Como funcionaba Routes en Angular 1
    selector: 'product-tag',
    templateUrl: 'src/templates/product.html'
})

export class Product { //Controlador de Angular 1
	id = '';
    name = '';
    type = '';
    price = '';
    quantity = '';
}