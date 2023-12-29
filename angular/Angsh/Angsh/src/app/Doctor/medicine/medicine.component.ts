
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
    data: any[] = [];
    search: string = '';
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      this.loadMedicine();
    }
  
    loadMedicine() {
      this.http.get<any[]>('http://localhost:1111/Medicine').subscribe(
        (response) => {
          console.log('im in');
          this.data = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  
    get filteredData() {
      return this.data.filter((row) =>
        this.search.toLowerCase() === '' ?
        row :
        row.medicineName.toLowerCase().includes(this.search)
      );
    }
  }
