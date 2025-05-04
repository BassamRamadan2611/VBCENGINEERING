import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  constructor(private elRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    // Listen for route changes and reinitialize the carousel
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/') {
        this.reinitializeCarousel();
      }
    });
  }

  ngAfterViewInit(): void {
    this.reinitializeCarousel(); // Initial load
  }

  reinitializeCarousel(): void {
    setTimeout(() => {
      import('flowbite').then(flowbite => {
        flowbite.initCarousels(); // Reinitialize Flowbite's carousel
      });
    }, 100); // Small delay to ensure DOM is ready
  }
}
