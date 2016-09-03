'use strict';

class User {
    id: number;
    firstname: string;
    lastname: string;
    phone: number;
    password: string;
    email: string;

    constructor(_id: number, _firstname: string, _lastname: string, _phone : number, _password : string, _email : string){
        this.id = _id;
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.phone = _phone
        this.password = _password;
        this.email = _email;
    }

    setId(_id:number):void {
        this.id = _id;
    }

    getId() {
        return this.id;
    }
}

class Product {
    id: number;
    name: string;
    type: string;
    price: number;
    quantity: number;

    constructor(_id: number, _name: string, _type: string, _price : number, _quantity : number){
        this.id = _id;
        this.name = _name;
        this.type = _type;
        this.price = _price
        this.quantity = _quantity;
    }
}

class Admin extends User {
    constructor(){
        super(1, 'Jose', 'Quispe', 6698750, '123', 'jeqs.quispe@gmail.com');
    }
}

class Smartphone extends Product {
    constructor(){
        super(1, 'iPhone', 'Smartphone', 6698750, 123);
    }
}

var admin = new Admin();
var smartphone = new Smartphone();

admin.setId(20);
console.log(admin.getId());

console.log(admin);
console.log(smartphone);
