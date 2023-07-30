import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product ,Read} from './add/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });

  private url='https://64a686f7096b3f0fcc7ff71c.mockapi.io/sample-angular-app/products';

  loadProductList(){
    return this.http.get<any>('https://64a686f7096b3f0fcc7ff71c.mockapi.io/sample-angular-app/products');
  }

  addProductList(details:Product){
    return this.http.post<any>('https://64a686f7096b3f0fcc7ff71c.mockapi.io/sample-angular-app/products',details,{headers:this.headers});

  }

  updateProducts(id: string, Details: Product) {
    return this.http.put(`${this.url}/${id}`, Details, {
      headers: this.headers,
    });
  }
  readProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }
  deleteProduct(id:string){
    return this.http.delete<any>(`${this.url}/${id}`);
  }

}
