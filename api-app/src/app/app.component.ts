import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

  // constructor(private UserSer:UsersService){}
  // users:User[]=[];

  // ngOnInit(){
  //   this.UserSer.getUsers().subscribe((data:User[])=>{
  //     console.log(data);

  //     this.users=data;
  //   })
  // }


  // API Operations using Forms
  
}
