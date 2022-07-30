import styles from './PhoneHeader.module.sass';
import CONSTANTS from '../../../constants';

function PhoneHeader () {
  return (
    <div className={styles.numberContainer}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt='phone' />
      <a href={`tel:${CONSTANTS.phoneHeader}`}>{CONSTANTS.phoneHeader}</a>
    </div>
  );
}

export default PhoneHeader;
