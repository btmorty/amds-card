import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() rows: number;
  @Input() columns: number;
  @Input() isReadOnly = false;

  nameActive = false;
  identityActive = false;
  accountActive = false;

  onSavePatient(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, this.getRandomTimeoutValue());
  }

  toggleNameSectionActive() {
    this.nameActive = !this.nameActive;
  }

  toggleIdentitySectionActive() {
    this.identityActive = !this.identityActive;
  }

  toggleAccountSectionActive() {
    this.accountActive = !this.accountActive;
  }

  private getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }
}
