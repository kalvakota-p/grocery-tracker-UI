import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit{
  //@ts-ignore
  item: string;
  //@ts-ignore
  quantity: string;
  //@ts-ignore
  price: string;
  //@ts-ignore
  date: string;
  //@ts-ignore
  store: string;
  
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onSubmit() {
    
  }

}
