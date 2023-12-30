import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './Doctor/appointment/appointment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorLoginComponent } from './Doctor/doctorlogin/doctorlogin.component';
import { DoctorregisterComponent } from './Doctor/doctorregister/doctorregister.component';
import { ForgetpassComponent } from './Doctor/forgetpass/forgetpass.component';
import { MedicineComponent } from './Doctor/medicine/medicine.component';
import { ApporveComponent } from './Front-office/approve/approve.component';
import { BookComponent } from './Front-office/book/book.component';
import { RegisterComponent } from './Front-office/register/register.component';
import { LoginComponent } from './Front-office/login/login.component';
import { ForgetpasswordComponent } from './Front-office/forgetpassword/forgetpassword.component';
import { ViewallComponent } from './Front-office/viewall/viewall.component';

import { PharmaregisterComponent } from './Pharmacist/pharmaregister/pharmaregister.component';
import { PharmaloginComponent } from './Pharmacist/pharmalogin/pharmalogin.component';
import { PharmaforgetpassComponent } from './Pharmacist/pharmaforgetpass/pharmaforgetpass.component';
import { UserloginComponent } from './User/userlogin/userlogin.component';
import { UserregisterComponent } from './User/userregister/userregister.component';
import { UserforgetpassComponent } from './User/userforgetpass/userforgetpass.component';
import { ApointmentComponent } from './User/apointment/apointment.component';
import { UsermedicineComponent } from './User/usermedicine/usermedicine.component';
import { PharmamedicineComponent } from './Pharmacist/pharmamedicine/pharmamedicine.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DoctorProfileComponent } from './Doctor/doctorprofile/doctorprofile.component';
import { UserprofileComponent } from './User/userprofile/userprofile.component';
import { PharmacistprofileComponent } from './Pharmacist/pharmacistprofile/pharmacistprofile.component';
import { FrontofficeprofileComponent } from './Front-office/frontofficeprofile/frontofficeprofile.component';
import { DoctorlistComponent } from './Doctor/doctorlist/doctorlist.component';
import { DoctorlistfronComponent } from './Front-office/doctorlistfron/doctorlistfron.component';



const appRoutes: Routes = [						
  { path: 'docappointment', component: AppointmentComponent },
  { path: 'doctorlogin', component: DoctorLoginComponent },
  { path: 'doctorregister', component: DoctorregisterComponent },
  { path: 'doctorforgetpass', component:  ForgetpassComponent },
  { path: 'docmedicine', component: MedicineComponent },
  { path: 'fapprove', component: ApporveComponent },
  { path: 'fbook', component:BookComponent },
  { path: 'fregister', component: RegisterComponent },
  { path: 'flogin', component:LoginComponent  },
  { path: 'fForgetpass', component:ForgetpasswordComponent  },
  { path: 'viewall', component: ViewallComponent },
  { path: 'pharmaregister', component: PharmaregisterComponent  },
  { path: 'pharmalogin', component: PharmaloginComponent },
  { path: 'pharmaforgetpass', component:PharmaforgetpassComponent  },
  { path: 'userlogin', component:UserloginComponent  },
  { path: 'userregister', component:UserregisterComponent },
  { path: 'userforgetpass', component:UserforgetpassComponent  },
  { path: 'userappointment', component:ApointmentComponent  },
  { path: 'usermedicine', component:UsermedicineComponent  },
  { path: 'pharmamedicine', component: PharmamedicineComponent  },
  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'doctorprofile', component:DoctorProfileComponent},
  { path: 'userprofile', component:UserprofileComponent},
  { path: 'pharmacistprofile', component:PharmacistprofileComponent},
  { path: 'frontofficeprofile', component:FrontofficeprofileComponent},
  { path: 'doctorlist', component:DoctorlistComponent},
  { path: 'doctorlistfront', component:DoctorlistfronComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    DoctorLoginComponent,
    DoctorregisterComponent,
    ForgetpassComponent,
    MedicineComponent,
    ApporveComponent,
    BookComponent,
    RegisterComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ViewallComponent,
    PharmaregisterComponent,
    PharmaloginComponent,
    PharmaforgetpassComponent,
    UserloginComponent,
    UserregisterComponent,
    UserforgetpassComponent,
    ApointmentComponent,
    UsermedicineComponent,
    PharmamedicineComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    DoctorProfileComponent,
    UserprofileComponent,
    PharmacistprofileComponent,
    FrontofficeprofileComponent,
    DoctorlistComponent,
    DoctorlistfronComponent  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
