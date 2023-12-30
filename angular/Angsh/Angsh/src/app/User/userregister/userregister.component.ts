import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  age: number | null = null;
  gender: string = '';
  contact: number | null = null;
  err: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  checkMail(data: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  save(): void {
    if (!this.name.trim()) {
      this.handleError('Please enter your name');
      return;
    }

    if (!this.checkMail(this.email)) {
      this.handleError('Enter a valid email address');
      return;
    }

    if (this.password.length < 5) {
      this.handleError('Password must be at least 5 characters long');
      return;
    }

    if (!this.age || this.age < 18 || this.age > 100) {
      this.handleError('Enter a valid age between 18 and 100');
      return;
    }

    if (!['male', 'female', 'other'].includes(this.gender)) {
      this.handleError('Select a valid gender');
      return;
    }

    if (!this.contact || !(/^\d{10}$/).test(this.contact.toString())) {
      this.handleError('Enter a valid 10-digit contact number');
      return;
    }

    const data = {
      email: this.email,
      name: this.name,
      password: this.password,
      age: this.age,
      gender: this.gender,
      contact: this.contact,
      role: 'User'
    };

    // Assuming the backend endpoint is expecting this format of data
    this.http.post('http://localhost:1111/user', data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/userlogin']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  hideSpam(): void {
    this.err = null;
  }

  handleError(message: string): void {
    this.err = message;
    setTimeout(() => this.hideSpam(), 3000); // Display error for 3 seconds
  }
}