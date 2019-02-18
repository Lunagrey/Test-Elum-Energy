import { Component } from '@angular/core'
import { User } from './user'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-elum-energy';
  private roles = ['Administrateur', 'Editeur', 'Rédacteur', 'Utilisateur'];

  private user = new User('Bruce', 'Wayne', 'Wayne Manor, 1007 Mountain Drive', 'Gotham City', 'imnotbatman@wayneenterprise.com', '202-555-0194');
}
