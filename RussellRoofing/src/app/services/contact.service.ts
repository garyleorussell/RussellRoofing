import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment'

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

  private emailUrl = '/api/send-email';

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

    emailjs.init({
      publicKey: environment.emailJsPublicKey
    });

    emailjs.send(environment.emailJsServiceKey,environment.emailJsTemplateKey,{
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message,
    });
      

    // Simulate successful API response with delay
    return of({
      success: true,
      message: 'Form submitted successfully'
    }).pipe(delay(1000));
  }
}
