export const FormFieldNames = {
    USERNAME: 'username',
    ABOUT: 'about',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    COUNTRY: 'country',
    STREET_ADDRESS: 'streetAddress',
    CITY: 'city',
    REGION: 'region',
    POSTAL_CODE: 'postalCode',
  }

  export const STEP_FIELDS = {
    0: [FormFieldNames.USERNAME, FormFieldNames.ABOUT],
    1: [FormFieldNames.FIRST_NAME, FormFieldNames.LAST_NAME, FormFieldNames.EMAIL],
    2: [FormFieldNames.COUNTRY, FormFieldNames.STREET_ADDRESS, FormFieldNames.CITY, FormFieldNames.REGION, FormFieldNames.POSTAL_CODE],
  } as const;

  export const StepStatus = {
    COMPLETED: "completed",
    CURRENT: "current",
    UPCOMING: "upcoming",
  } as const;