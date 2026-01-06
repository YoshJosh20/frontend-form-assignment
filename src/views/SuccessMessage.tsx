import { CheckIcon } from "@heroicons/react/24/solid";

const SuccessMessage = () => {  
    return (
        <div>
            <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center rounded-full bg-green-500/10 p-2"> <CheckIcon className="size-8 text-green-500" /> </div>
            <h1 className="text-2xl font-bold">Success!</h1>
            </div>
            <p> Your form has been submitted successfully.</p>
        </div>
    )
}

export default SuccessMessage;