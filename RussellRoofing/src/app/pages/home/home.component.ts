import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  currentYear = new Date().getFullYear();
  testimonials = [
    {
      name: 'John Davis',
      location: 'Ormond Beach',
      quote: 'Russell Roofing Inc. did an amazing job on our home. Professional crew, quality materials, and they finished ahead of schedule!',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      location: 'Daytona Beach',
      quote: 'We had storm damage and they responded immediately. Fair price and exceptional work. I highly recommend their services.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      location: 'Palm Coast',
      quote: 'The best roofing company in the area! Their attention to detail and customer service is outstanding. Our new roof looks fantastic.',
      rating: 5
    }
  ];
}
