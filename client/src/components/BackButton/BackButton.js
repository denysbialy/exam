import { useHistory, withRouter } from 'react-router-dom';
import styles from './BackButton.module.sass';

const BackButton = () => {
  const history = useHistory();
  return (
    <button onClick={() => history.goBack()} className={styles.buttonContainer}>
      Back
    </button>
  );
};

export default withRouter(BackButton);
