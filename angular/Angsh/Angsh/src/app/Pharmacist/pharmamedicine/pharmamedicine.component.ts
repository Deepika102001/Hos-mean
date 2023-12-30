import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  router: any;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {}
  onSubmit() {
    console.log(this.medicineForm.value);
  }

  deleted: number = -1;


  //-- gst and discount logiccc -----------
  onPriceChange(event: any) {
    let value = parseFloat(event.target.value);
  
    // Increase price by 18%
    let increasedPrice = value * 1.18;
  
    // Decrease the increased price by 10%
    let finalPrice = increasedPrice * 0.9;
  
    // Logging the results
    console.log('Increased Price by 18%:', increasedPrice);
    console.log('Final Price after decreasing by 10%:', finalPrice);
    
  
    // Set the final price to the form control
    this.medicineForm.controls['finalPrice'].setValue(finalPrice);
   
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
      alert(' added 10% discount ')
      this.router.navigate(['/pharmamedicine']);
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