import { useState, useEffect } from 'react';

const UseForm = (callback, validate) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(inputs));
    setIsSubmitting(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleBlur = (event) => {
    setErrors(validate(inputs));
  };

  return {
    inputs,
    setInputs,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    handleSubmit,
    handleInputChange,
    handleBlur,
  };
};

export default UseForm;
