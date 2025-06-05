import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
// import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-app';

  // API Calling in Angular

  // constructor(private productser:ProductsService, UserSer:UsersService){}
  // productList:any;

  // ngOnInit(){
  //   this.productser.getProductList().subscribe((data:any)=>{
  //     console.log(data);

  //     this.productList=data.products; 
  //   })
  // }


  // API calling using Json Server

  constructor(private UserSer: UsersService) { }
  users: User[] = [];

  ngOnInit() {
    this.getUser()
  }

  // API Operations using Forms

  getUser() {
    this.UserSer.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    })
  }

  addUser(user: User) {

    if (!this.selectUser) {
      this.UserSer.saveUsers(user).subscribe((data: User) => {
        if (data) {
          this.getUser();
        }
      })
    }
    else {
      const userData = { ...user };
      this.UserSer.updateUser(userData).subscribe((data) => {
        if (data) {
          this.getUser();
        }
      })
    }
  }

  deleteUser(id: string) {
    this.UserSer.delUsers(id).subscribe((data: User) => {
      console.log(data);
      if (data) {
        this.getUser();
      }
    })
  }

  selectedUserdata: User | undefined;
  selectUser(id: string) {
    this.UserSer.getselectedUser(id).subscribe((data: User) => {
      this.selectedUserdata = data;
      console.log(this.selectedUserdata);
    })
  }
}
