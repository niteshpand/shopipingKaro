export interface Environment {
  production: boolean;
  firebase: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
}

export const environment: Environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDDmVYRba2upA_OH1VLzp4eq9yTPwb5P4g',
    authDomain: 'authangular-nit1.firebaseapp.com',
    databaseURL: 'https://authangular-nit1-default-rtdb.firebaseio.com',
    projectId: 'authangular-nit1',
    storageBucket: 'authangular-nit1.appspot.com',
    messagingSenderId: '735083485661',
    appId: '1:735083485661:web:6a115d3c26e88b8cb67e34',
    measurementId: 'G-VTBFVL23NC',
  },
};
