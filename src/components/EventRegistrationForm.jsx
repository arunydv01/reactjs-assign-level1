import React, { useState } from "react";
import useForm from "../hooks/useForm";
import useValidation from "../hooks/useValidation";
import "./EventRegistrationForm.css"; // Import the CSS file

const EventRegistrationForm = () => {
  const [isAttendingWithGuest, setIsAttendingWithGuest] = useState(false);

  const initialFormState = {
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "no",
    guestName: "",
  };

  const { formValues, handleChange, handleSubmit } = useForm(
    initialFormState,
    handleFormSubmit
  );
  const { errors, validateForm } = useValidation(
    formValues,
    isAttendingWithGuest
  );

  function handleFormSubmit() {
    alert(JSON.stringify(formValues, null, 2));
  }

  function onSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      handleSubmit();
    }
  }

  return (
    <div className="body">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            required
          />
          <label>Age</label>
          {errors.age && <span>{errors.age}</span>}
        </div>
        <div className="form-group1">
          <label>Are you attending with a guest?</label>
          <select
            name="attendingWithGuest"
            value={formValues.attendingWithGuest}
            onChange={(e) => {
              handleChange(e);
              setIsAttendingWithGuest(e.target.value === "yes");
            }}
            required
          >
          

            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        {isAttendingWithGuest && (
          <div className="form-group">
            <input
              type="text"
              name="guestName"
              value={formValues.guestName}
              onChange={handleChange}
              required
            />
            <label>Guest Name</label>
            {errors.guestName && <span>{errors.guestName}</span>}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
