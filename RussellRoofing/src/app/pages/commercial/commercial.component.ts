import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CommercialComponent {
  commercialServices = [
    {
      title: 'Flat Roof Systems',
      description: 'Expert installation and repairs for EPDM, TPO, PVC, and modified bitumen roof systems.',
      icon: 'fas fa-building'
    },
    {
      title: 'Metal Roofing',
      description: 'Durable and energy-efficient metal roofing solutions for commercial buildings.',
      icon: 'fas fa-industry'
    },
    {
      title: 'Roof Maintenance',
      description: 'Preventative maintenance programs to extend the life of your commercial roof.',
      icon: 'fas fa-tools'
    },
    {
      title: 'Roof Inspections',
      description: 'Thorough inspections to identify issues before they become costly problems.',
      icon: 'fas fa-search'
    },
    {
      title: 'Emergency Repairs',
      description: 'Rapid response for storm damage and emergency leak repairs.',
      icon: 'fas fa-exclamation-triangle'
    },
    {
      title: 'Roof Coatings',
      description: 'Energy-efficient roof coatings to extend roof life and reduce cooling costs.',
      icon: 'fas fa-paint-roller'
    }
  ];
  
  roofingSystems = [
    {
      name: 'Flat Roofs',
      description: 'Modified Bitumen roofing is an asphalt-based system designed for buildings with low-slope or flat roof structures.',
      benefits: ['Multiple layers for protection', 'Strong seams', 'Tensile strength', 'Resistant to expansion and contraction'],
      image: 'types-of-commercial-roofs.jpg'
    },
    {
      name: 'Metal Roofing',
      description: 'Commercial metal roofing provides exceptional durability, energy efficiency, and weather resistance for various building types.',
      benefits: ['Long-lasting', 'Fire resistant', 'Energy efficient', 'Low maintenance'],
      image: 'metalCommercialRoof.jpg'
    }
  ];
  
  commercialProjects = [
    {
      title: 'Office Building Roof Replacement',
      location: 'Ormond Beach',
      description: 'TPO roof installation for a 25,000 sq ft office complex.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Retail Center Roof Repair',
      location: 'Daytona Beach',
      description: 'EPDM roof repair and coating for a retail shopping center.',
      image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Warehouse Metal Roofing',
      location: 'Palm Coast',
      description: 'Metal roof installation for a 40,000 sq ft warehouse facility.',
      image: 'https://images.unsplash.com/photo-1523898052899-241108586cf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    }
  ];
  
  clientLogos = [
    { name: 'ABC Corporation', class: 'fas fa-building' },
    { name: 'XYZ Enterprises', class: 'fas fa-industry' },
    { name: 'Coastal Properties', class: 'fas fa-hotel' },
    { name: 'Beach City Management', class: 'fas fa-city' },
    { name: 'Sunshine Retail Group', class: 'fas fa-store' }
  ];
}
