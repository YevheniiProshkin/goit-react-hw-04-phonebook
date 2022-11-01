import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm ';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Contacts, EmptyList } from './Base.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    const nemContactsList = contacts.filter(contact => contact.id !== id);
    setContacts([...nemContactsList]);
  };

  const onFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Title>
        <h1>Phonebook</h1>
      </Title>
      <ContactForm onSubmit={addContact} />
      <Contacts>
        <h2>Contacts</h2>
      </Contacts>

      {contacts.length ? (
        <>
          <Filter value={filter} onChange={onFilterChange} />
          <ContactList
            contacts={visibleContacts}
            deleteContact={deleteContact}
          />
        </>
      ) : (
        <EmptyList>
          <p>Сontact list is empty😢</p>
        </EmptyList>
      )}
    </Container>
  );
};
