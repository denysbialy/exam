import { Link } from 'react-router-dom';
import styles from './NavigationMenu.module.sass';
import CONSTANTS from '../../../constants';
import DropDownList from './DropDownList/DropDownList';

function NavigationMenu ({ userStore }) {
  const navList = Object.keys(CONSTANTS.NAVIGATION_LINKS);

  return (
    <div className={styles.navContainer}>
      <Link to='/'>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
          className={styles.logo}
          alt='blue_logo'
        />
      </Link>

      <div className={styles.leftNav}>
        <div className={styles.nav}>
          <ul>
            {navList.map((elem, index) => (
              <li key={index}>
                <span>{elem}</span>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                  alt='menu'
                />

                <DropDownList navigation={CONSTANTS.NAVIGATION_LINKS[elem]} />
              </li>
            ))}
          </ul>
        </div>
        {userStore.data && userStore.data.role !== CONSTANTS.CREATOR && (
          <Link className={styles.startContestBtn} to='/startContest'>
            START CONTEST
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavigationMenu;
