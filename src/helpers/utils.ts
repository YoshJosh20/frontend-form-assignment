import { StepStatus } from "./consts";

export const getStepStatus = (currentStep: number, stepIdx: number, isSuccess: boolean) => {
    if (currentStep > stepIdx || isSuccess) {
        return StepStatus.COMPLETED;
    }
    if (currentStep === stepIdx) {
        return StepStatus.CURRENT;
    }
    return StepStatus.UPCOMING;
}