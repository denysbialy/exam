import ProgressBar from './ProgressBar/ProgressBar';
import styles from './ContestHeader.module.sass'
import CONSTANTS from '../../../constants'
const StartContestHeader = () => {
  return (
    <>
      <div className={styles.startContestHeader}>
        <div className={styles.startContestInfo}>
          <h2>{CONSTANTS.START_CONTEST_HEADER.title}</h2>
          <span>{CONSTANTS.START_CONTEST_HEADER.description}</span>
        </div>
        <ProgressBar currentStep={1} />
      </div>
    </>
  );
};

export default StartContestHeader;
