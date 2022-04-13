import { Component } from '@angular/core';
import {
  CompactType,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';
import { IPatient, PatientName } from './patient-card/models/patient.model';

@Component({
  selector: 'amds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: GridsterConfig;
  items: Array<GridsterItem>;

  isInitialState = true;

  isPatientSelected = true;
  isInitPatient = false;
  isEmptyPatient = true;
  isPatientLoading = false;
  isPatientCardActive= true;

  isInitRespParty = false;
  isEmptyRespParty = false;
  isRespPartyCardActive = false;

  isInitInsurance = false;
  isEmptyInsurance = false;

  isInitCareTeam = false;
  isEmptyCareTeam = false;

  isInitReferral = false;
  isEmptyReferral = false;

  isInitMarketing = false;
  isEmptyMarketing = false;

  patient: IPatient | undefined = undefined;

  mockPatient: IPatient = {
    id: 1111,
    chartnumber: '1111',
    names: [
      new PatientName('Paula', '', 'Smith', 'legal', false),
      new PatientName('Pat', '', 'Smith', 'previous', true, 1)
    ],
    ssn: '111-11-1111',
    dob: '10-11-2000', // using string to avoid time-zone shift when sending to the API
    gender: 'Female',
    genderidentityid: 1,
    genderidentityotherid: undefined,
    sexualorientationid: 1,
    sexualorientationotherid: undefined,
    pronounes: 'She, Her, Hers',
    address1: '123 West Main Street',
    address2: '',
    city: 'Sunnydale City Heights',
    state: 'CA',
    zipcode: '91929-0000',
    countrycode: 'USA',
    otherphone: '801-223-3245',
    othertype: 'CELL',
    officeextension: '',
    email: 'junepatacupos@nelnet.com',
    confidentialcommunicationid: 1,
    profileid: 1,
    employer: 'AdvancedMD a Global Payments Company',
    employerid: 1,
    responsiblepartyid: 22222,
    newresponsibleparty: {
      firstName: 'Paula',
      middleName: '',
      lastName: 'Smith'
    },
    relationship: 18,
    hipaarelationship: 'SELF',
    financialclassid: 1,
    referringproviderid: 1,
    communicationnote: ''
  };

  get isAppInit() {
    return (
      this.isInitPatient ||
      this.isInitRespParty ||
      this.isInitInsurance ||
      this.isInitCareTeam ||
      this.isInitReferral ||
      this.isInitMarketing
    );
  }

  constructor() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.CompactLeftAndUp,
      fixedColWidth: 360,
      fixedRowHeight: 30,
      maxCols: 1,
      margin: 16,
      mobileBreakpoint: 0,
      draggable: {
        enabled: true,
        ignoreContent: true,
        dragHandleClass: 'amds-card-drag-icon',
      },
      pushItems: true,
      resizable: {
        enabled: true,
      },
    };

    this.items = [
      { id: 'PAT', cols: 1, rows: 8, y: 0, x: 0, minItemRows: 8 },
      { id: 'RSP', cols: 1, rows: 8, y: 0, x: 0, minItemRows: 8 },
      { id: 'INS', cols: 1, rows: 4, y: 0, x: 0 },
      { id: 'CRT', cols: 1, rows: 4, y: 0, x: 0 },
      { id: 'REF', cols: 1, rows: 4, y: 0, x: 0 },
      { id: 'MRK', cols: 1, rows: 4, y: 0, x: 0 },
    ];
  }

  test(): void {
    console.log('THIS IS A TEST');
  }

  // simulate initial load
  selectPatient(): void {
    this.patient = this.mockPatient;

    this.isInitialState = false;
    this.isInitPatient = true;
    this.isInitRespParty = true;
    this.isInitInsurance = true;
    this.isInitCareTeam = true;
    this.isInitReferral = true;
    this.isInitMarketing = true;

    setTimeout(() => {
      this.isInitPatient = false;
      this.isEmptyPatient = false;
      this.isPatientSelected = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitRespParty = false;
      this.isEmptyRespParty = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitInsurance = false;
      this.isEmptyInsurance = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitCareTeam = false;
      this.isEmptyCareTeam = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitReferral = false;
      this.isEmptyReferral = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitMarketing = false;
      this.isEmptyMarketing = true;
    }, this.getRandomTimeoutValue());
  }

  deselectPatient(): void {
    this.patient = undefined;
    this.isInitialState = true;
    this.isPatientSelected = false;
  }

  patientCardSelected() {
    this.isPatientCardActive = true;
    this.isRespPartyCardActive = false
  }

  respPartyCardSelected() {
    this.isRespPartyCardActive = true;
    this.isPatientCardActive = false;
  }

  private getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }
}
