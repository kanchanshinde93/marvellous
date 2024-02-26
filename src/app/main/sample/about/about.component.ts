import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChildren('counterElement') counterElements: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.counterElements.forEach((counterElement: ElementRef) => {
      this.animateCounter(counterElement.nativeElement);
    });
  }
  animateCounter(counterElement: HTMLElement) {
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
