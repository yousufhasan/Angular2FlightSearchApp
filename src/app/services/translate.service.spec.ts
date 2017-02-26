/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateService } from './translate.service';
import { TRANSLATION_PROVIDERS } from '../translate/translation';
import { TranslatePipe } from '../translate/translate.pipe';

describe('TranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateService, TRANSLATION_PROVIDERS]
    });
  });

  it('should ...', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));

  it('changes the language as expected', inject([TranslateService], (service: TranslateService) => {
   
  		expect(service.currentLang =='en').toBeFalsy();
  		expect(service.currentLang =='es').toBeFalsy();
  		service.use('en');
  		expect(service.currentLang =='en').toBeTruthy();
  		expect(service.currentLang =='es').toBeFalsy();
  		service.use('es');
  		expect(service.currentLang =='en').toBeFalsy();
  		expect(service.currentLang =='es').toBeTruthy();

  }));

});
