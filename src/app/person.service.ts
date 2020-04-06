import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  usersUrl = "http://localhost:8080/api/users";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

   getPeopleWeb(): Observable<User[]>{
     return this.http.get<User[]>(this.usersUrl);
   }
   postUserWeb(user: User): Observable<any> {
     return this.http.post<any>(this.usersUrl, user, this.httpOptions)
   }
   getPeople(){
     return ["Big Bird", "Oscar", "Burt"]
   }
}
