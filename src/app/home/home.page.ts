import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  // https://www.youtube.com/watch?v=r2ga-iXS5i4
  @ViewChild('reasonRef', { static: false }) reasonRef: any;
  @ViewChild('amountRef', { static: false }) amountRef: any;
  // https://www.tektutorialshub.com/angular/renderer2-angular/
  @ViewChild('itemRef', { static: false }) itemRef; //:...

  text = 'Ready to create an app?';
  defaultText = 'Ready to create an app?';

  constructor(private renderer: Renderer2) { }

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
    console.log('confirm...', this.reasonRef?.value, this.amountRef?.value);
  }
}
