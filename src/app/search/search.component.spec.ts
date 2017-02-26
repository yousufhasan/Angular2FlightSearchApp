/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SearchComponent } from './search.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlightService} from '../services/flight.service';
import Search from './Search';
import { TranslateService } from '../services/translate.service';
import { TRANSLATION_PROVIDERS } from '../translate/translation';
import { TranslatePipe } from '../translate/translate.pipe';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, HttpModule],
      declarations: [ SearchComponent, TranslatePipe],
      providers: [ FlightService, TranslateService,TRANSLATION_PROVIDERS ]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(SearchComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });


    it('should create the search component', async(() => {
      expect(component).toBeTruthy();
    }));

    it('form invalid when empty', () => {
      expect(component.searchForm.valid).toBeFalsy();
    });

   it('depCode field validity', () => {
    let errors = {};
    let depCode = component.searchForm.controls['depCode'];
    expect(depCode.valid).toBeFalsy();

    // depCode field is required
    errors = depCode.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set depCode to something
    depCode.setValue("test");
    errors = depCode.errors || {};
    expect(errors['required']).toBeFalsy();
    
  });


  it('arrCode field validity', () => {
    let errors = {};
    let arrCode = component.searchForm.controls['arrCode'];
    expect(arrCode.valid).toBeFalsy();

    // arrCode field is required
    errors = arrCode.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set arrCode to something
    arrCode.setValue("test");
    errors = arrCode.errors || {};
    expect(errors['required']).toBeFalsy();
    
  });


   it('depDate field validity', () => {
      let errors = {};
      let depDate = component.searchForm.controls['depDate'];
      expect(depDate.valid).toBeFalsy();

      // depDate field is required
      errors = depDate.errors || {};
      expect(errors['required']).toBeTruthy();

      // Set depDate to something
      depDate.setValue("test");
      errors = depDate.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['pattern']).toBeTruthy();

      depDate.setValue("12/12/2017");
      errors = depDate.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['pattern']).toBeFalsy();

  });


    it('retDate field validity', () => {
      let errors = {};
      let retDate = component.searchForm.controls['retDate'];
      expect(retDate.valid).toBeFalsy();

      // retDate field is required
      errors = retDate.errors || {};
      expect(errors['required']).toBeTruthy();

      // Set retDate to something
      retDate.setValue("test");
      errors = retDate.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['pattern']).toBeTruthy();

      retDate.setValue("12/12/2017");
      errors = retDate.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['pattern']).toBeFalsy();

  });

    it('form invalid when Return Date is Smaller', () => {
      let errors = {};
      let depDate = component.searchForm.controls['depDate'];
      let retDate = component.searchForm.controls['retDate'];
 
      depDate.setValue("14/12/2017");
      retDate.setValue("12/12/2017");
      errors = component.searchForm.errors || {};
      expect(errors['notGreater']).toBeTruthy();

      depDate.setValue("14/12/2017");
      retDate.setValue("15/12/2017");
      errors = component.searchForm.errors || {};
      expect(errors['notGreater']).toBeFalsy();

    });

      it('from submission is working', () => {
       spyOn(component, 'onSubmit');
    
       let searchBtn: DebugElement = fixture.debugElement.query(By.css('.btn-primary'));
        searchBtn.nativeElement.click();
        fixture.detectChanges();
     
         expect(component.onSubmit).toHaveBeenCalled();

     });

});
