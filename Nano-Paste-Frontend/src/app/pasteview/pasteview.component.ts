import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasteview',
  templateUrl: './pasteview.component.html',
  styleUrls: ['./pasteview.component.css']
})
export class PasteviewComponent implements OnInit {

  test = '{"pasteID":"AE35","pasteData":"Wow this is really Cool\\n\\n\\nReality can be whatever I want","pasteTime":"2021-05-26T21:42:49.5338144-05:00"}';
  JSONDATA:any;
  constructor() { }

  ngOnInit(): void {
    this.JSONDATA = JSON.parse(this.test);
    console.log("JSON object -", this.JSONDATA);
  }

}
