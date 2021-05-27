import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/app/person.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

   url: string = "http://imginfotech.in/propira/api/";
  
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
    // getData() {
    //   return this.http.get(url);
    // }
    getPerson(): Observable<Person[]> {
      console.log('getPerson '+this.url + 'registration')
      return this.http.get<Person[]>(this.url + 'registration')
    }
   
    addPerson(person:Person): Observable<any> {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(person);
      console.log(body)
      return this.http.post(this.url + 'registration', body,{'headers':headers})
    }
}


