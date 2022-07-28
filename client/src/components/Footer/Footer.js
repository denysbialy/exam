import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';

function Footer(){
  const topFooterItemsRender = item => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      <ul>{item.items.map(i => (<li key={i}><a href='https://google.com'>{i}</a></li>))}</ul>
    </div>
  );
  const topFooterRender = () => CONSTANTS.FooterItems.map(item => topFooterItemsRender(item));

    return (
      <footer className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div>{topFooterRender()}</div>
        </div>
      </footer>
    );
}

export default Footer;