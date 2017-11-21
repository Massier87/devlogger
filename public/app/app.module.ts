import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {LogsComponent} from "./components/logs/logs.component";
import {HttpModule} from "@angular/http";
import {FeathersService} from "./services/feathers.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [FeathersService],
  bootstrap: [AppComponent]
})
export class AppModule{

}
