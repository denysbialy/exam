import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { payRequest, clearPaymentStore } from '../../actions/actionCreator';
import PayForm from '../../components/PayForm/PayForm';
import styles from './Payment.module.sass';
import CONSTANTS from '../../constants';
import Error from '../../components/Error/Error';
import { Link, useHistory } from 'react-router-dom';
import PaymentInfoOrder from 'components/PaymentInfoOrder/PaymentInfoOrder';

const Payment = props => {
  const history = useHistory();

  const payment = useSelector(state => state.payment);
  const contestStore = useSelector(state => state.contestStore);

  const dispatch = useDispatch()
  const payDispatch = ({data, history}) => dispatch(payRequest(data, history));
  const clearPayment = () => dispatch(clearPaymentStore());

  const pay = values => {
    const { contests } = contestStore;
    const contestArray = [];
    Object.keys(contests).forEach(key => contestArray.push(contests[key]));
    const { number, expiry, cvc } = values;
    const data = new FormData();
    for (let i = 0; i < contestArray.length; i++) {
      data.append('files', contestArray[i].file);
      contestArray[i].haveFile = !!contestArray[i].file;
    }
    data.append('number', number);
    data.append('expiry', expiry);
    data.append('cvc', cvc);
    data.append('contests', JSON.stringify(contestArray));
    data.append('price', '100');
    payDispatch({
      data: {
        formData: data,
      },
      history,
    });
  };

  const goBack = () => {
    history.goBack();
  };

  const { error } = payment;

  if (isEmpty(contestStore.contests)) {
    history.replace('startContest');
  }
  return (
    <>
      <div className={styles.header}>
        <Link to='/'>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
            alt='blue_logo'
          />
        </Link>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.paymentContainer}>
          <span className={styles.headerLabel}>Checkout</span>
          {error && ( <Error data={error.data} status={error.status} clearError={clearPayment}/>)}
          <PayForm sendRequest={pay} back={goBack} isPayForOrder />
        </div>
        <PaymentInfoOrder />
      </div>
    </>
  );
};

export default Payment;
