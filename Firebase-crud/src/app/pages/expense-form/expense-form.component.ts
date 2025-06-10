import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {

  expenseForm = new FormGroup({
    price: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl<string>('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
  });

  get price() {
    return this.expenseForm.get('price');
  }

  get title() {
    return this.expenseForm.get('title');
  }

  onSubmit() {
    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched(); // show validation messages
      return;
    }

    const postValue = this.expenseForm.getRawValue();
    console.log('Expense Values:', postValue);

    // Reset Form
    this.expenseForm.reset();
  }
}
