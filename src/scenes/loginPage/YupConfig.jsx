import * as Yup from "yup";

export const LoginFormSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email..."),
  password: Yup.string().required("Please enter your password..."),
});


// modify signup schema according to helmetVision API

// export const SignupSchema = Yup.object({
//   username: Yup.string()
//     .min(5)
//     .max(20)
//     .required("Please enter your username..."),
//   email: Yup.string().email().required("Please enter your email..."),
//   password: Yup.string().min(4).required("Please enter your password..."),
//   location: Yup.string().max(15).required("Please enter your location..."),
//   occupation: Yup.string()
//     .min(3)
//     .max(15)
//     .required("Please enter your occupation..."),
//   otp: Yup.string().min(6).max(6).required("Enter OTP sent on mail..."),
// });
