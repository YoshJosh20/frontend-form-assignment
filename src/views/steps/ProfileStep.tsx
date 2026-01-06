import { useFormContext } from "react-hook-form";
import {
  Description,
  ErrorMessage,
  Field,
  Label,
} from "../../components/fieldset";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { type FormValues } from "../../helpers/types";
import { FormFieldNames } from "../../helpers/consts";

const ProfileStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-medium text-gray-900">Profile</div>
      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <Field>
            <Label htmlFor={FormFieldNames.USERNAME}>Username</Label>
            <Input
              {...register(FormFieldNames.USERNAME, {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
              id={FormFieldNames.USERNAME}
              name={FormFieldNames.USERNAME}
              type="text"
              placeholder="janesmith"
              className={errors.username ? "border-red-500" : ""}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </Field>
        </div>

        <div className="col-span-full">
          <Field>
            <Label htmlFor={FormFieldNames.ABOUT}>About</Label>
            <Textarea
              {...register(FormFieldNames.ABOUT, {
                required: "About is required",
              })}
              id={FormFieldNames.ABOUT}
              name={FormFieldNames.ABOUT}
              rows={3}
              defaultValue={""}
            />
            <Description>Write a few sentences about yourself.</Description>
            {errors.about && (
              <ErrorMessage>{errors.about.message}</ErrorMessage>
            )}
          </Field>
        </div>
      </div>
    </div>
  );
};

export default ProfileStep;
