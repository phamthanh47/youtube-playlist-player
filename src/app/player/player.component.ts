import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  id: string;
  constructor(private activatedRoute: ActivatedRoute,
              private  domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params.id;
    });
  }
  getSrc() {
    const url = this.domSanitizer.bypassSecurityTrustResourceUrl(('http://www.youtube.com/embed/' + this.id));
    return url;
  }

}
