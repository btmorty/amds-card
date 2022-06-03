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
  Billing = 0,
  Legal = 1,
  Maiden = 2,
  Chosen = 3,
  Alternate = 4,
  Nickname = 5,
  Other = 6
}

export interface IPatientName {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  type?: PatientNameTypes;
  isBilling: boolean;
  isPreferred: boolean;
  isPrevious: boolean;
}

export class PatientName implements IPatientName {
  id?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  type?: PatientNameTypes;
  isBilling: boolean;
  isPreferred: boolean;
  isPrevious: boolean;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    isBilling: boolean,
    isPreferred: boolean,
    isPrevious: boolean,
    id?: number,
    type?: PatientNameTypes
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.type = type;
    this.isBilling = isBilling;
    this.isPreferred = isPreferred;
    this.isPrevious = isPrevious;
    this.id = id;

    // construct patient full name
    if (typeof middleName != 'undefined' && middleName) {
      this.fullName = `${firstName} ${middleName} ${lastName}`;
    } else {
      this.fullName = `${firstName} ${lastName}`;
    }
  }
}

export interface IPatientResponsibleParty {
  firstName: string;
  middleName: string;
  lastName: string;
}
