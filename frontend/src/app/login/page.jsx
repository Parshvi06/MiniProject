'use client';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

// Validation Schema
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Password too short!')
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

const Login = () => {
    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: SignupSchema,
    });

    return (
        <div 
            className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url('https://cdn.wallpapersafari.com/32/78/dTuctf.jpg')` }}
        >
            <div className='w-full max-w-md mx-auto bg-white rounded-lg border-2 border-gray-300 shadow-lg p-8'>
                <h1 className='text-2xl font-bold text-lime-500 mb-6 text-center'>Login Here</h1>
                <form onSubmit={signupForm.handleSubmit}>
                    {/* User Name Field */}
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-700 font-medium'>User Name</label>
                        <input
                            id='name'
                            name='name'
                            onChange={signupForm.handleChange}
                            value={signupForm.values.name}
                            type="text"
                            className={`border rounded w-full px-3 py-2 mt-1 ${signupForm.touched.name && signupForm.errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {signupForm.touched.name && signupForm.errors.name ? (
                            <span className='text-sm text-red-500'>{signupForm.errors.name}</span>
                        ) : null}
                    </div>

                    {/* Email Field */}
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700 font-medium'>Email</label>
                        <input
                            id='email'
                            name='email'
                            onChange={signupForm.handleChange}
                            value={signupForm.values.email}
                            type="email"
                            className={`border rounded w-full px-3 py-2 mt-1 ${signupForm.touched.email && signupForm.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {signupForm.touched.email && signupForm.errors.email ? (
                            <span className='text-sm text-red-500'>{signupForm.errors.email}</span>
                        ) : null}
                    </div>

                    {/* Password Field */}
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700 font-medium'>Password</label>
                        <input
                            id='password'
                            name='password'
                            onChange={signupForm.handleChange}
                            value={signupForm.values.password}
                            type="password"
                            className={`border rounded w-full px-3 py-2 mt-1 ${signupForm.touched.password && signupForm.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {signupForm.touched.password && signupForm.errors.password ? (
                            <span className='text-sm text-red-500'>{signupForm.errors.password}</span>
                        ) : null}
                        {/* Forgot Password Link */}
                        <div className='mt-2'>
                            <a href='/forgotPassword' className='text-lime-500 hover:underline text-sm'>Forgot Password?</a>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className='mb-6'>
                        <label htmlFor="confirmPassword" className='block text-gray-700 font-medium'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            onChange={signupForm.handleChange}
                            value={signupForm.values.confirmPassword}
                            type="password"
                            className={`border rounded w-full px-3 py-2 mt-1 ${signupForm.touched.confirmPassword && signupForm.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword ? (
                            <span className='text-sm text-red-500'>{signupForm.errors.confirmPassword}</span>
                        ) : null}
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={signupForm.isSubmitting}
                        className='flex justify-center items-center bg-lime-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
                    >
                        {signupForm.isSubmitting ? <IconLoader3 className='animate-spin mr-2' size={20} /> : <IconCircleCheck className='mr-2' size={20} />}
                        <span>{signupForm.isSubmitting ? 'Please Wait' : 'Login'}</span>
                    </button>

                    {/* Create New Account Link */}
                    <div className='mt-4 text-center'>
                        <a href='/signup' className='text-lime-500 hover:underline text-sm'>Create a New Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
