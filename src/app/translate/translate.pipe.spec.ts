/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from '../services/translate.service';
import { TRANSLATION_PROVIDERS } from './translation';

describe('TranslatePipe', () => {

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslatePipe
      ],
       providers: [ TranslateService, TRANSLATION_PROVIDERS]
    });
    
  });

  it('create an instance', () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('translates the string properly', inject([TranslateService], (service: TranslateService) => {
  	
  	 const pipe = new TranslatePipe(service);
  	 service.use('en');
  	 let value=pipe.transform('hello world');
  	 expect(value=='hello world').toBeTruthy();
  	 expect(value=='hola mundo').toBeFalsy();


  	 service.use('es');
  	 value=pipe.transform('hello world');
  	 expect(value=='hola mundo').toBeTruthy();
  	 expect(value=='hello world').toBeFalsy();

   });
});
