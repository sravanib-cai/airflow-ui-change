import { useSelector } from 'react-redux';
import MicroFrontend from '../../MicroFrontends/MicroFrontend';

const CaiML = ({ history }) => {
  const { REACT_APP_CAIML_WEB_HOST: CaiMLWebHost } = process.env;
  const userStore = useSelector((store) => store.user);

  return (
    <div style={{ paddingTop: '1px' }}>
      <MicroFrontend
        history={history}
        host={CaiMLWebHost}
        name="CAI-ML"
        path="/cai-ml"
        settings={{
          user: userStore
        }}
      />
    </div>
  );
};

export default CaiML;
