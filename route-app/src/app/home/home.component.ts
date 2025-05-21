import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){ }

  // GotoProfile(name: string) {
  //   this.router.navigate(['profile'], { queryParams: { name } });
  //   console.log(name);
  // }

  users = [
    {
      id: '1',
      name: 'Nikhil',
      age: 20,
      email: 'nick@gmail.com'
    },
    {
      id: '2',
      name: 'Kali',
      age: 23,
      email: 'kali@gmail.com'
    },
    {
      id: '3',
      name: 'Sai',
      age: 24,
      email: 'sai@gmail.com'
    }
  ]
}
