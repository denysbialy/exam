import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import { clearUserStore } from '../../actions/actionCreator';
import RenderLoginButtons from './renderLoginButtons/RenderLoginButtons';
import TopHeader from './TopHeader/TopHeader';
import PhoneHeader from './PhoneHeader/PhoneHeader';
import NavigationMenu from './NavigationMenu/NavigationMenu';

function Header (props) {
  const userStore = useSelector(state => state.userStore);
  const dispatch = useDispatch();
  const clearUser = () => dispatch(clearUserStore());

  if (props.isFetching) {
    return null;
  }
  return (
    <div className={styles.headerContainer}>
      <TopHeader />
      <div className={styles.loginSignnUpHeaders}>
        <PhoneHeader />
        <RenderLoginButtons userStore={userStore} clearUser={clearUser} />
      </div>
      <NavigationMenu userStore={userStore} />
    </div>
  );
}
export default withRouter(Header);
