import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * General service for api interaction
 * @export
 * @class HttpService
 */
@Injectable()
export class HttpService {
   constructor(private http: Http) {}
    /**
     *  Takes data from query api
     * @param {string} query  get api query
     * @returns Observable
     * @memberOf HttpService
     */
    get(query: string): Observable<any> {
        return this.http.get(query)
                        .catch((error: any) => { return Observable.throw(error); });
    }

}