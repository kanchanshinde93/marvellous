import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-ourfeature',
  templateUrl: './ourfeature.component.html',
  styleUrls: ['./ourfeature.component.scss']
})
export class OurfeatureComponent implements AfterViewInit  {

  counters = [
    { number: 10, text: 'K+', tittle:'Happy Clients' },
    { number: 20, text: 'K+' , tittle:'Service Completes' },
    { number: 5, text: '+',tittle:'Years Experience'  },
    { number: 200, text: '+',tittle:'Team Members'  },
    // Add more counters as needed
  ];
  @ViewChildren('counterElement') counterElements: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
    AOS.init( {offset: 200, // Offset (in px) from the original trigger point
    duration: "5s", // Duration of animation (in ms)
    easing: 'ease-in-out', // Easing type
    once: true});//AOS - 2
    AOS.refresh();
  }

  ngAfterViewInit(): void { 
   /*  this.counterElements.forEach((counterElement: ElementRef) => {
      const textContent = counterElement.nativeElement.innerText;
      const numberPart:any = parseInt(textContent);
      const textPart:any = textContent.replace(numberPart.toString(), '');
      this.animateCounter(counterElement.nativeElement, numberPart, textPart);
    }); */
    this.counterElements.forEach((counterElement: ElementRef, index: number) => {
      const counterData = this.counters[index];
      this.animateCounter(counterElement.nativeElement, counterData.number, counterData.text,counterData.tittle);
    });
  }
 /*  animateCounter(counterElement: HTMLElement, targetNumber: number, textPart: string) {
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
  } */
  animateCounter(counterElement: HTMLElement, targetNumber: number, text: string,tittle:any) {
    let count = 0;
    const duration = 5000;
    const step = Math.ceil(targetNumber / (duration / 100)); // calculate step count based on duration

    const timer = setInterval(() => {
      count += step;
      if (count >= targetNumber) {
        clearInterval(timer);
        count = targetNumber;
      }
      counterElement.innerText = `${count} ${text} `;
    }, 100); // interval set to 100ms
  }
}
