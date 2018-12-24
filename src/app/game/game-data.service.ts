import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private gameDataUrl = 'https://dl.dropboxusercontent.com/s/pu2lyq8n1pfs3k7/game.json';

  constructor(private http: HttpClient) { }

  getGameData(): Observable<any> {
    return this.http.get(this.gameDataUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }
}
