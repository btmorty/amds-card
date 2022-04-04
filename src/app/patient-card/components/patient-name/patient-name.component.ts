import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPatientName } from '../../models/patient.model';

@Component({
  selector: 'amds-patient-name',
  templateUrl: './patient-name.component.html',
  styleUrls: ['./patient-name.component.scss'],
})
export class PatientNameComponent implements OnInit {
  @Input() isExpanded = false;

  mockPatientName: IPatientName[] = [
    {
      firstName: 'Paula',
      middleName: '',
      lastName: 'Smith',
      type: 'legal',
      isPreferred: false,
    },
    {
      firstName: 'Pat',
      middleName: '',
      lastName: 'Smith',
      type: 'previous',
      isPreferred: true,
    },
  ];

  nameFormGroup = this.fb.group({
    isPreferred: [false],
    type: ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
  });

  namesFormGroup = this.fb.group({
    names: this.fb.array([]),
  });

  get names() {
    return this.namesFormGroup.get('names') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mockPatientName.forEach(name => {
      this.insertName(name);
    })
  }

  insertName(name: IPatientName) {
    const insertName = this.fb.group({
      isPreferred: [name.isPreferred],
      type: [name.type, Validators.required],
      firstName: [name.firstName, Validators.required],
      middleName: [name.middleName],
      lastName: [name.lastName, Validators.required],
    });

    this.names.push(insertName)
  }

  addName() {
    this.names.push(this.nameFormGroup);
  }

  removeName(index: number) {
    this.names.removeAt(index);
  }
}
