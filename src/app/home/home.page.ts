import { Component } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  testing = 'testing';

  name = 'Torcuato';
  surname = 'Fernandez';
  url = 'www.afflelou.es';
  email = 'antonio.gmalagon@gmail.com';
  phone = '697478285';
  street = 'Calle del Bronce 30';
  floor = '3D';
  state = 'Madrid';
  city = 'Madrid';
  zipCode = '28045';
  country = 'Spain';



  img = null;

  // eslint-disable-next-line max-len
  qrData = `BEGIN:VCARD\nVERSION:3.0\nN:${this.surname};${this.name}\nFN:${this.name + ' ' + this.surname}\nURL:${this.url}\nEMAIL;TYPE=INTERNET:${this.email}\nTEL;TYPE=voice,work,pref:${this.phone}\nADR:;;${this.street}, ${this.floor};${this.state};${this.city};${this.zipCode};${this.country}\nEND:VCARD`;


  constructor() {}

}
