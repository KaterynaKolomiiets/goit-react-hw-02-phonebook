import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ props, onDelete }) => {
  return (
    <li className={s.li} id={props.id}>
      <span>{props.name}:</span>
      <span>{props.number}</span>
      <button type="button" className={s.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  props: PropTypes.object,
  onDelete: PropTypes.func,
};
export default ContactListItem;
