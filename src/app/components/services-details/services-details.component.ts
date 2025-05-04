import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ServicesDataService } from 'src/app/services-data.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {
  service: any;

  constructor(
    private route: ActivatedRoute,
    private servicesDataService: ServicesDataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
   
    // Get service ID from route
    const id = this.route.snapshot.paramMap.get('id');
    this.service = id ? this.servicesDataService.getServiceById(id) : null;
  }
}