import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class LoginService {
    user: any;
constructor(private http : HttpClient,
        ) {
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
    login(query){
        let headers = new HttpHeaders();
        headers.append('Content-Type','application/json');
            return this.http.post('http://g-bank.herokuapp.com/login', query,{headers: headers})
             .pipe(map(res => res));
    }
}