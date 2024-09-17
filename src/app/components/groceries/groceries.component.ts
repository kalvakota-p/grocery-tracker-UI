import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import { UiService } from 'src/app/services/ui.service';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  showAddTask: boolean = true;
  groceryColor: string = 'green';
  addGroceryText: string = 'Add Grocery';
  groceries: Grocery[] = [];

  constructor(private uiService: UiService,
    private groceryService: GroceryService
  ) {
  }
  ngOnInit(): void {
    this.groceryService.getAllGroceries().subscribe((groceries) => {
      this.groceries = groceries;
      console.log(this.groceries);
    });
  }

  toggleAddGrocery() {
    this.showAddTask = this.uiService.toggleAddGrocery();
    this.groceryColor = this.showAddTask ? 'blue' : 'green';
    this.addGroceryText = this.showAddTask ? 'Close' : 'Add Grocery';
  }

  addGrocery(grocery: Grocery) {
    this.groceryService.saveGrocery(grocery).subscribe(
      (grocery) => {
        this.groceries.push(grocery);
        alert('Grocery item added successfully');
      }
    );
  }

  deleteGroceryItem(grocery: Grocery) {
    this.groceryService.deleteItem(grocery).subscribe(() => {
      this.groceries = this.groceries.filter((g) => g.id !== grocery.id)
    });
  }

  updateGroceryItem(grocery: Grocery) {
    this.groceryService.updateItem(grocery);
  }

}
