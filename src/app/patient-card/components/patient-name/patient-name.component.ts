import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {
  IPatientName,
  PatientName,
  PatientNameTypes,
} from '../../models/patient.model';

@Component({
  selector: 'amds-patient-name',
  templateUrl: './patient-name.component.html',
  styleUrls: ['./patient-name.component.scss'],
})
export class PatientNameComponent implements OnChanges {
  @Input() isExpanded = false;
  @Input() patientNames: IPatientName[] | undefined;

  namesFormGroup: FormGroup;

  get names(): FormArray {
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

  constructor(private fb: FormBuilder) {
    this.namesFormGroup = this.fb.group({
      names: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patientNames']) {
      const patientNameChanges = changes['patientNames'];
      if (patientNameChanges.previousValue !== patientNameChanges.currentValue) {
        this.clearForm();
        this.initPatientNameForm();
      }
    }
  }

  initPatientNameForm(): void {
    if (this.patientNames) {
      this.patientNames.forEach((name) => {
        this.insertName(name);
      });
    } else {
      this.addName();
    }
  }

  insertName(name: IPatientName): void {
    const insertName = this.fb.group({
      isPreferred: [name.isPreferred],
      type: [name.type, Validators.required],
      firstName: [name.first, Validators.required],
      middleName: [name.middle],
      lastName: [name.last, Validators.required],
    });

    this.names.push(insertName);
  }

  addName(): void {
    const newName = this.fb.group({
      isPreferred: [false],
      type: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
    });

    this.names.push(newName);
  }

  removeName(index: number): void {
    this.names.removeAt(index);
  }

  clearForm(): void {
    this.names.clear();
  }

  checkboxPreferredNameChange(index: number, event: MatCheckboxChange): void {
    const isPreferredName = event.checked;

    for (let i = 0; i < this.names.length; i++) {
      this.names.at(i).get('isPreferred')?.setValue(false);
    }

    this.names.at(index).get('isPreferred')?.setValue(isPreferredName);
  }

  menuTogglePreferredName(index: number): void {
    const currentValue = !!this.names.at(index).get('isPreferred')?.value;

    for (let i = 0; i < this.names.length; i++) {
      this.names.at(i).get('isPreferred')?.setValue(false);
    }

    this.names.at(index).get('isPreferred')?.setValue(!currentValue);
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
