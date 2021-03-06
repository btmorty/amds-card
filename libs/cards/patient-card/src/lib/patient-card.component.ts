import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPatient } from './models/patient.model';

@Component({
  selector: 'amds-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss'],
})
export class PatientCardComponent {
  @Input() isInitialState = true;
  @Input() initialStateMessage: string | undefined;
  @Input() isInitializing = false;
  @Input() isEmptyState = false;
  @Input() isLoading = false;
  @Input() isActive = false;
  @Input()
  rows!: number;
  @Input()
  columns!: number;
  @Input() isReadOnly = false;
  @Input() patient: IPatient | undefined;

  @Output() cardSelected = new EventEmitter<boolean>();

  constructor(private snackbar: MatSnackBar) {}

  onSavePatient(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.snackbar.open('Success', undefined, {
        duration: 3000,
      });
    }, this.getRandomTimeoutValue());
  }

  onCardSelected() {
    this.cardSelected.emit(true);
  }

  toggleExpandAll() {
    //TODO: toggle expanding all sections
  }

  private getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }
}
