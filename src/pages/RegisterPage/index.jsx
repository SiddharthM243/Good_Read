import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFormik } from 'formik'
import * as Yup from 'yup';



const RegisterPage = () => {

    const [responseData, setResponseData] = useState({
        responseText: '',
        responseClass: '',
    })

    // initial Values
    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: '',
    };

    // handlefor submit
    const onSubmit = (values) => {
        // console.log(values);
        fetch('https://orca-app-jhg4l.ondigitalocean.app/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((response) => {
                if (response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }

            })
            .then((json) => {

                setResponseData({
                    responseText: 'Registeration Successfully',
                    responseClass: 'alert alert-success'
                });
            })
            .catch((error) => {
                setResponseData({
                    responseText: 'Registration failed',
                    responseClass: 'alert alert-danger'
                })
            })

    }


    // handle form Validation
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("First Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("email is not valid"),
        mobile: Yup.number()
            .required("mobile is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "password must be at least 6 characters"),
    });






    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className={styles.wrapper}>
                        <div className={responseData.responseClass} role="alert">
                            {responseData.responseText}


                        </div>
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'}
                                    placeholder="firstName..." />
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <small className='text-danger'>{formik.errors.firstName}</small>) : null}
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                                    placeholder="email..." />
                                {formik.touched.email && formik.errors.email ? (
                                    <small className='text-danger'>{formik.errors.email}</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile">mobile</label>
                                <input
                                    type="number"
                                    id="mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'}
                                    placeholder="mobile..." />
                                {formik.touched.mobile && formik.errors.mobile ? (
                                    <small className='text-danger'>{formik.errors.mobile}</small>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                                    placeholder="password..." />
                                {formik.touched.password && formik.errors.password ? (
                                    <small className='text-danger'>{formik.errors.password}</small >) : null}
                            </div>


                            <input type="submit" value="Register" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        <p className="text-center">
                            Already have an account? <a href="/login">Login</a>
                        </p>

                    </div>

                </div>
            </div>


        </div>
    )




}


export default RegisterPage;