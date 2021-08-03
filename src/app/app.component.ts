import { Component, VERSION } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  example$: Observable<any>;
  constructor(remoteConfig: AngularFireRemoteConfig) {
    this.example$ = remoteConfig.strings.example;
  }
  name = 'Angular ' + VERSION.major;
}
