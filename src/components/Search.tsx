import { Search as SearchIcon, User as UserIcon } from "../icons"
import { ChangeEvent } from "react"
import { Link } from '@reach/router'

type SearchProps = {
  label: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  result: any,
  query: string,
}

export default function Search({ label, onChange, query, result }: SearchProps) {
  console.log(result)
  return (
    <div className="mx-auto max-w-xl">
      <label htmlFor="search" className="block text-lg font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2 flex items-center">
        <div className="absolute inset-y-0 left-0 flex py-1.5 px-1.5 z-0">
          <SearchIcon className="p-1 h-6 w-6" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="relative z-10 bg-transparent block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={onChange}
          value={query}
          placeholder="Search Github username"
        />
      </div>
      {result.name && query.length > 0 ? (
        <Link
          to={`profile/${result.username}`}
          className="flex mt-2 ... truncate rounded !p-2 border border-gray-100 hover:bg-gray-100 focus:bg-gray-100 items-center"
        >
          <UserIcon className="p-1 w-6 h-6" />
          <span className="pl-2 text-sm !m-0">{result.name}</span>
        </Link>
      ) :
        !result.name && query.length > 0 &&
        (
          <div className="mt-2 grid h-24 place-items-center px-2 text-center text-sm rounded border border-gray-100">
            <p className="font-normal text-black">
              {' '}
              <strong className="font-medium">No matches found in Github profiles.</strong> <br />{' '}
              <span className="opacity-50">Please check spelling.</span>
            </p>
          </div>
        )
      }
    </div>
  )
}