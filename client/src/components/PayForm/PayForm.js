import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import 'react-credit-cards/es/styles-compiled.css';
import { useDispatch } from 'react-redux';

import styles from './PayForm.module.sass';
import { changeFocusOnCard } from '../../actions/actionCreator';
import PayInput from './PayInput/PayInput';
import Schems from '../../validators/validationSchems';
import CardView from 'components/PayForm/CardView/CardView';

const PayForm = props => {
  const dispatch = useDispatch();
  const changeFocusOnCardDispatch = data => dispatch(changeFocusOnCard(data));

  const history = useHistory();

  const pay = values => {
    props.sendRequest(values);
  };

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
                    type='text'
                    label='name'
                    changeFocus={changeFocusOnCardDispatch}
                  />
                </div>
                {!props.isPayForOrder && (
                  <div className={styles.bigInput}>
                    <span>Sum</span>
                    <PayInput name='sum' type='text' label='sum' />
                  </div>
                )}
                <div className={styles.bigInput}>
                  <span>Card Number</span>
                  <PayInput
                    isInputMask
                    mask='9999 9999 9999 9999 999'
                    name='number'
                    type='text'
                    label='card number'
                    changeFocus={changeFocusOnCardDispatch}
                  />
                </div>
                <div className={styles.smallInputContainer}>
                  <div className={styles.smallInput}>
                    <span>* Expires</span>
                    <PayInput
                      isInputMask
                      mask='99/99'
                      name='expiry'
                      type='text'
                      label='expiry'
                      changeFocus={changeFocusOnCardDispatch}
                    />
                  </div>
                  <div className={styles.smallInput}>
                    <span>* Security Code</span>
                    <PayInput
                      isInputMask
                      mask='9999'
                      name='cvc'
                      type='text'
                      label='cvc'
                      changeFocus={changeFocusOnCardDispatch}
                    />
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
      {props.isPayForOrder && (
        <div className={styles.totalSum}>
          <span>Total: $100.00</span>
        </div>
      )}
      <div className={styles.buttonsContainer}>
        <button form='myForm' className={styles.payButton} type='submit'>
          {props.isPayForOrder ? 'Pay Now' : 'CashOut'}
        </button>
        {props.isPayForOrder && (
          <button onClick={() => history.goBack()} className={styles.backButton}>Back</button>
        )}
      </div>
    </div>
  );
};

export default PayForm;
