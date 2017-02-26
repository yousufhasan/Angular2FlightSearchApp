import { Component, OnInit } from '@angular/core';
import Search from './Search';
import { FlightService} from '../services/flight.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl
} from "@angular/forms";
import { Utils } from '../utils/utils';
import { PATTERN } from '../config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit {

  searchForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private flightService: FlightService) { 
  }

  ngOnInit() {
  	this.initForm();
  }

   onSubmit(event: Event) {
   	  event.preventDefault();
  	  const newSearch: Search = this.searchForm.value;
  	  this.flightService.fetchResults(newSearch);
  	  
  }

   private initForm() {
   	 let recipeName = '';

   	  this.searchForm = this.formBuilder.group({
	      depCode: ['', Validators.required],
	      arrCode: ['', Validators.required],
	      depDate: ['', Validators.compose([Validators.required,Validators.pattern(PATTERN)])],
	      retDate: ['', Validators.compose([Validators.required,Validators.pattern(PATTERN)])]    
    }, { validator: this.dateMatcher });

   }

   dateMatcher = (control: AbstractControl): {[key: string]: boolean} => {
  	const depDate = control.get('depDate');
  	const retDate = control.get('retDate');
  	if (!depDate || !retDate) return null;
  	   return Utils.stringToDate(retDate.value)>= Utils.stringToDate(depDate.value) ? null : { notGreater: true };
	};

}
