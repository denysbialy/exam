import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import { useField } from 'formik';
import styles from './PayInput.module.sass';
const PayInput = props => {
  const { label, changeFocus, isInputMask, mask } = props;
  const [field, meta] = useField(props.name);
  const { touched, error } = meta;

  if (field.name === 'sum') {
    return (
      <div className={styles.inputContainer}>
        <input
          {...field}
          placeholder={label}
          className={classNames({
            [styles.notValid]: touched && error,
          })}
        />
        {touched && error && (
          <span className={styles.error}>
            {error.message}Field must not be empty
          </span>
        )}
      </div>
    );
  }
  if (isInputMask) {
    return (
      <div className={styles.inputContainer}>
        <InputMask
          mask={mask}
          maskChar={null}
          {...field}
          placeholder={label}
          className={classNames({
            [styles.notValid]: touched && error,
          })}
          onFocus={() => changeFocus(field.name)}
        />
        {touched && error && (
          <span className={styles.error}>
            {error.message}Field must not be empty
          </span>
        )}
      </div>
    );
  }
  return (
    <div className={styles.inputContainer}>
      <input
        {...field}
        placeholder={label}
        className={classNames({
          [styles.notValid]: touched && error,
        })}
        onFocus={() => changeFocus(field.name)}
      />
      {touched && error && (
        <span className={styles.error}>
          {error.message}Field must not be empty
        </span>
      )}
    </div>
  );
};

export default PayInput;
