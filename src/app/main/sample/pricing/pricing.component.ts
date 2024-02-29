import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init( {offset: 200, // Offset (in px) from the original trigger point
    duration: "5s", // Duration of animation (in ms)
    easing: 'ease-in-out', // Easing type
    once: true});//AOS - 2
    AOS.refresh();
  }

}
