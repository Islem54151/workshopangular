import { Component } from '@angular/core';
import { product } from '../core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  price!:number;
listProducts:product[]=[
  {id:1,title:'t-shirt 1',price:50,quantity:10,like:0,description:"test"},
  {id:2,title:'t-shirt 2',price:30,quantity:5,like:0,description:""},
  {id:3,title:'t-shirt 3',price:20,quantity:0,like:5,description:""}
]

increment(i:number){
this.listProducts[i].like++;
}
buy(i:number){
  this.listProducts[i].quantity--;

}
}
