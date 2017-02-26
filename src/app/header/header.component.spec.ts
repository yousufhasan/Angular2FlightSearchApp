/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { FlightService} from '../services/flight.service';
import { TranslateService } from '../services/translate.service';
import { TRANSLATION_PROVIDERS } from '../translate/translation';
import { TranslatePipe } from '../translate/translate.pipe';

describe('HeaderComponent', () => {
   let component: HeaderComponent;
   let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,TranslatePipe
      ],
       providers: [ FlightService,TranslateService, TRANSLATION_PROVIDERS]
    });
      // create component and test fixture
    fixture = TestBed.createComponent(HeaderComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    TestBed.compileComponents();
  });

  it('should create the header', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Language Options are working as expected', () => {
    let errors = {};
    let nativeElement = fixture.nativeElement;
    let buttons = nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(0);
    component.ngOnInit();
    fixture.detectChanges();
    buttons = nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(2);

    
  });

   it('Buttons are changing the language option', () => {
    let errors = {};
    let nativeElement = fixture.nativeElement;
    let buttons = nativeElement.querySelectorAll('button');
    component.ngOnInit();
    expect(component.isCurrentLang('en')).toBeTruthy();
    expect(component.isCurrentLang('es')).toBeFalsy();
    fixture.detectChanges(); 
    buttons = nativeElement.querySelectorAll('button');
    buttons[1].click();
    expect(component.isCurrentLang('es')).toBeTruthy();
    expect(component.isCurrentLang('en')).toBeFalsy();

  });


});
