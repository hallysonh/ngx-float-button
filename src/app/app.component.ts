import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'red';
  direction = 'top';
  open: BehaviorSubject<boolean> = new BehaviorSubject(false);

  output(log) {
    console.log(log);
  }
}
