import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit  {

  datas: any[] = [];
  Approved: string = "Approved";
  Pending: string = "Pending";
  search: string = "";
  approvedList:any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>('http://localhost:1111/appoinment').subscribe(
      (response) => {
        console.log("im in");
        this.datas = response;
        console.log('response = ',response);
        this.approvedList = response.filter(d=> d.status === true)
        console.log('this.approvedList = ',this.approvedList);
        
        
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  searchChange(): void {
    this.loadData();
  }
}
