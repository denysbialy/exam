import { Link } from 'react-router-dom';
import styles from './RenderLoginButtons.module.sass';
import CONSTANTS from '../../../constants';

function RenderLoginButtons ({userStore, clearUser}) {
    const logOut = () => {
        localStorage.clear();
        clearUser();
      };

    const {data}= userStore;

  const renderLoginButton = () => {
    if (data) {
        return (
          <div className={styles.userButtonsContainer}>
            <div className={styles.userInfo}>
              <img src={data.avatar === 'anon.png'? CONSTANTS.ANONYM_IMAGE_PATH: `${CONSTANTS.publicURL}${data.avatar}`}alt='user'/>
              <span>{`Hi, ${data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu'/>
              <ul>
                <li><Link to='/dashboard' style={{ textDecoration: 'none' }}><span>View Dashboard</span></Link></li>
                <li><Link to='/account' style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                <li><Link to='http:/www.google.com' style={{ textDecoration: 'none' }}><span>Messages</span></Link></li>
                <li><Link to='http:/www.google.com' style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link></li>
                <li><button onClick={logOut}>Logout</button></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt='email'/>
          </div>
        );
      }
      return (
        <div className={styles.userButtonsContainer}>
          <Link to='/login' style={{ textDecoration: 'none' }}><button className={styles.btn}>LOGIN</button></Link>
          <Link to='/registration' style={{ textDecoration: 'none' }}><button className={styles.btn}>SIGN UP</button></Link>
        </div>
      );
  };
  return <>{renderLoginButton()}</>;
}

export default RenderLoginButtons;
