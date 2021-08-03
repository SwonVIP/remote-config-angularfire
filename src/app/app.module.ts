import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireRemoteConfigModule,
  DEFAULTS,
  SETTINGS
} from '@angular/fire/remote-config';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA_YTw4Pai0T0CYJTf4hEojrXOOV-fyZLA',
      authDomain: 'fir-test-67641.firebaseapp.com',
      projectId: 'fir-test-67641',
      storageBucket: 'fir-test-67641.appspot.com',
      messagingSenderId: '845135347347',
      appId: '1:845135347347:web:621cf74315f664a0d31766'
    }),
    AngularFireRemoteConfigModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: DEFAULTS,
      useValue: {
        example: 'hello world'
      }
    },
    {
      provide: SETTINGS,
      useFactory: () =>
        isDevMode() ? { minimumFetchIntervalMillis: 10_000 } : {}
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
