// appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  datas: any[] = [];
row: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.http.get<any[]>('http://localhost:1111/appoinment').subscribe(
      (response) => {
        console.log("im in");
        this.datas = response.filter(row => row.status);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
