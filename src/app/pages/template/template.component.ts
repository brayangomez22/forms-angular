import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  user = {
    name: 'Brayan',
    lastname: 'Gomez Manco',
    email: 'gomezmancobrayan@gmail.com',
  };

  constructor() {}

  ngOnInit(): void {}

  save(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }
}
