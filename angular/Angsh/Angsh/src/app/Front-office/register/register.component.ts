import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  age: number | null = null;
  gender: string = '';
  contact: string = '';
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

    if (this.age !== null && (isNaN(this.age) || this.age < 18 || this.age > 100)) {
      this.handleError('Enter a valid age between 18 and 100');
      return;
    }

    

    const contactRegex: RegExp = /^\d{10}$/;
    if (this.contact && !contactRegex.test(this.contact)) {
      this.handleError('Enter a valid 10-digit contact number');
      return;
    }

    const data = {
      email: this.email,
      name: this.name,
      password: this.password,
      age: this.age,
      contact: this.contact,
      role: 'Front-Office'
    };

    this.http.post('http://localhost:1111/newofficial', data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/flogin']);
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
    setTimeout(() => this.hideSpam(), 1000);
  }
}
