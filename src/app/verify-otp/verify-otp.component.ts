import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOtpComponent {
  constructor() {}

  otp: string = '';
  email: string = ''; // You may want to pass this as an input to the component
  errorMessage: string = '';
  successMessage: string = '';

  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  private decode(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response: any) {
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
          console.log('resposne is ---- \n ', response);
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
