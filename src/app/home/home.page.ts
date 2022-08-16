import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Ready to create an app?';
  defaultText = 'Ready to create an app?';

  constructor() {}

  onChangeText() {
    this.text = 'You did it :)';

    setTimeout(() => {
      this.text = this.defaultText;
      console.log('default text set');
    }, 5000);
  }
}
