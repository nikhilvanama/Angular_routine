import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAppComponent } from "./footer-app/footer-app.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterAppComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19';

  vcol:string = 'brown';
  red:string = 'red';

  gcol:object = {
    'background-color': 'green',
    'color': 'white',
    'font-size': '20px',
    'font-weight': 'bold',
    'padding': '10px'
  };

  isactive: boolean = false;
}
