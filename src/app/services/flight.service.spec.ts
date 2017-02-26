/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { FlightService } from './flight.service';
import { HttpModule } from '@angular/http';
import Search from '../search/Search';

describe('FlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  HttpModule],
      providers: [FlightService]
    });
  });

  it('should ...', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));
  

  it('fetch results on service call', inject([FlightService], (service: FlightService) => {
    let result: any;
    let search: Search = new Search("MEL","LHR","22/02/2017","25/02/2017");

    service.resultsChanged.subscribe(
  		(data) => {
          expect(data).toBeTruthy();
        }
      );

    service.fetchResults(search);

  }));
});
