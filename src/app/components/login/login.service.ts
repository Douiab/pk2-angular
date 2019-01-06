import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {
    user: any;
constructor() {
}

getUser() {
    this.user =  {
        "cin": "A12345",
        "nom": "Douiab",
        "prenom": "Asmaa",
        "email": "asmaa.douiab@gmail.com",
        "tel": "+21201234543",
        "adresse": "El Massira Bloc 20 N° 33 Beni-Mellal"
        }
    return this.user;
    }
}
