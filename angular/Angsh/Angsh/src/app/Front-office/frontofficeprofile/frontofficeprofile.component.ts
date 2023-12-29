import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-frontofficeprofile',
  templateUrl: './frontofficeprofile.component.html',
  styleUrls: ['./frontofficeprofile.component.css']
})
export class FrontofficeprofileComponent implements OnInit {
  userEmail: string | null = null;
  userDetails: any = {};
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve email from session storage
    this.userEmail = sessionStorage.getItem('loggedInUserEmail');

    if (this.userEmail) {
      // Get user details using the stored email
      this.getUserDetails();
    } else {
      this.errorMessage = 'No logged-in user found';
    }
  }

  getUserDetails(): void {
    this.http.get(`http://localhost:1111/getFrontOfficeUserByEmail/${this.userEmail}`)
      .subscribe(
        (response: any) => {
          this.userDetails = response.frontoffice;
        },
        (error: any) => {
          this.errorMessage = error.error.message || 'Something went wrong.';
        }
      );
  }
}