import { useState } from 'react';

const useValidation = (formValues, isAttendingWithGuest) => {
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const validationErrors = {};
      if (!formValues.name) {
        validationErrors.name = 'Name is required';
      }
      if (!formValues.email) {
        validationErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        validationErrors.email = 'Email is invalid';
      }
      if (!formValues.age) {
        validationErrors.age = 'Age is required';
      } else if (isNaN(formValues.age) || formValues.age <= 0) {
        validationErrors.age = 'Age must be a number greater than 0';
      }
      if (isAttendingWithGuest && !formValues.guestName) {
        validationErrors.guestName = 'Guest Name is required';
      }
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
    };
  
    return {
      errors,
      validateForm,
    };
  };
  
  export default useValidation;
  