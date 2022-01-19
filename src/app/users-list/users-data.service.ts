import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  constructor(private _http: HttpClient) { }

  getGroups() {
    return this._http.get(`${environment.apiUrl}groups`)
  }

  getUsersById(id: number) {
    return this._http.get(`${environment.apiUrl}users?group_id=${id}`)
  }
}
