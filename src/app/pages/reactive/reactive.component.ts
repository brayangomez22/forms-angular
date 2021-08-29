import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  get nameNoValid() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }

  get lastnameNoValid() {
    return (
      this.form.get('lastname')?.invalid && this.form.get('lastname')?.touched
    );
  }

  get emailNoValid() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      address: this.fb.group({
        district: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });
  }

  save() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    console.log(this.form);
  }
}
