import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  serverUrl = 'http://localhost:8080'; // server url 
  constructor(private http: HttpClient) { }

  /**
   * @param data json
   * @output adds the category in db
   */
  addCategory(params){
    return this.http.post(this.serverUrl + '/api/catogeries/create',params);
  }

  /**
   * @param nill
   * @output gets the category list from db
   */
  getCategories(){
    return this.http.get(this.serverUrl + '/api/catogeries');
  }

    /**
   * @param id
   * @output deletes the category from db
   */
  deleteCategory(params){
    return this.http.delete(this.serverUrl + '/api/catogeries/'+params);
  }


  /**
   * @param data json
   * @output adds the product in db
   */
  addProduct(params){
    return this.http.post(this.serverUrl + '/api/products/add',params);
  }

    /**
   * @param nill
   * @output gets the product list from db
   */
  getProducts(params){
    return this.http.get(this.serverUrl + '/api/products/'+params);
  }
  
}
