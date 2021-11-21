import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  urlImage: string = '../assets/images/logo.png';

  buttonClick() {
    alert('Login realizado com sucesso!');
  }
}
