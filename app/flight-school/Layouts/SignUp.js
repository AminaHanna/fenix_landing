"use client";

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'keep-react';
import React, { useState } from 'react';
import { signupValidation } from '../../../utils/validations';
import { eyeCloseIcon, eyeOpenIcon } from '../../../data/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../api/baseUrl';

function SignUp({auth,closeAuthState,nextAuth}) {
    const [loading, setLoading] = useState(false); // State for managing loading

    const [togglePassword, setTogglePassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const navigate = useNavigate();

    const togglePasswordVisibility = (field) => {
        setTogglePassword((prev) => ({
            ...prev,
            [field]: !prev[field], // Toggle the specific field
        }));
    };

    const preventCopyPaste = (e) => {
        e.preventDefault(); // Prevent the default action (copy/paste)
        toast.error("Copy and Paste is disabled for password fields.");
    };

    const onSubmit = async (values, { resetForm }) => {
        setLoading(true); // Set loading to true when form is submitted
        try {
            const data = {
                email:values.email,
                firstName: values.firstName,
                middleName: values.middleName ? values.middleName : undefined,
                lastName: values.lastName,
                password: values.password,
            };

            const response = await axios.post(`${SERVER_URL}/student/enroll`, data);
            toast.success(response.data?.message || "Enrolled successfully");

            setTogglePassword({
                password: false,
                confirmPassword: false,
            });

            // Reset form fields
            resetForm();
            nextAuth(2);
        } catch (error) {
            toast.error(
                error?.response?.data?.message || error?.message || "An error occurred during submission"
            );
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div onClick={(e)=>e.target.id == 'outside-sign-up' && closeAuthState() } id='outside-sign-up' className="max-w-[100vw] px-4 md:px-0 fixed z-[100] w-full max-h-[100vh] flex items-center justify-center h-full bg-black/40">
            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    middleName: '',
                    lastName:'',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={signupValidation}
                onSubmit={onSubmit} // Use the onSubmit function defined above
            >
                {({ errors, touched }) => (
                    <Form className="max-w-[400px] p-6 flex flex-col justify-start items-center h-fit w-full bg-white rounded">
                        <div className="w-full pb-2">
                            <label htmlFor="" className="text-lg font-bold">Enroll Now</label>
                        </div>

                        <div className="w-full">
                            <label htmlFor="" className="text-sm py-2">Student Name (As your passport name) <span className="text-red-600">*</span></label>
                            <Field
                                type="text"
                                placeholder="Enter your first name*"
                                name="firstName"
                                disabled={loading} // Disable input during loading
                                className="outline-none border px-4 rounded w-full py-2 text-sm"
                            />
                            <ErrorMessage name="firstName" className="text-red-500 text-sm mt-1 font-medium" component="div" />
                        </div>

                        <div className="w-full mt-2">
                            {/* <label htmlFor="" className="text-sm py-2">Student Name <span className="text-red-600">*</span></label> */}
                            <Field
                                type="text"
                                placeholder="Enter middle name"
                                name="middleName"
                                disabled={loading} // Disable input during loading
                                className="outline-none border px-4 rounded w-full py-2 text-sm"
                            />
                            <ErrorMessage name="middleName" className="text-red-500 text-sm mt-1 font-medium" component="div" />
                        </div>

                        <div className="w-full mt-2">
                            {/* <label htmlFor="" className="text-sm py-2">Student Name <span className="text-red-600">*</span></label> */}
                            <Field
                                type="text"
                                placeholder="Enter your last name*"
                                name="lastName"
                                disabled={loading} // Disable input during loading
                                className="outline-none border px-4 rounded w-full py-2 text-sm"
                            />
                            <ErrorMessage name="lastName" className="text-red-500 text-sm mt-1 font-medium" component="div" />
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
                            <ErrorMsg name={'email'} />
                        </div>

                        <div className="w-full mt-2 relative">
                            <label htmlFor="" className="text-sm py-2">Student Password <span className="text-red-600">*</span></label>
                            <Field
                                type={togglePassword.password ? "text" : "password"}
                                placeholder="Enter your password"
                                name="password"
                                disabled={loading} // Disable input during loading
                                onCopy={preventCopyPaste} // Disable copy
                                onPaste={preventCopyPaste} // Disable paste
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
                            <ErrorMsg name={'password'} />
                        </div>

                        <div className="w-full mt-2 relative">
                            <label htmlFor="" className="text-sm py-2">Confirm Password <span className="text-red-600">*</span></label>
                            <Field
                                type={togglePassword.confirmPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                name="confirmPassword"
                                disabled={loading} // Disable input during loading
                                onCopy={preventCopyPaste} // Disable copy
                                onPaste={preventCopyPaste} // Disable paste
                                className="outline-none border px-4 rounded w-full py-2 text-sm"
                            />
                            {togglePassword.confirmPassword ? (
                                <img
                                    src={eyeOpenIcon}
                                    alt="show password"
                                    className="w-4 h-4 cursor-pointer absolute top-9 right-3"
                                    onClick={() => togglePasswordVisibility('confirmPassword')}
                                />
                            ) : (
                                <img
                                    src={eyeCloseIcon}
                                    alt="hide password"
                                    onClick={() => togglePasswordVisibility('confirmPassword')}
                                    className="w-4 h-4 cursor-pointer absolute top-9 right-3"
                                />
                            )}
                            <ErrorMsg name={'confirmPassword'} />
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

                        <label htmlFor="" className="text-sm pt-3 text-center w-full">
                            Already have an account?{" "}
                            <Link onClick={()=>auth(2)} className="cursor-pointer text-blue-700">
                                Login
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

export default SignUp;
