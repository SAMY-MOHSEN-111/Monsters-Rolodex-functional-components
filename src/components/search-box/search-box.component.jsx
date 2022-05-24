import "./search-box.styles.css";
// remember this is a generic code (reusable one)
const SearchBox = ({ className, placeHolder, onChangeHandler }) => {
  return (
    // here we name our this.props.property as we named it on the app
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={`${placeHolder}`.padStart(19, " ")}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
