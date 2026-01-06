import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "./components/button";
import { useState } from "react";
import { useForm, FormProvider, type FieldErrors } from "react-hook-form";
import { type FormValues } from "./helpers/types";
import { STEP_FIELDS, StepStatus } from "./helpers/consts";
import SuccessMessage from "./views/SuccessMessage";
import MultiStepForm from "./views/MultiStepForm";
import { getStepStatus } from "./helpers/utils";

const steps = [
  { id: "01", name: "Profile" },
  { id: "02", name: "Personal information" },
  { id: "03", name: "Address" },
];

function App() {
  const methods = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { trigger } = methods;

  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Final form data:", data);
    setIsSuccess(true);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    //console any errors from form validation 
    console.log("errors", errors);
  };

  const handleNext = async () => {
    const fields = STEP_FIELDS[currentStep as keyof typeof STEP_FIELDS];
    const isValid = await trigger(fields);
   
    if (!isValid) {
      return;
    }
    setCurrentStep((step) => step + 1);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center w-full p-8">
      <div className="w-2xl">
        <nav aria-label="Progress">
          <ol className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0 dark:divide-white/15 dark:border-white/15">
            {steps.map((step, stepIdx) => {
              const stepStatus = getStepStatus(currentStep, stepIdx, isSuccess);
              return (
                <li key={step.name} className="relative md:flex md:flex-1">
                  {stepStatus === StepStatus.COMPLETED && (
                    <CompletedStep step={step} />
                  )}
                  {stepStatus === StepStatus.CURRENT && (
                    <CurrentStep step={step} />
                  )}
                  {stepStatus === StepStatus.UPCOMING && (
                    <UpcomingStep step={step} />
                  )}
                  {stepIdx !== steps.length - 1 ? (
                    <>
                      {/* Arrow separator for lg screens and up */}
                      <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 hidden h-full w-5 md:block"
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 22 80"
                          preserveAspectRatio="none"
                          className="size-full text-gray-300 dark:text-white/15"
                          aria-hidden="true"
                        >
                          <path
                            d="M0 -2L20 40L0 82"
                            stroke="currentcolor"
                            vectorEffect="non-scaling-stroke"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </nav>
        <FormProvider {...methods}>
          <form
            className="bg-white mt-8 w-full shadow-xs outline outline-gray-900/5 sm:rounded-xl md:col-span-2 dark:bg-gray-800/50 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
          >
            <div className="px-4 py-6 sm:p-8 min-h-[420px]">
              {isSuccess ? (
                <SuccessMessage />
              ) : (
                  <MultiStepForm currentStep={currentStep} />
              )}
            </div>
            {!isSuccess && (
              <FormFooter
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                handleNext={handleNext}
                onSubmit={methods.handleSubmit(onSubmit, onError)}
              />
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;

const FormFooter = ({
  currentStep,
  setCurrentStep,
  handleNext,
  onSubmit,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  handleNext: () => void;
  onSubmit: () => void;
}) => {
  const isLastStep = currentStep === steps.length - 1;
  return (
    <div
      className={` flex items-center gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 dark:border-white/10 ${
        currentStep === 0 ? "justify-end" : "justify-between"
      }`}
    >
      {currentStep > 0 && (
        <Button
          type="button"
          color="indigo"
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Previous
        </Button>
      )}
      <Button
        type="button"
        color="indigo"
        onClick={isLastStep ? onSubmit : handleNext}
      >
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

const UpcomingStep = ({ step }: { step: { id: string; name: string } }) => {
  return (
    <div className="group flex items-center">
      <span className="flex items-center px-6 py-4 text-sm font-medium">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400 dark:border-white/15 dark:group-hover:border-white/25">
          <span className="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
            {step.id}
          </span>
        </span>
        <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
          {step.name}
        </span>
      </span>
    </div>
  );
};

const CurrentStep = ({ step }: { step: { id: string; name: string } }) => {
  return (
    <div
      aria-current="step"
      className="flex items-center px-6 py-4 text-sm font-medium"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-indigo-600 dark:border-indigo-400">
        <span className="text-indigo-600 dark:text-indigo-400">{step.id}</span>
      </span>
      <span className="ml-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">
        {step.name}
      </span>
    </div>
  );
};

const CompletedStep = ({ step }: { step: { id: string; name: string } }) => {
  return (
    <div className="group flex w-full items-center">
      <span className="flex items-center px-6 py-4 text-sm font-medium">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 dark:bg-indigo-500 dark:group-hover:bg-indigo-400">
          <CheckIcon aria-hidden="true" className="size-6 text-white" />
        </span>
        <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">
          {step.name}
        </span>
      </span>
    </div>
  );
};
