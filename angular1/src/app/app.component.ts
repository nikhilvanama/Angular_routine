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
  title = 'angular1';
}
