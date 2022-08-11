import ProgressBar from './ProgressBar/ProgressBar';
import styles from './ContestHeader.module.sass';
import CONSTANTS from '../../../constants';

const ContestCreationHeader = ({ title }) => {
  return (
    <>
      <div className={styles.startContestHeader}>
        <div className={styles.startContestInfo}>
          <h2>{title}</h2>
          <span>{CONSTANTS.CONTEST_CREATION_HEADER.description}</span>
        </div>
        <ProgressBar currentStep={2} />
      </div>
    </>
  );
};

export default ContestCreationHeader;
