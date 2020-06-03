import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sbyid',
  templateUrl: './sbyid.component.html',
  styleUrls: ['./sbyid.component.css']
})
export class SbyidComponent implements OnInit {
  Sbyid:FormGroup;
  Iddata:any;

  constructor(private r:FormBuilder,private s:DataService) { }

  ngOnInit() {
   this.Sbyid=this.r.group({
     idbook:new FormControl("",[Validators.required])
   })

        
  }
  idsub(){
    this.Iddata={
           Idbook:this.Sbyid.get('idbook').value
           
    }
    this.s.sbyid(this.Iddata).subscribe((res)=>{
      alert(JSON.stringify(res));
      
    })
  }

}
