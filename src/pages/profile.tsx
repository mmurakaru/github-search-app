import Layout from '../components/Layout';
import { useParams } from '@reach/router';

function Profile() {
  const params = useParams()
  return (
    <Layout>
      {params.userName}
    </Layout>
  );
}

export default Profile;