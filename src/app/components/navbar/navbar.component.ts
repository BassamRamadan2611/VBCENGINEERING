import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDropdownOpen: boolean = false;
  isSidebarOpen: boolean = false;
  currentLanguage: string = 'en'; // Default to English

  constructor(
    private router: Router,
    private translate: TranslateService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    // Set initial language from stored preference or default
    const storedLang = localStorage.getItem('preferredLanguage');
    this.currentLanguage = storedLang && ['en', 'es'].includes(storedLang) 
      ? storedLang 
      : 'en';
    this.translate.use(this.currentLanguage);
    console.log('Navbar initialized with language:', this.currentLanguage, 'Translate currentLang:', this.translate.currentLang);

    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
      console.log('Language changed to:', this.currentLanguage, 'Event:', event);
    });

    // Subscribe to route changes to ensure language persistence and close sidebar
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const storedLang = localStorage.getItem('preferredLanguage');
      if (storedLang && ['en', 'es'].includes(storedLang) && storedLang !== this.translate.currentLang) {
        this.translate.use(storedLang);
        this.currentLanguage = storedLang;
        console.log('Reapplied language after navigation:', storedLang);
      }
      // Close sidebar on navigation
      this.isSidebarOpen = false;
    });
  }

  navigateTo(route: string, fragment?: string, scroll: boolean = true) {
    this.isDropdownOpen = false;
    this.isSidebarOpen = false;
    // Ensure current language is preserved
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang && ['en', 'es'].includes(storedLang)) {
      this.translate.use(storedLang);
      this.currentLanguage = storedLang;
    }
    // Navigate to the route with optional fragment
    const navigationExtras = fragment ? { fragment } : {};
    this.router.navigate([`/${route}`], navigationExtras).then(() => {
      if (scroll && fragment) {
        // Scroll to the element with the specified ID
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (scroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  switchLanguage(lang: string) {
    if (['en', 'es'].includes(lang)) {
      this.translate.use(lang);
      localStorage.setItem('preferredLanguage', lang);
      this.currentLanguage = lang;
      this.isDropdownOpen = false; // Close dropdown after selection
      console.log('Language switched to:', lang, 'Current language:', this.currentLanguage);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isDropdownOpen) {
      const target = event.target as HTMLElement;
      const clickedInside = this.elementRef.nativeElement.querySelector('.language-dropdown')?.contains(target) ||
                           this.elementRef.nativeElement.querySelector('.language-toggle')?.contains(target);
      if (!clickedInside) {
        this.isDropdownOpen = false;
      }
    }
  }
}