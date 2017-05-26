import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { mainStoreReducer } from "./state-management/reducers/main.reducer";
import { StoreModule } from "@ngrx/store";
import {TextEditorComponent} from "./components/text-editor/text-editor.component";
import {ChatBoardComponent} from "./components/chat-board/chat-board.component";
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";

const reducers = { mainStoreReducer };

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
