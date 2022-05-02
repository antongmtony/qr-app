import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  // name: string;

  list = JSON.parse(localStorage.getItem('formData') || '[]');


  formData = {
    name: this.list.name,
    surname: this.list.surname,
    url: this.list.url,
    email: this.list.email,
    phone: this.list.phone,
    street: this.list.street,
    floor: this.list.floor,
    state: this.list.state,
    city: this.list.city,
    zipCode: this.list.zipCode,
    country: this.list.city
  };

  // eslint-disable-next-line max-len
  vCardData = `BEGIN:VCARD\nVERSION:3.0\nN:${this.formData.surname};${this.formData.name}\nFN:${this.formData.name + ' ' + this.formData.surname}\nURL:${this.formData.url}\nEMAIL;TYPE=INTERNET:${this.formData.email}\nTEL;TYPE=voice,work,pref:${this.formData.phone}\nADR:;;${this.formData.street}, ${this.formData.floor};${this.formData.state};${this.formData.city};${this.formData.zipCode};${this.formData.country}\nEND:VCARD`;


  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.formData);
    localStorage.setItem('formData', JSON.stringify(this.formData));

  }

}
