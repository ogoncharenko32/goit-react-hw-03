import clsx from "clsx"
import css from "./SearchBox.module.css"

const SearchBox = ( {searchFilter, setFilter} ) => {
  return (
    <div className={clsx(css.searchWrapper)}>
      <label htmlFor="searchInput">Find contacts by name</label>
      <input className={clsx(css.searchInput)} type="text" id="searchInput" value={searchFilter} onChange={(e) => {
        setFilter(e.target.value)
      }}>
      </input>
    </div>
  )
}

export default SearchBox