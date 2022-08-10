import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styles from './ContestCreationPage.module.sass';
import { saveContestToStore, clearDataForContest } from '../../actions/actionCreator';
import NextButton from '../../components/NextButton/NextButton';
import ContestForm from '../../components/ContestForm/ContestForm';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import ContestCreationHeader from '../../components/StartContest/StartContestHeader/ContestCreationHeader';

const ContestCreationPage = (props) => {
  console.log(props.bundleStore)
  const history = useHistory();
  const formRef = useRef();
  const contestData = props.contestStore.contests[props.contestType] ? props.contestStore.contests[props.contestType] : { contestType: props.contestType };

  const handleSubmit = (values) => {
    props.saveContest({ type: props.contestType, info: values });
    const route = props.bundleStore.bundle[props.contestType] === 'payment' ? '/payment' : `${props.bundleStore.bundle[props.contestType]}Contest`;
    history.push(route);
  };

  const submitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  !props.bundleStore.bundle && history.replace('/startContest');

  return (
    <div>
      <Header />
      <ContestCreationHeader title={props.title}/>

      <div className={styles.container}>
        <div className={styles.formContainer}>
          <ContestForm
            contestType={props.contestType}
            handleSubmit={handleSubmit}
            formRef={formRef}
            defaultData={contestData}
          />
        </div>
      </div>
      <div className={styles.footerButtonsContainer}>
        <div className={styles.lastContainer}>
          <div className={styles.buttonsContainer}>
            <BackButton />
            <NextButton submit={submitForm} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { contestStore, bundleStore } = state;
  return { contestStore, bundleStore };
};

const mapDispatchToProps = (dispatch) => (
  {
    saveContest: (data) => dispatch(saveContestToStore(data)),
    clearDataForContest: () => dispatch(clearDataForContest()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ContestCreationPage);
