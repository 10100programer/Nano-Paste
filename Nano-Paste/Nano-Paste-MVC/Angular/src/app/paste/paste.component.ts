import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DatahandlerService } from '../datahandler.service';
import { PasteObject } from '../models/pasteobject';

@Component({
  selector: 'paste-singleton',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.scss']
})
export class PasteComponent implements OnInit {
  likecount:number = 1;
  likedisabled:boolean =false;
  modeldataObservable : Observable<PasteObject> = new Observable<PasteObject>();
  model:PasteObject = new PasteObject(0,"","","","","","");
  public isLoaded:Promise<boolean>;

  constructor(private _snackBar: MatSnackBar, private http:DatahandlerService) { 
    this.isLoaded = new Promise<boolean>(a => null);
  }

  ngOnInit(): void {
    this.likecount =514;
    this.modeldataObservable = this.http.getPaste();
    this.http.getPaste().subscribe( a => {
      this.model = a;
      console.log(this.model);
      this.isLoaded = Promise.resolve(true);
    });
    
  }
  pressLikeBtn(){
    this.likecount++;
    this.likedisabled =true;
  }
  copyLinkToClipboard(){  
    this.copyToClipboard(window.location.href);
    this.openSnackBar("Copied to clipboard","dismiss");
  }
  copyToClipboard(toCopy: string) : void {
        const create_copy = (e : ClipboardEvent) => {
            e.clipboardData?.setData('text/plain', toCopy);
            e.preventDefault();
        };
        document.addEventListener('copy', create_copy );
        document.execCommand('copy');
        document.removeEventListener('copy', create_copy );
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
}
