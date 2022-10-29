import PropTypes from 'prop-types';
import {
  ButtonDelete,
  ContactEl,
  NewContactsList,
  User,
} from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <NewContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <User>
            <p>
              {name}: {number}
            </p>
          </User>
          <ButtonDelete type="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonDelete>
        </ContactEl>
      ))}
    </NewContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
