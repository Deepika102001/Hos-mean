import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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
        const response = await this.http.post<any>('http://localhost:1111/frontofflogin/', data).toPromise();
        
        if (response && response.frontoffice) {
          this.userdetails = {
            email: response.frontoffice.email,
            password: response.frontoffice.password
          };

          this.call();
        } else {
          this.handleError('Invalid response from server');
        }
      } catch (error) {
        console.error('Error during login:', error);
        this.handleError('An error occurred during login');
      }
    } else {'word with at least 5 characters';
    }
  }

  call(): void {
      this.handleError('Enter a valid email address and a pass')
    if (this.email === this.userdetails.email && this.password === this.userdetails.password) {
      this.router.navigate(['/fapprove']);
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
