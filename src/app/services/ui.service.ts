import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddGrocery: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddGrocery(): boolean {
    this.showAddGrocery = !this.showAddGrocery;
    this.subject.next(this.showAddGrocery);
    return this.showAddGrocery;
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
