import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor() { }
  getVideoList() {
    return [
      {
        title: 'hay trao cho anh',
        id: 'knW7-x7Y7RE'
      },
      {
       title: 'lac troi',
        id: 'Llw9Q6akRo4'
      },
      {
        title: 'Hong nhan',
        id: '8x2NjwwHUbQ'
      },
      {
        title: 'Tu tam',
        id: '4GuR_g75ufY'
      }
    ];
  }
}
