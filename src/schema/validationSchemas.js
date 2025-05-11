import * as yup from "yup";

export const stepOneSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
});

export const stepTwoSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().matches(/^\d{8}$/, "Phone number must be 8 digits").required("Phone number is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const stepThreeSchema = yup.object({
  date: yup.date()
    .required("Date of birth is required")
    .notOneOf([null, ""], "Date of birth cannot be empty") // Ensure it's not empty
    .typeError("Please provide a valid date"), // Custom error if it's not a valid date
  profileImage: yup.mixed()
    .required("Profile image is required")
    .test("fileSize", "File size is too large", (value) => value && value.size <= 5000000), // Example validation for file size (5MB)
});