import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { mainStoreReducer } from "./state-management/reducers/main.reducer";
import { StoreModule } from "@ngrx/store";
<<<<<<< HEAD
import {TextEditorComponent} from "./components/main/text-editor/text-editor.component";
import {ChatBoardComponent} from "./components/main/chat-board/chat-board.component";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {MessagesService} from "./services/messages.service";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {GMapsService} from "./services/gmaps.service";
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
=======
import {TextEditorComponent} from "./components/text-editor/text-editor.component";
import {ChatBoardComponent} from "./components/chat-board/chat-board.component";
>>>>>>> e6f5115e4360fed2f38f30e4258940e9e74d9710
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";

const reducers = { mainStoreReducer };

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    StoreModule.provideStore(reducers),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'})
=======
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducers)
>>>>>>> e6f5115e4360fed2f38f30e4258940e9e74d9710
  ],
  providers: [MessagesService, GMapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
