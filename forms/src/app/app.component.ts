import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ProductsService } from './services/products.service';
import { GoogleGenAI } from "@google/genai";
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule, NgIf, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';

  // Basic Reactive Forms
  // name=new FormControl();
  // password=new FormControl();

  // displayvalue() {
  //   console.log(this.name.value, this.password.value);
  // }

  // setvalues() {
  //   this.name.setValue('Nick');
  //   this.password.setValue('12345');
  // }

  // Form Grouping in Reactive forms
  // Form validators
  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  // })

  // OnSubmit() {
  //   console.log(this.profileForm.value)
  // }

  // get name() {
  //   return this.profileForm.get('name');
  // }

  // get password() {
  //   return this.profileForm.get('password');
  // }

  // get email() {
  //   return this.profileForm.get('email');
  // }

  // Template Driven Forms
  // userdetails:any;
  // addDetails(val:NgForm){
  //   console.log(val);
  //   this.userdetails=val;
  // }

  // Pass Data from Parent to Child
  // users=['Nick', 'Peter', 'Kali', 'Krishna', 'John'];

  // Pass Data from child to Parent
  // users:undefined | string ='';

  // handleUser(persons:string){
  //   this.users = persons
  // }

  // Services in Angular
  constructor(private productsSer: ProductsService) { }

  Productdata: {
    name: string;
    Age: number;
    code: string;
  }[] | undefined;

  getProductData() {
    this.Productdata = this.productsSer.SendProductData();
    console.log(this.Productdata)
  }

  // Gemini API Testing

  ai = new GoogleGenAI({ apiKey: `${environment.apiKey}`});

  async main() {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "angularjs meaning",
    });
    console.log(response.text);
  }

  async callGeminiAPI() {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Explain how AI works in a few words",
      });
      console.log(response.text);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
    }
  }

  ngOnInit() {
    this.main();
    this.callGeminiAPI();
  }

}
