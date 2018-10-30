import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'api/users';

  constructor(private http : HttpClient, private router : Router) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  registerUser(formData : NgForm) {
    return this.http.post<any>(`${this.apiUrl}/Signup`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('getHeroes', []))
    )
  }

  loggedIn(formData : NgForm) {
    return this.http.post<any>(`${this.apiUrl}/Login`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('getHeroes', []))
    )
  }

  callLogout() {
    if (localStorage.getItem('currentUser')) {
       localStorage.removeItem('currentUser');
       this.router.navigate(['/Login']);
    }
  }
}