import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private validators: ValidatorsService) {
    this.createForm();
    this.loadDataToForm();
    this.createListeners();
  }

  ngOnInit(): void {}

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

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

  get userNoValid() {
    return this.form.get('user')?.invalid && this.form.get('user')?.touched;
  }

  get districtNoValid() {
    return (
      this.form.get('address.district')?.invalid &&
      this.form.get('address.district')?.touched
    );
  }

  get cityNoValid() {
    return (
      this.form.get('address.city')?.invalid &&
      this.form.get('address.city')?.touched
    );
  }

  get pass1NoValid() {
    return this.form.get('pass1')?.invalid && this.form.get('pass1')?.touched;
  }

  get pass2NoValid() {
    const pass1 = this.form.get('pass1')?.value;
    const pass2 = this.form.get('pass2')?.value;

    return pass1 === pass2 ? false : true;
  }

  createForm() {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        lastname: ['', [Validators.required, this.validators.noManco]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        user: ['', , this.validators.userExists],
        pass1: ['', Validators.required],
        pass2: ['', Validators.required],
        address: this.fb.group({
          district: ['', Validators.required],
          city: ['', Validators.required],
        }),
        hobbies: this.fb.array([]),
      },
      {
        validators: this.validators.samePasswords('pass1', 'pass2'),
      }
    );
  }

  createListeners() {
    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.form.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });

    this.form.get('name')?.valueChanges.subscribe(console.log);
  }

  loadDataToForm() {
    this.form.reset({
      name: 'Brayan',
      lastname: 'Gomez',
      email: 'pepe@gmail.com',
      pass1: '123',
      pass2: '123',
      address: {
        district: 'Pepe',
        city: 'Medallo',
      },
    });
  }

  addHobbie() {
    this.hobbies.push(this.fb.control(''));
  }

  deleteHobbie(i: number) {
    this.hobbies.removeAt(i);
  }

  save() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }

    this.form.reset({
      name: 'Sin nombre',
    });
  }
}
