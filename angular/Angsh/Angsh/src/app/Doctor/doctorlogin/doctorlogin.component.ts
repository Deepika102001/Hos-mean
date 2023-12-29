import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorLoginComponent {
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
        const response = await this.http.post<any>('http://localhost:1111/doctorlogin', data).toPromise();
        this.userdetails = response.doctor; // Update according to your response structure

        if (
          this.userdetails &&
          this.userdetails.email === this.email &&
          this.userdetails.password === this.password
        ) {
          // Store email in session storage upon successful login
          sessionStorage.setItem('loggedInUserEmail', this.email);

          this.router.navigate(['/docappointment']);
        } else {
          this.handleError('Invalid email or password');
        }
      } catch (error) {
        this.handleError('An error occurred during login');
        console.error('Error:', error);
      }
    } else {
      this.handleError('Enter a valid email address and a password with at least 5 characters');
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
