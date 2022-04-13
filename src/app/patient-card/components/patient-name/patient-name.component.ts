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

  /**
   * The patient name form group
   */
  public patientNameForm: FormGroup = this.fb.group({
    names: this.fb.array([]),
  });

  /**
   * Get patient names form array
   */
  get names(): FormArray {
    return this.patientNameForm.get('names') as FormArray;
  }

  /**
   * Get name form group array
   */
  get namesFormGroupArray(): FormGroup[] {
    return this.names.controls as FormGroup[];
  }

  /**
   * Get the preferend name value
   */
  get preferredName(): string {
    const patientNameFormValues = this.names.value as IPatientName[];
    if (patientNameFormValues.length > 0) {
      const preferredName = patientNameFormValues.find((f) => f.isPreferred);

      if (preferredName) {
        return this.getfullName(preferredName);
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  /**
   * Get the legal name value
   */
  get legalName(): string {
    const patientNameFormValues = this.names.value as IPatientName[];
    if (patientNameFormValues.length > 0) {
      const legalName = patientNameFormValues.find(
        (f) => f.type === PatientNameTypes.Legal
      );

      if (legalName) {
        return this.getfullName(legalName);
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  constructor(private fb: FormBuilder) {
    this.initPatientNameForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patientNames']) {
      const patientNameChanges = changes['patientNames'];
      if (
        patientNameChanges.previousValue !== patientNameChanges.currentValue
      ) {
        // TODO: check if form is dirty and prevent loss of changes
        this.clearForm();
        this.initPatientNameForm();
      }
    }
  }

  /**
   * Initializes the patient name form
   */
  initPatientNameForm(): void {
    if (this.patientNames) {
      this.patientNames.forEach((name) => {
        this.insertName(name);
      });
    } else {
      this.addName();
    }
  }

  /**
   * Inserts patient name values into form controls
   * @param name Patient Name to insert into form
   */
  insertName(name: IPatientName): void {
    const insertName = this.fb.group({
      isPreferred: [name.isPreferred],
      type: [name.type, Validators.required],
      firstName: [name.firstName, Validators.required],
      middleName: [name.middleName],
      lastName: [name.lastName, Validators.required],
    });

    this.names.push(insertName);
  }

  /**
   * Adds a blank name row to the form
   */
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

  /**
   * Removes patient name from the form array
   * @param index The index refrence of the name to be removed from the form
   */
  removeName(index: number): void {
    this.names.removeAt(index);
  }

  /**
   * Clears the patient name form
   */
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

  getfullName(name: IPatientName): string {
    if (typeof name.middleName != 'undefined' && name.middleName) {
      return `${name.firstName} ${name.middleName} ${name.lastName}`;
    } else {
      return `${name.firstName} ${name.lastName}`;
    }
  }
}
