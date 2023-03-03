import React from 'react';
import UseForm from '../components/UseForm';

const SignUpForm = () => {
  const submitForm = () => {
    // Handle the submission of the form here
    console.log('Form submitted');
  };

  const validate = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const { inputs, handleInputChange, handleBlur, handleSubmit, errors } = UseForm(submitForm, validate);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="my-4">
        <label htmlFor="firstName" className="block font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={inputs.firstName}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="border-2 border-gray-200 p-2 rounded-lg w-full"
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
      </div>
      <div className="my-4">
        <label htmlFor="lastName" className="block font-bold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={inputs.lastName}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="border-2 border-gray-200 p-2 rounded-lg w-full"
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
      </div>
      <div className="my-4">
        <label htmlFor="phone" className="block font-bold mb-2">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={inputs.phone}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="border-2 border-gray-200 p-2 rounded-lg w-full"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div className="my-4">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={inputs.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="border-2 border-gray-200 p-2 rounded-lg w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="my-4">
          <label htmlFor="password" className="block font-bold mb-2">
          Password
          </label>
          <input
                 type="password"
                 id="password"
                 name="password"
                 value={inputs.password}
                 onChange={handleInputChange}
                 onBlur={handleBlur}
                 className="border-2 border-gray-200 p-2 rounded-lg w-full"
               />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="my-4">
          <label htmlFor="confirmPassword" className="block font-bold mb-2">
          Confirm Password
          </label>
          <input
                 type="password"
                 id="confirmPassword"
                 name="confirmPassword"
                 value={inputs.confirmPassword}
                 onChange={handleInputChange}
                 onBlur={handleBlur}
                 className="border-2 border-gray-200 p-2 rounded-lg w-full"
               />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          <div className="my-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
          Sign Up
          </button>
          </div>
          </form>
          );
          };
          
          export default SignUpForm;
