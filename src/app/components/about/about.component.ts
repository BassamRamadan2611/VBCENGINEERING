import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router, private translate: TranslateService) {
   
  }

  gotoAboutDetails() {
    this.router.navigate(['/about-details']);
  }
}