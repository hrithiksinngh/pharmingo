import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {

  constructor() {}
  product = {
    image: 'https://via.placeholder.com/150',
    title: 'Sample Product',
    description: 'This is a sample product description.',
    price: 29.99,
    qty: 1,
  };

   private http = inject(HttpClient);

   private router = inject(Router);
  

  checkoutProduct() {
    console.log('Product Info:', this.product);

    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http.post(`${devApiUrl}/api/checkout`, this.product,{headers})
      .subscribe({
        next: (response: any) => {
          console.log('Checkout successful', response);
          

          if (response.status === 200){
            window.location.href = response.checkoutUrl;
          }else{
            console.log('Checkout failed', response);
          }

        },
        error: (error) => {
          console.error('Checkout failed', error);
        }
      });
  }
}
