import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ourfeature',
  templateUrl: './ourfeature.component.html',
  styleUrls: ['./ourfeature.component.scss']
})
export class OurfeatureComponent implements AfterViewInit  {
  @ViewChildren('counterElement') counterElements: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.counterElements.forEach((counterElement: ElementRef) => {
      const textContent = counterElement.nativeElement.innerText;
      const numberPart:any = parseInt(textContent);
      const textPart:any = textContent.replace(numberPart.toString(), '');
      this.animateCounter(counterElement.nativeElement, numberPart, textPart);
    });
  }
  animateCounter(counterElement: HTMLElement, targetNumber: number, textPart: string) {
    let count = 0;
    const targetCount = parseInt(counterElement.innerText);
    const duration = 5000;
    const step = Math.ceil(targetCount / (duration / 100)); // calculate step count based on duration

    const timer = setInterval(() => {
      count += step;
      if (count >= targetCount) {
        clearInterval(timer);
        count = targetCount;
      }
      counterElement.innerText = count.toString();
    }, 100); // interval set to 100ms
  }
}
