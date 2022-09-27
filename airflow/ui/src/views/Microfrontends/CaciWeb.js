import { useSelector } from 'react-redux';
import MicroFrontend from '../../MicroFrontends/MicroFrontend';

const CaciWeb = ({ history }) => {
  const { REACT_APP_CACI_WEB_HOST: caciWebHost } = process.env;
  const userStore = useSelector((store) => store.user);

  return (
    <MicroFrontend
      history={history}
      host={caciWebHost}
      name="Caci"
      path="/projects"
      settings={{
        user: userStore
      }}
    />
  );
};

export default CaciWeb;
