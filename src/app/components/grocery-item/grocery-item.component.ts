import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import {faTimes, faPencil} from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent {
  //@ts-ignore
  @Input() grocery: Grocery;
  @Output() onDelete: EventEmitter<Grocery> = new EventEmitter();
  @Output() onUpdate: EventEmitter<Grocery> = new EventEmitter();
  faTimes = faTimes;
  faPencil = faPencil;
  showAddTask: boolean = true;

  constructor(private uiService: UiService) {}

  deleteItem(grocery: Grocery) {
    this.onDelete.emit(grocery);
  }

  updateItem(grocery: Grocery) {
    this.onUpdate.emit(grocery);
  }

  toggleAddGrocery() {
    this.showAddTask = this.uiService.toggleAddGrocery();
    // this.groceryColor = this.showAddTask ? 'blue' : 'green';
    // this.addGroceryText = this.showAddTask ? 'Close' : 'Add Grocery';
  }

}
