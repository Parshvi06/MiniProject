'use client';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

// Validation Schema
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = () => {
    const forgotPasswordForm = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            setTimeout(() => {
                console.log(values);
                resetForm();
                setSubmitting(false);
            }, 3000);
        },
        validationSchema: ForgotPasswordSchema,
    });

    return (
        <div 
            className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/04/17/77/78/360_F_417777825_v7o8RvkQhxpZkE0ZBD4xwzri5hGFHkO3.jpg')` }}
        >
            <div className='w-full max-w-md mx-auto bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 rounded-lg border-2 border-gray-300 shadow-lg p-8'>
                <h1 className='text-2xl font-bold text-white mb-6 text-center'>Forgot Password</h1>
                <form onSubmit={forgotPasswordForm.handleSubmit}>
                    {/* Email Field */}
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-white font-medium'>Email Address</label>
                        <input
                            id='email'
                            name='email'
                            onChange={forgotPasswordForm.handleChange}
                            value={forgotPasswordForm.values.email}
                            type="email"
                            className={`border rounded w-full px-3 py-2 mt-1 ${forgotPasswordForm.touched.email && forgotPasswordForm.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {forgotPasswordForm.touched.email && forgotPasswordForm.errors.email ? (
                            <span className='text-sm text-red-500'>{forgotPasswordForm.errors.email}</span>
                        ) : null}
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={forgotPasswordForm.isSubmitting}
                        className='flex justify-center items-center bg-lime-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
                    >
                        {forgotPasswordForm.isSubmitting ? <IconLoader3 className='animate-spin mr-2' size={20} /> : <IconCircleCheck className='mr-2' size={20} />}
                        <span>{forgotPasswordForm.isSubmitting ? 'Please Wait' : 'Send Reset Link'}</span>
                    </button>

                    {/* Back to Login Link */}
                    <div className='mt-4 text-center'>
                        <a href='/login' className='text-white hover:underline text-sm'>Back to Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
