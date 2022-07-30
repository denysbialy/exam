import styles from './TopHeader.module.sass';
import CONSTANTS from '../../../constants';

function TopHeader () {
  return (
    <div className={styles.fixedHeader}>
      <span className={styles.info}>{CONSTANTS.topHeader.title}</span>
      <a href={CONSTANTS.topHeader.link}>{CONSTANTS.topHeader.textLink}</a>
    </div>
  );
}

export default TopHeader;
