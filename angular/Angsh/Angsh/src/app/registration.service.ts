// registration.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private backendUrl = 'http://localhost:3000'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const url = `${this.backendUrl}/register`;
    return this.http.post(url, user);
  }
}
