import { Component, OnInit } from '@angular/core';
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
  role: string = '';
  error: string | null = null;
  userdetails: any = { email: '', password: '', role: '' };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Angular equivalent of useEffect
  }

  checkMail(data: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  call(): void {
    const data = {
      email: this.email,
      password: this.password,
      role: 'Pharmacist'
    };

    if (data.role === this.userdetails.role) {
      if (data.email === this.userdetails.email) {
        if (data.password === this.userdetails.password) {
          this.router.navigate(['/pharmamedicine']);
        } else {
          this.handleError('INVALID PASSWORD');
        }
      } else {
        this.handleError('INVALID EMAIL');
      }
    } else {
      if (data.role !== 'Pharmacist') {
        this.handleError('');
      }
    }
  }

  async login(): Promise<void> {
    const data = {
      email: this.email,
      password: this.password,
      role: 'Pharmacist'
    };

    if (this.checkMail(this.email)) {
      if (this.password.length >= 5) {
        try {
          const response = await this.http.post<any>('http://localhost:1111/officialEmail/', data).toPromise();
          this.role = response.data.role;
          this.userdetails = {
            email: response.data.email,
            password: response.data.password,
            role: response.data.role
          };
          this.call();
        } catch (error) {
          this.handleError('INVALID USER');
          console.error('Error:', error);
        }
      } else {
        this.handleError('Password must be at least 5 characters long');
      }
    } else {
      this.handleError('Enter a valid email address');
    }
  }

  hideError(): void {
    this.error = null;
  }

  handleError(message: string): void {
    this.error = message;
    setTimeout(() => this.hideError(), 1000);
  }
}
