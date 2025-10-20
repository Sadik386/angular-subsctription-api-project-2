import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flowbite Angular';

  constructor(private router: Router) {}

  goToSubscription() {
    this.router.navigate(['/subscription']);
  }
}
