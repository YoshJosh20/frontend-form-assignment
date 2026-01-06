import { useFormContext } from "react-hook-form";
import { ErrorMessage, Field, Label } from "../../components/fieldset";
import { Input } from "../../components/input";
import { Select } from "../../components/select";
import { type FormValues } from "../../helpers/types";
import { FormFieldNames } from "../../helpers/consts";

const AddressStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-medium text-gray-900 w-full">Address</div>
      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Field>
            <Label htmlFor={FormFieldNames.COUNTRY}>Country</Label>
            <Select
              {...register(FormFieldNames.COUNTRY, {
                required: "Country is required",
              })}
              id={FormFieldNames.COUNTRY}
              name={FormFieldNames.COUNTRY}
              autoComplete="country-name"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </Select>
            {errors.country && (
              <ErrorMessage>{errors.country.message}</ErrorMessage>
            )}
          </Field>
        </div>

        <div className="col-span-full">
          <Field>
            <Label htmlFor={FormFieldNames.STREET_ADDRESS}>
              Street address
            </Label>
            <Input
              {...register(FormFieldNames.STREET_ADDRESS, {
                required: "Street address is required",
              })}
              id={FormFieldNames.STREET_ADDRESS}
              name={FormFieldNames.STREET_ADDRESS}
              type="text"
              autoComplete="street-address"
            />
            {errors.streetAddress && (
              <ErrorMessage>{errors.streetAddress.message}</ErrorMessage>
            )}
          </Field>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <Field>
            <Label htmlFor={FormFieldNames.CITY}>City</Label>
            <Input
              {...register(FormFieldNames.CITY, {
                required: "City is required",
              })}
              id={FormFieldNames.CITY}
              name={FormFieldNames.CITY}
              type="text"
              autoComplete="address-level2"
            />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field>
            <Label htmlFor={FormFieldNames.REGION}>State / Province</Label>
            <Input
              {...register(FormFieldNames.REGION, {
                required: "Region is required",
              })}
              id={FormFieldNames.REGION}
              name={FormFieldNames.REGION}
              type="text"
              autoComplete="address-level1"
            />
            {errors.region && (
              <ErrorMessage>{errors.region.message}</ErrorMessage>
            )}
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field>
            <Label htmlFor={FormFieldNames.POSTAL_CODE}>
              ZIP / Postal code
            </Label>
            <Input
              {...register(FormFieldNames.POSTAL_CODE)}
              id={FormFieldNames.POSTAL_CODE}
              name={FormFieldNames.POSTAL_CODE}
              type="text"
              autoComplete="postal-code"
            />
          </Field>
        </div>
      </div>
    </div>
  );
};

export default AddressStep;
