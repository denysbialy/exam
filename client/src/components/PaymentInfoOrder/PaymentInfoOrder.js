import React from 'react';
import styles from './PaymentInfoOrder.module.sass';
import CONSTANTS from '../../constants';

const PaymentInfoOrder = () => {
  return (
    <>
      <div className={styles.orderInfoContainer}>
        <span className={styles.orderHeader}>{CONSTANTS.PAYMENT_INFO_ORDER.header}</span>
        <div className={styles.packageInfoContainer}>
          <span className={styles.packageName}>{CONSTANTS.PAYMENT_INFO_ORDER.packageName}</span>
          <span className={styles.packagePrice}>{CONSTANTS.PAYMENT_INFO_ORDER.packagePrice}</span>
        </div>
        <div className={styles.resultPriceContainer}>
          <span>{CONSTANTS.PAYMENT_INFO_ORDER.total}</span>
          <span>{CONSTANTS.PAYMENT_INFO_ORDER.price}</span>
        </div>
        <a href='http://www.google.com'>{CONSTANTS.PAYMENT_INFO_ORDER.promocode}</a>
      </div>
    </>
  );
};

export default PaymentInfoOrder;
