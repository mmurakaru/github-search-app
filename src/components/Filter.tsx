import { Search as SearchIcon } from "../icons"
import { ChangeEvent } from "react"

type FilterProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  query: string,
}

export default function Filter({ onChange, query }: FilterProps) {
  return (
    <div className="w-auto sm:w-96 relative mt-2 flex items-center">
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
        placeholder="Filter repos after name or language"
      />
    </div>
  )
}