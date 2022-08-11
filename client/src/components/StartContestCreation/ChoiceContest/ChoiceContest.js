import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectBundle } from '../../../actions/actionCreator';
import CONSTANTS from '../../../constants';
import BundleBox from './BundleBox/BundleBox';
import styles from './ChoiceContest.module.sass';

const ChoiceContest = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const choseBundle = bundle => dispatch(selectBundle(bundle));

  const setBundle = bundleStr => {
    const array = bundleStr.toLowerCase().split('+');
    const bundleList = {};
    bundleList.first = array[0];
    for (let i = 0; i < array.length; i++) {
      bundleList[array[i]] = i === array.length - 1 ? 'payment' : array[i + 1];
    }
    choseBundle(bundleList);
    history.push(`/startContest/${bundleList.first}Contest`);
  };

  return (
    <>
      <div className={styles.baseBundleContainer}>
        <div className={styles.infoBaseBundles}>
          <span className={styles.headerInfo}>
            {CONSTANTS.BASE_BUNDEL.title}
            <span>{CONSTANTS.BASE_BUNDEL.categories}</span>
          </span>
          <span className={styles.info}>
            {CONSTANTS.BASE_BUNDEL.description}
          </span>
          <hr />
        </div>
        <div className={styles.baseBundles}>
          {CONSTANTS.BASE_BUNDEL_BOX.map(bundelBox => {
            return (
              <BundleBox
                path={bundelBox.path}
                header={bundelBox.header}
                describe={bundelBox.describe}
                setBundle={setBundle}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.combinedBundles}>
        <div className={styles.infoCombinedBundles}>
          <span className={styles.headerInfo}>
            {CONSTANTS.COMBINE_BUNDEL.title}
          </span>
          <span className={styles.info}>
            {CONSTANTS.COMBINE_BUNDEL.description}
          </span>
          <hr />
        </div>
        <div className={styles.baseBundles}>
          {CONSTANTS.COMBINE_BUNDEL_BOX.map(bundelBox => {
            return (
              <BundleBox
                path={bundelBox.path}
                header={bundelBox.header}
                describe={bundelBox.describe}
                setBundle={setBundle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChoiceContest;
