import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore } from '../../actions/actionCreator';
import RenderLoginButtons from './renderLoginButtons/RenderLoginButtons';
import TopHeader from './TopHeader/TopHeader';

class Header extends React.Component {
  render () {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <TopHeader />
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt='phone' />
            <span>(877)&nbsp;355-3585</span>
          </div>
          <div className={styles.userButtonsContainer}>
            <RenderLoginButtons props={this.props} />
          </div>
        </div>
        <div className={styles.navContainer}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
            className={styles.logo}
            alt='blue_logo'
          />
          <div className={styles.leftNav}>
            <div className={styles.nav}>
              <ul>
                <li>
                  <span>NAME IDEAS</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>Beauty</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Consulting</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>E-Commerce</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Fashion & Clothing</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Finance</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Real Estate</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>Tech</a>
                    </li>
                    <li className={styles.last}>
                      <a href='http://www.google.com'>More Categories</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>CONTESTS</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>HOW IT WORKS</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>PRICING</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>AGENCY SERVICE</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>ACTIVE CONTESTS</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>WINNERS</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>LEADERBOARD</a>
                    </li>
                    <li className={styles.last}>
                      <a href='http://www.google.com'>BECOME A CREATIVE</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Our Work</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>NAMES</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>TAGLINES</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>LOGOS</a>
                    </li>
                    <li className={styles.last}>
                      <a href='http://www.google.com'>TESTIMONIALS</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Names For Sale</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>POPULAR NAMES</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>SHORT NAMES</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>INTRIGUING NAMES</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>NAMES BY CATEGORY</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>VISUAL NAME SEARCH</a>
                    </li>
                    <li className={styles.last}>
                      <a href='http://www.google.com'>SELL YOUR DOMAINS</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Blog</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt='menu'
                  />
                  <ul>
                    <li>
                      <a href='http://www.google.com'>ULTIMATE NAMING GUIDE</a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>
                        POETIC DEVICES IN BUSINESS NAMING
                      </a>
                    </li>
                    <li>
                      <a href='http://www.google.com'>CROWDED BAR THEORY</a>
                    </li>
                    <li className={styles.last}>
                      <a href='http://www.google.com'>ALL ARTICLES</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {this.props.data && this.props.data.role !== CONSTANTS.CREATOR && (
              <Link className={styles.startContestBtn} to='/startContest'>
                START CONTEST
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state.userStore;
const mapDispatchToProps = dispatch => ({
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
