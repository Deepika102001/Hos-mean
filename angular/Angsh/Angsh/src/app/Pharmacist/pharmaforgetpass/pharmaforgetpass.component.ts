import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmaforgetpass',
  templateUrl: './pharmaforgetpass.component.html',
  styleUrls: ['./pharmaforgetpass.component.css']
})
export class PharmaforgetpassComponent {

  email: string = '';
  password: string = '';
  err: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  checkMail(data: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  hideSpam(): void {
    this.err = null;
  }

  save(): void {
    const data = {
      email: this.email,
      password: this.password
    };

    if (this.checkMail(this.email)) {
      if (this.password.length >= 5) {
        this.http.put('http://localhost:1111/pharmacistupdate', data).subscribe(
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
    alert(' password changed succesfully')
  }

  handleError(message: string): void {
    this.err = message;
    setTimeout(() => this.hideSpam(), 1000);
  }

}


