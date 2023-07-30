import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  dat:any[]=[];
  user:Product={
    'createdAt':'',
    'product_name':'',
     'product_image':'',
     'product_type':'',
     'cost':'',
     'description':'',
     'product_material':'',
     'product':'',
     'id':''
  }
  constructor(public product: ProductService) { }
  Subscription: Subscription = new Subscription();
  addProduct(){
    this.product.addProductList(this.user).subscribe(
      {
        error: (Error:any) => {
          console.log(Error);
        }, 
      }
      );
    document.write('successfully inserted');
  }

Read(productId: string) {
  console.log(productId)
  this.product.readProduct(productId).subscribe(
    (data) => {
      this.user=data;
    }
  );
}


Delete(productId: string) {
  console.log(productId)
  this.product.deleteProduct(productId).subscribe(
    {
      error: (Error:any) => {
        console.log(Error);
      }, 
    }
    );
  document.write('successfully deleted');
}


update(){
  this.Subscription=this.product.updateProducts(this.user.id,this.user).subscribe(
    (data:any)=>{
      if(data){
        document.write("updated successfully");

      }
      else{
        console.log("can't update");
      }
    }
  )
  console.log(this.user);
}

}
