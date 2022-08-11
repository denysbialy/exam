import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CONSTANTS from '../../constants';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StartContestHeader from '../../components/StartContestCreation/ContestHeader/StartContestHeader';
import ChoiceContest from '../../components/StartContestCreation/ChoiceContest/ChoiceContest';

const StartContestPage = () => {
  const userStore = useSelector(state => state.userStore);

  const history = useHistory();
  if (userStore.data.role !== CONSTANTS.CUSTOMER) {
    history.replace('/');
  }
  return (
    <div>
      <Header />
      <StartContestHeader />
      <ChoiceContest />
      <Footer />
    </div>
  );
};

export default StartContestPage;
