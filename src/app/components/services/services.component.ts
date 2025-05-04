import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicesDataService } from 'src/app/services-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(
    private servicesDataService: ServicesDataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {

    // Fetch services
    this.services = this.servicesDataService.getServices();
  }
}