import AddressStep from "./steps/AddressStep";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import ProfileStep from "./steps/ProfileStep";


const MultiStepForm = ({ currentStep }: { currentStep: number }) => { 
    return (
        <div>
            {currentStep === 0 && <ProfileStep />}
            {currentStep === 1 && <PersonalInfoStep />}
            {currentStep === 2 && <AddressStep />}
        </div>
    )
}

export default MultiStepForm;