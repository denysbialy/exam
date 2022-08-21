import React from 'react';
import classNames from 'classnames';
import { Field, ErrorMessage } from 'formik';
import { textArea, borderArea } from './FormTextArea.module.sass';

const FormTextArea = ({ label, classes: { notValid, errorMsg }, ...rest }) => (
  <Field {...rest}>
    {({ field, meta: { touched, error } }) => {
      return (
        <>
          <textarea
            {...field}
            placeholder={label}
            className={classNames(textArea, {
              [notValid]: touched && error,
              [borderArea]: touched && error,
            })}
          />
          <ErrorMessage name={field.name}>
            {() => <div className={errorMsg}>Field must not be empty</div>}
          </ErrorMessage>
        </>
      );
    }}
  </Field>
);

export default FormTextArea;
