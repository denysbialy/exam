import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../../constants';

function RenderLoginButtons ({props}) {

    const logOut = () => {
        localStorage.clear();
        props.clearUserStore();
      };

    const {data}= props;

  const renderLoginButton = () => {
    if (data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img src={data.avatar === 'anon.png'? CONSTANTS.ANONYM_IMAGE_PATH: `${CONSTANTS.publicURL}${data.avatar}`}alt='user'/>
              <span>{`Hi, ${data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt='menu'/>
              <ul>
                <li><Link to='/dashboard' style={{ textDecoration: 'none' }}><span>View Dashboard</span></Link></li>
                <li><Link to='/account' style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                <li><Link to='http:/www.google.com' style={{ textDecoration: 'none' }}><span>Messages</span></Link></li>
                <li><Link to='http:/www.google.com' style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link></li>
                <li><span onClick={logOut}>Logout</span></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt='email'/>
          </>
        );
      }
      return (
        <>
          <Link to='/login' style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to='/registration' style={{ textDecoration: 'none' }}><span className={styles.btn}>SIGN UP</span></Link>
        </>
      );
  };
  return <>{renderLoginButton()}</>;
}

export default RenderLoginButtons;
