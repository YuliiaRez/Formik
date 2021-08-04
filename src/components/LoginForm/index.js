import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import FORM_SCHEMA from './../../utils/validatingSchemes';

function LoginForm() {
    return (
        <div>
            <>
                <Formik
                    initialValues={
                        {
                            firstName: '',
                            lastName: '',
                            displayName: '',
                            email: '',
                            password: '',
                            passwordConfirm: '',

                        }
                    }
                    validateOnBlur
                    onSubmit={(values, formikBag) => (
                        formikBag.resetForm())
                    }
                    validationSchema={FORM_SCHEMA}
                >
                    {({ isValid, handleSubmit, dirty }) => {
                        return (
                            <div>
                                <Form>
                                    <h4>First name</h4>
                                    <Field type='text' name='firstName' placeholder="First name" />
                                    <br />
                                    <ErrorMessage name="firstName" component='div' />
                                    <h4>Last name</h4>
                                    <Field type='text' name='lastName' placeholder="Last name" />
                                    <br />
                                    <ErrorMessage name="lastName" component='div' />
                                    <h4>Display name</h4>
                                    <Field type='text' name='displayName' placeholder="Display name" />
                                    <br />
                                    <ErrorMessage name="displayName" component='div' />
                                    <h4>Email</h4>
                                    <Field type='email' name='email' placeholder="enter@email" />
                                    <br />
                                    <ErrorMessage name="email" component='div' />
                                    <h4>Password</h4>
                                    <Field type='password' name='password' placeholder="Password" />
                                    <ErrorMessage name="password" component='div' />
                                    <br />
                                    <h4>Confirm Password</h4>
                                    <Field type='password' name='passwordConfirm' placeholder="Password" />
                                    <ErrorMessage name="passwordConfirm" component='div' />
                                    <br />
                                </Form>
                                <button
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}
                                >Create account</button>
                            </div>
                        )

                    }}
                </Formik>
            </>
            )


        </div>
    )
}

export default LoginForm
