import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

const FormInput = ({ classes, label, name, ...rest }) => (
  <Field name={name}>
    {props => {
      const {
        field,
        meta: { touched, error },
      } = props;

      const inputClassName = classNames(classes.input, {
        [classes.inputError]: touched && error,
        [classes.valid]: touched && !error,
      });

      return (
        <div>
          <input
            type='text'
            {...field}
            placeholder={label}
            className={inputClassName}
            {...rest}
          />
          <ErrorMessage name={name}>
            {() => (
              <div className={classes.errorMsg}>Field must not be empty</div>
            )}
          </ErrorMessage>
        </div>
      );
    }}
  </Field>
);

export default FormInput;
