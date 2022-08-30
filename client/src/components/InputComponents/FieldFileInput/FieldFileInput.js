import React from 'react';
import { useField } from 'formik';
import styles from './FieldFileInput.module.sass';
const FieldFileInput = ({ classes, name, ...rest }) => {
  const [{ value, ...restField }, meta, helpers] = useField(name);

  const onChange = e => {
    const file = e.target.files[0];
    helpers.setValue(file);
  };

  const getFileName = () => {
    if (value) {
      return value.name;
    }
    return '';
  };

  return (
    <div className={styles.fileUploadContainer}>
      <label htmlFor='fileInput' className={styles.label}>
        Choose file
      </label>
      <span id='fileNameContainer' className={styles.fileNameClass}>
        {getFileName()}
      </span>
      <input
        {...restField}
        className={styles.fileInput}
        id='fileInput'
        type='file'
        onChange={onChange}
      />
    </div>
  );
};

export default FieldFileInput;
