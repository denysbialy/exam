import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CONSTANTS from '../../constants';
import { getDataForContest } from '../../actions/actionCreator';
import styles from './ContestForm.module.sass';
import Spinner from '../Spinner/Spinner';
import FormInput from '../FormInput/FormInput';
import SelectInput from '../SelectInput/SelectInput';
import FieldFileInput from '../InputComponents/FieldFileInput/FieldFileInput';
import FormTextArea from '../InputComponents/FormTextArea/FormTextArea';
import TryAgain from '../TryAgain/TryAgain';
import Schems from '../../validators/validationSchems';
import OptionalSelects from '../OptionalSelects/OptionalSelects';
import { variableOptions } from './variableOptions';

const ContestForm = props => {
  const dataForContest = useSelector(state => state.dataForContest);
  const dispatch = useDispatch();
  const getData = data => dispatch(getDataForContest(data));

  const getPreference = () => {
    const { contestType } = props;
    switch (contestType) {
      case CONSTANTS.NAME_CONTEST: {
        getData({
          characteristic1: 'nameStyle',
          characteristic2: 'typeOfName',
        });
        break;
      }
      case CONSTANTS.TAGLINE_CONTEST: {
        getData({ characteristic1: 'typeOfTagline' });
        break;
      }
      case CONSTANTS.LOGO_CONTEST: {
        getData({ characteristic1: 'brandStyle' });
        break;
      }
    }
  };
  useEffect(() => {
    getPreference();
  }, [props.contestType]);

  if (dataForContest.error) {
    return <TryAgain getData={getPreference} />;
  }
  if (dataForContest.isFetching) {
    return <Spinner />;
  }
  return (
    <>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            title: '',
            industry: '',
            focusOfWork: '',
            targetCustomer: '',
            file: '',
            ...variableOptions[props.contestType],
            ...props.defaultData,
          }}
          onSubmit={props.handleSubmit}
          validationSchema={Schems.ContestSchem}
          innerRef={props.formRef}
          enableReinitialize
        >
          <Form>
            <div className={styles.inputContainer}>
              <span className={styles.inputHeader}>Title of contest</span>
              <FormInput
                name='title'
                label='Title'
                classes={{
                  input: styles.input,
                  warning: styles.warning,
                  inputError: styles.inputError,
                  errorMsg: styles.errorMsg,
                }}
              />
            </div>
            <div className={styles.inputContainer}>
              <SelectInput
                name='industry'
                header='Describe industry associated with your venture'
                optionsArray={dataForContest.data.industry}
              />
            </div>
            {CONSTANTS.FORM_TEXT_AREA.map(formTextArea => {
              return (
                <div className={styles.inputContainer} key={formTextArea.name}>
                  <span className={styles.inputHeader}>
                    {formTextArea.title}
                  </span>
                  <FormTextArea
                    name={formTextArea.name}
                    type='text'
                    label={formTextArea.label}
                    classes={{
                      errorMsg: styles.errorMsg,
                      inputError: styles.inputError,
                    }}
                  />
                </div>
              );
            })}
            <OptionalSelects {...props} dataForContest={dataForContest} />
            <FieldFileInput name='file' />
            {props.isEditContest ? (
              <button type='submit' className={styles.changeData}>
                Set Data
              </button>
            ) : null}
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default withRouter(ContestForm);
