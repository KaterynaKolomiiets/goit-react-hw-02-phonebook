import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ props : {name, number, id}, onDelete }) => {

  return (
    <li className={s.li} id={id}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" className={s.button} onClick={() => onDelete(id)
}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  props: PropTypes.shape ({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};
export default ContactListItem;
