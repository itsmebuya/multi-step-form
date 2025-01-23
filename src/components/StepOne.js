'use client';

import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";

const StepOne = ({ onClick, profile, setProfile }) => {
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        username: ""
    });

    const onChange = (e, name) => {
        console.log(e);

        const { value } = e.target;
        console.log(name + "---", value + "---");

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));

        if (value === "") {
            setError((prev) => ({ ...prev, [name]: "This field is required" }));
            console.log("value alga");

        } else {
            console.log("valuetai");

            setError((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleContinue = () => {
        if (test) {
            setError({ firstName: "aldaa" })
        }
        isValid ? onClick() : null
    }

    const test = !profile.firstName || !profile.lastName;

    const isValid = profile.firstName && profile.lastName && profile.username && !error.firstName && !error.lastName && !error.username;

    return (
        <div className="bg-white p-8 flex flex-col rounded-lg">
            <Header />
            <div className="flex flex-col gap-3 mb-24">
                <Input label={"First name"} type={"text"} onChange={(e) => onChange(e, "firstName")} name="firstName" value={profile.firstName} />
                {error.firstName && <p className="text-red-500">{error.firstName}</p>}
                <Input label={"Last name"} type={"text"} onChange={onChange} name={"lastName"} value={profile.lastName} />
                {error.lastName && <p className="text-red-500">{error.lastName}</p>}
                <Input label={"Username"} type={"text"} onChange={onChange} name={"username"} value={profile.username} />
                {error.username && <p className="text-red-500">{error.username}</p>}
            </div>
            <div className="flex justify-between gap-2">
                <Button text={"Continue 1/3"} type={"continue"} onClick={handleContinue} disabled={!isValid} />
            </div>
        </div>
    )
}
export default StepOne;