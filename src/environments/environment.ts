// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    config: {
      apiKey: 'AIzaSyDdQ5RIEsTvoo5dOIRCZCH-sekaANXtUbs',
      authDomain: 'arch-656fe.firebaseapp.com',
      projectId: 'arch-656fe',
      storageBucket: 'arch-656fe.appspot.com',
      messagingSenderId: '695400025877',
      appId: '1:695400025877:web:78fab50651594dcdb4631c',
      measurementId: 'G-P2BZZYRHPR'
    },
    actionCodeSettings: {
        url: 'http://localhost:5200/demo',
        handleCodeInApp: true
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
