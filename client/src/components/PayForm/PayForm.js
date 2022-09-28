import React from 'react';

import { Form, Formik } from 'formik';
import 'react-credit-cards/es/styles-compiled.css';
import { connect } from 'react-redux';
import styles from './PayForm.module.sass';
import { changeFocusOnCard } from '../../actions/actionCreator';
import PayInput from '../InputComponents/PayInput/PayInput';
import Schems from '../../validators/validationSchems';
import { useHistory } from 'react-router-dom';
import CardView from 'pages/Payment/CardView/CardView';

const PayForm = props => {
  const history = useHistory();

  const changeFocusOnCard = name => {
    props.changeFocusOnCard(name);
  };

  const pay = values => {
    props.sendRequest(values);
  };

  const { isPayForOrder } = props;
  return (
    <div className={styles.payFormContainer}>
      <span className={styles.headerInfo}>Payment Information</span>
      <Formik
        initialValues={{
          focusOnElement: '',
          name: '',
          number: '',
          cvc: '',
          expiry: '',
        }}
        onSubmit={pay}
        validationSchema={Schems.PaymentSchema}
      >
        {({ values }) => {
          return (
            <>
              <CardView values={values} focusOnElement={props.focusOnElement} />
              <Form id='myForm' className={styles.formContainer}>
                <div className={styles.bigInput}>
                  <span>Name</span>
                  <PayInput
                    name='name'
                    classes={{
                      container: styles.inputContainer,
                      input: styles.input,
                      notValid: styles.notValid,
                      error: styles.error,
                    }}
                    type='text'
                    label='name'
                    changeFocus={changeFocusOnCard}
                  />
                </div>
                {!isPayForOrder && (
                  <div className={styles.bigInput}>
                    <span>Sum</span>
                    <PayInput
                      name='sum'
                      classes={{
                        container: styles.inputContainer,
                        input: styles.input,
                        notValid: styles.notValid,
                        error: styles.error,
                      }}
                      type='text'
                      label='sum'
                    />
                  </div>
                )}
                <div className={styles.bigInput}>
                  <span>Card Number</span>
                  <PayInput
                    isInputMask
                    mask='9999 9999 9999 9999 999'
                    name='number'
                    classes={{
                      container: styles.inputContainer,
                      input: styles.input,
                      notValid: styles.notValid,
                      error: styles.error,
                    }}
                    type='text'
                    label='card number'
                    changeFocus={changeFocusOnCard}
                  />
                </div>
                <div className={styles.smallInputContainer}>
                  <div className={styles.smallInput}>
                    <span>* Expires</span>
                    <PayInput
                      isInputMask
                      mask='99/99'
                      name='expiry'
                      classes={{
                        container: styles.inputContainer,
                        input: styles.input,
                        notValid: styles.notValid,
                        error: styles.error,
                      }}
                      type='text'
                      label='expiry'
                      changeFocus={changeFocusOnCard}
                    />
                  </div>
                  <div className={styles.smallInput}>
                    <span>* Security Code</span>
                    <PayInput
                      isInputMask
                      mask='9999'
                      name='cvc'
                      classes={{
                        container: styles.inputContainer,
                        input: styles.input,
                        notValid: styles.notValid,
                        error: styles.error,
                      }}
                      type='text'
                      label='cvc'
                      changeFocus={changeFocusOnCard}
                    />
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
      {isPayForOrder && (
        <div className={styles.totalSum}>
          <span>Total: $100.00</span>
        </div>
      )}
      <div className={styles.buttonsContainer}>
        <button form='myForm' className={styles.payButton} type='submit'>
          <span>{isPayForOrder ? 'Pay Now' : 'CashOut'}</span>
        </button>
        {isPayForOrder && (
          <div onClick={() => history.goBack()} className={styles.backButton}>
            <span>Back</span>
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  changeFocusOnCard: data => dispatch(changeFocusOnCard(data)),
});

export default connect(null, mapDispatchToProps)(PayForm);
