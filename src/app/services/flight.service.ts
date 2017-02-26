import { Injectable, EventEmitter } from '@angular/core';
import Search from '../search/Search';
import 'rxjs/Rx';
import { Http, Response,URLSearchParams } from "@angular/http";
import { SEARCH_URL,ERROR_MESSAGE } from '../config';
 

@Injectable()
export class FlightService {
  resultsChanged = new EventEmitter();
  errorEmitter = new EventEmitter();
  constructor(private http: Http){}

  fetchResults(searchParams: Search){
  	let params: URLSearchParams = new URLSearchParams();
		params.set('DepartureAirportCode', searchParams.depCode);
 		params.set('ArrivalAirportCode', searchParams.arrCode);
 		params.set('DepartureDate', searchParams.depDate);
 		params.set('ReturnDate', searchParams.retDate);

 		 return this.http.get(SEARCH_URL, {
   				search: params
 			})
 		 .map((response: Response) => response.json())
 		 .subscribe(
   				(result) => {
  		  			this.resultsChanged.emit(result);
   				},
          (err) => {
            this.errorEmitter.emit(ERROR_MESSAGE);
            console.log(err.json().Message)
          }
 			)
  	
  }

}
