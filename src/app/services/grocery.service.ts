import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Grocery } from '../grocery';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private api: string = 'http://localhost:5002/groceries';
  constructor(private htpp: HttpClient) { }

  getAllGroceries(): Observable<Grocery[]> {
    return this.htpp.get<Grocery[]>(this.api);
  }

  saveGrocery(grocery: Grocery): Observable<Grocery> {
    return this.htpp.post<Grocery>(this.api, grocery, httpOptions);
  }

  updateItem(grocery: Grocery): Observable<Grocery> {
    const url = `${this.api}/${grocery.id}`;
    return this.htpp.put<Grocery>(url, grocery, httpOptions);
  }

  deleteItem(grocery: Grocery) {
    const url = `${this.api}/${grocery.id}`;
    return this.htpp.delete<Grocery>(url);
  }

}
