import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-app';

  constructor(private productser:ProductsService){}

  productList:any;

  ngOnInit(){
    this.productser.getProductList().subscribe((data:any)=>{
      console.log(data);

      this.productList=data.products;
    })
  }
}
