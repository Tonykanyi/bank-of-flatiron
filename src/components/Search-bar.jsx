function Search({onSearchData, search}) {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search your Recent Transactions"
          name="search"
          value={search}
          onChange={onSearchData}
        />
      </div>
    );
  }
  export default Search;