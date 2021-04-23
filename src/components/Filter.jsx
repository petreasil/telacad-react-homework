import React from "react";
import { connect } from "react-redux";
import { filterByValue, sortByType } from "../Redux/actions/action";

function Filter(props) {
  console.log(props);
  return (
    <form className="form-inline ml-3">
      <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Preference
      </label>
      <select
        className="custom-select my-1 mr-sm-2"
        onChange={(e) => props.sortSelection(e)}
      >
        <option value={props.defaultValue}>Sort By...</option>

        <option value="price">Price--low to high</option>
        <option>Title--Asc</option>
        <option>Title--Desc</option>
      </select>

      <div className="custom-control custom-checkbox my-1 mr-sm-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customControlInline"
        />
        <label className="custom-control-label" htmlFor="customControlInline">
          Remember my preference
        </label>
      </div>
      <div className="custom-control custom-checkbox my-1 mr-sm-2">
        <input
          type="text"
          className="form-control"
          placeholder="Filter"
          onChange={(e) => props.filterByInput(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary my-1">
        Submit
      </button>
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    filterByInput: (e) => dispatch(filterByValue({ value: e.target.value })),
    sortSelection: (e) => dispatch(sortByType({ value: e.target.value })),
  };
}
function mapStateToProps(state) {
  return {
    defaultValue: state.products.sortValue,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
