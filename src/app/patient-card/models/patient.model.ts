export interface IPatient {
  id: number;
  chartnumber: string;
  names?: IPatientName[];
  ssn: string;
  dob: string; // using string to avoid time-zone shift when sending to the API
  gender: string;
  genderidentityid?: number;
  genderidentityotherid?: number;
  sexualorientationid?: number;
  sexualorientationotherid?: number;
  pronounes: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  countrycode: string;
  otherphone: string;
  othertype: string;
  officeextension: string;
  email: string;
  confidentialcommunicationid: number;
  profileid: number;
  employer: string;
  employerid: number;
  responsiblepartyid: number;
  newresponsibleparty: IPatientResponsibleParty;
  relationship: number;
  hipaarelationship: string;
  financialclassid: number;
  referringproviderid: number;
  communicationnote: string;
}

export enum PatientNameTypes {
  Legal = 0,
  PreviousLegal = 1,
  Other = 2
}

export interface IPatientName {
  id?: number;
  first: string;
  middle: string;
  last: string;
  full: string;
  type: PatientNameTypes;
  isPreferred: boolean;
}

export class PatientName implements IPatientName {
  id?: number;
  first: string;
  middle: string;
  last: string;
  full: string;
  type: any;
  isPreferred: boolean;

  constructor(
    first: string,
    middle: string,
    last: string,
    type: any,
    isPreferred: boolean,
    id?: number
  ) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    this.type = type;
    this.isPreferred = isPreferred;
    this.id = id;

    // construct patient full name
    if (typeof middle != 'undefined' && middle) {
      this.full = `${first} ${middle} ${last}`;
    } else {
      this.full = `${first} ${last}`;
    }
  }
}

export interface IPatientResponsibleParty {
  firstname: string;
  middlename: string;
  lastname: string;
}
