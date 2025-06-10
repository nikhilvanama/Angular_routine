import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // importProvidersFrom([
    //   AngularFireModule.initializeApp(firebaseConfig),
    //   AngularFireAuthModule,
    //   AngularFireDatabaseModule,
    //   AngularFirestoreModule,
    // ]),
        importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideDatabase(() => getDatabase()),
    ]),
  ],
};
