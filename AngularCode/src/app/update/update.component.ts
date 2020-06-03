import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
UpdForm:any;
upddata:any;

  constructor(private f:FormBuilder,private d:DataService) { }

  ngOnInit() {
    this.UpdForm=this.f.group({
      bookid:new FormControl("",[Validators.required]),
      bookname:new FormControl("",[Validators.required]),
      bookauthor:new FormControl("",[Validators.required]),
      bookprice:new FormControl("",[Validators.required])
  })
  }
  UpdateBook(){
  this.upddata={
      Bookid:this.UpdForm.get("bookid").value,
      Bookname:this.UpdForm.get("bookname").value,
      Bookauthor:this.UpdForm.get("bookauthor").value,
      Bookprice:this.UpdForm.get("bookprice").value
  
    }
    console.log(this.upddata);
     this.d.updatedata(this.upddata).subscribe((res)=>{
       if(res==1)
       {console.log("Book Updated");
        alert("The book Details have now been Updated") 
       } 
      if(res==0){
        alert("Something is Wrong");
       }
      })
  }
  }

