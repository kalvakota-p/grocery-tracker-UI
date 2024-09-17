import { Component } from '@angular/core';
import { AppConstantsService } from 'src/app/services/app-constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user: string = 'Phani';
  overview: string;
  groceriesText: string = 'Explore Groceries';
  groceriesColor: string = 'green';
  recentTransText: string = 'Recent Transaction';
  transColor: string = 'purple';
  monthlyExpenseText: string = 'Monthly Expense';
  monthlyExpenseColor: string = 'orange';

  constructor(private appConstants: AppConstantsService) {
    this.overview = appConstants.OVER_VIEW;
  }

}
