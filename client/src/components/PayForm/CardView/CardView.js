import React from 'react';
import Cards from 'react-credit-cards';
import styles from './CardView.module.sass';
const CardView = props => {
  const { name, number, expiry, cvc } = props.values;
  return (
    <>
      <div className={styles.cardContainer}>
        <Cards
          number={number || ''}
          name={name || ''}
          expiry={expiry || ''}
          cvc={cvc || ''}
          focused={props.focusOnElement}
        />
      </div>
    </>
  );
};

export default CardView;
