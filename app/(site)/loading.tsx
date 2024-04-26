import { NextPage } from 'next';
import { LoadingComponent } from '../../components/ui/LoadingComponent';

interface Props {}

const loading: NextPage<Props> = ({}): JSX.Element => {
  return <LoadingComponent />;
};

export default loading;
