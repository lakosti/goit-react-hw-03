const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <span>Find contacts by name:</span>
      <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
    </div>
  );
};

export default SearchBox;
