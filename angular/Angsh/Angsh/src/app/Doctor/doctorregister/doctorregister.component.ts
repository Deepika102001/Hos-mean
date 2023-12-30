import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
    age: null,
    contact: '',
    Role: ''
  };

  err: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  checkMail(data: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  }

  save(): void {
    const data = {
      email: this.user.email,
      name: this.user.name,
      password: this.user.password,
      age: this.user.age,
      contact: this.user.contact,
      Role: this.user.Role
    };

    if (this.user.name) {
      if (this.checkMail(this.user.email)) {
        if (this.user.password.length >= 5) {
          if (this.user.age && this.user.age >= 18 && this.user.age <= 100) {
            const contactRegex: RegExp = /^\d{10}$/;
            if (contactRegex.test(this.user.contact)) {
              if (this.user.Role) { // Validating if Role is not empty
                // Rest of your logic
                this.http.post('http://localhost:1111/newdoctor', data).subscribe(
                  (response) => {
                    console.log(response);
                    this.router.navigate(['/doctorlogin']);
                  },
                  (error) => {
                    console.error('Error:', error);
                  }
                );
              } else {
                this.handleError('Role is required');
              }
            } else {
              this.handleError('Enter a valid 10-digit contact number');
            }
          } else {
            this.handleError('Enter a valid age between 18 and 100');
          }
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