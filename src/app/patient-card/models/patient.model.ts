export interface IPatient {
  names: IPatientName[];
}

export interface IPatientName {
  firstName: string;
  middleName: string;
  lastName: string;
  type: any;
  isPreferred: boolean;
}