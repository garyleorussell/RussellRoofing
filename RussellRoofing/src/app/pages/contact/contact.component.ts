import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; // Using the definite assignment assertion
  formSubmitted = false;
  formSuccess = false;
  formError = false;
  errorMessage = '';
  
  serviceOptions = [
    'Residential Roof Repair',
    'Residential Roof Replacement',
    'Commercial Roofing',
    'Roof Inspection',
    'Emergency Repairs',
    'Other'
  ];
  
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    // Initialize the form in the constructor
    this.initForm();
  }

  ngOnInit(): void {
    // Form is already initialized in the constructor
  }
  
  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit(): void {
    this.formSubmitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.contactService.sendContactForm(this.contactForm.value)
      .subscribe({
        next: () => {
          this.formSuccess = true;
          this.contactForm.reset();
          this.formSubmitted = false;
          setTimeout(() => {
            this.formSuccess = false;
          }, 5000);
        },
        error: (error) => {
          this.formError = true;
          this.errorMessage = error.message || 'An error occurred. Please try again later.';
          console.error('Error submitting form', error);
          setTimeout(() => {
            this.formError = false;
          }, 5000);
        }
      });
  }
  
  get fc() {
    return this.contactForm.controls;
  }
}
