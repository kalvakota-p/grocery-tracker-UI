import { Component, NgModule } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { RecentTransactionComponent } from './components/recent-transaction/recent-transaction.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonthlyExpenseComponent } from './components/monthly-expense/monthly-expense.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { AddGroceryComponent } from './components/add-grocery/add-grocery.component';
import { GroceryItemComponent } from './components/grocery-item/grocery-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [{ path: '', component: HomeComponent },
{ path: 'groceries', component: GroceriesComponent },
{ path: 'addExpense', component: AddExpenseComponent },
{ path: 'recentTransaction', component: RecentTransactionComponent },
{ path: 'monthlyExpense', component: MonthlyExpenseComponent }];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddExpenseComponent,
    RecentTransactionComponent,
    HeaderComponent,
    FooterComponent,
    MonthlyExpenseComponent,
    GroceriesComponent,
    AddGroceryComponent,
    GroceryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
