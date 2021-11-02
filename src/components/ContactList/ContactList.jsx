import s from "./ContactList.module.css";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const ContactList = ({ contacts, onDelete }) => {
  let arr = contacts.map((item) => (
    <ContactListItem key={v4()} props={item} onDelete={onDelete} />
  ));
  return <ul className={s.ul}>{arr}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
export default ContactList;
