import * as constants from "../constants";
import { initialState } from "../initialState";
const FilterReducer = (state = initialState.visibilityFilter, action) => {
  switch (action.type) {
    case constants.SHOW_VISIBILITY_FILTER:
      return action.payLoad;
    default:
      return state;
  }
};

export default FilterReducer;
