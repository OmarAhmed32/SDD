import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {register as registerSwiperElements} from 'swiper/element/bundle'
import 'flowbite';

import { AppModule } from './app/app.module';

registerSwiperElements();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
