import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://img.r7.com/images/moya-leao-branco-albino-atracao-glen-garriff-conservation-lion-sanctuary-23032021161517683',
      description: 'Leão'
    },
    {
      url: 'https://thumbs.dreamstime.com/b/leoa-branca-10822581.jpg',
      description: 'Leoa'
    }
  ]
}
