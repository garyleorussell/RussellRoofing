import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ResidentialComponent {
  residentialServices = [
    {
      title: 'Roof Replacement',
      description: 'Complete replacement of your existing roof with high-quality materials and expert installation.',
      icon: 'fas fa-home'
    },
    {
      title: 'Roof Repairs',
      description: 'Quick and effective repairs for leaks, storm damage, missing shingles, and other issues.',
      icon: 'fas fa-tools'
    },
    {
      title: 'Roof Inspections',
      description: 'Thorough inspections to identify potential issues before they become costly problems.',
      icon: 'fas fa-search'
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency response for storm damage and urgent roofing issues.',
      icon: 'fas fa-exclamation-triangle'
    },
    {
      title: 'Skylight Installation',
      description: 'Professional installation of skylights to bring natural light into your home.',
      icon: 'fas fa-sun'
    }
  ];
  
  roofingMaterials = [
    {
      name: 'Asphalt Shingles',
      description: 'The most popular and economical roofing material, available in various colors and styles.',
      lifespan: '15-30 years',
      image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Metal Roofing',
      description: 'Durable and energy-efficient option that can withstand extreme weather conditions.',
      lifespan: '40-70 years',
      image: 'https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    }
  ];
  
  roofingProjects = [
    {
      title: 'Shingle Roof Replacement',
      image: '/res6.jpg'
    },
    {
      title: 'Metal Roof Installation',
      image: 'res4.jpg'
    },
    {
      title: 'Hurricane Damage Repair',
      image: 'res5.jpg'
    },
    {
      title: 'New Construction Roofing',
      image: 'res1.jpg'
    }
  //   ,
  //   {
  //     title: 'Skylight Installation',
  //     location: 'Ormond-by-the-Sea',
  //     image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
  //   }
   ];
}
