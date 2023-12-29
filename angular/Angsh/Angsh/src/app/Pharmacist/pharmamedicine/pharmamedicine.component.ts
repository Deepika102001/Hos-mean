import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pharmamedicine',
  templateUrl: './pharmamedicine.component.html',
  styleUrls: ['./pharmamedicine.component.css']
})
export class PharmamedicineComponent {

  medicine: any[] = [];
  isShowForm:boolean = false
  isNewMedicineAdded:boolean = false
  isEdit:boolean = false

  medicineForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {}
  onSubmit() {
    console.log(this.medicineForm.value);
  }

  deleted: number = -1;


  onPriceChange(event:any){
    let value= event.target.value
    let currentPrice = value - (value * 10 / 100);
    this.medicineForm.controls['finalPrice'].setValue(currentPrice)
  }
 
  ngOnInit(): void {
    this.fetchMedicineData();
    this.medicineForm = this.formBuilder.group({
      medicineName: new FormControl('',[Validators.required]),
      dosage:  new FormControl('',[Validators.required]) ,
      price:  new FormControl('',[Validators.required]),
      gst: new FormControl(18,[Validators.required]),
      discount: new FormControl(10,[Validators.required]),
      finalPrice: new FormControl('',[Validators.required]),
    });
  }

  fetchMedicineData(): void {
    this.http.get<any[]>("http://localhost:1111/Medicine")
      .subscribe(response => {
        this.medicine = response;
        console.log('response= ',response);
        
      }, error => {
        console.error('Error:', error);
      });
  }

  onStore(){
    let OriginalPrice = this.medicineForm.controls['price'].value
    
    if(this.isEdit){
      this.updateMedicine()
    }else{
      this.http.post("http://localhost:1111/newMedicine", this.medicineForm.value)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error('Error:', error);
      });

      this.fetchMedicineData()
      this.isNewMedicineAdded = true
    }
    
  }


  onEdit(data:any){
    this.isEdit = true
    const formValues = {
      medicineName:data.medicineName,
      dosage:data.dosage,
      price:data.price,
    };

    this.medicineForm.patchValue(formValues)
  }

  updateMedicine(){
     this.http.put("http://localhost:1111/updatemedicine", this.medicineForm.value)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error('Error:', error);
      });
      this.fetchMedicineData()
  }

  onDelete(name:any){
    this.http.delete(`http://localhost:1111/deletemedicine/${name}`)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error('Error:', error);
      });
      this.fetchMedicineData()

    this.deleted = -1;
  }

  addMethod(): void {
    this.isShowForm = true
  }
}