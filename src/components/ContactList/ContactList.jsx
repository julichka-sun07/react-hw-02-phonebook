import css from './ContactList.module.css';

const ContactList = ({ getContacts, onRemoveContact }) => {
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {getContacts().map(contact => (
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
