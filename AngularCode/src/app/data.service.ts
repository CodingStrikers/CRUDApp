import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:any="http://localhost:3236/";

  constructor(private http:HttpClient) { }


public bookadd(adddataofbook:any):Observable<any>
{
  return this.http.post(this.url+"add",adddataofbook);
}

public deladmin(deladmindata:any):Observable<any>
{ 
  return this.http.post(this.url+"deladmin",deladmindata);
}

public deldata(deletedata:any):Observable<any>
{
  return this.http.post(this.url+"deldataofbook",deletedata);
}

public sbyid(iddata:any):Observable<any>
{
  return this.http.post(this.url+"sbyid",iddata);
}
public sbyau(audata:any):Observable<any>
{
  return this.http.post(this.url+"sbyau",audata);
}
public sbyna(nadata:any):Observable<any>
{
  return this.http.post(this.url+"sbyna",nadata);
}

public updatedata(updataa:any):Observable<any>
{
  return this.http.post(this.url+"updatedat",updataa);
}
}
