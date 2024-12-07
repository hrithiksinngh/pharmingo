import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor() {}

  email: string = '';
  otp: string = '';
  otpSent: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  private http = inject(HttpClient);

  private router = inject(Router);

  sendOtp() {
    if (!this.otpSent) {
      this.http
        .post(`${devApiUrl}/api/auth/login`, { email: this.email })
        .subscribe({
          next: (response: any) => {
            this.otpSent = true;
            this.errorMessage = '';
            this.successMessage = 'OTP sent to your email.';
            // this.router.navigate(['verify-otp']);

            // Redirect to /verify-otp with email as a query parameter
          this.router.navigate(['verify-otp'], { queryParams: { email: this.email } })
          
          },
          error: (error) => {
            this.errorMessage = 'Failed to send OTP. Please try again.';
            this.successMessage = '';
          },
        });
    } else {
      this.verifyOtp();
    }
  }

  private decode(token:string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response:any) {
    // decode the token
    const payload = this.decode(response?.access_token);

    // store data in session
    sessionStorage.setItem('loggedInUser', JSON.stringify(payload));


    // navigate to home or dashboard page

    this.router.navigate(['dashboard']);

  }

  verifyOtp() {
    this.http
      .post(`${devApiUrl}/api/auth/verify-otp`, {
        email: this.email,
        otp: this.otp,
      })
      .subscribe({
        next: (response: any) => {
          this.errorMessage = '';
          this.successMessage = 'Login successful!';
          console.log("resposne is ---- \n ",response)
          // store data in session
          this.handleLogin(response?.session);

        },
        error: (error) => {
          this.errorMessage = 'Invalid OTP. Please try again.';
          this.successMessage = '';
        },
      });
  }
  
}
