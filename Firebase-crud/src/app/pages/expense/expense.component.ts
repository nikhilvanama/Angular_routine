import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ExpenseService } from '../../core/services/expense.service';
import { IExpense } from '../../core/models/common.model';

@Component({
  selector: 'app-expense',
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {

  expenses: IExpense[] = [];
  totalExpenses = 0;

  constructor(private expenseSer: ExpenseService, private router: Router) { }

  ngOnInit(): void {
    this.getAllExpenses();
  }

  // getAllExpenses() {
  //   this.expenseSer.getAllExpenses().snapshotChanges().subscribe({
  //     next: (data) => {
  //       console.log('Firebase snapshotChanges data:', data); // See what Firebase sends

  //       this.expenses = []; // Reset array for fresh data

  //       data.forEach((item) => {
  //         console.log('Processing item:', item);
  //         let expense = item.payload.toJSON() as IExpense;
  //         console.log('Parsed expense object:', expense);

  //         // Important: Check if expense.price is a valid number string
  //         if (expense.price && !isNaN(parseInt(expense.price))) {
  //           this.totalExpenses += parseInt(expense.price);
  //         } else {
  //           console.warn('Invalid price encountered:', expense.price);
  //         }

  //         this.expenses.push({
  //           key: item.key || '',
  //           title: expense.title,
  //           description: expense.description,
  //           price: expense.price,
  //           // Make sure to add other properties if IExpense has them
  //           // and if your Firebase data contains them
  //         });
  //       });
  //       console.log('Updated expenses array:', this.expenses);
  //       console.log('Updated totalExpenses:', this.totalExpenses);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching expenses:', err); // Catch any errors during subscription
  //     },
  //     complete: () => {
  //       console.log('Expense fetching complete.');
  //     }
  //   });
  // }

  getAllExpenses() {
    this.expenseSer.getAllExpenses().snapshotChanges().subscribe({
      next: (data) => {
        this.expenses = [];
        this.totalExpenses = 0; // Reset total when re-fetching data

        data.forEach((item) => {
          let expense = item.payload.toJSON() as IExpense;
          // Ensure price is a number before adding, or convert it
          const priceValue = parseInt(expense.price || '0'); // Handle potential null/undefined price
          if (!isNaN(priceValue)) {
            this.totalExpenses += priceValue;
          }

          this.expenses.push({
            key: item.key || '',
            title: expense.title,
            description: expense.description,
            price: expense.price,
          });
        });
      }
    });
  }

  editExpense(key: string) {
    // Correct way to navigate with a route parameter
    this.router.navigate(['/expenseform', key]);
  }

}
