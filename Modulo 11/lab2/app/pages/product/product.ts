import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductServices } from '../../providers/product/product';

@Component({
  templateUrl: 'build/pages/product/product.html'
})
export class ProductPage {

	public list;

  constructor(private navCtrl: NavController, private productServices: ProductServices){
  }

  getProduct(){
  	this.productServices.getProducts().subscribe(
	  		list => { this.list = list},
	  		err => {
	  			alert(err);
	 });
  }

}
