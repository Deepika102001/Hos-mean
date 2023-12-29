import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.css']
})
export class ApointmentComponent {
  name: string = '';
  Doctor: string = '';
  Dis: string = '';
  err: string | null = '';
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {}

  save(): void {
    if (this.name) {
      if (this.Doctor) {
        if (this.Dis) {
          this.http.get<any>('http://localhost:1111/appoinment').subscribe(
            response => {
              const id = response.length;
              const data = {
                appointmentId: id + 1,
                doctorName: this.Doctor,
                patientName: this.name,
                status: false,
                description: this.Dis
              };

              this.http.post('http://localhost:1111/newAppoinment', data).subscribe(
                () => {
                  console.log('Data saved successfully');
                  this.router.navigate(['/userappointment']);
                },
                error => {
                  console.error('Error:', error);
                }
              );
            },
            error => {
              console.error('Error:', error);
            }
          );
        } else {
          this.showError('Enter Dis');
        }
      } else {
        this.showError('Enter Doctor name');
      }
    } else {
      this.showError('Enter proper name');
    }
  }

  hideError(): void {
    this.err = null;
  }

  private showError(message: string): void {
    this.err = message;
    setTimeout(() => this.hideError(), 1000);
  }
}
