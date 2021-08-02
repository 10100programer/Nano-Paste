import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PasteObject } from './models/pasteobject';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor(private http: HttpClient) { }
  configUrl:any = 'https://localhost:44322/API/getsampledata';
  public data:any;
  getPaste():Observable<PasteObject>
  {
    return this.http.get<PasteObject>(this.configUrl);
  }
  getPastePromise()
  {
    const promise = new Promise((resolve,reject) => {
      const apiURL = this.configUrl;
      this.http
        .get<PasteObject>(apiURL)
        .toPromise()
        .then((res:any) => {
          this.data = res.map((res:any) => {
            return new PasteObject(
              res.LikeCount, 
              res.NanoTrack, 
              res.PasteData, 
              res.PasteID, 
              res.PasteTime, 
              res.PasteUser, 
              res.PasteTitle
              );
          });
        resolve(null);  
      },
        err => { 
          reject(err);
        }
      );
    });
    return promise;
  }
}
