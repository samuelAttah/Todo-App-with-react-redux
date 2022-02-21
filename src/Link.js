import { useDispatch, useSelector } from "react-redux";
import { setVisibility } from "./redux/actions/Filteractions";

const Link = (active, { children, filter }) => {
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  if (filter === visibilityFilter) {
    return active;
  }

  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setVisibility(filter));
      }}
    >
      {children}
    </button>
  );
};
export default Link;
