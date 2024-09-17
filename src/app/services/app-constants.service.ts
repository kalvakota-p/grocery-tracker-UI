import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  constructor() { }

  public OVER_VIEW = 'The grocery tracker app is designed to help users track and organize the grocery expenses by recording each purchase and categorizing them. It provides a clear view of spending patterns, making it easier to understand grocery costs over time.';

}
