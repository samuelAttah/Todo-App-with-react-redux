import * as constants from "../constants";
export const setVisibility = (filter) => {
  return { type: constants.SHOW_VISIBILITY_FILTER, payLoad: filter };
};
