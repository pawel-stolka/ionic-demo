import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  // https://www.youtube.com/watch?v=r2ga-iXS5i4
  reasonRef;
  amountRef;

  text = 'Ready to create an app?';
  defaultText = 'Ready to create an app?';

  constructor() {}

  ngAfterViewInit() {

  }

  onChangeText() {
    this.text = 'You did it :)';

    setTimeout(() => {
      this.text = this.defaultText;
      console.log('default text set');
    }, 5000);
  }

  cancel() {
    console.log('cancel');
  }

  confirm() {
    console.log('confirm...',  this.reasonRef, this.amountRef); //, this.reasonRef.nativeElement, this.amountRef);
  }
}
