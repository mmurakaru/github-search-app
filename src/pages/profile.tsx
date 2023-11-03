import Layout from '../components/Layout';
import { useParams } from '@reach/router';
import { Repo as RepoIcon } from '../icons'
import { useRepos } from '../hooks/useRepos';
import Filter from '../components/Filter';

function Profile() {
  const params = useParams()
  const { repos, filterRepos, searchQuery, searchResults } = useRepos(params.username)
  return (
    <Layout>
      <div className="sm:flex justify-between items-center">
        <h1 className="text-md font-semibold">{"User: " + params.username}</h1>
        <Filter onChange={filterRepos} query={searchQuery} />
      </div>
      {searchResults.length > 0 ?
        searchResults.map(repo =>
          <div key={repo.id} className="flex mt-2 ... truncate rounded !p-2 border border-gray-10 items-center">
            <RepoIcon className="p-1 w-6 h-6" />
            <span className="pl-2 text-sm !m-0">{repo.name}</span>
            {repo.language && <span className="pl-2 text-sm !m-0 text-gray-500">{" - " + repo.language}</span>}
          </div>
        )
        :
        searchQuery.length === 0 &&
        repos.map(repo =>
          <div key={repo.id} className="flex mt-2 ... truncate rounded !p-2 border border-gray-10 items-center">
            <RepoIcon className="p-1 w-6 h-6" />
            <span className="pl-2 text-sm !m-0">{repo.name}</span>
            {repo.language && <span className="pl-2 text-sm !m-0 text-gray-500">{" - " + repo.language}</span>}
          </div>
        )
      }
    </Layout>
  );
}

export default Profile;