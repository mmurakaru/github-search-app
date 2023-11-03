import Layout from '../components/Layout';
import { useParams, Link } from '@reach/router';
import { Repo as RepoIcon, ArrowLeft as ArrowLeftIcon, ArrowUpRight as ArrowUpRightIcon } from '../icons'
import { useRepos } from '../hooks/useRepos';
import Filter from '../components/Filter';

function Profile() {
  const params = useParams()
  const { repos, filterRepos, searchQuery, searchResults } = useRepos(params.username)
  return (
    <Layout>
      <div className="lg:flex justify-between items-center">
        <Link
          to="/"
          className="inline-block rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <div className="flex items-center">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            <span className="text-sm font-normal">Back to search</span>
          </div>
        </Link>
        <h1 className="text-md font-semibold mx-2 my-4 lg:my-0">{"Github repositories of " + params.username}</h1>
        <Filter onChange={filterRepos} query={searchQuery} />
      </div>
      {searchResults.length > 0 ?
        searchResults.map(repo =>
          <a key={repo.id} href={repo.svn_url} target="_blank" rel="noreferrer" className="flex mt-2 ... truncate rounded !p-2 border border-gray-10 items-center justify-between hover:bg-gray-100 focus:bg-gray-100">
            <div className="flex items-center">
              <RepoIcon className="p-1 w-6 h-6" />
              <span className="pl-2 text-sm !m-0">{repo.name}</span>
              {repo.language && <span className="pl-2 text-sm !m-0 text-gray-500">{" - " + repo.language}</span>}
            </div>
            <ArrowUpRightIcon className="h-3 w-3 mr-2" />
          </a>
        )
        :
        searchQuery.length === 0 &&
        repos.map(repo =>
          <a key={repo.id} href={repo.svn_url} target="_blank" rel="noreferrer" className="flex mt-2 ... truncate rounded !p-2 border border-gray-10 items-center justify-between hover:bg-gray-100 focus:bg-gray-100">
            <div className="flex items-center">
              <RepoIcon className="p-1 w-6 h-6" />
              <span className="pl-2 text-sm !m-0">{repo.name}</span>
              {repo.language && <span className="pl-2 text-sm !m-0 text-gray-500">{" - " + repo.language}</span>}
            </div>
            <ArrowUpRightIcon className="h-3 w-3 mr-2" />
          </a>
        )
      }
    </Layout>
  );
}

export default Profile;