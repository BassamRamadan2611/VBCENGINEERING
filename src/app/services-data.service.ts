import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  private services = [
    {
      id: 'cost-estimation',
      title: 'SERVICES.COST_ESTIMATION_TITLE',
      description: 'SERVICES.COST_ESTIMATION_DESCRIPTION',
      image: 'assets/images/cost.jpeg',
      details: 'SERVICES.COST_ESTIMATION_DETAILS'
    },
    {
      id: 'cost-control',
      title: 'SERVICES.COST_CONTROL_TITLE',
      description: 'SERVICES.COST_CONTROL_DESCRIPTION',
      image: 'assets/images/costcontrol.jpeg',
      details: 'SERVICES.COST_CONTROL_DETAILS'
    },
    {
      id: 'quantity-surveying',
      title: 'SERVICES.QUANTITY_SURVEYING_TITLE',
      description: 'SERVICES.QUANTITY_SURVEYING_DESCRIPTION',
      image: 'assets/images/quantity surveying.jpeg',
      details: 'SERVICES.QUANTITY_SURVEYING_DETAILS'
    },
    {
      id: 'planning-scheduling',
      title: 'SERVICES.PLANNING_SCHEDULING_TITLE',
      description: 'SERVICES.PLANNING_SCHEDULING_DESCRIPTION',
      image: 'assets/images/plan.jpeg',
      details: 'SERVICES.PLANNING_SCHEDULING_DETAILS'
    }
  ];

  getServices() {
    return this.services;
  }

  getServiceById(id: string) {
    return this.services.find(service => service.id === id);
  }
}