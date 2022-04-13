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
  Legal = 'legal',
  PreviousLegal = 'previous',
  alternate = 'alternate'
}

export interface IPatientName {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  full: string;
  type: PatientNameTypes;
  isPreferred: boolean;
}

export class PatientName implements IPatientName {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  full: string;
  type: any;
  isPreferred: boolean;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    type: any,
    isPreferred: boolean,
    id?: number
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.type = type;
    this.isPreferred = isPreferred;
    this.id = id;

    // construct patient full name
    if (typeof middleName != 'undefined' && middleName) {
      this.full = `${firstName} ${middleName} ${lastName}`;
    } else {
      this.full = `${firstName} ${lastName}`;
    }
  }
}

export interface IPatientResponsibleParty {
  firstName: string;
  middleName: string;
  lastName: string;
}
