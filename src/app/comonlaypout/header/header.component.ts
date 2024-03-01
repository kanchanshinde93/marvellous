import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrollBreakpoint: number = window.innerHeight * 0.9;
  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.scrollY;
    const scrollButton = document.querySelector('.scroll-top');

    if (scrollOffset >= this.scrollBreakpoint) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  }

  // Scroll to top when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Method to check if the button should be visible
  isButtonVisible(): boolean {
    const scrollOffset = window.scrollY;
    return scrollOffset >= this.scrollBreakpoint;
  }
}
