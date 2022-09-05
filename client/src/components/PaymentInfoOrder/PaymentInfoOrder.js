import React from 'react';
import styles from './PaymentInfoOrder.module.sass';
const PaymentInfoOrder = () => {
  return (
    <>
      <div className={styles.orderInfoContainer}>
        <span className={styles.orderHeader}>Order Summary</span>
        <div className={styles.packageInfoContainer}>
          <span className={styles.packageName}>Package Name: Standard</span>
          <span className={styles.packagePrice}>$100 USD</span>
        </div>
        <div className={styles.resultPriceContainer}>
          <span>Total:</span>
          <span>$100.00 USD</span>
        </div>
        <a href='http://www.google.com'>Have a promo code?</a>
      </div>
    </>
  );
};

export default PaymentInfoOrder;
