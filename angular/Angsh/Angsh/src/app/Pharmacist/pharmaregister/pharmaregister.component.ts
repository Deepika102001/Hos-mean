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
      role: 'Pharmacist'
    };

    if (this.name) {
      if (this.checkMail(this.email)) {
        if (this.password.length >= 5) {
          this.http.post('http://localhost:1111/newofficial', data).subscribe(
            (response) => {
              console.log(response);
              this.router.navigate(['/pharmalogin']);
            },
            (error) => {
              console.error('Error:', error);
            }
          );
        } else {
          this.handleError('Enter a password with at least 5 characters');
        }
      } else {
        this.handleError('Enter a proper email');
      }
    } else {
      this.handleError('Enter a name');
    }
  }

  hideSpam(): void {
    this.err = null;
  }

  handleError(message: string): void {
    this.err = message;
    setTimeout(() => this.hideSpam(), 1000);
  }
}
