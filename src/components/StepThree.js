import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

const StepThree = ({onClick, backClick}) => {
    return (
        <div className="bg-white p-8 flex flex-col rounded-lg">
            <Header />
            <div className="flex flex-col gap-3 mb-24">
                <Input label={"Date of birth"} type={"date"} />
                <Input label={"Profile image"} type={"file"} />
            </div>
            <div className="flex justify-between gap-2">
                <Button text={"Back"} type={"back"} backClick= {backClick} />
                <Button text={"Continue 3/3"} type={"continue"} onClick={onClick} />
            </div>



        </div>
    )
}
export default StepThree;