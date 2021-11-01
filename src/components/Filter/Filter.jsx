import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ onChange }) => {
  return (
    <input className={s.filter} type="text" name="filter" onChange={onChange} />
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
export default Filter;
