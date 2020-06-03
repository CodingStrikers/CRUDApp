import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sbyna',
  templateUrl: './sbyna.component.html',
  styleUrls: ['./sbyna.component.css']
})
export class SbynaComponent implements OnInit {
  Sbyname:FormGroup;
  Namedata:any;

  constructor(private r:FormBuilder,private s:DataService) { }

  ngOnInit() {
    this.Sbyname=this.r.group({
      bookname:new FormControl("",[Validators.required])
    })
  }
  namesub(){
    this.Namedata={
           Booknam:this.Sbyname.get('bookname').value
           
    }
    this.s.sbyna(this.Namedata).subscribe((res)=>{
      alert(JSON.stringify(res));
    });
    
  }

}
