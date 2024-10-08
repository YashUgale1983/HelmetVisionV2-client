import { useFormik } from "formik";
import { LoginFormSchema } from "./YupConfig";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useUser } from "../../contexts/userContext";

const initialValues = {
    email: "",
    password: ""
}

const Loginpage = ()=>{
    const { setUser } = useUser();
    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginFormSchema,
        onSubmit: async(values)=>{
            const email = values.email;
            const password = values.password;
            try{
                const res = await axios({
                    method: "POST",
                    url: "http://127.0.0.1:6001/auth/login",
                    data: {
                      email,
                      password
                    },
                    withCredentials: true,
                  });

                if(res.data.status === "success"){
                    toast.success("Logging you in...");
                    setTimeout(() => {
                        navigate("/home");
                        setUser(res.data.data.user);
                    }, 2000);
                }
            }catch(err){
                toast.error("Login failed. Check credentials or try again later...")
            }
        }
    })

    return (
        <>
        <div className='bg-white flex flex-row p-5 items-center justify-center space-x-3 mt-20'>
            <h1 className="text-3xl">HelmetVision</h1>
        </div>
        <div className="w-3/4 md:w-1/3 my-12 mx-auto bg-white p-10 rounded-2xl">
            <div className="text-3xl mb-10">Login</div>
            <form  onSubmit={handleSubmit} >
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-xl">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="bg-gray-200 p-2 rounded-lg"
                        placeholder="Enter your email..."
                    />
                    {errors.email && touched.email ? <p className="form-error text-sm text-red-600">{errors.email}</p> : null}
                </div>
                <div className="flex flex-col space-y-2 mt-4">
                    <label htmlFor="password" className="text-xl">Password:</label>
                    <input
                        type="text"
                        id="password"
                        value={values.password}
                        name="password"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="bg-gray-200 p-2 rounded-lg"
                        placeholder="Enter your password..."
                    />
                    {errors.password && touched.password ? <p className="form-error text-sm text-red-600">{errors.password}</p> : null }
                </div>
                <div className="mt-10 flex flex-row justify-between ">
                    <button type="submit" variant="contained" size="small">
                        Login
                    </button>
                    <button><Link to="/signup" className="text-sm text-blue-500 md:text-base">Sign up</Link></button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Loginpage;