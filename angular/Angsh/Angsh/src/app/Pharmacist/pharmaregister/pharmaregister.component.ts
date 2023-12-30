import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmaregister',
  templateUrl: './pharmaregister.component.html',
  styleUrls: ['./pharmaregister.component.css']
})
export class PharmaregisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  age: number | null = null;
  contact: string = '';
  err: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  checkMail(data: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  save(): void {
    const data = {
      email: this.email,
      name: this.name,
      password: this.password,
      age: this.age,
      contact: this.contact,
      role: 'Pharmacist'
    };

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

    if (this.age === null || isNaN(this.age) || this.age < 18 || this.age > 100) {
      this.handleError('Enter a valid age between 18 and 100');
      return;
    }

    if (!this.contact || !(/^\d{10}$/).test(this.contact)) {
      this.handleError('Enter a valid 10-digit contact number');
      return;
    }

    // All validations passed, proceed with HTTP POST
    this.http.post('http://localhost:1111/newpharmacist', data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/pharmalogin']);
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