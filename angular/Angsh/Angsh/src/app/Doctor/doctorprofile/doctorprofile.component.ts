import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctorDetails: any = null;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Assuming doctor email is obtained from somewhere (e.g., session storage)
    const loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail');

    if (loggedInUserEmail) {
      // Get doctor details using the stored email
      this.getDoctorDetails(loggedInUserEmail);
    } else {
      this.errorMessage = 'No logged-in user found';
    }
  }

  getDoctorDetails(email: string): void {
    this.http.get<any>(`http://localhost:1111/getDoctorByEmail/${email}`)
      .subscribe(
        (response) => {
          this.doctorDetails = response.doctor;
        },
        (error) => {
          this.errorMessage = error.error.message || 'Something went wrong.';
        }
      );
  }
}