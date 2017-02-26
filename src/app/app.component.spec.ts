/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { FlightService} from './services/flight.service';
import { TranslateService } from './services/translate.service';
import { TRANSLATION_PROVIDERS } from './translate/translation';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from './translate/translate.pipe';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [
        AppComponent,HeaderComponent,ResultComponent,SearchComponent,TranslatePipe
      ],
       providers: [ FlightService, TranslateService,TRANSLATION_PROVIDERS ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
