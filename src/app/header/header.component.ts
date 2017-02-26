import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public supportedLanguages: any[];
   constructor(private translateService: TranslateService) { }
  ngOnInit() {
  	  this.supportedLanguages = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' }
      ];
      
      this.selectLang('en');
  }

  isCurrentLang(lang: string) {
      return lang === this.translateService.currentLang;
    }
    
    selectLang(lang: string) {
      this.translateService.use(lang);
    }
   
}
