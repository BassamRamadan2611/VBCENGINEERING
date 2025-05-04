import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VBC Engineering';
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private translate: TranslateService) {}

  ngOnInit() {
       // Set default language
       this.translate.setDefaultLang('en');

       // Use stored language or default to 'en'
       const storedLang = localStorage.getItem('preferredLanguage');
       const lang = storedLang && ['en', 'es'].includes(storedLang) ? storedLang : 'en';
       this.translate.use(lang);
       console.log('App initialized with language:', lang, 'Current language:', this.translate.currentLang);
     }
}