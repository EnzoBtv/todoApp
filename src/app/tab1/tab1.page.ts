import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  initialTodos: any = [
    {
      title: 'Wash the dishes',
      isEnabled: false,
    },
    {
      title: 'Walk with the dog',
      isEnabled: true,
    },
    {
      title: 'Do the homework',
      isEnabled: false,
    },
  ];
}
