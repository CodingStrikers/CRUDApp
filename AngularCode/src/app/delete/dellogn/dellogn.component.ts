import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-dellogn',
  templateUrl: './dellogn.component.html',
  styleUrls: ['./dellogn.component.css']
})

export class DellognComponent implements OnInit {
	Bookdel: FormGroup;
	checkdata: any;
	paramid: any;
	parampass: any;

	constructor(private s: DataService, private r: ActivatedRoute, private x: FormBuilder) {}

	ngOnInit() {
		this.Bookdel = this.x.group({
			iddel: new FormControl("", [Validators.required])
		})
  }
  
	delbooks() {
		this.checkdata = {
			bookdel: this.Bookdel.get("iddel").value
		}
		console.log(this.checkdata);
		this.r.params.subscribe(param => {
			this.paramid = param.id;
			this.parampass = param.password;

		})

		this.s.deldata(this.checkdata).subscribe((res) => {
			localStorage.setItem('localid', '');
			localStorage.setItem('localpass', '');
			console.log(res);
			if (res == 0) {
				alert("The book u have typed doesnt exist");
			}
			if (res == 1) {
				alert("Book you have typed deleted");
			}
		})
	}
}
