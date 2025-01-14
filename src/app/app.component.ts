import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Popover } from 'flowbite';
import type { PopoverOptions, PopoverInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SDD-Task';
  currentLanguage: any;
  language: any;
  isMenuOpen = false;
  isImageVisible: boolean = false;
  currentImage: string = '../assets/images/your-default-image.png';
  scrolled: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['ar', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en').subscribe(() => {
      this.language = this.translate.instant('ARABIC');
      document.documentElement.setAttribute('dir', 'ltr');
      this.currentLanguage = this.translate.currentLang;
    });
  }

  ngOnInit(): void {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage() {
    if (this.translate.currentLang === 'ar') {
      this.currentLanguage = this.translate.currentLang;
      this.translate.use('en');
      this.language = this.translate.instant('ARABIC');
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    } else {
      this.currentLanguage = this.translate.currentLang;
      this.translate.use('ar');
      this.language = this.translate.instant('ENGLISH');
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    }
  }

  toggleImage(): void {
    this.isImageVisible = !this.isImageVisible;
    if (this.isImageVisible) {
      this.currentImage = '../assets/images/another-image.png';
    } else {
      this.currentImage = '../assets/images/your-default-image.png';
    }
  }

  ngAfterViewInit(): void {
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50; // Trigger change when scroll position is greater than 50px
  }
}
