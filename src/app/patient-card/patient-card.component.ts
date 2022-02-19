import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amds-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent {
  @Input() isInitializing = true;
  @Input() isLoading = false;
  @Input() rows: number;

  onSavePatient(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, this.getRandomTimeoutValue());
  }

  getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }
}
