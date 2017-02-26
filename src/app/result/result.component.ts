import { Component, OnInit } from '@angular/core';
import Search from '../search/Search';
import { FlightService} from '../services/flight.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  result: any;
  message: string;

  ngOnInit() {
  	this.flightService.resultsChanged.subscribe(
  		(data) => {
          this.result = data;
        }
      );

    this.flightService.errorEmitter.subscribe(
      (data) => {
          this.message = data;
        }
      );
  }

}
