import { CommonModule } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HomeComponent, ContactComponent, AboutComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular2';

  show = true;

  count = signal(20);

  constructor() {
    effect(()=> {
      console.log(this.count());
    })
  }

  num : WritableSignal<number> = signal(40);

  num2:Signal<number> = computed(()=> 200);
}
 