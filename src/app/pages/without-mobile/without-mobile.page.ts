import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-mobile',
  templateUrl: './without-mobile.page.html',
  styleUrls: ['./without-mobile.page.scss'],
})
export class WithoutMobilePage implements OnInit {

  list = JSON.parse(localStorage.getItem('formData') || '[]');

  name = this.list.name;
  surname = this.list.surname;
  url = this.list.url;
  email = this.list.email;
  phone = '';
  street = this.list.street;
  floor = this.list.floor;
  state = this.list.state;
  city = this.list.city;
  zipCode = this.list.zipCode;
  country = this.list.country;


  // eslint-disable-next-line max-len
  qrData = `BEGIN:VCARD\nVERSION:3.0\nN:${this.surname};${this.name}\nFN:${this.name + ' ' + this.surname}\nURL:${this.url}\nEMAIL;TYPE=INTERNET:${this.email}\nTEL;TYPE=voice,work,pref:${this.phone}\nADR:;;${this.street}, ${this.floor};${this.state};${this.city};${this.zipCode};${this.country}\nEND:VCARD`;



  constructor() { }

  ngOnInit() {
  }

}
