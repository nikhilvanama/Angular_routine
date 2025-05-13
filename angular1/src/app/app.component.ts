import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAppComponent } from "./footer-app/footer-app.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterAppComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19';

  counter: number = 0;
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  name:string = "";

  changeName(e:any){
    console.log(e);
    console.log(e.target.value);
    this.name = e.target.value;
  }

  city: string = "Hyderabad";

}
