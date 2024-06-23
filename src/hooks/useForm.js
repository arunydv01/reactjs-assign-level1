import { useState } from 'react';

const useForm = (initialState, callback) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    callback();
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
