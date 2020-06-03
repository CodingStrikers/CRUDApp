import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {
	DelLogin: FormGroup;
	Deldata: any;
	resid: any;
	respass: any;
	constructor(private k: FormBuilder, private s: DataService, private r: Router) {}

	ngOnInit() {
		this.DelLogin = this.k.group({
			adminid: new FormControl("", [Validators.required]),
			adminpass: new FormControl("", [Validators.required])
		})

	}
	Admindel() {
		this.Deldata = {
			Adminid: this.DelLogin.get("adminid").value,
			Adminpass: this.DelLogin.get("adminpass").value
		}
		this.s.deladmin(this.Deldata).subscribe((res) => {
			if (res.length > 0) {
				this.resid = res[0].ID;
				this.respass = res[0].Password;
				alert("You are an Admin");
				this.r.navigate(["/del", this.resid, this.respass]);
				localStorage.setItem('localid', this.resid);
				localStorage.setItem('localpass', this.respass);
			} else {
				alert("You are not an admin");

			}
		})
		console.log(this.Deldata);
	}
}


