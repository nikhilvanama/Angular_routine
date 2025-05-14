import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAppComponent } from "./footer-app/footer-app.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterAppComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular19';

  counter: number = 0;
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  name:string = "";

  changeName(e:any){
    console.log(e);
    console.log(e.target.value);
    this.name = e.target.value;
  }

  city: string = "Hyderabad";

  name_ng:string = "";

  isTrue = "5";

  status = "online";

  items = [
    { name: "text", id: 1 },
    { name: "number", id: 2 },
    { name: "number", id: 3 },
    { name: "text", id: 4 },
    { name: "email", id: 5 }];

  names = [
    { name: "Kali", id: 1 },
    { name: "Nikhil", id: 2 },
    { name: "Krishna", id: 3 },
    { name: "Nick", id: 4 },
    { name: "Sita", id: 5 }
  ];

  symbol: string = "";
  num1:number = 4;
  num2:number = 5;

  today:string = new Date().toLocaleDateString();

  man = {
    name: "Kali",
    age: 25,
    city: "Hyderabad"
  };
}
