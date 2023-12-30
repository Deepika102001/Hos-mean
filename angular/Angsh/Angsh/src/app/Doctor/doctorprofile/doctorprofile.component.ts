import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctorEmail: string | null = null;
  doctorDetails: any = {};
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve email from session storage
    this.doctorEmail = sessionStorage.getItem('loggedInUserEmail');

    if (this.doctorEmail) {
      // Get doctor details using the stored email
      this.getDoctorDetails();
    } else {
      this.errorMessage = 'No logged-in user found';
    }
  }

  getDoctorDetails(): void {
    this.http.get(`http://localhost:1111/getDoctorByEmail/${this.doctorEmail}`)
      .subscribe(
        (response: any) => {
          this.doctorDetails = response.doctor;
        },
        (error: any) => {
          this.errorMessage = error.error.message || 'Something went wrong.';
        }
      );
  }
}