function Sort({selectedSortOption,handleSort}){
    return(
        <select className="form-select mt-3" aria-label="Default select example" value={selectedSortOption} onChange={handleSort} style={{ cursor: 'pointer' }}>
        <option >Sort Transactions by</option>
        <option value="date">date</option>
        <option value="category">category</option>
        <option value="description">description</option>
        <option value="amount">amount</option>
        
      </select>
    )
}
export default Sort