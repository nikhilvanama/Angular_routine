import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Pass data From Parent to Child
  // @Input() user: string = '';

  //Pass data from Child to Parent
  // @Output() getUsers = new EventEmitter();
  // persons:any = ['Nick', 'Peter', 'Kali', 'Krishna', 'John'];

  // ngOnInit() {
  //   this.getUsers.emit(this.persons);
  // }

  
}
