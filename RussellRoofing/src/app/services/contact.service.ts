import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private emailUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) { }

  /**
   * Send contact form data to backend
   * Note: In a real application, this would call an actual API endpoint
   * For demo purposes, we're simulating a successful response
   */
  sendContactForm(formData: ContactFormData): Observable<any> {
    // In a real application, this would be:
    // return this.http.post('/api/contact', formData);
    
    console.log('Form data received:', formData);
    this.http.post(this.emailUrl, formData,  {responseType: 'text'}).subscribe({
      next: data => this.emailUrl = this.emailUrl,
      error: error => console.error('there was an error:  ', error)
    });

    // Simulate successful API response with delay
    return of({
      success: true,
      message: 'Form submitted successfully'
    }).pipe(delay(1000));
  }
}
