import React from 'react';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
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

const variableOptions = {
  [CONSTANTS.NAME_CONTEST]: {
    styleName: '',
    typeOfName: '',
  },
  [CONSTANTS.LOGO_CONTEST]: {
    nameVenture: '',
    brandStyle: '',
  },
  [CONSTANTS.TAGLINE_CONTEST]: {
    nameVenture: '',
    typeOfTagline: '',
  },
};

class ContestForm extends React.Component {
  getPreference = () => {
    const { contestType } = this.props;
    switch (contestType) {
      case CONSTANTS.NAME_CONTEST: {
        this.props.getData({
          characteristic1: 'nameStyle',
          characteristic2: 'typeOfName',
        });
        break;
      }
      case CONSTANTS.TAGLINE_CONTEST: {
        this.props.getData({ characteristic1: 'typeOfTagline' });
        break;
      }
      case CONSTANTS.LOGO_CONTEST: {
        this.props.getData({ characteristic1: 'brandStyle' });
        break;
      }
    }
  };

  componentDidMount () {
    this.getPreference();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.contestType !== this.props.contestType) {
      this.getPreference();
    }
  }

  render () {
    const { isFetching, error } = this.props.dataForContest;
    if (error) {
      return <TryAgain getData={this.getPreference} />;
    }
    if (isFetching) {
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
              ...variableOptions[this.props.contestType],
              ...this.props.initialValues,
            }}
            onSubmit={this.props.handleSubmit}
            validationSchema={Schems.ContestSchem}
            innerRef={this.props.formRef}
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
                  optionsArray={this.props.dataForContest.data.industry}
                />
              </div>
              {CONSTANTS.FORM_TEXT_AREA.map(formTextArea => {
                return (
                  <div className={styles.inputContainer} key={formTextArea.name}>
                    <span className={styles.inputHeader}>{formTextArea.title}</span>
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
              <OptionalSelects {...this.props} />
              
              <FieldFileInput
                name='file'
                classes={{
                  fileUploadContainer: styles.fileUploadContainer,
                  labelClass: styles.label,
                  fileNameClass: styles.fileName,
                  fileInput: styles.fileInput,
                  warning: styles.warning,
                }}
                type='file'
              />
              {this.props.isEditContest ? (
                <button type='submit' className={styles.changeData}>
                  Set Data
                </button>
              ) : null}
            </Form>
          </Formik>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contestStore: state.contestStore,
    dataForContest: state.dataForContest,
    initialValues: ownProps.defaultData,
  };
};
const mapDispatchToProps = dispatch => ({
  getData: data => dispatch(getDataForContest(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContestForm)
);
