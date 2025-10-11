"use client";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'keep-react';
import React, { useState } from 'react';
import { loginValidation } from '../../../utils/validations';
import { eyeCloseIcon, eyeOpenIcon } from '../../../data/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../api/baseUrl';
import { setLocalStorage, studentData, studentToken } from '../../../api/localStorage';

function Login({auth,closeAuthState}) {
    const [loading, setLoading] = useState(false); // State for managing loading

    const [togglePassword, setTogglePassword] = useState({
        password: false,
    });

    const navigate = useNavigate();

    const togglePasswordVisibility = (field) => {
        setTogglePassword((prev) => ({
            ...prev,
            [field]: !prev[field], // Toggle the specific field
        }));
    };


    const onSubmit = async (values, { resetForm }) => {
        setLoading(true); // Set loading to true when form is submitted
        try {
            const data = {
                ...values,
            };

            const response = await axios.post(`${SERVER_URL}/student/login`, data);

            toast.success("Logged in successfully");

            setTogglePassword({
                password: false,
            });

            // Reset form fields
            resetForm();

            setLocalStorage(studentToken, response.data?.token);
            setLocalStorage(studentData, response.data?.result,true);
            navigate('/student')
            window.location.reload();
        } catch (error) {
            toast.error(
                error?.response?.data?.message || error?.message || "An error occurred during submission"
            );
        } finally {
            setLoading(false); // Reset loading state
        }
    };


    const handleForgotPassword = () => {
        navigate('/forgot-password/forgot'); // Assuming you're using React Router for navigation
    };
    

    return (
        <div
        onClick={(e) => e.target.id == 'outside-login-up' && closeAuthState()}
        id='outside-login-up'
        className="max-w-[100vw] px-4 md:px-0 fixed z-[100] w-full max-h-[100vh] flex items-center justify-center h-full bg-black/40"
    >
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginValidation}
            onSubmit={onSubmit} // Use the onSubmit function defined above
        >
            {({ errors, touched }) => (
                <Form className="max-w-[400px] p-6 flex flex-col justify-start items-center h-fit w-full bg-white rounded">
                    <div className="w-full pb-2">
                        <label htmlFor="" className="text-lg font-bold">Login</label>
                    </div>
    
                    <div className="w-full mt-2">
                        <label htmlFor="" className="text-sm py-2">Student Mail <span className="text-red-600">*</span></label>
                        <Field
                            type="email"
                            placeholder="Enter your mail"
                            name="email"
                            disabled={loading} // Disable input during loading
                            className="outline-none border px-4 rounded w-full py-2 text-sm"
                        />
                        <ErrorMessage name={'email'} component="div" className="text-red-600 text-sm" />
                    </div>
    
                    <div className="w-full mt-2 relative">
                        <label htmlFor="" className="text-sm py-2">Student Password <span className="text-red-600">*</span></label>
                        <Field
                            type={togglePassword.password ? "text" : "password"}
                            placeholder="Enter your password"
                            name="password"
                            disabled={loading} // Disable input during loading
                            className="outline-none border px-4 rounded w-full py-2 text-sm"
                        />
                        {togglePassword.password ? (
                            <img
                                src={eyeOpenIcon}
                                alt="show password"
                                className="w-4 h-4 cursor-pointer absolute top-9 right-3"
                                onClick={() => togglePasswordVisibility('password')}
                            />
                        ) : (
                            <img
                                src={eyeCloseIcon}
                                alt="hide password"
                                onClick={() => togglePasswordVisibility('password')}
                                className="w-4 h-4 cursor-pointer absolute top-9 right-3"
                            />
                        )}
                        <ErrorMessage name={'password'} component="div" className="text-red-600 text-sm" />
                    </div>
    
                    <div className="mt-3 w-full rounded overflow-hidden text-white">
                        <button
                            disabled={loading} // Disable the button during loading
                            type="submit"
                            className="w-full h-[38px] py-2 border-none bg-[#D79B2A]"
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
    
                    {/* Forgot Password Link */}
                    <div className="mt-4 text-center w-full">
                        <Link
                            to={'/forgot-password/forgot'}
                            className="text-sm text-blue-700 cursor-pointer hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
    
                    <label htmlFor="" className="text-sm pt-3 text-center w-full">
                        Don&apos;t have an account? {" "}

                        <Link onClick={() => auth(1)} className="cursor-pointer text-blue-700">
                            Sign Up
                        </Link>
                    </label>
                </Form>
            )}
        </Formik>
    </div>
    
    );
}

function ErrorMsg({ name }) {
    return <ErrorMessage name={name} className="text-red-500 text-sm mt-1 font-medium" component="div" />;
}

export default Login;
