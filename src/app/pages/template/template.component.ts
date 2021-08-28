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
    lastname: 'Gomez',
    email: 'gomezbrayan@gmail.com',
  };

  constructor() {}

  ngOnInit(): void {}

  save(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });

      return;
    }

    console.log(form);
    console.log(form.value);
  }
}
