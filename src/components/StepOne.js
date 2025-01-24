'use client';

import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState, useEffect } from "react";

const StepOne = ({ onClick, profile, setProfile }) => {
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        username: ""
    });

    useEffect(() => {
        // localStorage.setItem("firstName", profile.firstName);
        // localStorage.setItem("lastName", profile.lastName);
        // localStorage.setItem("username", profile.username);
    }, [profile]);

    const onChange = (e, name) => {
        const { value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));

        if (value.length === 0) {
            setError((prev) => ({ ...prev, [name]: "This field is required" }));
        } else {
            setError((prev) => ({ ...prev, [name]: "" }));
        }
    };


    // const handleContinue = () => {
    //     if (validFirstName) {
    //         setError({ firstName: "This field is required" })
    //     } else if(validLastName){
    //         setError({ lastName: "This field is required" })
    //     } else if(validUsername) {
    //         setError({ username: "This field is required" })
    //     } else {
    //         onClick();
    //     }
    // }

    const handleContinue = () => {
        let isValid = true;

        if (profile.firstName.length === 0) {
            isValid = false;
            setError((prev) => ({ ...prev, firstName: "zaawal buglu" }));
        }
        if (profile.lastName.length === 0) {
            isValid = false;
            setError((prev) => ({ ...prev, lastName: "zaawal buglu" }));
        }
        if (profile.username.length === 0) {
            isValid = false;
            setError((prev) => ({ ...prev, username: "zaawal buglu" }));
        }

        if (isValid) {
            onClick();
        }
    }

    const validFirstName = profile.firstName && !error.firstName;
    const validLastName = profile.lastName && !error.lastName;
    const validUsername = profile.username && !error.username;

    // const isValid = profile.firstName && profile.lastName && profile.username && !error.firstName && !error.lastName && !error.username.length;
    const isValid = Object.values(error).reduce((prev, cur) => {
        if (prev === false) return prev
        if (cur.length !== 0) return false
        return true
    }, true)

    return (
        <div className="bg-white p-8 flex flex-col rounded-lg">
            <Header />
            <div className="flex flex-col gap-3 mb-24">
                <Input label={"First name"} type={"text"} onChange={(e) => onChange(e, "firstName")} name="firstName" value={profile.firstName} />
                {error.firstName && <p className="text-red-500">{error.firstName}</p>}
                <Input label={"Last name"} type={"text"} onChange={(e) => onChange(e, "lastName")} name={"lastName"} value={profile.lastName} />
                {error.lastName && <p className="text-red-500">{error.lastName}</p>}
                <Input label={"Username"} type={"text"} onChange={(e) => onChange(e, "username")} name={"username"} value={profile.username} />
                {error.username && <p className="text-red-500">{error.username}</p>}
            </div>
            <div className="flex justify-between gap-2">
                <Button text={"Continue 1/3"} type={"continue"} onClick={handleContinue} disabled={!isValid} />
            </div>
        </div>
    )
}
export default StepOne;