import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  saveUsers(user:User):Observable<User>{
    return this.http.post<User>(this.url,user);
  }

  delUsers(id:string):Observable<User>{
    return this.http.delete<User>(this.url+"/"+id);
  }

  getselectedUser(id:string):Observable<User>{
    return this.http.get<User>(this.url+"/"+id);
  }

  updateUser(user: User):Observable<User>{
    return this.http.put<User>(this.url+"/"+user.id,user);
  }
}