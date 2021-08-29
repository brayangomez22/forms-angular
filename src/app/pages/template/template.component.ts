import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

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
    pais: 'CRI',
    genero: 'M',
  };

  paises: any[] = [];

  constructor(public paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;

      this.paises.unshift({
        name: 'Seleccione un pais',
        code: '',
      });
    });
  }

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
