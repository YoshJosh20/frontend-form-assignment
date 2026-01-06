import { useFormContext } from "react-hook-form";
import { ErrorMessage, Field, Label } from "../../components/fieldset";
import { Input } from "../../components/input";
import { type FormValues } from "../../helpers/types";
import { FormFieldNames } from "../../helpers/consts";

const PersonalInfoStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-medium text-gray-900 w-full">
        Personal Information
      </div>
      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
        <div className="sm:col-span-3">
          <Field>
            <Label htmlFor={FormFieldNames.FIRST_NAME}>First name</Label>
            <Input
              {...register(FormFieldNames.FIRST_NAME, {
                required: "First name is required",
              })}
              id={FormFieldNames.FIRST_NAME}
              name={FormFieldNames.FIRST_NAME}
              type="text"
              autoComplete="given-name"
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName.message}</ErrorMessage>
            )}
          </Field>
        </div>
        <div className="sm:col-span-3">
          <Field>
            <Label htmlFor={FormFieldNames.LAST_NAME}>Last name</Label>
            <Input
              {...register(FormFieldNames.LAST_NAME, {
                required: "Last name is required",
              })}
              id={FormFieldNames.LAST_NAME}
              name={FormFieldNames.LAST_NAME}
              type="text"
              autoComplete="family-name"
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </Field>
        </div>

        <div className="sm:col-span-4">
          <Field>
            <Label htmlFor={FormFieldNames.EMAIL}>Email address</Label>
            <Input
              {...register(FormFieldNames.EMAIL, {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              id={FormFieldNames.EMAIL}
              name={FormFieldNames.EMAIL}
              type="email"
              autoComplete="email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </Field>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
