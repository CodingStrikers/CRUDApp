import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
	LaddForm: FormGroup;
	adddata: any;
	constructor(private f: FormBuilder, private d: DataService) {}

	ngOnInit() {
		this.LaddForm = this.f.group({
			bookid: new FormControl("", [Validators.required]),
			bookname: new FormControl("", [Validators.required]),
			bookauthor: new FormControl("", [Validators.required]),
			bookprice: new FormControl("", [Validators.required])
		})
	}
	AddBook() {
		this.adddata = {
			Bookid: this.LaddForm.get("bookid").value,
			Bookname: this.LaddForm.get("bookname").value,
			Bookauthor: this.LaddForm.get("bookauthor").value,
			Bookprice: this.LaddForm.get("bookprice").value

		}
		console.log(this.adddata);
		this.d.bookadd(this.adddata).subscribe((res) => {
			console.log(res);
			alert("BOOK INFO HAS BEEN ADDED");
		})
	}

}