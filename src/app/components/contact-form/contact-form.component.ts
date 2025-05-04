import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    name: '',
    phone: '',
    message: ''
  };
  isSubmitting = false;

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    // Use browser language or fallback to English
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
  }

  onSubmit() {
    this.isSubmitting = true;
    const emailSubject = encodeURIComponent('Contact Form Submission');
    const emailBody = encodeURIComponent(
      `Name: ${this.formData.name}\nPhone: ${this.formData.phone}\nMessage: ${this.formData.message}`
    );
    const mailtoLink = `mailto:bassamramadan964@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      window.location.href = mailtoLink;
      this.isSubmitting = false;
    }, 1000);
  }
}