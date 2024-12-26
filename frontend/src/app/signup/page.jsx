'use client';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

// Validation Schema
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/[a-z]/, 'Lowercase Letter Required')
    .matches(/[A-Z]/, 'Uppercase Letter Required')
    .matches(/[0-9]/, 'Number Required')
    .matches(/\W/, 'Special Character Required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Password must match')
});

const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
        console.log(values);
        // resetForm();
        setSubmitting(false);
      }, 3000);


      

      // MAKING A REQUEST
      axios.post('http://localhost:5000/userLog/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('User registered successfully');
        }).catch((err) => {
          console.log(err);
          console.log(err.response?.data);
          setSubmitting(false);
          toast.error(err?.response?.data?.message);
        });
    },
    validationSchema: SignupSchema
  });

  return (
    <div
      className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/024/269/835/original/cute-colors-animal-footprints-on-green-background-vector.jpg')` }}
    >
      <div className='w-full max-w-md mx-auto bg-white rounded-lg border-2 border-gray-300 shadow-lg p-8'>
        <h1 className='uppercase font-bold my-6 text-3xl text-center text-lime-500'>Signup Form</h1>
        <form onSubmit={signupForm.handleSubmit}>
          {/* Full Name Field */}
          <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700'>Full Name</label>
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
            <label htmlFor="email" className='block text-gray-700'>Email Address</label>
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
            <label htmlFor="password" className='block text-gray-700'>Password</label>
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
          </div>

          {/* Confirm Password Field */}
          <div className='mb-6'>
            <label htmlFor="confirmPassword" className='block text-gray-700'>Confirm Password</label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              onChange={signupForm.handleChange}
              value={signupForm.values.confirmPassword}
              type="password"
              disabled={signupForm.isSubmitting}
              className={`border rounded w-full px-3 py-2 mt-1 ${signupForm.touched.confirmPassword && signupForm.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            />
            {signupForm.touched.confirmPassword && signupForm.errors.confirmPassword ? (
              <span className='text-sm text-red-500'>{signupForm.errors.confirmPassword}</span>
            ) : null}
            {/* Forgot Password Link */}
            {/* <div className='mt-2'>
              <a href='/forgotPassword' className='text-lime-500 hover:underline text-sm'>Forgot Password?</a>
            </div> */}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={signupForm.isSubmitting}
            className='flex justify-center items-center bg-lime-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
          >
            {signupForm.isSubmitting ? <IconLoader3 className='animate-spin mr-2' size={20} /> : <IconCircleCheck className='mr-2' size={20} />}
            <span>{signupForm.isSubmitting ? 'Please Wait' : 'Submit'}</span>
          </button>

          {/* Already Have an Account Link */}
          <div className='mt-4 text-center'>
            <a href='/login' className='text-lime-500 hover:underline text-sm'>Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
