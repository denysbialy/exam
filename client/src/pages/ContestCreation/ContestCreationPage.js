import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './ContestCreationPage.module.sass';
import { saveContestToStore } from '../../actions/actionCreator';
import NextButton from '../../components/NextButton/NextButton';
import ContestForm from '../../components/ContestForm/ContestForm';
import BackButton from '../../components/BackButton/BackButton';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContestCreationHeader from '../../components/StartContestCreation/ContestHeader/ContestCreationHeader';

const ContestCreationPage = props => {
  const { contestStore, bundleStore } = useSelector(state => state);
  const dispatch = useDispatch();
  const saveContest = data => dispatch(saveContestToStore(data));

  const history = useHistory();
  const formRef = useRef();

  const contestData = contestStore.contests[props.contestType]
    ? contestStore.contests[props.contestType]
    : { contestType: props.contestType };

  const handleSubmit = values => {
    saveContest({ type: props.contestType, info: values });
    const route =
      bundleStore.bundle[props.contestType] === 'payment'
        ? '/payment'
        : `${bundleStore.bundle[props.contestType]}Contest`;
    history.push(route);
  };

  const submitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  !bundleStore.bundle && history.replace('/startContest');

  return (
    <div>
      <Header />
      <ContestCreationHeader title={props.title} />

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
        <BackButton />
        <NextButton submit={submitForm} />
      </div>
      <Footer />
    </div>
  );
};

export default ContestCreationPage;
