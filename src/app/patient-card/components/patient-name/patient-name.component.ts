import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPatientName, PatientName, PatientNameTypes } from '../../models/patient.model';

@Component({
  selector: 'amds-patient-name',
  templateUrl: './patient-name.component.html',
  styleUrls: ['./patient-name.component.scss'],
})
export class PatientNameComponent implements OnInit {
  @Input() isExpanded = false;
  @Input() patientNames: IPatientName[] | undefined;

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

  get preferredName(): string {
    const names = this.names.value as IPatientName[];
    let name = names.find((f) => f.isPreferred);

    if (!name) {
      name = names.find((f) => f.type === PatientNameTypes.Legal);
    }

    if (name) {
      const preferredName = new PatientName(
        name.first,
        name.middle,
        name.last,
        name.type,
        name.isPreferred
      );
      return preferredName.full;
    } else {
      return '';
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.patientNames) {
      this.patientNames.forEach((name) => {
        this.insertName(name);
      });
    } else {
      this.addName();
    }
  }

  insertName(name: IPatientName) {
    const insertName = this.fb.group({
      isPreferred: [name.isPreferred],
      type: [name.type, Validators.required],
      firstName: [name.first, Validators.required],
      middleName: [name.middle],
      lastName: [name.last, Validators.required],
    });

    this.names.push(insertName);
  }

  addName() {
    this.names.push(this.nameFormGroup);
  }

  removeName(index: number) {
    this.names.removeAt(index);
  }

  setPreferredName(index: number) {
    this.names.at(index).get('isPreferred')?.setValue(true);
  }

  //TODO: On Form change events make sure only 1 name is selected as perferred.

  getfullName(name: IPatientName): string {
    if (typeof name.middle != 'undefined' && name.middle) {
      return `${name.first} ${name.middle} ${name.last}`;
    } else {
      return `${name.first} ${name.last}`;
    }
  }
}
