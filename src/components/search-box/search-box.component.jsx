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

// import { Component } from "react";
// import "./search-box.styles.css";
// // remember this is a generic code (reusable one)
// class SearchBox extends Component {
//   render() {
//     return (
//       // here we name our this.props.property as we named it on the app
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={`${this.props.placeHolder}`.padStart(19, " ")}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

// export default SearchBox;
