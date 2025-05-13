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

  d:string = new Date().toLocaleTimeString();

  timer = setInterval(() => {
    this.d = new Date().toLocaleTimeString();
  }, 1000);
}
