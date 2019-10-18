// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/Rx';
// @Injectable({
//     providedIn: 'root'
// })
// export class Irepos { 
//     id: number;  
    
// }
// export class ApiService {
//     constructor(private http: HttpClient) { }

//     getRepos(query: string):  Observable<Irepos> {
//         // return this.http.get<Irepos>('https://api.github.com/search/repositories?q=' + query).subscribe(data => {
//         //     console.log(data);
//         // })
//         return this.http.get(`api/heroes/?name=${query}`).subscribe(result => {
//             console.log(result);
//           });
//     }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
@Injectable({
     providedIn: 'root'
})
export class ApiService {    
  constructor(private http: HttpClient) {}

  public BaseUrl = 'https://api.github.com/search/repositories?q=';
 
  public getRepos(query: string): Observable<Irepos> {
    const url = this.BaseUrl + query;  
    return this.http.get<any>(url);
  }
} 
 
export class Irepos { 
     id: number;  
     login: string;  
     items: [{
       name: string;
     }];
}