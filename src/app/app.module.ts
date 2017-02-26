import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlightService} from './services/flight.service';
import { TranslateService } from './services/translate.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './header/header.component';
import { TranslatePipe } from './translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './translate/translation';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    HeaderComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [TRANSLATION_PROVIDERS, FlightService,TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
