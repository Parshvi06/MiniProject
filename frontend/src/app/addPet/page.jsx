'use client';
import React from 'react';
import { IconSend,IconPaw } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

// Validation Schema
const validationSchema = Yup.object({
  breed: Yup.string().required('Pet breed is required'),
  type: Yup.string().required('Pet type is required'),
  gender: Yup.string().required('Pet gender is required'),
  age: Yup.number().required('Pet age is required').positive('Age must be a positive number').integer('Age must be an integer'),
  state: Yup.string().required('State is required'),
  contact_name: Yup.string().required('Contact name is required'),
  phone: Yup.string().required('phone number is required'),
  image: Yup.string().required('Image URL is required') // Expecting a URL string for image
});

const AddPetForm = () => {
  const formik = useFormik({
    initialValues: {
      breed: '',
      type: '',
      gender: '',
      age: '',
      state: '',
      contact_name: '',
      phone: '',
      image: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Check if an image file is present
        if (values.image instanceof File) {
          // Upload image
          const imageFormData = new FormData();
          imageFormData.append('file', values.image);
          imageFormData.append('upload_preset', 'mypreset');
          imageFormData.append('cloud_name', 'dmnl8ozex');

          const uploadResponse = await axios.post('https://api.cloudinary.com/v1_1/dmnl8ozex/image/upload', imageFormData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });

          // Include the image URL in the form data
          values.image = uploadResponse.data.secure_url;
        }

        // Send pet data to server
        const response = await axios.post('http://localhost:5000/pet/add', values);
        console.log(response.status);

        // Reset form and show success message
        resetForm();
        toast.success('Pet added successfully');
      } catch (err) { 
        console.error(err);
        toast.error(err.response?.data?.message || 'An error occurred');
      } finally {
        setSubmitting(false);
      }
    }
  });

  // Handle file change
  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      formik.setFieldValue('image', files[0]); // Set file object to state
    }
  };

  return (
    <div
      className='relative min-h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5e950775bee93b4c91e3d327/5752df7c-0739-4192-abb1-8a18da95a64d/Website+Background.png")' }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 z-10 my-12 mx-auto'>
          <h2 className='text-2xl font-bold text-lime-500 mb-6'>Add a New Pet</h2>
          <form onSubmit={formik.handleSubmit} className='space-y-6'>
            {/* Pet Breed */}
            <div>
              <label htmlFor='breed' className='block text-gray-700 font-medium mb-1'>Pet Breed</label>
              <input
                id='breed'
                name='breed'
                type='text'
                value={formik.values.breed}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.breed && formik.errors.breed ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.breed && formik.errors.breed ? (
                <span className='text-sm text-red-500'>{formik.errors.breed}</span>
              ) : null}
            </div>

            {/* Pet Type */}
            <div>
              <label htmlFor='type' className='block text-gray-700 font-medium mb-1'>Pet Type</label>
              <select
                id='type'
                name='type'
                value={formik.values.type}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.type && formik.errors.type ? 'border-red-500' : 'border-gray-300'}`}
                required
              >
                <option value=''>Select Type</option>
                <option value='Dog'>Dog</option>
                <option value='Cat'>Cat</option>
                <option value='Rabbit'>Rabbit</option>
              </select>
              {formik.touched.type && formik.errors.type ? (
                <span className='text-sm text-red-500'>{formik.errors.type}</span>
              ) : null}
            </div>
            {/* <div>
              <label htmlFor='gender' className='block text-gray-700 font-medium mb-1'>Gender</label>
              <select
                id='gender'
                name='gender'
                value={formik.values.gender}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                required
              >
                <option value=''>Select Gender</option>
                <option value='Dog'>Male</option>
                <option value='Cat'>Female</option>
                
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <span className='text-sm text-red-500'>{formik.errors.gender}</span>
              ) : null}
            </div> */}

<div>
              <label htmlFor='gender' className='block text-gray-700 font-medium mb-1'>Gender</label>
              <input
                id='gender'
                name='gender'
                type='text'
                value={formik.values.gender}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.gender && formik.errors.gender ? (
                <span className='text-sm text-red-500'>{formik.errors.gender}</span>
              ) : null}
            </div>

            {/* Pet Age */}
            <div>
              <label htmlFor='age' className='block text-gray-700 font-medium mb-1'>Pet Age (in years)</label>
              <input
                id='age'
                name='age'
                type='number'
                value={formik.values.age}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.age && formik.errors.age ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.age && formik.errors.age ? (
                <span className='text-sm text-red-500'>{formik.errors.age}</span>
              ) : null}
            </div>

            {/* Pet State */}
            <div>
              <label htmlFor='state' className='block text-gray-700 font-medium mb-1'>State</label>
              <input
                id='state'
                name='state'
                type='text'
                value={formik.values.state}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.state && formik.errors.state ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.state && formik.errors.state ? (
                <span className='text-sm text-red-500'>{formik.errors.state}</span>
              ) : null}
            </div>

            {/* contactName */}
            <div>
              <label htmlFor='contact_name' className='block text-gray-700 font-medium mb-1'>Contact Name</label>
              <input
                id='contact_name'
                name='contact_name'
                type='text'
                value={formik.values.contact_name}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.contact_name && formik.errors.contact_name ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.contact_name && formik.errors.contact_name ? (
                <span className='text-sm text-red-500'>{formik.errors.contact_name}</span>
              ) : null}
            </div>
                 {/* contactphone */}

            <div>
              <label htmlFor='phone' className='block text-gray-700 font-medium mb-1'> Phone</label>
              <input
                id='phone'
                name='phone'
                type='text'
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span className='text-sm text-red-500'>{formik.errors.phone}</span>
              ) : null}
            </div>


            {/* <div>
              <label htmlFor='description' className='block text-gray-700 font-medium mb-1'>Description</label>
              <textarea
                id='description'
                name='description'
                value={formik.values.description}
                onChange={formik.handleChange}
                rows='4'
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {formik.touched.description && formik.errors.description ? (
                <span className='text-sm text-red-500'>{formik.errors.description}</span>
              ) : null}
            </div> */}

            {/* Pet Image */}
            <div>
              <label htmlFor='image' className='block text-gray-700 font-medium mb-1'>Pet Image</label>
              <input
                id='image'
                name='image'
                type='file'
                onChange={handleFileChange}
                className={`border rounded-lg w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 ${formik.touched.image && formik.errors.image ? 'border-red-500' : 'border-gray-300'}`}
                accept='image/*'
                required
              />
              {formik.touched.image && formik.errors.image ? (
                <span className='text-sm text-red-500'>{formik.errors.image}</span>
              ) : null}
              {formik.values.image && typeof formik.values.image === 'string' && (
                <div className='mt-4'>
                  <p className='text-gray-600'>Selected image:</p>
                  <img
                    src={formik.values.image}
                    alt='Pet Preview'
                    className='w-32 h-32 object-cover mt-2'
                  />
                </div>
              )}
            </div>

            <button
              type='submit'
              disabled={formik.isSubmitting}
              className='w-full py-2 px-4 bg-lime-500 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-lime-600'
            >
              {formik.isSubmitting ? 'Adding...' : 'Add Pet'}
              <IconSend className='ml-2' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPetForm;
