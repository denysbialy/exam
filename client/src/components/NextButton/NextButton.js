import styles from './NextButton.module.sass';

const NextButton = props => {
  return (
    <button onClick={props.submit} className={styles.buttonContainer}>Next</button>
  );
};

export default NextButton;
