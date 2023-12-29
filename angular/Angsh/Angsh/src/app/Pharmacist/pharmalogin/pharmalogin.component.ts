import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pharmalogin',
  templateUrl: './pharmalogin.component.html',
  styleUrls: ['./pharmalogin.component.css']
})
export class PharmaloginComponent {

  email: string = '';
  password: string = '';
  error: string | null = null;
  userdetails: any = { email: '', password: '' };

  constructor(private router: Router, private http: HttpClient) {}

  checkMail(data: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  async login(): Promise<void> {
    const data = {
      email: this.email,
      password: this.password
    };

    if (this.checkMail(this.email) && this.password.length >= 5) {
      try {
        const response = await this.http.post<any>('http://localhost:1111/pharmacistlogin/', data).toPromise();
        
        // Assuming the response structure contains 'pharmacist' object
        if (response && response.pharmacist) {
          this.userdetails = {
            email: response.pharmacist.email,
            password: response.pharmacist.password
          };

          this.call();
        } else {
          this.handleError('Invalid response from server');
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.handleError('An error occurred during login');
      }
    } else {
      this.handleError('Enter a valid email address and a password with at least 5 characters');
    }
  }

  call(): void {
    if (this.email === this.userdetails.email && this.password === this.userdetails.password) {
      // Store email in session storage upon successful login
      sessionStorage.setItem('loggedInUserEmail', this.email);

      this.router.navigate(['/pharmamedicine']);
    } else {
      this.handleError('Invalid email or password');
    }
  }

  hideError(): void {
    this.error = null;
  }

  handleError(message: string): void {
    this.error = message;
    setTimeout(() => this.hideError(), 3000);
  }
}
