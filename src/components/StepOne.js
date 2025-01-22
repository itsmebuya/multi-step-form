import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

const StepOne = ({onClick}) => {
    return (
        <div className="bg-white p-8 flex flex-col rounded-lg">
            <Header />
            <div className="flex flex-col gap-3 mb-24">
                <Input label={"First name"} type={"text"} />
                <Input label={"Last name"} type={"text"} />
                <Input label={"Username"} type={"text"} />
            </div>
            <div className="flex justify-between gap-2">
                <Button text={"Continue 1/3"} type={"continue"} onClick={onClick} />
            </div>



        </div>
    )
}
export default StepOne;