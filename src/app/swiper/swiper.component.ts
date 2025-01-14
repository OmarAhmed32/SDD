import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper';
import { TranslateModule } from '@ngx-translate/core';
import {A11y, Mousewheel, Navigation, Pagination} from 'swiper/modules';


@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwiperComponent implements AfterViewInit, OnInit {
  @ViewChild('swiperRef', {static: false}) swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  swiperConfig: any;
  constructor() {
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.swiperRef) {
      this.swiper = new Swiper(this.swiperRef.nativeElement,  {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next', // Link to your custom "Next" button
          prevEl: '.swiper-button-prev', // Link to your custom "Previous" button
        },
      });
    }
  }

}
