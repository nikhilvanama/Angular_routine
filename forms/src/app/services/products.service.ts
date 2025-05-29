import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
    console.log('This is Products Service')
  }

  SendProductData() {
    return [
      { name: 'Nikhil', Age: 30, code: 'NICK' },
      { name: 'Kali', Age: 24, code: 'KALI' },
      { name: 'Sai', Age: 22, code: 'SAI' },
    ]
  }
}
