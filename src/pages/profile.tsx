import Layout from '../components/Layout';
import { useParams } from '@reach/router';
import { Repo as RepoIcon } from '../icons'
import { useRepos } from '../hooks/useRepos';

function Profile() {
  const params = useParams()
  const { repos } = useRepos(params.userName)
  return (
    <Layout>
      <h1 className="text-md font-semibold">{"User: " + params.userName}</h1>
      {repos.map(repo =>
        <div className="flex mt-2 ... truncate rounded !p-2 border border-gray-10 items-center">
          <RepoIcon className="p-1 w-6 h-6" />
          <span className="pl-2 text-sm !m-0">{repo.name}</span>
          {repo.language && <span className="pl-2 text-sm !m-0 text-gray-500">{" - " + repo.language}</span>}
        </div>
      )}
    </Layout>
  );
}

export default Profile;