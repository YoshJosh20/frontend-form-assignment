import { FormFieldNames } from "./consts";
export type FormValues = {
    [FormFieldNames.USERNAME]: string;
    [FormFieldNames.ABOUT]: string;
    [FormFieldNames.FIRST_NAME]: string;
    [FormFieldNames.LAST_NAME]: string;
    [FormFieldNames.EMAIL]: string;
    [FormFieldNames.COUNTRY]: string;
    [FormFieldNames.STREET_ADDRESS]: string;
    [FormFieldNames.CITY]: string;
    [FormFieldNames.REGION]: string;
    [FormFieldNames.POSTAL_CODE]: string;
  }

  export type StepStatus = "complete" | "current" | "upcoming";


