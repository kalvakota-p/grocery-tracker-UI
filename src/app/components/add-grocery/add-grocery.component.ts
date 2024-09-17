import { Component, Output, EventEmitter } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent {
  @Output() onAddGrocery: EventEmitter<Grocery> = new EventEmitter();
  item: any;
  quantity: any;
  price: any;
  date: any;
  store: any;
  showAddGrocery: boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => this.showAddGrocery = value);
  }

  onSubmit() {
    if(!this.item){
      alert('please enter item details');
      return;
    }
    const grocery = {
      item: this.item,
      quantity: this.quantity,
      price: this.price,
      date: this.date,
      store: this.store
    }
    this.onAddGrocery.emit(grocery);
    this.item = '';
    this.quantity = '';
    this.price = '';
    this.date = '';
    this.store = '';
  }

}
