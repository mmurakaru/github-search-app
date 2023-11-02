import Layout from '../components/Layout'
import Search from '../components/Search';
import { useProfileSearch } from '../hooks';

function Index() {
  const { searchProfile, searchQuery, searchResult } = useProfileSearch()
  return (
    <Layout>
      <Search title="Github profile search" onChange={searchProfile} query={searchQuery} result={searchResult} />
    </Layout>
  );
}

export default Index;