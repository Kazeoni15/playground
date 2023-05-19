import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const Form1 = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Send a POST request to the server
      await axios.post('http://localhost:3000/api/data', values);

      // Reset the form after successful submission
      resetForm();

      // Display a success message to the user
      alert('Data submitted successfully!');
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    // Validate the form fields
    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    }

    return errors;
  };

  return (
    <div>
      <h1>Form Component</h1>
      <Formik
        initialValues={{ name: '', email: '' }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form1;
