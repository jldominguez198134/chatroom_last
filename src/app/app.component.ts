import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Title of the app
   * @type {string}
   */
  title:string = 'Chat app';

  constructor () {}

}
