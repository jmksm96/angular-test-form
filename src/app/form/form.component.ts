import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncValidator } from './myValidators';

export interface Hobby {
  name: string;
  duration: string;
}

interface Technologies {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  technologies: Technologies[];
  versions!: string[];

  form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [
      null,
      [Validators.required, Validators.email],
      [AsyncValidator.checkEmail],
    ],
    dateOfBirth: [null, Validators.required],
    framework: [null, Validators.required],
    frameworkVersion: [null, Validators.required],
    hobby: this.fb.array([
      this.fb.group({
        name: this.fb.control(''),
        duration: this.fb.control(''),
      }),
    ]),
  });

  get hobby(): FormArray {
    return this.form.get('hobby') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.technologies = [
      { value: 'react', viewValue: 'React' },
      { value: 'vue', viewValue: 'Vue' },
      { value: 'angular', viewValue: 'Angular' },
    ];
  }

  ngOnInit(): void {
    this.form.get('framework')?.valueChanges.subscribe(() => {
      if (this.form.get('framework')?.value === 'react') {
        this.versions = ['2.1.2', '3.2.4', '4.3.1'];
      } else if (this.form.get('framework')?.value === 'angular') {
        this.versions = ['1.1.1', '1.2.1', '1.3.3'];
      } else if (this.form.get('framework')?.value === 'vue') {
        this.versions = ['3.3.1', '5.2.1', '5.1.3'];
      }
    });
  }

  onSubmit(): void {
    this.form.get('duration')?.disable;
    console.log(this.form.value);
    this.form.reset();
  }

  newHobby(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  addHobby() {
    this.hobby.push(this.newHobby());
  }

  removeHobby(i: number) {
    if (this.hobby.length < 2) {
      return;
    }
    this.hobby.removeAt(i);
  }
}
