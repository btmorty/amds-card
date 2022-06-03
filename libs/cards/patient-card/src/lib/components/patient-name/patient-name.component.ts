import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPatientName } from '../../models/patient.model';

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
   * Status of show or hide other names
   */
  public showOtherNames = false;

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
  get billingName(): string {
    const patientNameFormValues = this.names.value as IPatientName[];
    if (patientNameFormValues.length > 0) {
      const billingName = patientNameFormValues.find((f) => f.isBilling);

      if (billingName) {
        return this.getfullName(billingName);
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  get otherNameCount(): number {
    const patientNames = this.names.value as IPatientName[];

    const filteredPatientNames = patientNames.filter(f => !f.isBilling && !f.isPreferred);

    return filteredPatientNames.length;
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
      firstName: [name.firstName, Validators.required],
      middleName: [name.middleName],
      lastName: [name.lastName, Validators.required],
      type: [name.type],
      isBilling: [name.isBilling],
      isPreferred: [name.isPreferred],
      isPrevious: [name.isPrevious],
    });

    this.names.push(insertName);
  }

  /**
   * Adds a blank name row to the form
   */
  addName(): void {
    const isBilling = this.names.length == 0;

    const newName = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      type: [undefined],
      isBilling: [isBilling],
      isPreferred: [false],
      isPrevious: [false],
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

  PreferredNameChange(index: number): void {
    const isPreferredName = this.names.at(index).value;

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

  menuTogglePreviousName(index: number): void {
    const currentValue = !!this.names.at(index).get('isPrevious')?.value;

    for (let i = 0; i < this.names.length; i++) {
      this.names.at(i).get('isPrevious')?.setValue(false);
    }

    if (this.names.at(index).get('isBilling')?.value) {
      const previousBillingName = this.names.at(index).value as IPatientName;
      previousBillingName.isBilling = false;
      previousBillingName.isPrevious = true;
      this.insertName(previousBillingName);
    } else {
      this.names.at(index).get('isPrevious')?.setValue(!currentValue);
    }
  }

  getfullName(name: IPatientName): string {
    if (typeof name.middleName != 'undefined' && name.middleName) {
      return `${name.firstName} ${name.middleName} ${name.lastName}`;
    } else {
      return `${name.firstName} ${name.lastName}`;
    }
  }

  toggleShowOtherNames(): void {
    //TODO: force order in html
    //TODO: have separate section for show/hide
    this.showOtherNames = !this.showOtherNames;
  }
}
