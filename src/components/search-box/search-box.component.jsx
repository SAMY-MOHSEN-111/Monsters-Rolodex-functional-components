import { Component } from "react";
import "./search-box.styles.css";
// remember this is a generic code (reusable one)
class SearchBox extends Component {
  render() {
    return (
      // here we name our this.props.property as we named it on the app
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={`${this.props.placeHolder}`.padStart(19, " ")}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
