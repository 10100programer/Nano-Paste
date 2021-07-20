import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PasteComponent } from '../paste/paste.component';
@Component({
  selector: 'app-view-paste',
  templateUrl: './view-paste.component.html',
  styleUrls: ['./view-paste.component.scss']
})
export class ViewPasteComponent implements OnInit {
  name:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.name = params['id']);
    console.log(this.name);
  }

}
