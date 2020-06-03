import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logid:any;
  public logpass:any

  constructor() { }

get Logcheck(){
  this.logid=localStorage.getItem('localid');
  this.logpass=localStorage.getItem('localpass');

  if(this.logid == '' || this.logpass == '' || this.logid == null || this.logpass == null)
   {
     return false;
   }
  else{
    return true;
  }
}




}
