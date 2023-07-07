import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {contacts.map(contact => (
          <li className={css.li} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.btn}
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
