import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pharmacistprofile',
  templateUrl: './pharmacistprofile.component.html',
  styleUrls: ['./pharmacistprofile.component.css']
})
export class PharmacistprofileComponent implements OnInit {
  pharmacistEmail: string | null = null;
  pharmacistDetails: any = {};
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve email from session storage
    this.pharmacistEmail = sessionStorage.getItem('loggedInUserEmail');

    if (this.pharmacistEmail) {
      // Get pharmacist details using the stored email
      this.getPharmacistDetails();
    } else {
      this.errorMessage = 'No logged-in pharmacist found';
    }
  }

  getPharmacistDetails(): void {
    this.http.get(`http://localhost:1111/getPharmacistByEmail/${this.pharmacistEmail}`)
      .subscribe(
        (response: any) => {
          this.pharmacistDetails = response.pharmacist;
        },
        (error: any) => {
          this.errorMessage = error.error.message || 'Something went wrong.';
        }
      );
  }
}