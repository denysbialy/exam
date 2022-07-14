import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import styles from './Notification.module.sass';

const Notification = props => {
  const history = useHistory();
  return (
    <div>
      <br />
      <span>{props.message}</span>
      <br />
      {props.contestId && (
        <span
          onClick={() => history.push(`/contest/${props.contestId}`)}
          className={styles.goToContest}
        >
          Go to contest
        </span>
      )}
    </div>
  );
};

export default withRouter(Notification);
