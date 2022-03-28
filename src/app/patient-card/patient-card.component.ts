import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amds-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent {
  @Input() isInitialState = true;
  @Input() initialStateMessage: string | undefined;
  @Input() isInitializing = false;
  @Input() isEmptyState = false;
  @Input() isLoading = false;
  @Input() isSelected = false;
  @Input() rows: number;
  @Input() columns: number;
  @Input() isReadOnly = false;

  @Output() cardSelected = new EventEmitter<boolean>();

  onSavePatient(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, this.getRandomTimeoutValue());
  }

  onCardSelected() {
    this.cardSelected.emit(true);
  }

  private getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }
}
