import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorComponent } from './text-editor.component';
import {MessagesService} from "../../../services/messages.service";
import {StoreModule} from "@ngrx/store";
import {mainStoreReducer} from "../../../state-management/reducers/main.reducer";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {environment} from "../../../../environments/environment";
import {AgmCoreModule} from "angular2-google-maps/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

describe('TextEditorComponent', () => {
  let component: TextEditorComponent;
  let fixture: ComponentFixture<TextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorComponent],
      imports: [
        FormsModule,
        StoreModule.provideStore({mainStoreReducer}),
        HttpModule,
        RouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'})
      ],
      providers: [MessagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('username & message are empty after reset', () => {
    component['username'] = 'Juan';
    component['message'] = '123';

    fixture.detectChanges();
    component.resetForm();

    expect(component['username']).toBe('');
    expect(component['message']).toBe('');
  });

  fit('should be true username & message are valid', () => {
    component['username'] = 'Juan';
    component['message'] = '123';

    component.validateMessage();

    expect(component.validateMessage()).toBeTruthy(true);
    expect(component.validateMessage()).toBeTruthy(true);
  });
  fit('should be false username & message are invalid', () => {
    component['username'] = '';
    component['message'] = '';

    expect(component.validateMessage()).toBe(false);
    expect(component.validateMessage()).toBe(false);
  });
});
