'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    function User(_firstname, _lastname, _phone, _password) {
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.phone = _phone;
        this.password = _password;
    }
    return User;
}());
var Product = (function () {
    function Product(_name, _type, _price, _quantity) {
        this.name = _name;
        this.type = _type;
        this.price = _price;
        this.quantity = _quantity;
    }
    return Product;
}());
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        _super.call(this, 'Jose', 'Quispe', 6698750, '123');
    }
    return Admin;
}(User));
var Smartphone = (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone() {
        _super.call(this, 'iPhone', 'Smartphone', 6698750, 123);
    }
    return Smartphone;
}(Product));
var admin = new Admin();
var smartphone = new Smartphone();
console.log(admin);
console.log(smartphone);
