import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent,RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  constructor(private router: Router) {}

  scrollToFragment(fragment: string) {
    this.router.navigate(['/'], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element && fragment === "datasets") {
      
        window.scrollTo({
          top: 4600,
          behavior: 'smooth',
        });
      }else{
        window.scrollTo({
          top: 3300,
          behavior: 'smooth',
        });
      }
    });
  }

}
