import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restuarant',
  templateUrl: './restuarant.component.html',
  styleUrls: ['./restuarant.component.css']
})
export class RestuarantComponent implements OnInit {
  cards = [{title: 'Number1'}, {title: 'Number2'}, {title: 'Number3'}, {title: 'Number4'}, {title: 'Number5'}, {title: 'Number6'}, {title: 'Number7'}, {title: 'Number8'}, {title: 'Number9'}, {title: 'Number10'}, {title: 'Number11'}, {title: 'Number12'}, {title: 'Number13'}, {title: 'Number14'}, {title: 'Number15'}, {title: 'Number16'}, {title: 'Number17'}, {title: 'Number18'}, {title: 'Number19'}, {title: 'Number20'}, {title: 'Number21'}, {title: 'Number22'}, {title: 'Number23'}, {title: 'Number24'}, {title: 'Number25'}, {title: 'Number26'}, {title: 'Number27'}, {title: 'Number28'}, {title: 'Number29'}, {title: 'Number30'}];
  constructor() { }

  ngOnInit(): void {
  }
}
