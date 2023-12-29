import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApporveComponent implements OnInit {
  datas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAppoinment();
  }

  loadAppoinment() {
    this.http.get<any[]>('http://localhost:1111/appoinment').subscribe(
      (response) => {
        console.log('im in');
        this.datas = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  change(data: any): void {
    console.log('rftgyuiop');
    console.log(data);

    const send = {
      appointmentId: data.appointmentId,
      doctorName: data.doctorName,
      patientName: data.patientName,
      status: true,
      description: data.description
    };

    console.log(send);

    this.http.put('http://localhost:1111/updateAppoint', send).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    // Assuming you want to reload the data after the change
    this.loadAppoinment();
  }
}
