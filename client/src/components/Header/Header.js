import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore } from '../../actions/actionCreator';
import RenderLoginButtons from './renderLoginButtons/RenderLoginButtons';
import TopHeader from './TopHeader/TopHeader';
import PhoneHeader from './PhoneHeader/PhoneHeader';
import NavigationMenu from './NavigationMenu/NavigationMenu';

class Header extends React.Component {
  render () {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <TopHeader />
        <div className={styles.loginSignnUpHeaders}>
          <PhoneHeader />
          <RenderLoginButtons props={this.props} />
        </div>
        <NavigationMenu props={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => state.userStore;
const mapDispatchToProps = dispatch => ({
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
